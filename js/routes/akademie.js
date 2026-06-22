(function () {
    const content = {
        de: {
            name: "Akademie",
            route: "/akademie",
            image: "png/Akademie.jpg",
            description: "Workshops und Weiterbildung.",
            pageTitle1: "Akademie",
            pageTitle2: ""
        },
        en: {
            name: "Academy",
            route: "/akademie",
            image: "png/Akademie.jpg",
            description: "Workshops and professional development.",
            pageTitle1: "Academy",
            pageTitle2: ""
        }
    };

    const workshops = [
        {
            title: "ALL THE PAINTS IN THE PAINBOX",
            description: "Despite our best intentions, we sometimes find ourselves playing the same scenes, same characters, same games over ...",
            date: "Sat 08. August 2026",
            time: "11:00 Uhr",
            language: "en",
            languageLabel: "in English",
            format: "Live",
            formatLabel: "Live",
            image: "png/Akademie.jpg"
        },
		        {
            title: "TestWorkshop",
            description: "Despite our best intentions, we sometimes find ourselves playing the same scenes, same characters, same games over ...",
            date: "Sat 23. August 2026",
            time: "23:00 Uhr",
            language: "de",
            languageLabel: "in Deutsch",
            format: "live",
            formatLabel: "Live",
            image: "png/mae.png"
        }
    ];

    const AkademieTextDe = {
        props: ["filters", "filteredWorkshops"],
        template: `
		<div class="long-text">
            <div class="workshops-intro">
                <img
                    src="https://improfestival-hamburg.de/wp-content/uploads/sites/2/2021/03/Sandburg.jpg"
                    alt="Sandburg"
                    width="200"
                    height="200"
                >

                <h2>Workshops</h2>

                <p>
                    Unser internationales Workshop-Programm bietet die Gelegenheit,
                    die eigenen Kenntnisse und Fertigkeiten im Improvisationstheater zu vertiefen.
                    2027 lautet das Motto des Festivals „Connect!“.
                </p>

                <div class="workshop-filters">
                    <label>
                        <input type="checkbox" v-model="filters.de">
                        Auf Deutsch
                    </label>

                    <label>
                        <input type="checkbox" v-model="filters.en">
                        In English
                    </label>

                    <label>
                        <input type="checkbox" v-model="filters.live">
                        Live
                    </label>

                    <label>
                        <input type="checkbox" v-model="filters.online">
                        Online
                    </label>
                </div>

                <div class="workshop-list">
                    <article
                        v-for="workshop in filteredWorkshops"
                        :key="workshop.title"
                        class="workshop-card"
                    >
                        <div class="workshop-meta">
                            <p>📅 {{ workshop.date }}</p>
                            <p>🕚 {{ workshop.time }}</p>
                            <p>🎙 {{ workshop.languageLabel }}</p>
                            <p>🏷 {{ workshop.formatLabel }}</p>
                        </div>

                        <div class="workshop-info">
                            <h2>{{ workshop.title }}</h2>
                            <p>{{ workshop.description }}</p>
                        </div>

                        <img
                            class="workshop-image"
                            :src="workshop.image"
                            :alt="workshop.title"
                        >
                    </article>
                </div>
            </div>  </div>
        `
    };

    const AkademieTextEn = {
        props: ["filters", "filteredWorkshops"],
        template: `
            <div class="workshops-intro">
                <img
                    src="https://improfestival-hamburg.de/wp-content/uploads/sites/2/2021/03/Sandburg.jpg"
                    alt="Sandburg"
                    width="480"
                    height="480"
                >

                <h1>Workshops</h1>

                <p>
                    Our international workshop programme offers the opportunity
                    to deepen your knowledge and skills in improvisational theatre.
                    In 2027, the festival's theme is <strong>“Connect!”</strong>.
                </p>

                <div class="workshop-filters">
                    <label>
                        <input type="checkbox" v-model="filters.de">
                        In German language
                    </label>

                    <label>
                        <input type="checkbox" v-model="filters.en">
                        In English
                    </label>

                    <label>
                        <input type="checkbox" v-model="filters.live">
                        Live
                    </label>

                    <label>
                        <input type="checkbox" v-model="filters.online">
                        Online
                    </label>
                </div>

                <div class="workshop-list">
                    <article
                        v-for="workshop in filteredWorkshops"
                        :key="workshop.title"
                        class="workshop-card"
                    >
                        <div class="workshop-meta">
                            <p>📅 {{ workshop.date }}</p>
                            <p>🕚 {{ workshop.time }}</p>
                            <p>🎙 {{ workshop.languageLabel }}</p>
                            <p>🏷 {{ workshop.formatLabel }}</p>
                        </div>

                        <div class="workshop-info">
                            <h2>{{ workshop.title }}</h2>
                            <p>{{ workshop.description }}</p>
                        </div>

                        <img
                            class="workshop-image"
                            :src="workshop.image"
                            :alt="workshop.title"
                        >
                    </article>
                </div>
            </div>
        `
    };

    const AkademiePage = {
        props: ["language", "texts"],

        components: {
            AkademieTextDe,
            AkademieTextEn
        },

        data() {
            return {
                filters: {
                    de: false,
                    en: false,
                    live: false,
                    online: false
                }
            };
        },

        computed: {
            page() {
                return content[this.language];
            },

            heroStyle() {
                return {
                    backgroundImage: "url('" + this.page.image + "')"
                };
            },

            textComponent() {
                return this.language === "de"
                    ? "AkademieTextDe"
                    : "AkademieTextEn";
            },

            filteredWorkshops() {
                return workshops.filter((workshop) => {
                    const languageActive = this.filters.de || this.filters.en;
                    const formatActive = this.filters.live || this.filters.online;

                    const languageMatch =
                        !languageActive ||
                        (this.filters.de && workshop.language === "de") ||
                        (this.filters.en && workshop.language === "en");

                    const formatMatch =
                        !formatActive ||
                        (this.filters.live && workshop.format === "live") ||
                        (this.filters.online && workshop.format === "online");

                    return languageMatch && formatMatch;
                });
            }
        },

        template: `
            <section class="page-view">
                <a class="back-link" href="#/">
                    {{ texts.backHome }}
                </a>

                <div class="page-hero" :style="heroStyle">
                    <div class="page-hero-content">
                        <div class="page-kicker">
                            {{ texts.presented }}
                        </div>

                        <h1>{{ page.name }}</h1>

                        <p>{{ page.description }}</p>
                    </div>
                </div>

                <article class="page-content">
                    <h2 style="margin-bottom: 2rem">
                        {{ page.pageTitle1 }}<br>
                        {{ page.pageTitle2 || "" }}
                    </h2>

                    <component
                        :is="textComponent"
                        :filters="filters"
                        :filtered-workshops="filteredWorkshops"
                    ></component>
                </article>
            </section>
        `
    };

    window.ToernRoutes.push({
        path: "/akademie",
        component: AkademiePage,
        card: {
            de: content.de,
            en: content.en
        }
    });
})();