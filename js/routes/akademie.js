
(function () {
    const content = {
    "de": {
        "name": "Akademie",
        "route": "/akademie",
        "image": "png/Akademie.jpg",
        "description": "Workshops und Weiterbildung.",
        "pageTitle1": "Akademie",
        "pageText": "Die Akademie bündelt Workshops, Trainings und Weiterbildungsangebote.",
        "highlights": [
            {
                "title": "Workshops",
                "text": "Kurse für Einsteiger:innen und Fortgeschrittene."
            },
            {
                "title": "Training",
                "text": "Kontinuierliche Entwicklung für Bühne und Gruppe."
            },
            {
                "title": "Dozent:innen",
                "text": "Erfahrene Trainer:innen aus der Impro-Szene."
            }
        ]
    },
    "en": {
        "name": "Academy",
        "route": "/akademie",
        "image": "png/Akademie.jpg",
        "description": "Workshops and professional development.",
        "pageTitle1": "Academy",
        "pageText": "The academy brings together workshops, trainings and development formats.",
        "highlights": [
            {
                "title": "Workshops",
                "text": "Courses for beginners and advanced participants."
            },
            {
                "title": "Training",
                "text": "Continuous development for stage and ensemble work."
            },
            {
                "title": "Teachers",
                "text": "Experienced trainers from the improv scene."
            }
        ]
    }
};

    const AkademiePage = {
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
        path: "/akademie",
        component: AkademiePage,
        card: {
            de: { name: content.de.name, route: content.de.route, image: content.de.image, description: content.de.description },
            en: { name: content.en.name, route: content.en.route, image: content.en.image, description: content.en.description }
        }
    });
})();
