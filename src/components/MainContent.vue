<template>
    <main class="main-content">
        <section class="section" id="introduction-section">
            <div class="card card_introduction">
                <h1 class="card__title">Illustrator.css</h1>
                <p>
                    Illustrator.css is a small CSS and HTML framework based on the 
                    Adobe Illustrator user interface.
                </p>
                <h2 class="mt-3">Instalation</h2>
                <p class="card__description mt-2"><strong>Via NPM</strong></p>
                <pre class="mt-1"><code>npm install illustrator.css</code></pre>
                <p class="card__description mt-2"><strong>Via GitHub</strong></p>
                <p class="card__description mt-2"> 
                    You can also download directly from the
                    <a class="anchor-link" target="_blank" href="https://github.com/Emilianoac/illustrator.css">Github repository</a>
                </p>
            </div>
        </section>  
        <ComponentSection v-for="section in sectionData" 
            :id="section.id" 
            :key="section.id"
            :title="section.title"
            :components="section.components"> 
        </ComponentSection>   
        <section class="section">
            <div class="card card_introduction">
                <p class="card__description">
                    If you detect some bug feel free to report this on the 
                    <a class="anchor-link" target="blank" href="https://github.com/Emilianoac/illustrator.css">GitHub</a> page :) <br>
                    Finally, I would like to thank you to projects like
                    <a class="anchor-link" target="blank" href="https://nostalgic-css.github.io/NES.css/">ness.css</a> 
                    and
                    <a class="anchor-link" target="blank" href="https://jdan.github.io/98.css/">98.css</a> 
                    for inspiring me to do this.
                </p>

                <p class="card__description mt-2"> 
                    <a class="anchor-link" target="_blank" href="https://github.com/Emilianoac/illustrator.css/blob/master/LICENSE">MIT License</a>
                </p>
            </div>
        </section>       
    </main>
</template>
 
<script>
    import ComponentSection from './ComponentSection.vue'
    import dataComponents from '../data/componentsList.js'

    export default {
        name: "MainContent",
        components: {ComponentSection},
        data() {
            return {sectionData: dataComponents}
        }
    }
</script>

<style lang="scss">

    .main-content {
        grid-column: 2/4;
        max-width: 100%;
        padding: 2.5em;
        padding-top: 5em;
        padding-bottom: 140px;

        .card_introduction {
            
            h1 {  
                font-size: 2.1em;
                margin-bottom: 0.4em;
            }

            .card__description {
                border-left: 0;
                padding-left: 0;
            }
        }
    }

    @media (max-width:575px) {

        .main-content {
            padding: 1em;
            padding-top: 3em;
        }
    }
</style>