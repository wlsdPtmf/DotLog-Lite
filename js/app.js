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
                case 'gallery':
                    this.gallery();
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
                    <div class="card menu-card" onclick="app.router.navigate('gallery')">
                        <h3>🖼️ 완성 도안</h3>
                        <p>다양한 작품의<br>정보와 난이도를 참고하세요</p>
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
                <div class="card bead-card">
                    <div class="color-box" style="background-color: ${bead.hex};"></div>
                    <div class="bead-code">${bead.dmcNumber}</div>
                    <div class="bead-name">${bead.nameKr}</div>
                    <div class="bead-name" style="font-size:0.8rem; color:#999;">${bead.nameEn}</div>
                </div>
            `).join('');
        },

        handleSearch: function (query) {
            if (!this.filterState) this.filterState = { query: '', group: 'all', tone: 'all' };
            this.filterState.query = query;
            this.applyFilters();
        },

        gallery: function () {
            app.mainContent.innerHTML = `
                <div class="section-title">완성 도안 참고 갤러리</div>
                <div class="gallery-grid">
                    ${Data.patterns.map(pattern => `
                        <div class="card pattern-card">
                            <div style="width:100%; height:150px; background-color: #f1f5f9; border-radius: 8px; margin-bottom: 16px; display: flex; align-items: center; justify-content: center; color: #94a3b8;">
                                <span style="font-size: 3rem;">🖼️</span>
                            </div>
                            <h3>${pattern.name}</h3>
                            <div class="pattern-info">
                                <span style="margin-right: 10px;">${pattern.brand}</span> • 
                                <span style="margin: 0 10px;">${pattern.size}</span>
                            </div>
                            <div class="pattern-tags">
                                <span class="tag">${pattern.difficulty}</span>
                            </div>
                            <p style="font-size: 0.9rem; margin-bottom: 16px; color: #4b5563;">${pattern.description}</p>
                            <button class="btn-outline" onclick="app.router.navigate('pattern/${pattern.id}')">상세 & 필요 비즈 보기</button>
                        </div>
                    `).join('')}
                </div>
            `;
        },

        patternDetail: function (id) {
            const pattern = Data.patterns.find(p => p.id === id);
            if (!pattern) return this.gallery();

            // Find bead details for this pattern
            const requiredBeadDetails = pattern.requiredBeads.map(rb => {
                const beadInfo = Data.beads.find(b => b.dmcNumber === rb.code);
                return { ...rb, ...beadInfo };
            });

            app.mainContent.innerHTML = `
                <div style="margin-bottom: 20px;">
                    <button class="btn-outline" onclick="app.router.navigate('gallery')">← 목록으로 돌아가기</button>
                </div>
                <div class="card" style="margin-bottom: 30px;">
                    <div style="display: flex; gap: 30px; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 250px; background-color: #f1f5f9; border-radius: 12px; height: 300px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 4rem;">🖼️</span>
                        </div>
                        <div style="flex: 2;">
                            <h2 style="font-size: 2rem; margin-bottom: 10px; color: var(--primary-color);">${pattern.name}</h2>
                            <div class="pattern-tags" style="margin-bottom: 20px;">
                                <span class="tag" style="font-size: 1rem; padding: 6px 14px;">${pattern.difficulty}</span>
                                <span class="tag" style="background: #e5e7eb; color: #374151; font-size: 1rem; padding: 6px 14px;">${pattern.brand}</span>
                                <span class="tag" style="background: #e5e7eb; color: #374151; font-size: 1rem; padding: 6px 14px;">${pattern.size}</span>
                            </div>
                            <p style="font-size: 1.1rem; line-height: 1.8; color: #4b5563;">${pattern.description}</p>
                        </div>
                    </div>
                </div>

                <div class="section-title" style="font-size: 1.5rem; text-align: left;">필요 비즈 목록</div>
                <div class="bead-grid">
                    ${requiredBeadDetails.map(bead => `
                        <div class="card bead-card">
                            <div class="color-box" style="background-color: ${bead.hex || '#ccc'};"></div>
                            <div class="bead-code">${bead.dmcNumber || bead.code}</div>
                            <div class="bead-name">${bead.nameKr || 'Unknown'}</div>
                            <div style="margin-top: 8px; font-weight: bold; color: var(--primary-color);">${bead.count}개</div>
                        </div>
                    `).join('')}
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
    app.init();
});
