(function () {
    const content = {
        de: {
            name: "Törn CUP",
            route: "/toern-cup",
            image: "png/herzVoll.jpg",
            articleImage: "png/Leuchtturm.jpg",
            description: "Das Wettkampfformat für Improvisationstheater.",
            pageTitle1: "TÖRN Cup- ",
            pageTitle2: "der Hamburger Maestro™"
        },
        en: {
            name: "Törn CUP",
            route: "/toern-cup",
            image: "png/turn_cup.png",
            description: "The competition format for improvisational theatre.",
            pageTitle1: "Törn CUP",
            pageTitle2: ""
        }
    };

    const ToernCupTextDe = {
        template: `
            <div class="long-text">
                     <div class="elementor-element elementor-element-cd7283c animated-fast elementor-widget elementor-widget-text-editor animated fadeIn" data-id="cd7283c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="text-editor.default">
                <div class="elementor-widget-container">
                    <p>Ein Wettstreit um das Herz des Publikums – beim TÖRN Cup treten Impro-Darstellende mit den unterschiedlichsten Erfahrungsleveln gegeneinander an, um die bestmögliche Punktebewertung vom Publikum zu erhalten.</p>
                    <p><strong>Das Besondere:</strong> <br>Direkt vor der Show findet von <strong>17-19 Uhr</strong> ein <em>kostenfreier</em> Impro-Workshop statt, zu dem man sich im Vorfeld anmelden kann.</p>
                    <p>Dabei spielt es keine Rolle, wie erfahren man ist: Jede*r ist herzlich willkommen! Da die Teilnehmendenzahl begrenzt ist, bitten wir Euch, sich vorher unter folgender E-Mailadresse &nbsp;anzumelden:</p>
                    <p><span style="color: #ff9900"><em><strong>maestro@improfestival-hamburg.de</strong></em></span></p>
                    <p>WICHTIG: Die Anmeldung für den Workshop ist keine Garantie, am Maestro teilzunehmen bzw. teilnehmen zu dürfen!</p>
                    <p>Einige der Workshop-Teilnehmenden haben die Chance, direkt im Anschluss<br>das Gelernte auf der Bühne zu erproben und beim TÖRN Cup aufzutreten. Dies ist von der Anzahl der noch vorhandenen Spielplätze und der Entscheidung der Regie des Abends abhängig.&nbsp;</p>
                    <p>Der <strong>TÖRN Cup – der Hamburger Maestro™</strong> findet monatlich <i>jedem ersten&nbsp;<strong>Freitag</strong> im Monat </i>statt.</p>
                    <p>Aufgrund von Umbauarbeiten in der Motte sind weitere TÖRN Cups ab Anfang 2026 geplant.</p>
                </div>
            </div>
            </div>
			<section class="donation-section">
    <div class="donation-text">
        <p>Jetzt spenden und den TÖRN Cup unterstützen!</p>
    </div>

    <div class="donation-image">
        <a href="https://www.betterplace.org/de/projects/109528-toern-cup-der-hamburger-maestro?utm_campaign=donate_btn&utm_content=project%23109528&utm_medium=external_banner&utm_source=projects">
            <img
                src="png/donation.png"
                alt="Jetzt spenden"
                width="300"
                height="188">
        </a>
    </div>
</section>
        `
    };

    const ToernCupTextEn = {
        template: `
            <div class="long-text">
            <div class="elementor-element elementor-element-cd7283c animated-fast elementor-widget elementor-widget-text-editor animated fadeIn" data-id="cd7283c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="text-editor.default">
    <div class="elementor-widget-container">
        <p>A competition for the hearts of the audience – at the TÖRN Cup, improvisers with a wide range of experience levels compete against each other to earn the highest possible score from the audience.</p>
        <p><strong>What makes it special:</strong> <br>Immediately before the show, a <em>free</em> improv workshop takes place from <strong>5:00 PM–7:00 PM</strong>, for which participants can register in advance.</p>
        <p>It does not matter how experienced you are: everyone is warmly welcome! As the number of participants is limited, we kindly ask you to register in advance via the following email address:</p>
        <p><span style="color: #ff9900"><em><strong>maestro@improfestival-hamburg.de</strong></em></span></p>
        <p>IMPORTANT: Registration for the workshop does not guarantee participation in, or eligibility to participate in, the Maestro competition!</p>
        <p>Some workshop participants will have the opportunity to put what they have learned into practice on stage immediately afterwards and perform in the TÖRN Cup. This depends on the number of remaining performer slots and the decision of the evening’s director.&nbsp;</p>
        <p>The <strong>TÖRN Cup – Hamburg Maestro™</strong> takes place monthly on the <i>first <strong>Friday</strong> of every month</i>.</p>
        <p>Due to renovation work at Motte, additional TÖRN Cups are planned from early 2026 onwards.</p>
    </div>
</div>
            </div>
        `
    };

    const ToernCupPage = {
        props: ["language", "texts"],
		data(){
			return{
				events:events
				};
			},
        components: {
            ToernCupTextDe,
            ToernCupTextEn
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
                    ? "ToernCupTextDe"
                    : "ToernCupTextEn";
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

                        <h1>
                            {{ page.name }}
                        </h1>

                        <p>
                            {{ page.description }}
                        </p>
                    </div>
                </div>

                <article class="page-content">
                    <div
                        v-if="page.articleImage"
                        style="text-align:center; margin-bottom: 5rem"
                    >
                        <img
                            class="page-hero1"
                            :src="page.articleImage"
                            :alt="page.name"
                        >
                    </div>

                    <h2 style="margin-bottom: 2rem">
                        {{ page.pageTitle1 }}<br>
                        {{ page.pageTitle2 || "" }}
                    </h2>

                    <component :is="textComponent"></component>
					<div
    class="event-card"
    v-for="event in events"
    :key="event.id"
>
    <div class="event-meta">
        <div>📅 {{ event.date }}</div>
        <div>📍 {{ event[language].location }}</div>
        <div>🕗 {{ event.time }}</div>
    </div>

    <div class="event-content">
        <h2>{{ event[language].title }}</h2>

        <p>
            {{ event[language].description }}
        </p>
    </div>

    <div class="event-image">
        <img
            :src="event.image"
            :alt="event[language].title"
        >
    </div>
</div>
                </article>
            </section>
        `
    };
const events = [
    {
        id: 1,
        date: "2026-06-05",
        time: "20:00",

        de: {
            location: "Motte",
            title: "33. TÖRN CUP - DER HAMBURGER MAESTRO™",
            description:
                "Im TÖRN Cup treten sowohl eure Lieblingsspieler*innen aus Hamburg wie auch Impro-Neulinge und Gäste aus ganz Deutschland.",
        },

        en: {
            location: "Motte",
            title: "33rd TÖRN CUP - THE HAMBURG MAESTRO™",
            description:
                "The TÖRN Cup features both your favourite Hamburg performers and improv newcomers and guests from all over Germany.",
        },

        image: "png/mae1.png"
    },
	    {
        id: 2,
        date: "2026-06-05",
        time: "20:00",

        de: {
            location: "Motte",
            title: "34. TÖRN CUP - DER HAMBURGER MAESTRO™",
            description:
                "Im TÖRN Cup treten sowohl eure Lieblingsspieler*innen aus Hamburg wie auch Impro-Neulinge und Gäste aus ganz Deutschland.",
        },

        en: {
            location: "Motte",
            title: "34rd TÖRN CUP - THE HAMBURG MAESTRO™",
            description:
                "The TÖRN Cup features both your favourite Hamburg performers and improv newcomers and guests from all over Germany.",
        },

        image: "png/mae.png"
    }
	
	
];
    window.ToernRoutes.push({
        path: "/toern-cup",
        component: ToernCupPage,
        card: {
            de: {
                name: content.de.name,
                route: content.de.route,
                image: content.de.image,
                description: content.de.description
            },
            en: {
                name: content.en.name,
                route: content.en.route,
                image: content.en.image,
                description: content.en.description
            }
        }
    });
})();