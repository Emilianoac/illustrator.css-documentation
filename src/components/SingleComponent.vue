<template>
    <article class="card">
        <h3 class="card__title"> {{this.title}}</h3>
        <div class="card__preview" v-html="previewComponente"></div>
        <p class="card__description">{{this.description}}</p>
        <details class="card__code">
            <summary>Show code</summary>
            <pre><code :class="codeType"><slot name="code"> </slot></code></pre>
        </details>
    </article>
</template>

<script>
export default {
    name: "SingleComponent",
    props: ["title", "description","preview", "codeType"],
    data() {
        return {previewComponente: null}
    },
    created() {
        this.previewComponente = this.preview;
    }
}
</script>

<style lang="scss">

    .card {
        background-color: var(--bg-color-dark);
        border: 1px solid var(--border-color-dark);
        color: var(--text-color);
        padding: 1.4em;
        margin-top: 1em;
        border-radius: 10px; 

        .card__title {
            font-size: 0.96em;
            font-weight: bold;
            margin-bottom: 1em;
        }

        .card__description {
            font-size: 0.94em;
            margin-top: 1.4em;
            opacity: 0.85;
            max-width: 700px;
            border-left: 4px solid var(--border-color-light);
            padding-left: 10px;
            line-height: 1.3;
        }

        .card__code {

            summary {
                font-size: 0.95rem;
                margin: 1rem 0;
                text-decoration: underline;
                text-decoration-style: dotted;
                cursor: pointer;
            }
        }
    }

    .colors-info {
        display: grid; 
        grid-template-columns: repeat(4 ,1fr);
        justify-content: space-between;
        column-gap: 30px;

        h3 {
            font-size: 0.87em;
            margin-bottom: 0.5em;
        }

        .theme-color {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 10px;
            border: 1px solid var(--text-color);

            .color {
                height: 30px;
            }
        }

        .very-low-brightness-theme-expample .color {
            &:nth-of-type(1) { background: #1d1d1d; }
            &:nth-of-type(2) { background: #262626; }
            &:nth-of-type(3) { background: #323232; }
            &:nth-of-type(4) { background: #383838; }
            &:nth-of-type(5) { background: #525252; }
            &:nth-of-type(6) { background: #999999; }
            &:nth-of-type(7) { background: #e9e9e9; }
        }

        .low-brightness-theme-expample .color {
            &:nth-of-type(1) { background: #383838; }
            &:nth-of-type(2) { background: #424242; }
            &:nth-of-type(3) { background: #535353; }
            &:nth-of-type(4) { background: #606060; }
            &:nth-of-type(5) { background: #747474; }
            &:nth-of-type(6) { background: #999999; }
            &:nth-of-type(7) { background: #e9e9e9; }
        }

        .high-brightness-theme-example .color {
            &:nth-of-type(1) { background: #313131; }
            &:nth-of-type(2) { background: #6d6d6d; }
            &:nth-of-type(3) { background: #7b7b7b; }
            &:nth-of-type(4) { background: #818181; }
            &:nth-of-type(5) { background: #928e8e; }
            &:nth-of-type(6) { background: #b3b2b2; } 
            &:nth-of-type(7) { background: #cccbcb; }
            
        }

        .very-high-brightness-theme-example .color {
            &:nth-of-type(1) { background: #313131; }
            &:nth-of-type(2) { background: #6d6d6d; }
            &:nth-of-type(3) { background: #b1afaf; }
            &:nth-of-type(4) { background: #a8a8a8; }
            &:nth-of-type(5) { background: #c2c2c2; }
            &:nth-of-type(6) { background: #dbdbdb; }
            &:nth-of-type(7) { background: #f0f0f0; }
        }
    }

    @media (max-width: 1200px) {

        .colors-info {
            display: inline;

            .theme-color {
                margin-bottom:2em;

                .color {
                    height: 25px;
                }
            }
        }
    }
</style>