
window.NotFoundView = {
    props: ["texts"],
    template: `
        <section class="page-view">
            <a class="back-link" href="#/">{{ texts.backHome }}</a>
            <article class="page-content">
                <h1>{{ texts.notFoundTitle }}</h1>
                <p>{{ texts.notFoundText }}</p>
            </article>
        </section>
    `
};
