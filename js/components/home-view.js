
window.HomeView = {
    props: ["language", "texts", "routes"],
    computed: {
      cards() {
    return this.routes
        .map(route => route.card?.[this.language])
        .filter(card => card && !card.hidden);
}
    },
    methods: {
        backgroundStyle(image) {
            return { backgroundImage: "url('" + image + "')" };
        }
    },
    template: `
        <section class="home-view">
            <section class="hero">
                <div class="presented">{{ texts.presented }}</div>
                <h1>{{ texts.headline }}</h1>
                <div class="subtitle">{{ texts.subtitle }}</div>
            </section>

            <section class="cards">
                <a
                    v-for="link in cards"
                    :key="link.route"
                    :href="'#' + link.route"
                    class="card"
                    :style="backgroundStyle(link.image)"
                >
                    <div class="card-content">
                        <div class="card-title">{{ link.name }}</div>
                        <div class="card-description">{{ link.description }}</div>
                    </div>
                </a>
            </section>
        </section>
    `
};
