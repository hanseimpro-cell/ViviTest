
window.ToernLayout = {
    AppHeader: {
        template: `
            <header class="topbar">
                <a class="brand" href="#/">
                    <img src="png/toern_logo.svg" alt="Törn">
                </a>
				
				<nav class="navbar">

    <ul class="nav-links" id="navLinks">
        <li><a href="#/">Home</a></li>
        <li><a href="#/festival">Festival</a></li>
        <li><a href="#/toern-cup">Törn Cup</a></li>
        <li><a href="#/toern-around">Törn Around</a></li>
        <li><a href="#/impro-spirit-retreat">Impro Spirit Retreat</a></li>
        <li><a href="#/akademie">Akademie</a></li>
    </ul>
</nav>

<script>
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
</script>
				
            </header>
        `
    },

    MainMenu: {
        props: ["language", "texts"],
        emits: ["toggle-language"],
        template: `
            <nav class="fixed-menu">
                <button
                    class="menu-button language-toggle"
                    @click="$emit('toggle-language')"
                    :title="language === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'"
                >
                    <span class="language-flag">{{ language === 'de' ? '🇩🇪' : '🇬🇧' }}</span>
                    <span class="language-code">{{ language === 'de' ? 'DE' : 'EN' }}</span>
                </button>

                <a class="menu-link" href="#/kontakt">{{ texts.menu.contact }}</a>
                <a class="menu-link" href="#/ueber-uns">{{ texts.menu.about }}</a>
            </nav>
        `
    },

    SocialSidebar: {
        template: `
            <aside class="social-sidebar">
                <a class="social-link" href="https://instagram.com" target="_blank" title="Instagram">
                    <img src="png/insta.png" alt="Instagram" width="32" height="32">
                </a>
                <a class="social-link" href="https://facebook.com" target="_blank" title="Facebook">
                    <img src="png/facebook.png" alt="Facebook" width="32" height="32">
                </a>
                <a class="social-link" href="https://twitter.com" target="_blank" title="Twitter">
                    <img src="png/twitter.png" alt="Twitter" width="32" height="32">
                </a>
            </aside>
        `
    },

    MainFooter: {
        props: ["texts"],
        template: `
            <footer class="main-footer">
                <div class="footer-top">
                    <section class="footer-block">
                        <h2 class="footer-title">{{ texts.footer.festivalTitle }}</h2>
                        <p>{{ texts.footer.festivalText }}</p>
                        <div class="footer-social">
                            <a href="https://facebook.com" target="_blank" title="Facebook"><img src="png/facebook.png" alt="Facebook" width="32" height="32"></a>
                            <a href="https://twitter.com" target="_blank" title="Twitter"><img src="png/twitter.png" alt="Twitter" width="32" height="32"></a>
                            <a href="https://instagram.com" target="_blank" title="Instagram"><img src="png/insta.png" alt="Instagram" width="32" height="32"></a>
                        </div>
                    </section>

                    <section class="footer-block">
                        <h3>{{ texts.footer.presentedBy }}</h3>
                        <p>{{ texts.footer.presentedText }}</p>
                        <a class="footer-button" href="#/ueber-uns">{{ texts.footer.moreAbout }}</a>
                    </section>
                </div>

                <nav class="footer-links">
                    <a href="#/ueber-uns">{{ texts.footer.about }}</a>
                    <a href="#/kontakt">{{ texts.footer.contact }}</a>
                    <a href="#/blog">{{ texts.footer.blog }}</a>
                    <a href="#/newsletter">{{ texts.footer.newsletter }}</a>
                    <a href="#/datenschutz">{{ texts.footer.privacy }}</a>
                    <a href="#/impressum">{{ texts.footer.legal }}</a>
                </nav>

                <div class="footer-copy">© {{ new Date().getFullYear() }} Törn e.V.</div>
            </footer>
        `
    }
};
