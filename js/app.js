const app = {
    favorites: [],
    isAdmin: false,


    init: function () {
        // Load favorites
        const saved = localStorage.getItem('dotlog_favorites');
        if (saved) {
            this.favorites = JSON.parse(saved);
        }

        this.cacheDOM();
        this.bindEvents();
        this.router.init();
    },

    toggleFavorite: function (id) {
        const idx = this.favorites.indexOf(id);
        if (idx === -1) {
            this.favorites.push(id);
        } else {
            this.favorites.splice(idx, 1);
        }
        localStorage.setItem('dotlog_favorites', JSON.stringify(this.favorites));

        // Update UI
        app.render.renderFavorites();
        app.render.updateFavoriteBtn(id);
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
            `;
        },

        dictionary: function () {
            if (!this.filterState) {
                this.filterState = { query: '', group: 'all', tone: 'all' };
            }

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
                
                <!-- Favorites Section -->
                <div id="favorites-section" style="display: none; margin-bottom: 40px;">
                    <h3 style="font-size: 1.2rem; margin-bottom: 16px; color: var(--primary-color);">❤️ 내가 즐겨찾는 비즈</h3>
                    <div id="favorites-list" class="bead-grid"></div>
                    <hr style="margin-top: 30px; border: 0; border-top: 1px solid var(--border-color);">
                </div>

                <div class="search-container">
                    <div class="search-bar">
                        <input type="text" class="search-input" id="search-input" 
                            placeholder="비즈 번호(310), 색상명(블랙/Black) 검색..." 
                            value="${this.filterState.query}">
                    </div>
                    
                    <button id="filter-toggle-btn" class="btn-outline filter-toggle-btn">
                        🛠️ 필터 옵션 열기/닫기
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
            this.renderFavorites(); // Initial render of favorites
            this.attachFilterEvents(); // Call the new function here
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
            const { query, group, tone } = this.filterState;
            const lowerQ = query.toLowerCase();

            const filtered = Data.beads.filter(bead => {
                const matchesSearch = !query ||
                    bead.dmcNumber.toLowerCase().includes(lowerQ) ||
                    bead.nameKr.toLowerCase().includes(lowerQ) ||
                    bead.nameEn.toLowerCase().includes(lowerQ);

                const matchesGroup = group === 'all' || bead.group === group;
                const matchesTone = tone === 'all' || bead.tone === tone;

                return matchesSearch && matchesGroup && matchesTone;
            });

            // Auto-sort: Special codes first, then numeric ascending
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
                return `
                <div class="card bead-card" onclick="app.openModal(${bead.id})" style="cursor: pointer;">
                    <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); app.toggleFavorite(${bead.id})">♥</button>
                    <div class="color-box" style="background-color: ${bead.hex};"></div>
                    <div class="bead-code">${bead.dmcNumber}</div>
                    <div class="bead-name">${bead.nameKr}</div>
                    <div class="bead-name" style="font-size:0.8rem; color:#999;">${bead.nameEn}</div>
                </div>
            `}).join('');
        },

        renderFavorites: function () {
            const section = document.getElementById('favorites-section');
            const list = document.getElementById('favorites-list');
            if (!section || !list) return;

            if (app.favorites.length === 0) {
                section.style.display = 'none';
                return;
            }

            section.style.display = 'block';

            // Filter Data.beads for favorites
            const favBeads = Data.beads.filter(b => app.favorites.includes(b.id));

            list.innerHTML = favBeads.map(bead => `
                <div class="card bead-card" onclick="app.openModal(${bead.id})" style="cursor: pointer;">
                    <button class="fav-btn active" onclick="event.stopPropagation(); app.toggleFavorite(${bead.id})">♥</button>
                    <div class="color-box" style="background-color: ${bead.hex};"></div>
                    <div class="bead-code">${bead.dmcNumber}</div>
                    <div class="bead-name">${bead.nameKr}</div>
                    <div class="bead-name" style="font-size:0.8rem; color:#999;">${bead.nameEn}</div>
                </div>
            `).join('');
        },

        updateFavoriteBtn: function (id) {
            // Find all buttons for this ID (in main list and potentially others)
            // Since we re-render favorites completely, we mainly need to update the main list button state
            // actually re-rendering just the button class is hard without traversing DOM.
            // But we know the ID.

            // Re-render only if needed? No, let's just use DOM manipulation for performance
            // Find buttons inside bead-cards that trigger this ID? 
            // We can't easily select by ID unless we put ID on the card.
            // Let's simpler approach: Re-apply filters (re-renders main list) is safest but slow?
            // "applyFilters" is fast enough for 500 items. 
            this.applyFilters();
        },

        openModal: function (id) {
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
        },

        closeModal: function () {
            const modal = document.getElementById('bead-modal');
            if (modal) modal.classList.remove('open');
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

    app.init();
});
