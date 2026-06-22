(function () {
    const content = {
        de: {
            name: "Über uns",
            route: "/ueber-uns",
            image: "png/team.jpg",
            description: "Gemeinsam aktiv. Gemeinsam Verein.",
            eyebrow: "Über uns",
            heroTitle: "Let your body talk!",
            heroText: "Das Thema unseres nächsten Festivals ist „Lass deinen Körper reden!“.",
            introEyebrow: "Törn e.V.",
            introTitle: "Wer wir sind",
            introText: "Das TÖRN-Festival wird von TÖRN e.V. – einem gemeinnützigen Verein – und Steife Brise – Hamburgs stärkstem Improvisationstheater – organisiert. Das Festival-Team besteht aus einer kleinen Gruppe von Menschen, die TÖRN aus Leidenschaft für gute Improvisation auf die Beine stellen.Wir sind stolz darauf, ein großartiges Team von Hauptorganisator*innen und 20 Freiwilligen zu haben, die alles tun, um unseren Gästen eine tolle Zeit zu bereiten und ein unvergessliches Festival zu schaffen.",
            missions: [
                {
                    title: "Unsere Mission",
                    text: "Wir möchten Gemeinschaft schaffen, Engagement fördern und ein Umfeld bieten, in dem sich alle willkommen fühlen."
                },
                {
                    title: "Unser Engagement",
                    text: "Ob Vorstand, Trainerteam oder helfende Hände – jede Person trägt dazu bei, dass unser Verein lebendig bleibt."
                },
                {
                    title: "Unsere Werte",
                    text: "Zusammenhalt, Respekt, Verantwortung und Freude am gemeinsamen Tun stehen bei uns im Mittelpunkt."
                }
            ],
            teamEyebrow: "Team",
            teamTitle: "Leitung & aktive Personen",
            teamText: "Menschen, die unseren Verein mit Herz, Erfahrung und Einsatz gestalten.",
            people: [
                {
                    name: "Viviane Eggers",
                    role: "Vorsitzende",
                    photo: "png/team/Viviane.png",
                    description: "Viviane ist für die künstlerische Leitung der nächsten Ausgabe des TÖRN zuständig und unterstützt die Organisation des Festivals."
                },
                {
                    name: "Frank von Spee",
                    role: "Unser geschäftsführender Direktor",
                    photo: "png/team/frank.png",
                    description: "Frank ist für die Organisation und Durchführung des Festivals verantwortlich."
                },
                {
                    name: "Katja Weissichicht",
                    role: "Unsere Koordinatorin und Admin",
                    photo: "png/team/katja.png",
                    description: "Unsere Koordinatorin und Admin. Katja ist zuständig für die Anmeldungen, Workshop-Orga und unterstützt das Ticketing."
                },
				    {
                    name: "Volker  Weissichicht",
                    role: "Unsere finanzielle Leitung",
                    photo: "png/team/volker.jpeg",
                    description: "Volker ist unser Meister der Zahlen und Finanzen."
                },
            ]
        },

        en: {
            name: "About Us",
            route: "/ueber-uns",
            image: "png/team.jpg",
            description: "Active together. United as an association.",
            eyebrow: "About Us",
            heroTitle: "Active together. United as an association.",
            heroText: "We are a committed association that connects people, supports talents and pursues shared goals with passion.",
            introEyebrow: "Our Association",
            introTitle: "Who we are",
            introText: "Our association is shaped by the people who contribute every day: in organisation, training, events and active association life. On this page, we introduce our leadership team and active members.",
            missions: [
                {
                    title: "Our Mission",
                    text: "We want to create community, encourage commitment and provide an environment where everyone feels welcome."
                },
                {
                    title: "Our Commitment",
                    text: "Whether board members, trainers or helping hands – every person helps keep our association alive."
                },
                {
                    title: "Our Values",
                    text: "Togetherness, respect, responsibility and joy in shared action are at the heart of what we do."
                }
            ],
            teamEyebrow: "Team",
            teamTitle: "Leadership & Active Members",
            teamText: "People who shape our association with heart, experience and dedication.",
            people: [
                {
                    name: "Max Mustermann",
                    role: "Chairperson",
                    photo: "png/team/max.jpg",
                    description: "Responsible for organisation, strategy and representing the association."
                },
                {
                    name: "Anna Beispiel",
                    role: "Treasurer",
                    photo: "png/team/anna.jpg",
                    description: "Takes care of finances, membership fees and association administration."
                },
                {
                    name: "Tom Schneider",
                    role: "Trainer",
                    photo: "png/team/tom.jpg",
                    description: "Supports our active members in training sessions and events."
                }
            ]
        }
    };

    const AboutPage = {
        props: ["language", "texts"],

        computed: {
            page() {
                return content[this.language] || content.de;
            },

            heroStyle() {
                return {
                    backgroundImage: "url('" + this.page.image + "')"
                };
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
                    {{ page.eyebrow }}
                </div>

                <h1>{{ page.heroTitle }}</h1>
                <p>{{ page.heroText }}</p>
            </div>
        </div>

        <article class="page-content">
            <section class="about-intro">
                <span class="page-kicker">
                    {{ page.introEyebrow }}
                </span>

                <h2 style="margin-bottom: 2rem">
                    {{ page.introTitle }}
                </h2>

                <div class="long-text">
                    <p>{{ page.introText }}</p>
                </div>
            </section>

            <div class="page-grid">
                <div
                    v-for="item in page.missions"
                    :key="item.title"
                    class="page-info-card"
                >
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.text }}</p>
                </div>
            </div>

            <section style="margin-top: 5rem">
                <div style="text-align:center; margin-bottom: 3rem">
                    <span class="page-kicker">
                        {{ page.teamEyebrow }}
                    </span>

                    <h2>
                        {{ page.teamTitle }}
                    </h2>

                    <p>
                        {{ page.teamText }}
                    </p>
                </div>

                <div class="page-grid">
                    <div
                        v-for="person in page.people"
                        :key="person.name"
                        class="page-info-card"
                    >
                        <div class="team-image">
                            <img
                                :src="person.photo"
                                :alt="person.name"
                            >
                        </div>

                        <span class="page-kicker">
                            {{ person.role }}
                        </span>

                        <h3>{{ person.name }}</h3>
                        <p>{{ person.description }}</p>
                    </div>
                </div>
            </section>
        </article>
    </section>
        `
    };

    window.ToernRoutes.push({
        path: "/about",
        component: AboutPage,
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