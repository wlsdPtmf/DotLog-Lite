const app = {
    favorites: [],
    owned: [],
    needBuy: [],
    compareList: [],
    isAdmin: false,


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
        this.router.init();

        // Deep Link Check
        const beadCode = this.getBeadCodeFromURL();
        if (beadCode) {
            const bead = Data.beads.find(b => b.dmcNumber.toString() === beadCode);
            if (bead) {
                // Ensure renders happen first if needed, but here we just open modal
                this.render.openModal(bead.id, false);
            }
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

    toggleFavorite: function (id) {
        const idx = this.favorites.indexOf(id);
        if (idx === -1) this.favorites.push(id);
        else this.favorites.splice(idx, 1);
        localStorage.setItem('dotlog_favorites', JSON.stringify(this.favorites));
        this.updateUI(id);
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
    toggleCompare: function (id) {
        const idx = this.compareList.indexOf(id);
        if (idx === -1) {
            this.compareList.push(id);
        } else {
            this.compareList.splice(idx, 1);
        }
        // Toggle button visual state
        const btns = document.querySelectorAll(`.compare-btn[data-id="${id}"]`);
        btns.forEach(btn => {
            if (this.compareList.includes(id)) {
                btn.classList.add('active');
                btn.textContent = '✔';
            } else {
                btn.classList.remove('active');
                btn.textContent = '➕';
            }
        });
        this.updateCompareBar();
        this.saveCompareList();
    },

    updateCompareBar: function () {
        const bar = document.getElementById('compare-bar');
        const countEl = document.getElementById('compare-count');
        if (!bar || !countEl) return;

        const count = this.compareList.length;
        countEl.textContent = count;

        if (count > 0) {
            bar.style.display = 'flex';
            // Trigger reflow for animation
            void bar.offsetWidth;
            bar.classList.add('visible');
        } else {
            bar.classList.remove('visible');
            // Wait for fade-out transition then hide
            setTimeout(() => {
                if (!bar.classList.contains('visible')) {
                    bar.style.display = 'none';
                }
            }, 300);
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

        // 2. Update all buttons in main list
        const allActiveBtns = document.querySelectorAll('.compare-btn.active');
        allActiveBtns.forEach(btn => {
            btn.classList.remove('active');
            btn.textContent = '➕';
        });

        // 3. Update Bar & Modal
        this.updateCompareBar();
        this.closeCompareModal();
    },

    removeCompareItem: function (id) {
        const idx = this.compareList.indexOf(id);
        if (idx === -1) return;

        // 1. Remove from Data
        this.compareList.splice(idx, 1);
        this.saveCompareList();

        // 2. Update specific button in main list
        const btns = document.querySelectorAll(`.compare-btn[data-id="${id}"]`);
        btns.forEach(btn => {
            btn.classList.remove('active');
            btn.textContent = '➕';
        });

        // 3. Update Bar & Modal
        this.updateCompareBar();

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
        if (modal) modal.classList.remove('open');
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
        this.mainContent.addEventListener('input', (e) => {
            if (e.target.classList.contains('search-input')) {
                this.render.handleSearch(e.target.value);
            }
        });
    },

    router: {
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
                    <button class="compare-btn ${app.compareList.includes(bead.id) ? 'active' : ''}" data-id="${bead.id}" onclick="event.stopPropagation(); app.toggleCompare(${bead.id})" title="비교함 담기">${app.compareList.includes(bead.id) ? '✔' : '➕'}</button>

                </div>
            `}).join('');
        },

        openModal: function (id, pushState = true) {
            const bead = Data.beads.find(b => b.id === id);
            if (!bead) return;

            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = `
                <div class="modal-bead-info">
                    <div class="modal-color-box" style="background-color: ${bead.hex}"></div>
                    <h2 style="font-size: 2rem; margin-bottom: 5px; color: var(--primary-color);">${bead.dmcNumber}</h2>
                    <h3 style="font-size: 1.2rem; margin-bottom: 20px; color: var(--text-color);">${bead.nameKr} / ${bead.nameEn}</h3>
                    
                    <div style="text-align: left; background: #f9fafb; padding: 20px; border-radius: 12px;">
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
                    <p style="margin-top: 20px; font-size: 0.9rem; color: var(--text-light);">
                        * 모니터 설정에 따라 실제 색상과 다를 수 있습니다.
                    </p>
                </div>
            `;

            const modal = document.getElementById('bead-modal');
            modal.classList.add('open');

            if (pushState) {
                history.pushState({ modal: 'bead', id: id }, '', `/beads/${bead.dmcNumber}`);
            }
        },

        closeModal: function (pushState = true) {
            const modal = document.getElementById('bead-modal');
            if (modal && modal.classList.contains('open')) {
                modal.classList.remove('open');
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
                                <a href="${sub.url}" target="_blank" class="shop-sub-btn">방문하기</a>
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
                                            <a href="${item.url}" target="_blank" class="shop-btn">방문하기</a>
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
                                                    <a href="${item.officialUrl}" target="_blank" class="shop-official-btn">
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
                 <div class="section-title">About DotLog Lite</div>
                 <div class="card" style="max-width: 800px; margin: 0 auto; text-align: center; padding: 60px 40px;">
                    <h2 class="logo" style="margin-bottom: 20px;">DotLog <span class="lite">Lite</span></h2>
                    <p style="font-size: 1.2rem; margin-bottom: 30px; color: var(--text-light);">
                        보석십자수를 사랑하는 모든 분들을 위한<br>
                        비영리 공용 참고 도감입니다.
                    </p>
                    <div style="background: var(--primary-light); padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                        <p style="color: var(--primary-color); font-weight: 500;">
                            💡 본 사이트는 로그인이 필요 없으며,<br>
                            어떠한 개인 정보도 저장하지 않습니다.
                        </p>
                    </div>
                    <p style="font-size: 0.9rem; color: #9ca3af;">
                        문의: contact@dotloglite.com<br>
                        version 1.0.0 (Lite Edition)
                    </p>
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
