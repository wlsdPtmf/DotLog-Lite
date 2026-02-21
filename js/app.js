const app = {
    favorites: [],
    owned: [],
    needBuy: [],
    compareList: [],
    isAdmin: false,

    track: function (eventName, params) {
        try {
            if (typeof window.gtag === 'function') {
                window.gtag('event', eventName, params || {});
            }
        } catch (e) { }
    },

    init: function () {
        // Load states
        const savedFav = localStorage.getItem('dotlog_favorites');
        if (savedFav) this.favorites = JSON.parse(savedFav);

        const savedOwned = localStorage.getItem('dotlog_owned');
        if (savedOwned) this.owned = JSON.parse(savedOwned);

        const savedNeed = localStorage.getItem('dotlog_need_buy');
        if (savedNeed) this.needBuy = JSON.parse(savedNeed);

        this.cacheDOM();
        this.bindEvents();

        // Deep Link Check
        const beadCode = this.getBeadCodeFromURL();
        if (beadCode) {
            // 1) Force Dictionary View
            // Use existing router logic to ensure filters/UI are set up
            this.router.navigate('dictionary');
            this.router.handleRoute(); // Force immediate render

            // 2) Open Modal with Retry (Wait for DOM)
            const bead = Data.beads.find(b => b.dmcNumber.toString() === beadCode);
            if (bead) {
                let attempts = 0;
                const maxAttempts = 20;
                const interval = setInterval(() => {
                    attempts++;
                    const beadListForCheck = document.getElementById('bead-list');

                    // Check if dictionary is rendered (bead-list exists and has children)
                    if (beadListForCheck && beadListForCheck.children.length > 0) {
                        clearInterval(interval);

                        // 3) Open Modal (No Push State)
                        this.render.openModal(bead.id, false);

                        // 4) Restore URL (Critical: hash change above might have set it to #dictionary)
                        // This ensures the user still sees /beads/{code}
                        history.replaceState({ modal: 'bead', id: bead.id }, '', `/beads/${encodeURIComponent(beadCode)}`);
                    } else if (attempts >= maxAttempts) {
                        clearInterval(interval);
                        console.warn("Failed to open deep link modal: Timeout");
                    }
                }, 100);
            }
        } else {
            // Normal Hash Routing
            this.router.init();
        }
    },

    getBeadCodeFromURL: function () {
        const path = window.location.pathname;
        if (path.includes('/beads/')) {
            const parts = path.split('/beads/');
            if (parts.length > 1) {
                // Return only the code part, remove any trailing slash or query params if simple
                return parts[1].split('/')[0].split('?')[0];
            }
        }
        return null;
    },

    hexToRgb: function (hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },

    getColorDistance: function (rgb1, rgb2) {
        if (!rgb1 || !rgb2) return Infinity;
        // Simple Euclidean distance in RGB space
        return Math.sqrt(
            Math.pow(rgb1.r - rgb2.r, 2) +
            Math.pow(rgb1.g - rgb2.g, 2) +
            Math.pow(rgb1.b - rgb2.b, 2)
        );
    },

    getSimilarBeads: function (currentBead, limit = 3) {
        const currentRgb = this.hexToRgb(currentBead.hex);
        if (!currentRgb) return [];

        const distances = Data.beads
            .filter(b => b.id !== currentBead.id) // exclude current
            .map(b => {
                const rgb = this.hexToRgb(b.hex);
                const dist = this.getColorDistance(currentRgb, rgb);
                return { bead: b, dist: dist };
            })
            .filter(item => item.dist !== Infinity); // safety check

        // Sort ascending by distance
        distances.sort((a, b) => a.dist - b.dist);

        // Return top N
        return distances.slice(0, limit).map(item => item.bead);
    },

    toggleFavorite: function (id) {
        const idx = this.favorites.indexOf(id);
        const bead = Data.beads.find(b => b.id === id);
        const code = bead ? bead.dmcNumber.toString() : "";
        let state = "on";

        if (idx === -1) {
            this.favorites.push(id);
        } else {
            this.favorites.splice(idx, 1);
            state = "off";
        }
        localStorage.setItem('dotlog_favorites', JSON.stringify(this.favorites));
        this.updateUI(id);
        if (code) this.track('favorite_toggle', { code, state });
    },

    toggleOwned: function (id) {
        const idx = this.owned.indexOf(id);
        if (idx === -1) this.owned.push(id);
        else this.owned.splice(idx, 1);
        localStorage.setItem('dotlog_owned', JSON.stringify(this.owned));
        this.updateUI(id);
    },

    toggleNeedBuy: function (id) {
        const idx = this.needBuy.indexOf(id);
        if (idx === -1) this.needBuy.push(id);
        else this.needBuy.splice(idx, 1);
        localStorage.setItem('dotlog_need_buy', JSON.stringify(this.needBuy));
        this.updateUI(id);
    },

    updateUI: function (id) {
        // Refresh the current view if it's the dictionary
        if (window.location.hash === '#dictionary' || window.location.hash === '') {
            // Re-render only the specific card buttons if possible, 
            // but for simplicity and filter correctness, re-applying filters is safer.
            // However, to prevent scroll jumping or heavy re-render, we can just toggle classes if we are in 'all' view.
            // But if we are in a filtered view (e.g. 'Owned'), untoggling might remove it from view.
            this.render.applyFilters();
        }
    },

    // Compare Feature
    syncCompareUI: function () {
        const allBtns = document.querySelectorAll('.compare-btn, .sim-compare-btn');
        allBtns.forEach(btn => {
            const idAttr = btn.getAttribute('data-id');
            if (idAttr) {
                const id = parseInt(idAttr);
                if (this.compareList.includes(id)) {
                    btn.classList.add('active');
                    btn.textContent = '✔';
                } else {
                    btn.classList.remove('active');
                    btn.textContent = '➕';
                }
            }
        });
        this.updateCompareBar();
    },

    toggleCompare: function (id, source = 'list') {
        const idx = this.compareList.indexOf(id);
        if (idx === -1) {
            this.compareList.push(id);
            const bead = Data.beads.find(b => b.id === id);
            if (bead) {
                this.track('compare_add', { code: bead.dmcNumber.toString(), source });
            }
        } else {
            this.compareList.splice(idx, 1);
        }
        this.saveCompareList();
        this.syncCompareUI();
    },

    updateCompareBar: function () {
        const bar = document.getElementById('compare-bar');
        const countEl = document.getElementById('compare-count');
        if (!bar || !countEl) return;

        const count = this.compareList.length;
        countEl.textContent = count;

        const isCurrentlyHidden = !bar.classList.contains('visible');

        if (count > 0) {
            bar.style.display = 'flex';
            // Trigger reflow for animation
            void bar.offsetWidth;
            bar.classList.add('visible');

            // If it just became visible, auto-scroll modal so recommended beads are not hidden
            if (isCurrentlyHidden) {
                setTimeout(() => {
                    const activeModalContent = document.querySelector('.modal-overlay.open .modal-content');
                    if (activeModalContent) {
                        const similarSection = activeModalContent.querySelector('h4'); // "🎨 비슷한 색 추천" header
                        // Alternatively, scrolling to the very bottom is usually the safest way to ensure 
                        // the last elements are visible since similar colors are at the absolute bottom
                        activeModalContent.scrollTo({
                            top: activeModalContent.scrollHeight,
                            behavior: 'smooth'
                        });
                    }
                }, 100); // Wait for the padding expansion to apply
            }
        } else {
            bar.classList.remove('visible');
            // Wait for fade-out transition then hide
            setTimeout(() => {
                if (!bar.classList.contains('visible')) {
                    bar.style.display = 'none';
                }
            }, 300);
        }

        this.syncModalSafeArea();
    },

    syncModalSafeArea: function () {
        const modals = document.querySelectorAll('.modal-content');
        if (this.compareList.length > 0) {
            // Add extra space at the bottom when compare bar is visible
            modals.forEach(m => m.style.paddingBottom = '100px');
        } else {
            modals.forEach(m => m.style.paddingBottom = '');
        }
    },

    saveCompareList: function () {
        localStorage.setItem('dotlog_compare_list', JSON.stringify(this.compareList));
    },

    loadCompareList: function () {
        const stored = localStorage.getItem('dotlog_compare_list');
        if (stored) {
            try {
                this.compareList = JSON.parse(stored);
                // Update buttons on load if we are on a page where they are visible (e.g. initial load might be home)
                // But since app.init calls render.page, and render.page might render beads later, 
                // we should just ensure variables are set. 
                // Logic to update buttons will be handled by renderBeads checking compareList.

                // However, if we come from a reload on dictionary page, renderBeads runs then this runs? 
                // Or this runs before render?
                // app.init calls this.loadCompareList() before this.render.init().
                // So compareList is ready when renderBeads renders.

                // We also need to show the bar if there are items.
                if (this.compareList.length > 0) {
                    this.updateCompareBar();
                }
            } catch (e) {
                console.error("Failed to load compare list", e);
                this.compareList = [];
            }
        }
    },

    copyCompareList: function () {
        if (this.compareList.length === 0) {
            alert("복사할 비즈가 없습니다.");
            return;
        }

        const selectedBeads = Data.beads.filter(b => this.compareList.includes(b.id));
        const text = selectedBeads.map(b => b.dmcNumber).join(', ');

        navigator.clipboard.writeText(text).then(() => {
            this.showToast("비즈 번호가 복사되었습니다! 📋");
        }).catch(err => {
            console.error('클립보드 복사 실패:', err);
            prompt("클립보드 복사에 실패했습니다. 아래 텍스트를 복사하세요:", text);
        });
    },

    showToast: function (message) {
        const toast = document.getElementById("toast");
        if (!toast) return;

        toast.textContent = message;
        toast.className = "show";

        // After 3 seconds, remove the show class
        setTimeout(function () {
            toast.className = toast.className.replace("show", "");
        }, 3000);
    },

    hideCompareBar: function () {
        const bar = document.getElementById('compare-bar');
        if (bar) {
            bar.classList.remove('visible');
            bar.style.display = 'none';
        }
    },

    openCompareModal: function () {
        if (this.compareList.length === 0) {
            alert("비교할 비즈를 먼저 선택해주세요.");
            return;
        }

        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');

        const bar = document.getElementById('compare-bar');
        const dock = document.getElementById('compare-modal-footer-dock');
        if (bar && dock) dock.appendChild(bar);

        const selectedBeads = Data.beads.filter(b => this.compareList.includes(b.id));
        const modalBody = document.getElementById('compare-body');

        modalBody.innerHTML = selectedBeads.map(bead => `
            <div class="compare-card">
                <button class="compare-remove-btn" onclick="app.removeCompareItem(${bead.id})">×</button>
                <div class="compare-circle" style="background-color: ${bead.hex};" title="${bead.hex}"></div>
                <div class="compare-code">${bead.dmcNumber}</div>
                <div class="compare-name">${bead.nameKr}<br><span style="font-size:0.8em; color:#999;">${bead.nameEn}</span></div>
                <div class="compare-name" style="margin-top:4px;">${bead.group} / ${bead.tone}</div>
            </div>
        `).join('');

        // Add Footer with Clear All and Copy
        modalBody.innerHTML += `
            <div style="width:100%;" class="compare-footer">
                <button class="compare-copy-btn" onclick="app.copyCompareList()">📋 리스트 복사</button>
                <button class="compare-clear-all-btn" onclick="app.resetCompareList()">전체 비우기</button>
            </div>
        `;

        const modal = document.getElementById('compare-modal');
        modal.classList.add('open');
    },

    resetCompareList: function () {
        if (this.compareList.length === 0) return;

        // 1. Clear Data
        this.compareList = [];
        this.saveCompareList();

        // 2. Update UI & Modal
        this.syncCompareUI();
        this.closeCompareModal();
    },

    removeCompareItem: function (id) {
        const idx = this.compareList.indexOf(id);
        if (idx === -1) return;

        // 1. Remove from Data
        this.compareList.splice(idx, 1);
        this.saveCompareList();

        // 2. Update UI
        this.syncCompareUI();

        if (this.compareList.length === 0) {
            this.closeCompareModal();
        } else {
            // Re-render modal if still open
            const modal = document.getElementById('compare-modal');
            if (modal.classList.contains('open')) {
                this.openCompareModal();
            }
        }
    },

    closeCompareModal: function () {
        const modal = document.getElementById('compare-modal');
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');

            const bar = document.getElementById('compare-bar');
            if (bar) document.body.appendChild(bar);
        }
    },

    toggleBeadDetail: function (btn) {
        const content = document.getElementById('bead-detail-content');
        if (content) {
            content.classList.toggle('collapsed');
            if (content.classList.contains('collapsed')) {
                content.style.display = 'none';
                btn.textContent = '상세정보 보기';
            } else {
                content.style.display = 'block';
                btn.textContent = '상세정보 닫기';
            }
        }
    },

    // Admin & Shop Functions
    toggleAdmin: function () {
        this.isAdmin = !this.isAdmin;
        if (this.isAdmin) alert("관리자 모드가 활성화되었습니다. \n상점 리스트를 수정할 수 있습니다.");
        this.render.page('shop');
    },

    toggleShopList: function (id, btn) {
        const list = document.getElementById(id);
        if (list) {
            list.classList.toggle('open');
            if (list.classList.contains('open')) {
                btn.innerHTML = '🔼 상세 상점 리스트 접기';
            } else {
                btn.innerHTML = '🔽 상세 상점 리스트 펼치기';
            }
        }
    },

    addShopItem: function (catIdx, itemIdx) {
        const typeInput = prompt("카테고리를 선택하세요:\n1: 도안 (🎨)\n2: 도구 (✒️)", "1");
        if (!typeInput) return;

        let tag = 'pattern';
        if (typeInput === '2') tag = 'tool';

        const name = prompt("상점 이름을 입력하세요:");
        if (!name) return;
        const desc = prompt("한 줄 설명을 입력하세요:", "");
        const url = prompt("제휴 URL을 입력하세요:", "https://");

        if (name && url) {
            Data.shops[catIdx].items[itemIdx].shops.push({ name, desc, url, tag });
            this.render.page('shop');
        }
    },

    editShopItem: function (catIdx, itemIdx, subIdx) {
        const target = Data.shops[catIdx].items[itemIdx].shops[subIdx];

        const typeInput = prompt(`카테고리 수정:\n1: 도안 (🎨)\n2: 도구 (✒️)`, target.tag === 'tool' ? '2' : '1');
        let tag = target.tag;
        if (typeInput === '1') tag = 'pattern';
        if (typeInput === '2') tag = 'tool';

        const name = prompt("상점 이름 수정:", target.name);
        if (name === null) return;
        const desc = prompt("설명 수정:", target.desc);
        const url = prompt("URL 수정:", target.url);

        if (name && url) {
            target.name = name;
            target.desc = desc;
            target.url = url;
            target.tag = tag;
            this.render.page('shop');
        }
    },

    deleteShopItem: function (catIdx, itemIdx, subIdx) {
        if (confirm("정말로 이 상점을 삭제하시겠습니까?")) {
            Data.shops[catIdx].items[itemIdx].shops.splice(subIdx, 1);
            this.render.page('shop');
        }
    },

    exportShopData: function () {
        const dataStr = JSON.stringify(Data.shops, null, 4);
        console.log(dataStr);
        navigator.clipboard.writeText(dataStr).then(() => {
            alert("상점 데이터(JSON)가 클립보드에 복사되었습니다. \njs/data.js 파일의 shops 배열을 이 내용으로 교체하세요.");
        }).catch(err => {
            alert("복사 실패. 콘솔(F12)을 확인하세요.");
        });
    },

    cacheDOM: function () {
        this.mainContent = document.getElementById('main-content');
        this.navLinks = document.querySelectorAll('.nav-list a, .bottom-nav-item');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    },

    bindEvents: function () {
        window.addEventListener('hashchange', () => this.router.handleRoute());

        // Handle Browser Back/Forward (PopState)
        window.addEventListener('popstate', (event) => {
            const beadCode = this.getBeadCodeFromURL();
            if (beadCode) {
                const bead = Data.beads.find(b => b.dmcNumber.toString() === beadCode);
                if (bead) {
                    this.render.openModal(bead.id, false);
                }
            } else {
                this.render.closeModal(false);
            }
        });

        // Mobile Menu Toggle
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => {
                const navList = document.querySelector('.nav-list');
                navList.classList.toggle('active');
            });
        }

        // Close mobile menu when a link is clicked
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const navList = document.querySelector('.nav-list');
                navList.classList.remove('active');
            });
        });

        // Simple search delegation
        let searchTimeout;
        this.mainContent.addEventListener('input', (e) => {
            if (e.target.classList.contains('search-input')) {
                const query = e.target.value;
                this.render.handleSearch(query);

                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    if (query.trim().length >= 2) {
                        app.track('bead_search', { query: query.trim() });
                    }
                }, 800);
            }
        });

        // Shop Link Click Delegation
        document.body.addEventListener('click', (e) => {
            const link = e.target.closest('a.shop-link');
            if (link) {
                let code = link.getAttribute('data-code');
                if (!code) {
                    // Try to use currently open bead code from modal
                    const modal = document.getElementById('bead-modal');
                    if (modal && modal.classList.contains('open')) {
                        const codeEl = modal.querySelector('h2');
                        if (codeEl) code = codeEl.textContent;
                    }
                }
                const shop = link.getAttribute('data-shop') || 'Unknown Shop';
                const url = link.href;
                app.track('shop_click', { code: code || '', shop, url });
            }
        });
    },

    router: {
        lastTrackedPath: '',

        init: function () {
            this.handleRoute();
        },

        navigate: function (route) {
            window.location.hash = route;
        },

        handleRoute: function () {
            const hash = window.location.hash.slice(1) || 'home';
            // Hide compare bar when leaving dictionary
            if (hash !== 'dictionary') {
                app.hideCompareBar();
            }
            app.render.page(hash);
            app.updateNav(hash);
            window.scrollTo(0, 0);

            this.trackPageView();
        },

        trackPageView: function () {
            const currentPath = window.location.pathname + window.location.hash;
            if (this.lastTrackedPath === currentPath) return; // Prevent duplicates
            this.lastTrackedPath = currentPath;

            if (typeof gtag === 'function') {
                gtag('event', 'page_view', {
                    page_path: currentPath,
                    page_title: document.title
                });
            }
        }
    },

    updateNav: function (route) {
        app.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.route === route || (route === 'faq' && link.dataset.route === 'guide')) {
                link.classList.add('active');
            }
        });
    },

    render: {
        page: function (route) {
            // Handle pattern detail route (e.g., #patterns/1)
            if (route.startsWith('pattern/')) {
                const id = parseInt(route.split('/')[1]);
                app.render.patternDetail(id);
                return;
            }

            switch (route) {
                case 'home':
                    this.home();
                    break;
                case 'dictionary':
                    this.dictionary();
                    break;
                case 'faq':
                    this.faq();
                    break;
                case 'shop':
                    this.shop();
                    break;
                case 'guide':
                    this.guide();
                    break;
                case 'about':
                    this.about();
                    break;
                case 'privacy':
                    this.privacy();
                    break;
                case 'contact':
                    this.contact();
                    break;
                default:
                    this.home();
            }
        },

        home: function () {
            // 랜덤 꿀팁 배열 (FAQ 기반 요약)
            const tips = [
                { q: "헉, 비즈가 모자라요!", a: "당황하지 마세요! 구매처에 <strong>AS(추가 배송)</strong>를 요청하거나, 남는 비슷한 색상으로 슬쩍 대체해도 완성하면 티가 안 납니다." },
                { q: "비즈 정전기가 너무 심해요!", a: "<strong>건조기 시트</strong> 한 조각을 비즈 통에 쏙 넣어보세요. 마법처럼 정전기가 사라지고, <strong>향기 부스터</strong> 몇 알을 넣으면 향기까지 좋아집니다!" },
                { q: "완성 후 남은 잉여 비즈, 버려야 하나요?", a: "버리지 마세요! 예쁜 <strong>투명 유리병</strong>에 층층이 모으면 인테리어 소품이 되고, 나중에 비즈가 모자랄 때 요긴하게 쓸 수 있어요." },
                { q: "접착력이 떨어져서 비즈가 안 붙어요!", a: "<strong>도안 전용 접착제</strong>를 붓으로 살짝 발라주면 다시 끈적해집니다. 급할 땐 얇은 <strong>양면테이프</strong>로 심폐소생술도 가능해요!" },
                { q: "잘못 붙인 비즈, 어떻게 떼나요?", a: "손톱으로 긁지 마세요! 도구 세트의 <strong>핀셋</strong>으로 비즈 양옆을 살짝 잡고 '톡!' 비틀어 올리면 캔버스 손상 없이 깔끔하게 제거됩니다." },
                { q: "비즈가 나중에 떨어질까 봐 걱정돼요!", a: "완성 후 <strong>무거운 책</strong>으로 하루 꾹 눌러주고, <strong>전용 코팅제</strong>나 <strong>유광 바니시</strong>를 얇게 발라주면 비즈가 절대 안 떨어져요!" }
            ];
            const tip = tips[Math.floor(Math.random() * tips.length)];

            app.mainContent.innerHTML = `
                <div class="hero">
                    <div class="hero-content">
                        <h2>보석십자수의 모든 것</h2>
                        <p>도안 정보부터 정확한 비즈 색상까지,<br>DotLog Lite에서 쉽고 빠르게 찾아보세요.</p>
                    </div>
                    <div class="hero-image">
                        <img src="images/hero-cat-beadwork.jpg" alt="고양이 보석십자수 작품" />
                    </div>
                </div>
                <div class="section-title">주요 메뉴</div>
                <div class="menu-grid">
                    <div class="card menu-card" onclick="app.router.navigate('dictionary')">
                        <h3>🎨 비즈 도감</h3>
                        <p>DMC 번호로<br>정확한 색상을 확인하세요</p>
                    </div>
                    <div class="card menu-card" onclick="app.router.navigate('faq')">
                        <h3>❓ FAQ</h3>
                        <p>자주 묻는 질문을<br>확인해보세요</p>
                    </div>
                    <div class="card menu-card" onclick="app.router.navigate('shop')">
                        <h3>🛒 추천 쇼핑몰</h3>
                        <p>믿을 수 있는<br>구매처 리스트</p>
                    </div>
                    <div class="card menu-card" onclick="app.router.navigate('guide')">
                        <h3>📘 초보자 가이드</h3>
                        <p>처음 시작하는<br>당신을 위한 꿀팁</p>
                    </div>
                </div>

                <div class="tip-section">
                    <div class="tip-title">💡 오늘의 꿀팁</div>
                    <div class="tip-card">
                        <p><strong>Q. ${tip.q}</strong><br>${tip.a}</p>
                        <button class="tip-btn" onclick="app.router.navigate('faq')">FAQ에서 더 많은 꿀팁 보기</button>
                    </div>
                </div>
            `;
        },

        dictionary: function () {
            if (!this.filterState) {
                this.filterState = { query: '', status: 'all', group: 'all', tone: 'all' }; // added status
            }

            // Status Filter Chips
            const statusFilters = [
                { val: 'all', label: '전체 보기', icon: '' },
                { val: 'fav', label: '찜 ❤️', icon: '' },
                { val: 'owned', label: '보유 ✅', icon: '' },
                { val: 'need', label: '구매필요 🛒', icon: '' }
            ];

            const renderStatusChip = (s) => {
                const isActive = (this.filterState.status || 'all') === s.val ? 'active' : '';
                return `<button class="filter-chip ${isActive}" data-val="${s.val}" onclick="app.render.handleStatusFilter('${s.val}')">${s.label}</button>`;
            };

            const groups = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray', 'White'];
            const tones = [
                { val: 'light', label: 'Light (밝음)' },
                { val: 'mid', label: 'Mid (중간)' },
                { val: 'dark', label: 'Dark (어두움)' }
            ];

            const renderBtn = (type, val, label) => {
                const isActive = this.filterState[type] === val ? 'active' : '';
                return `<button class="filter-btn ${isActive}" data-val="${val}" onclick="app.render.handleFilter('${type}', '${val}')">${label}</button>`;
            };

            app.mainContent.innerHTML = `
                <div class="section-title">비즈 도감</div>
                
                <div class="search-container">
                    <!-- Status Filter Chips (Top) -->
                    <div class="status-chip-container">
                        ${statusFilters.map(s => renderStatusChip(s)).join('')}
                    </div>

                    <div class="search-bar">
                        <input type="text" class="search-input" id="search-input" 
                            placeholder="비즈 번호(310), 색상명(블랙/Black) 검색..." 
                            value="${this.filterState.query}">
                    </div>
                    
                    <button id="filter-toggle-btn" class="btn-outline filter-toggle-btn">
                        🛠️ 상세 필터 (색상/톤) 열기
                    </button>

                    <div class="filter-section" id="filter-section">
                        <div class="filter-group-title">색상 계열</div>
                        <div class="filter-buttons" id="group-filters">
                            ${renderBtn('group', 'all', '전체')}
                            ${groups.map(g => renderBtn('group', g, g)).join('')}
                        </div>
                        
                        <div style="margin-top: 16px;"></div>

                        <div class="filter-group-title">톤(Tone)</div>
                        <div class="filter-buttons" id="tone-filters">
                            ${renderBtn('tone', 'all', '전체')}
                            ${tones.map(t => renderBtn('tone', t.val, t.label)).join('')}
                        </div>
                    </div>

                    <div class="result-count" id="result-count"></div>
                    <div id="bead-list" class="bead-grid"></div>
                    <p style="margin-top: 30px; font-size: 0.8rem; color: #9ca3af; text-align: center;">
                        * 본 도감은 DMC 표준 번호를 기준으로 제작되었습니다. 제조사나 모니터 설정에 따라 실제 색상과 차이가 있을 수 있습니다.
                    </p>
                </div>
            `;

            this.applyFilters();
            this.attachFilterEvents();
            // Restore compare bar if items were previously selected
            app.updateCompareBar();
        },

        attachFilterEvents: function () {
            const toggleBtn = document.getElementById('filter-toggle-btn');
            const filterSection = document.getElementById('filter-section');

            if (toggleBtn && filterSection) {
                toggleBtn.addEventListener('click', () => {
                    filterSection.classList.toggle('active');
                });
            }
        },

        handleStatusFilter: function (val) {
            this.filterState.status = val;

            // Update Chip Active State
            const chips = document.querySelectorAll('.filter-chip');
            chips.forEach(chip => {
                // Determine value by text or order? 
                // Better to add data-val to chips in renderStatusChip
                if (chip.dataset.val === val) chip.classList.add('active');
                else chip.classList.remove('active');
            });

            this.applyFilters();
        },

        handleFilter: function (type, val) {
            this.filterState[type] = val;
            const containerId = type === 'group' ? 'group-filters' : 'tone-filters';
            const buttons = document.querySelectorAll(`#${containerId} .filter-btn`);

            buttons.forEach(btn => {
                if (btn.dataset.val === val) btn.classList.add('active');
                else btn.classList.remove('active');
            });

            this.applyFilters();
        },

        applyFilters: function () {
            const { query, group, tone, status } = this.filterState;
            const lowerQ = query.toLowerCase();

            const filtered = Data.beads.filter(bead => {
                // 1. Search Query
                const matchesSearch = !query ||
                    bead.dmcNumber.toLowerCase().includes(lowerQ) ||
                    bead.nameKr.toLowerCase().includes(lowerQ) ||
                    bead.nameEn.toLowerCase().includes(lowerQ);

                // 2. Group & Tone
                const matchesGroup = group === 'all' || bead.group === group;
                const matchesTone = tone === 'all' || bead.tone === tone;

                // 3. Status Filter
                let matchesStatus = true;
                if (status === 'fav') matchesStatus = app.favorites.includes(bead.id);
                else if (status === 'owned') matchesStatus = app.owned.includes(bead.id);
                else if (status === 'need') matchesStatus = app.needBuy.includes(bead.id);

                return matchesSearch && matchesGroup && matchesTone && matchesStatus;
            });

            // Auto-sort
            filtered.sort((a, b) => {
                const priority = ['BLANC', 'ECRU', 'B5200'];
                const cleanA = a.dmcNumber.toString().toUpperCase().trim();
                const cleanB = b.dmcNumber.toString().toUpperCase().trim();

                const idxA = priority.indexOf(cleanA);
                const idxB = priority.indexOf(cleanB);

                if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                if (idxA !== -1) return -1;
                if (idxB !== -1) return 1;

                const valA = parseInt(cleanA, 10);
                const valB = parseInt(cleanB, 10);

                if (!isNaN(valA) && !isNaN(valB)) {
                    return valA - valB;
                }

                return cleanA.localeCompare(cleanB, undefined, { numeric: true });
            });

            this.updateResultCount(filtered.length, Data.beads.length);
            this.renderBeads(filtered);
        },

        updateResultCount: function (current, total) {
            const countEl = document.getElementById('result-count');
            if (countEl) {
                countEl.textContent = `총 ${total}개 중 ${current}개 표시중`;
            }
        },

        renderBeads: function (beads) {
            const listEl = document.getElementById('bead-list');
            if (!listEl) return;

            if (beads.length === 0) {
                listEl.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 20px; color: #6b7280;">검색 결과가 없습니다.<br>검색어 또는 필터를 변경해보세요.</p>';
                return;
            }

            listEl.innerHTML = beads.map(bead => {
                const isFav = app.favorites.includes(bead.id);
                const isOwned = app.owned.includes(bead.id);
                const isNeed = app.needBuy.includes(bead.id);

                return `
                <div class="card bead-card" onclick="app.openModal(${bead.id})" style="cursor: pointer;">
                    
                    <div class="color-box" style="background-color: ${bead.hex};"></div>
                    <div class="bead-code">${bead.dmcNumber}</div>
                    <div class="bead-name">${bead.nameKr}</div>
                    <div class="bead-name" style="font-size:0.8rem; color:#999; margin-bottom: 10px;">${bead.nameEn}</div>
                    
                    <!-- Status Buttons 3-Pack -->
                    <div class="bead-actions" onclick="event.stopPropagation()">
                        <button class="action-btn ${isFav ? 'active' : ''}" onclick="app.toggleFavorite(${bead.id})" title="찜하기">
                            ${isFav ? '❤️' : '🤍'}
                        </button>
                        <button class="action-btn ${isOwned ? 'active owned' : ''}" onclick="app.toggleOwned(${bead.id})" title="보유중">
                            ✅
                        </button>
                        <button class="action-btn ${isNeed ? 'active need' : ''}" onclick="app.toggleNeedBuy(${bead.id})" title="구매필요">
                            🛒
                        </button>
                    </div>

                    <!-- Compare Button -->
                    <button class="compare-btn ${app.compareList.includes(bead.id) ? 'active' : ''}" data-id="${bead.id}" onclick="event.stopPropagation(); app.toggleCompare(${bead.id}, 'list')" title="비교함 담기">${app.compareList.includes(bead.id) ? '✔' : '➕'}</button>

                </div>
            `}).join('');
        },

        openModal: function (id, pushState = true) {
            const bead = Data.beads.find(b => b.id === id);
            if (!bead) return;

            // 1. Dynamic SEO Update
            document.title = `DMC ${bead.dmcNumber} 색상 정보 | DotLog Lite`;

            app.track('bead_open', { code: bead.dmcNumber.toString(), name: bead.nameKr });

            const metaDesc = document.getElementById('meta-description');
            if (metaDesc) {
                // Use custom description if available, otherwise generate one
                const desc = bead.content && bead.content.summary
                    ? bead.content.summary
                    : `DMC ${bead.dmcNumber} (${bead.nameKr}/${bead.nameEn}) 색상 정보. ${bead.group} 계열의 ${bead.tone} 톤 비즈로, 추천 도안 및 대체 색상 정보를 확인하세요.`;
                metaDesc.setAttribute('content', desc);
            }

            const canonical = document.getElementById('canonical');
            if (canonical) {
                canonical.setAttribute('href', `https://dotlog-lite.pages.dev/beads/${encodeURIComponent(bead.dmcNumber)}`);
            }

            // 2. Content Generation (Fallback Logic)
            const content = bead.content || {
                summary: `DMC ${bead.dmcNumber}는 ${bead.group} 계열의 매력적인 색상입니다.`,
                bullets: [
                    `${bead.tone} 톤으로 다양한 도안에 활용됩니다.`,
                    `주로 자연 풍경이나 인물 피부톤 표현 등에 사용될 수 있습니다.`,
                    `DMC 표준 번호를 따르며, 제조사에 따라 미세한 차이가 있을 수 있습니다.`
                ],
                alternatives: ["비슷한 계열의 다른 색상을 '비즈 도감'에서 찾아보세요."],
                notes: "모니터 해상도에 따라 실제 비즈 색상과 차이가 있을 수 있으니 참고하세요."
            };

            const modalBody = document.getElementById('modal-body');

            // --- Compute Similar Colors ---
            const similarBeads = app.getSimilarBeads(bead, 3);
            let similarUI = '';
            if (similarBeads.length > 0) {
                similarUI = `
                    <div style="margin-top: 25px; padding-top: 15px; border-top: 2px solid #eee; text-align: left;">
                        <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 5px;">
                            <span>🎨 비슷한 색 추천</span>
                        </h4>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${similarBeads.map(sim => `
                                <div class="similar-bead-card" onclick="app.openModal(${sim.id})" style="flex: 1; min-width: 80px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px; text-align: center; cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,0.05); position: relative; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
                                    <div style="width: 24px; height: 24px; border-radius: 50%; background-color: ${sim.hex}; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1); margin-bottom: 6px;"></div>
                                    <div style="font-weight: 700; color: var(--primary-color); font-size: 0.9rem;">${sim.dmcNumber}</div>
                                    <div style="font-size: 0.75rem; color: #6b7280; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%;">${sim.nameKr}</div>
                                    <button class="sim-compare-btn ${app.compareList.includes(sim.id) ? 'active' : ''}" data-id="${sim.id}" onclick="event.stopPropagation(); app.toggleCompare(${sim.id}, 'similar');" 
                                            style="position: absolute; top: 4px; right: 4px; border: none; background: #f3f4f6; border-radius: 4px; width: 20px; height: 20px; font-size: 0.7rem; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #4b5563;">
                                        ${app.compareList.includes(sim.id) ? '✔' : '➕'}
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            modalBody.innerHTML = `
                <div class="modal-bead-info">
                    <div class="modal-color-box" style="background-color: ${bead.hex}"></div>
                    <h2 style="font-size: 2rem; margin-bottom: 5px; color: var(--primary-color);">${bead.dmcNumber}</h2>
                    <h3 style="font-size: 1.2rem; margin-bottom: 20px; color: var(--text-color);">${bead.nameKr} / ${bead.nameEn}</h3>
                    
                    <div style="text-align: left; background: #f9fafb; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <div class="modal-detail-row">
                            <span class="modal-label">색상 계열</span>
                            <span class="modal-value">${bead.group} (${bead.tone})</span>
                        </div>
                        <div class="modal-detail-row">
                            <span class="modal-label">HEX 코드</span>
                            <span class="modal-value">${bead.hex}</span>
                        </div>
                        <div class="modal-detail-row">
                            <span class="modal-label">권장 도안 사이즈</span>
                            <span class="modal-value" style="color: var(--primary-color);">${bead.recommendedSize}</span>
                        </div>
                        <div class="modal-detail-row">
                            <span class="modal-label">사용 가능 타입</span>
                            <span class="modal-value">${bead.availableType}</span>
                        </div>
                    </div>

                    <!-- SEO Content Block -->
                    <div class="modal-content-block" style="text-align: left; padding: 0 10px;">
                        <h4 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                            <span>💡 상세 정보</span>
                            <button class="bead-detail-toggle-btn" onclick="app.toggleBeadDetail(this)" style="background: none; border: 1px solid #ccc; border-radius: 4px; padding: 4px 8px; font-size: 0.8rem; cursor: pointer; color: #666;">상세정보 보기</button>
                        </h4>
                        <div id="bead-detail-content" class="collapsed" style="display: none;">
                            <p style="line-height: 1.6; color: #4b5563; margin-bottom: 15px;">
                                ${content.summary}
                            </p>
                            <ul style="list-style-type: disc; padding-left: 20px; color: #4b5563; margin-bottom: 15px; line-height: 1.6;">
                                ${content.bullets.map(b => `<li>${b}</li>`).join('')}
                            </ul>
                            ${content.alternatives && content.alternatives.length > 0 ? `
                            <p style="font-weight: 500; margin-bottom: 5px;">🔄 대체 추천 색상:</p>
                            <p style="color: #6b7280; font-size: 0.95em;">${content.alternatives.join(', ')}</p>
                            ` : ''}
                            <p style="margin-top: 15px; font-size: 0.9em; color: #9ca3af; border-top: 1px dashed #e5e7eb; padding-top: 10px;">
                                📝 참고: ${content.notes}
                            </p>
                        </div>
                    </div>

                    ${similarUI}
                </div>
            `;

            const modal = document.getElementById('bead-modal');
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('modal-open');

            const bar = document.getElementById('compare-bar');
            const dock = document.getElementById('bead-modal-footer-dock');
            if (bar && dock) dock.appendChild(bar);

            if (pushState) {
                const url = `/beads/${encodeURIComponent(bead.dmcNumber.toString())}`;
                history.pushState({ modal: 'bead', id: id }, '', url);
            }
        },

        closeModal: function (pushState = true) {
            const modal = document.getElementById('bead-modal');
            if (modal && modal.classList.contains('open')) {
                modal.classList.remove('open');
                document.body.style.overflow = '';
                document.body.classList.remove('modal-open');

                const bar = document.getElementById('compare-bar');
                if (bar) document.body.appendChild(bar);

                // Reset SEO Tags
                document.title = "DotLog Lite | 보석십자수를 더 스마트하게";

                const metaDesc = document.getElementById('meta-description');
                if (metaDesc) metaDesc.setAttribute('content', "색상 비교, 비즈 관리, 쇼핑 연결까지. 보석십자수를 위한 정리된 올인원 도구.");

                const canonical = document.getElementById('canonical');
                if (canonical) canonical.setAttribute('href', "https://dotlog-lite.pages.dev/");

                if (pushState) {
                    history.pushState(null, '', '/');
                }
            }
        },

        handleSearch: function (query) {
            if (!this.filterState) this.filterState = { query: '', group: 'all', tone: 'all' };
            this.filterState.query = query;
            this.applyFilters();
        },

        faq: function () {
            app.mainContent.innerHTML = `
                <div class="section-title">자주 묻는 질문 (FAQ)</div>
                <div class="guide-container" style="max-width: 800px; margin: 0 auto;">
                    ${Data.faqs.map((item, index) => `
                        <div class="faq-item">
                            <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                                <span>Q. ${item.q}</span>
                                <span class="faq-toggle-icon">▼</span>
                            </div>
                            <div class="faq-answer">
                                <p>A. ${item.a}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        },

        shop: function () {
            const simpleShops = Data.shops.filter(s => s.type !== 'expandable');
            const expandableShops = Data.shops.filter(s => s.type === 'expandable');

            // Helper to render sub-items (reduces nesting complexity)
            const renderSubList = (shops, parentCatIdx, parentItemIdx) => {
                if (!shops || shops.length === 0) {
                    return '<li style="padding:20px; text-align:center; color:#9ca3af;">등록된 상점이 없습니다.</li>';
                }
                return shops.map((sub, subIdx) => {
                    const badgeClass = (sub.tag === 'tool') ? 'badge-tool' : 'badge-pattern';
                    const badgeIcon = (sub.tag === 'tool') ? '✒️' : '🎨';

                    return `
                        <li class="shop-subitem">
                            <div class="shop-sub-header">
                                <div class="shop-sub-name-wrap">
                                    <div class="shop-sub-name" style="display: flex; align-items: center;">
                                        <span class="shop-badge ${badgeClass}">${badgeIcon}</span>
                                        ${sub.name}
                                    </div>
                                    <div class="shop-sub-desc">${sub.desc || ''}</div>
                                </div>
                            </div>
                            <div style="display:flex; justify-content: flex-end; gap:8px; align-items:center; margin-top:8px;">
                                <a href="${sub.url}" target="_blank" class="shop-sub-btn shop-link" data-shop="${sub.name}">방문하기</a>
                                ${app.isAdmin ? `
                                    <div class="admin-controls">
                                        <button class="admin-btn edit" onclick="app.editShopItem(${parentCatIdx}, ${parentItemIdx}, ${subIdx})">✏️</button>
                                        <button class="admin-btn delete" onclick="app.deleteShopItem(${parentCatIdx}, ${parentItemIdx}, ${subIdx})">🗑️</button>
                                    </div>
                                ` : ''}
                            </div>
                        </li>
                    `;
                }).join('');
            };

            app.mainContent.innerHTML = `
                <div class="section-title">추천 쇼핑몰 리스트</div>
                <div class="container" style="max-width: 1000px; position: relative;">
                    <!-- Admin Control -->
                    <button class="admin-toggle-btn" onclick="app.toggleAdmin()" title="관리자 모드 전환">⚙️</button>
                    
                    ${app.isAdmin ? `
                        <div style="text-align:right; margin-bottom:10px;">
                            <button onclick="app.exportShopData()" style="padding:8px 16px; background:#1f2937; color:white; border-radius:6px; cursor:pointer;">💾 변경사항 코드 복사(Save)</button>
                        </div>
                    ` : ''}

                    <!-- Top Section: 2 Columns for Simple Shops -->
                    <div class="shop-grid top-section" style="margin-bottom: 40px;">
                        ${simpleShops.map(shop => `
                            <div class="shop-category-card">
                                <div class="shop-category-title">${shop.category}</div>
                                <ul class="shop-list">
                                    ${shop.items.map(item => `
                                        <li class="shop-item">
                                            <span>${item.name}</span>
                                            <a href="${item.url}" target="_blank" class="shop-btn shop-link" data-shop="${item.name}">방문하기</a>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Bottom Section: Full Width for Expandable Shops -->
                    <div class="shop-full-width">
                         ${expandableShops.map((shop, catIdx) => {
                // Correct index recovery
                const originalCatIdx = Data.shops.indexOf(shop);

                return `
                                <div class="shop-category-card full-width-card" style="margin-bottom: 24px;">
                                    <div class="shop-category-title">${shop.category}</div>
                                    <div class="shop-expand-grid">
                                        ${shop.items.map((item, itemIdx) => `
                                            <div class="shop-expand-card">
                                                <div class="shop-expand-header">
                                                    <div class="shop-expand-title-group">
                                                        <div class="shop-expand-name" style="font-size: 1.1rem; font-weight: 700;">🛍️ ${item.name}</div>
                                                    </div>
                                                    <a href="${item.officialUrl}" target="_blank" class="shop-official-btn shop-link" data-shop="${item.name}">
                                                        <span class="shop-badge badge-official">🏠</span> 공식 홈페이지
                                                    </a>
                                                </div>
                                                
                                                <div class="shop-toggle-area" onclick="app.toggleShopList('list-${item.id}', this)">
                                                    🔽 상세 상점 리스트 펼치기
                                                </div>
                                                <ul id="list-${item.id}" class="shop-sublist">
                                                    ${renderSubList(item.shops, originalCatIdx, itemIdx)}
                                                    ${app.isAdmin ? `<button class="admin-btn add" onclick="app.addShopItem(${originalCatIdx}, ${itemIdx})">+ 상점 추가하기</button>` : ''}
                                                </ul>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                             `;
            }).join('')}
                    </div>

                    <div class="shop-disclaimer">
                        ⚠️ 본 리스트는 정보 제공 목적이며, 구매 결과에 대해 닷로그 라이트는 책임을 지지 않습니다.
                        <br>구매 전 반드시 리뷰와 판매자 정보를 확인하세요.
                    </div>

                     <div class="legal-notice">
                        닷로그 라이트는 쿠팡 파트너스, 알리익스프레스, 테무 제휴 프로그램에 참여하고 있으며, 위 링크를 통해 구매 시 운영자에게 일정액의 수수료가 제공될 수 있습니다. (사용자 구매 가격에는 영향이 없습니다.)
                    </div>
                </div>
            `;
        },

        guide: function () {
            const guideHTML = Data.guides.map(guide => `
                <div class="guide-section">
                    <h3>${guide.title}</h3>
                    <div class="guide-content">
                        ${guide.content}
                    </div>
                </div>
            `).join('');

            const faqHTML = Data.faqs.map((item, index) => `
                <div class="faq-item">
                    <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                        <span>Q. ${item.q}</span>
                        <span class="faq-toggle-icon">▼</span>
                    </div>
                    <div class="faq-answer">
                        <p>A. ${item.a}</p>
                    </div>
                </div>
            `).join('');

            app.mainContent.innerHTML = `
                <div class="section-title">초보자 가이드</div>
                <div class="guide-container">
                    ${guideHTML}
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 0.95em; color: var(--text-color);">
                        💡 <strong>꿀팁:</strong> 가이드에서 소개한 모든 추천 제품과 도구들은 
                        <span style="color: var(--primary-color); font-weight: 700; cursor: pointer; text-decoration: underline;" onclick="app.router.navigate('shop')">[추천 쇼핑몰]</span> 
                        메뉴에 깔끔하게 정리해 두었습니다. '방문하기' 버튼을 누르면 바로 구경하실 수 있어요!
                    </div>
                </div>
                
                <div class="mobile-only-section" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <div class="section-title">자주 묻는 질문 (FAQ)</div>
                    <div class="guide-container">
                        ${faqHTML}
                    </div>
                </div>
            `;
        },

        about: function () {
            app.mainContent.innerHTML = `
                 <div class="section-title">사이트 소개 (About)</div>
                 <div class="card" style="max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.6;">
                    <h2 class="logo" style="margin-bottom: 20px; text-align: center;">DotLog <span class="lite">Lite</span></h2>
                    <p style="font-size: 1.1rem; margin-bottom: 20px; text-align: center; color: var(--text-color);">
                        보석십자수를 사랑하는 모든 분들을 위한 비영리 공용 참고 도감입니다.
                    </p>
                    <div style="margin-bottom: 30px;">
                        <h3 style="margin-bottom: 10px; color: var(--primary-color);">주요 기능</h3>
                        <ul style="list-style-type: disc; padding-left: 20px; color: var(--text-color);">
                            <li style="margin-bottom: 8px;"><strong>비즈 도감:</strong> DMC 번호와 색상 정보를 한눈에 확인할 수 있습니다.</li>
                            <li style="margin-bottom: 8px;"><strong>색상 비교:</strong> 여러 비즈를 비교함에 담아 나란히 색상을 대조해 볼 수 있습니다.</li>
                            <li style="margin-bottom: 8px;"><strong>재고 확인 상태:</strong> 보유, 구매 필요, 찜 상태를 체크하고 쉽게 확인할 수 있습니다.</li>
                            <li style="margin-bottom: 8px;"><strong>비슷한 색 추천:</strong> 선택한 색상과 가장 유사한 대체 비즈를 자동으로 추천해 줍니다.</li>
                        </ul>
                    </div>
                    <div style="background: var(--primary-light); padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
                        <p style="color: var(--primary-color); font-weight: 500;">
                            💡 본 사이트는 로그인이 필요 없으며, 개인 정보를 취합하지 않습니다.
                        </p>
                    </div>
                    <p style="font-size: 0.9rem; color: #9ca3af; text-align: center;">
                        version 1.0.0 (Lite Edition)
                    </p>
                 </div>
            `;
        },

        privacy: function () {
            app.mainContent.innerHTML = `
                 <div class="section-title">개인정보처리방침 (Privacy)</div>
                 <div class="card" style="max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.6;">
                    <p style="margin-bottom: 20px;">DotLog Lite는 사용자의 프라이버시를 중요하게 생각합니다. 본 사이트의 운영 및 데이터 처리 관련 사항은 다음과 같습니다.</p>
                    
                    <h3 style="margin-bottom: 10px; color: var(--primary-color);">Google Analytics (GA4) 사용</h3>
                    <p style="margin-bottom: 20px;">
                        본 서비스는 서비스 개선 및 트래픽 분석을 위해 Google Analytics 4를 사용합니다. 
                        이 과정에서 익명화된 데이터(페이지 방문, 클릭 이벤트 등)가 수집될 수 있으나, 
                        사용자를 특정할 수 있는 개인 정보는 수집하지 않습니다.
                    </p>

                    <h3 style="margin-bottom: 10px; color: var(--primary-color);">로컬 스토리지 (LocalStorage) 사용</h3>
                    <p style="margin-bottom: 20px;">
                        본 사이트는 사용자의 사이트 이용 편의성을 위해 브라우저의 로컬 스토리지 기능을 활용합니다.
                        '찜', '보유', '구매 필요' 등의 비즈 상태 정보와 '비교함' 데이터 등은 사용자의 기기 내부에만 저장되며, 
                        외부 서버로 전송되거나 저장되지 않습니다. 사용자가 브라우저 캐시 및 데이터를 삭제하면 해당 설정들도 모두 기기에서 초기화됩니다.
                    </p>
                 </div>
            `;
        },

        contact: function () {
            app.mainContent.innerHTML = `
                 <div class="section-title">문의하기 (Contact)</div>
                 <div class="card" style="max-width: 800px; margin: 0 auto; text-align: center; padding: 60px 40px; line-height: 1.6;">
                    <h2 style="margin-bottom: 20px; color: var(--text-color);">무엇을 도와드릴까요?</h2>
                    <p style="margin-bottom: 30px; color: var(--text-light);">
                        사이트 이용 중 궁금한 점이 있거나, 추가되었으면 하는 기능, 혹은 오류를 발견하셨다면 언제든 아래 연락처로 문의해주세요.
                    </p>
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; display: inline-block;">
                        <a href="mailto:hello@dotlogapp.com" style="font-size: 1.2rem; font-weight: bold; color: var(--primary-color); text-decoration: underline;">
                            hello@dotlogapp.com
                        </a>
                    </div>
                 </div>
            `;
        }
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Expose render methods to global app object for onclick handlers
    app.openModal = app.render.openModal;
    app.closeModal = app.render.closeModal;

    // Modal Close on Overlay Click
    const modalOverlay = document.getElementById('bead-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                app.closeModal();
            }
        });
    }

    // Compare Modal Close on Overlay Click
    const compareModalOverlay = document.getElementById('compare-modal');
    if (compareModalOverlay) {
        compareModalOverlay.addEventListener('click', (e) => {
            if (e.target === compareModalOverlay) {
                app.closeCompareModal();
            }
        });
    }

    // Compare Button Click Event
    const compareBtn = document.querySelector('.compare-bar-btn');
    if (compareBtn) {
        compareBtn.addEventListener('click', () => {
            app.openCompareModal();
        });
    }

    app.loadCompareList();
    app.init();
});

// Explicitly ensure app is on window for inline handlers
window.app = app;
