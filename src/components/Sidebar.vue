<template>
    <aside className="sidebar">
        <div class="sidebar__header">
            <button class="button">&#171;</button>
            <button class="button">x</button> 
        </div>
        <ul class="sidebar__menu">
            <SidebarLink titleLink="Introduction"/>
            <SidebarLink titleLink="Colors"/>
            <SidebarLink titleLink="Buttons"/>
            <SidebarLink titleLink="Inputs"/>
            <SidebarLink titleLink="Select"/>
            <SidebarLink titleLink="Tabs"/>
        </ul>
    </aside>
</template>

<script>
    import SidebarLink from './SidebarLink.vue'
    export default {
        name: "Sidebar",
        components: {SidebarLink}
    }
</script>

<style lang="scss">

    .sidebar {
        grid-column: 1/2;
        width: 150px;
        height: calc(95vh - 80px);
        position: fixed;
        top: 80px;
        left: 10px;
        padding: 0em;
        border-radius: 6px;
        border: 1px solid var(--border-color-dark);
        background-color: var(--bg-color-medium);
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.192);
        overflow: hidden auto;

        .sidebar__header {
            display: flex;
            justify-content: flex-end;
            background-color: var(--bg-color-dark);
            border-bottom: 1px solid var(--border-color-dark);

            button {
                color: var(--text-color);
                background: 0;
                font-size: 0.85em;
                border: 1px solid transparent;
                padding: 0em 0.5em;
                font-weight: bold;
                cursor: pointer;
                opacity: 0.4;

                &:hover {
                    background: var(--bg-color-medium);
                    border: 1px solid var(--border-color-dark);
                    border-top-color: transparent;
                    border-bottom-color: transparent;
                }
            }
        }

        &:hover {
            border-color: #2a68b94f;
        }

        .sidebar__menu {
            position: relative;
            padding: 0;
            list-style-type: none;

            .sidebar__link {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                font-size: 0.84em;
                text-align: start;
                text-decoration: none;
                padding: 0.7em;
                border: 0;
                color: var(--text-color);

                svg {
                    width: 13px;
                    margin-right: 10px;
                    opacity: 0;
                    fill: var(--text-color);
                }

                &:hover {
                    background-color: var(--bg-color-dark);
                }
            }

            .sidebar__link.active {
                background-color: #2a68b94f;

                svg {
                    opacity: 1;
                }
            }
        }
    }

    @media (max-width:575px) {

        .sidebar {
            display: none;
        }
    }
</style>