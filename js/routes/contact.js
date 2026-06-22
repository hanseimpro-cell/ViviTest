(function () {
    const content = {
        de: {
            name: "Kontakt",
            route: "/kontakt",
            image: "png/Kontakt.jpg",
            description: "Fragen, Anregungen oder Interesse an einer Zusammenarbeit?",
            pageTitle1: "Kontakt",
            pageTitle2: ""
        },
        en: {
            name: "Contact",
            route: "/kontakt",
            image: "png/Kontakt.jpg",
            description: "Questions, ideas or interested in working with us?",
            pageTitle1: "Contact",
            pageTitle2: ""
        }
    };

    const ContactTextDe = {
        template: `
            <div class="long-text">
                <div class="elementor-element elementor-element-cd7283c animated-fast elementor-widget elementor-widget-text-editor animated fadeIn">
                    <div class="elementor-widget-container">

                        <p>
                            Haben Sie Fragen zu Workshops, Aufführungen,
                            Festivalangeboten oder einer möglichen Zusammenarbeit?
                        </p>

                        <p>
                            Wir freuen uns über Ihre Nachricht und helfen gerne weiter.
                        </p>

                        <p>
                            <strong>E-Mail:</strong><br>
                            <a href="mailto:info@improfestival-hamburg.de">
                                info@improfestival-hamburg.de
                            </a>
                        </p>
<p>
    <strong>Anschrift:</strong><br>
    TÖRN e.V.<br>
    Musterstraße 123<br>
    22765 Hamburg<br>
    Deutschland
</p>
                        <p>
                            <strong>Website:</strong><br>
                            <a href="https://improfestival-hamburg.de" target="_blank">
                                improfestival-hamburg.de
                            </a>
                        </p>

                        <p>
                            <strong>Standort:</strong><br>
                            Hamburg, Deutschland
                        </p>

                        <p>
                            <strong>Social Media:</strong><br>
                            @improfestivalhamburg
                        </p>

                    </div>
                </div>
            </div>
        `
    };

    const ContactTextEn = {
        template: `
            <div class="long-text">
                <div class="elementor-element elementor-element-cd7283c animated-fast elementor-widget elementor-widget-text-editor animated fadeIn">
                    <div class="elementor-widget-container">

                        <p>
                            Do you have questions about workshops,
                            performances, festival activities or potential collaborations?
                        </p>

                        <p>
                            We would be delighted to hear from you and are happy to help.
                        </p>

                        <p>
                            <strong>Email:</strong><br>
                            <a href="mailto:info@improfestival-hamburg.de">
                                info@improfestival-hamburg.de
                            </a>
                        </p>

                        <p>
                            <strong>Website:</strong><br>
                            <a href="https://improfestival-hamburg.de" target="_blank">
                                improfestival-hamburg.de
                            </a>
                        </p>

                        <p>
                            <strong>Location:</strong><br>
                            Hamburg, Germany
                        </p>

                        <p>
                            <strong>Social Media:</strong><br>
                            @improfestivalhamburg
                        </p>

                    </div>
                </div>
            </div>
        `
    };

    const ContactPage = {
        props: ["language", "texts"],

        components: {
            ContactTextDe,
            ContactTextEn
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
                    ? "ContactTextDe"
                    : "ContactTextEn";
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
                        {{ page.pageTitle1 }}
                    </h2>

                    <component :is="textComponent"></component>

                </article>
            </section>
        `
    };

    window.ToernRoutes.push({

        path: "/Kontakt",
        component: ContactPage,
        card: {
            de: {
                name: content.de.name,
                route: content.de.route,
                image: content.de.image,
                description: content.de.description,
				hidden: true
            },
            en: {
                name: content.en.name,
                route: content.en.route,
                image: content.en.image,
                description: content.en.description,
			hidden:true
            },

        }
    });
})();
