
(function () {
    const content = {
    "de": {
        "name": "Festival",
        "route": "/festival",
        "image": "png/festivals.jpg",
        "description": "Internationale Improvisationskunst erleben.",
        "pageTitle1": "Festival",
        "pageText": "Hier entsteht die zentrale Festival-Seite mit Programm, Künstlerinnen und Künstlern, Spielorten und Tickets.",
        "highlights": [
            {
                "title": "Programm",
                "text": "Alle Shows, Formate und Festivalabende an einem Ort."
            },
            {
                "title": "Künstler:innen",
                "text": "Internationale Gäste und lokale Ensembles im Überblick."
            },
            {
                "title": "Tickets",
                "text": "Informationen zu Preisen, Buchung und Festivalpässen."
            }
        ]
    },
    "en": {
        "name": "Festival",
        "route": "/festival",
        "image": "png/festivals.jpg",
        "description": "Experience international improvisational theatre.",
        "pageTitle1": "Festival",
        "pageText": "This page will contain programme details, artists, venues and tickets.",
        "highlights": [
            {
                "title": "Programme",
                "text": "All shows, formats and festival nights in one place."
            },
            {
                "title": "Artists",
                "text": "International guests and local ensembles."
            },
            {
                "title": "Tickets",
                "text": "Information about prices, booking and festival passes."
            }
        ]
    }
};

    const FestivalPage = {
        props: ["language", "texts"],
        computed: {
            page() {
                return content[this.language];
            },
            heroStyle() {
                return { backgroundImage: "url('" + this.page.image + "')" };
            }
        },
        template: `
            <section class="page-view">
                <a class="back-link" href="#/">{{ texts.backHome }}</a>

                <div class="page-hero" :style="heroStyle">
                    <div class="page-hero-content">
                        <div class="page-kicker">{{ texts.presented }}</div>
                        <h1>{{ page.name }}</h1>
                        <p>{{ page.description }}</p>
                    </div>
                </div>

                <article class="page-content">
                    <div v-if="page.articleImage" style="text-align:center; margin-bottom: 5rem">
                        <img class="page-hero1" :src="page.articleImage" :alt="page.name">
                    </div>

                    <h2 style="margin-bottom: 2rem">
                        {{ page.pageTitle1 }}<br>
                        {{ page.pageTitle2 || "" }}
                    </h2>

                    <div class="long-text" v-html="page.pageText"></div>

                    <div v-if="page.highlights && page.highlights.length" class="page-grid">
                        <div v-for="item in page.highlights" :key="item.title" class="page-info-card">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.text }}</p>
                        </div>
                    </div>
                </article>
            </section>
        `
    };

    window.ToernRoutes.push({
        path: "/festival",
        component: FestivalPage,
        card: {
            de: { name: content.de.name, route: content.de.route, image: content.de.image, description: content.de.description },
            en: { name: content.en.name, route: content.en.route, image: content.en.image, description: content.en.description }
        }
    });
})();
