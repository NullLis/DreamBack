// DreamBack 共用导航与页脚；相对路径兼容 GitHub Pages 的 /DreamBack/ 子路径。
(() => {
    const basePath = location.pathname.includes('/html/') ? '../' : './';
    document.addEventListener('DOMContentLoaded', () => {
        const nav = document.getElementById('navbar-container');
        if (nav) {
            nav.innerHTML = `
                <nav class="navbar" aria-label="主导航">
                    <a href="${basePath}index.html" class="nav-logo">🏮 DreamBack</a>
                    <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="navLinks" aria-label="打开导航菜单">☰</button>
                    <ul class="nav-links" id="navLinks">
                        <li><a href="${basePath}index.html">首页</a></li>
                        <li><a href="https://nullligame.pages.dev" target="_blank" rel="noopener noreferrer">🕹️ 更多游戏</a></li>
                        <li class="dropdown" id="communityDropdown">
                            <button class="dropdown-toggle" id="communityToggle" type="button" aria-expanded="false" aria-controls="communityMenu">🗣️ 社区与反馈 ▾</button>
                            <ul class="dropdown-menu" id="communityMenu">
                                <li><a href="https://github.com/NullLis/DreamBack/issues">💬 问题反馈</a></li>
                                <li><a href="https://github.com/NullLis">📧 联系开发者</a></li>
                                <li><a href="https://github.com/NullLis/DreamBack">🌟 支持项目</a></li>
                            </ul>
                        </li>
                        <li><a href="${basePath}html/download.html">📥 下载游戏</a></li>
                        <li><a href="${basePath}html/update.html">📅 更新日志</a></li>
                    </ul>
                </nav>`;
            initNavbar();
        }
        const footer = document.getElementById('footer-container');
        if (footer) footer.innerHTML = `
            <footer class="footer">
                <div class="footer-links">
                    <a href="https://github.com/NullLis/DreamBack">项目仓库</a>
                    <a href="https://github.com/NullLis/DreamBack/issues">问题反馈</a>
                </div>
                DreamBack · 仙冢 &nbsp;|&nbsp; © 2026 NullLis
            </footer>`;
    });
    function initNavbar() {
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        const community = document.getElementById('communityDropdown');
        const communityToggle = document.getElementById('communityToggle');
        navToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', String(open));
        });
        communityToggle.addEventListener('click', () => {
            const open = community.classList.toggle('active');
            communityToggle.setAttribute('aria-expanded', String(open));
        });
        const current = location.pathname.split('/').pop() || 'index.html';
        navLinks.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href')?.split('/').pop() === current && !link.href.startsWith('https://github.com')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        document.addEventListener('click', event => {
            if (!community.contains(event.target)) {
                community.classList.remove('active');
                communityToggle.setAttribute('aria-expanded', 'false');
            }
        });
        document.addEventListener('keydown', event => {
            if (event.key !== 'Escape') return;
            community.classList.remove('active');
            communityToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    }
})();
