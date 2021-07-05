<template>
    <section class="section" :id="this.id">
        <h2 class="section__title">{{this.title}}</h2>
        <SingleComponent v-for="component in this.components"
            :key="component.id"
            :title="component.title"
            :description="component.description"
            :preview="component.preview"
            :codeType="component.codeType">   
            <template #code>{{component.code}}</template>
        </SingleComponent>
    </section>
</template>

<script>
    import SingleComponent from "./SingleComponent.vue"

    export default {
        name: "ComponentSection",
        props: ["id", "title", "components"],
        components: {SingleComponent},
    }
</script>

<style lang="scss">

    .section {
        padding-top: 60px;

        &:first-of-type {
            padding-top: 30px;
        }

        .section__title {
            font-size: 1.3rem;
            font-weight: bold;
            border-bottom: 1px solid var(--border-color-light);
        }
    }

    @media (max-width:575px) {

        .section {

            h1 {
                font-size: 1.7em;
            }
        }
    }

</style>