const app = {
    init: function () {
        this.cacheDOM();
        this.bindEvents();
        this.router.init();
    },

    cacheDOM: function () {
        this.mainContent = document.getElementById('main-content');
        this.navLinks = document.querySelectorAll('.nav-list a');
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
            if (link.dataset.route === route) {
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
                    <h2>보석십자수의 모든 것</h2>
                    <p>도안 정보부터 정확한 비즈 색상까지,<br>DotLog Lite에서 쉽고 빠르게 찾아보세요.</p>
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

            listEl.innerHTML = beads.map(bead => `
                <div class="card bead-card" onclick="app.openModal(${bead.id})" style="cursor: pointer;">
                    <div class="color-box" style="background-color: ${bead.hex};"></div>
                    <div class="bead-code">${bead.dmcNumber}</div>
                    <div class="bead-name">${bead.nameKr}</div>
                    <div class="bead-name" style="font-size:0.8rem; color:#999;">${bead.nameEn}</div>
                </div>
            `).join('');
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
            app.mainContent.innerHTML = `
                <div class="section-title">추천 쇼핑몰 리스트</div>
                <div class="container" style="max-width: 1000px;">
                    <div class="shop-grid">
                        ${Data.shops.map(shop => `
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
                    <div class="shop-disclaimer">
                        ⚠️ 본 리스트는 정보 제공 목적이며, 구매 결과에 대해 닷로그 라이트는 책임을 지지 않습니다.
                        <br>구매 전 반드시 리뷰와 판매자 정보를 확인하세요.
                    </div>
                </div>
            `;
        },

        guide: function () {
            app.mainContent.innerHTML = `
                <div class="section-title">초보자 가이드</div>
                <div class="guide-container">
                    ${Data.guides.map(guide => `
                        <div class="guide-section">
                            <h3>${guide.title}</h3>
                            <div class="guide-content">
                                ${guide.content}
                            </div>
                        </div>
                    `).join('')}
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
