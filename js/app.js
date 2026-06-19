
Vue.createApp({
    components: {
        AppHeader: window.ToernLayout.AppHeader,
        MainMenu: window.ToernLayout.MainMenu,
        SocialSidebar: window.ToernLayout.SocialSidebar,
        MainFooter: window.ToernLayout.MainFooter,
        HomeView: window.HomeView,
        NotFoundView: window.NotFoundView
    },

    data() {
        return {
            language: "de",
            currentRoute: window.location.hash.replace("#", "") || "/",
            textsByLanguage: window.ToernContent,
            routes: window.ToernRoutes
        };
    },

    computed: {
        texts() {
            return this.textsByLanguage[this.language];
        },

        activeRoute() {
            return this.routes.find(route => route.path === this.currentRoute);
        },

        currentView() {
            if (this.currentRoute === "/") {
                return "HomeView";
            }

            return this.activeRoute?.component || "NotFoundView";
        }
    },

    mounted() {
        window.addEventListener("hashchange", this.updateRoute);

        if (!window.location.hash) {
            window.location.hash = "/";
        }
    },

    beforeUnmount() {
        window.removeEventListener("hashchange", this.updateRoute);
    },

    methods: {
        toggleLanguage() {
            this.language = this.language === "de" ? "en" : "de";
        },

        updateRoute() {
            this.currentRoute = window.location.hash.replace("#", "") || "/";
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
}).mount("#app");
