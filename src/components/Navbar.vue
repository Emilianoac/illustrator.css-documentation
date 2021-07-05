<template>
    <nav class="navbar">
        <div class="navbar__row">
            <div class="navbar__logotipe">
                <span aria-label="Site logotipe" >Illustrator.css</span>
            </div>
            <div class="navbar__row">
                <div class="navbar__links">
                    <a  class="button button_icon" 
                        title="Watch Repository in GitHub"
                        target="blank"
                        href="https://github.com/Emilianoac/illustrator.css">
                        <i class="bx bxl-github"></i>
                    </a>
                    <a  class="button button_icon"
                        title="Install with NPM"
                        target="blank"
                        href="https://www.npmjs.com/package/illustrator.css">
                        <i class="bx bxs-download"></i>
                    </a>
                </div>
                <div class="navbar__switch" 
                    aria-label="switch color themes">
                    <span>Brightness:</span>
                    <input
                        id="very-low-brightness-theme"
                        type="radio"  
                        name="theme" 
                        checked 
                        @change="cambiarEsquemaColor"
                    />
                    <input 
                        id="low-brightness-theme"
                        type="radio"  
                        name="theme" 
                        @change="cambiarEsquemaColor"
                    />
                    <input 
                        id="high-brightness-theme" 
                        type="radio" 
                        name="theme"
                        @change="cambiarEsquemaColor" 
                    />
                    <input 
                        id="very-high-brightness-theme" 
                        type="radio" 
                        name="theme"
                        @change="cambiarEsquemaColor" 
                    />
                    <label class="selector-tema dark-theme-selector"  for="very-low-brightness-theme" title="Very low brightness theme"></label>
                    <label class="selector-tema dark-theme-selector"  for="low-brightness-theme" title="Low brightness theme"></label>
                    <label class="selector-tema light-theme-selector" for="high-brightness-theme"  title="High brightness theme"></label>
                    <label class="selector-tema light-theme-selector" for="very-high-brightness-theme"  title="Very high brightness theme"></label>
                </div>
            </div>
        </div>
        <div class="navbar__bottom"></div>
    </nav> 
</template>

<script>
    export default {
        name: "Navbar",
        methods: {
            cambiarEsquemaColor(e) {
                const temas = ["very-low-brightness-theme", "low-brightness-theme", "high-brightness-theme", "very-high-brightness-theme"]
                const $body = document.querySelector("body")
                for (const tema of temas) {
                   e.target.id == tema ? $body.classList.add(tema) : $body.classList.remove(tema) 
                }
            }
        }
    }
</script>

<style lang="scss">

    .navbar {
        position: fixed;
        width: 100%;
        grid-row: 1;
        grid-column: 1/3;
        border-left: 0;
        border-right: 0;
        border-top: 0;
        z-index: 1;
        background-color: var(--bg-color-medium);

        .navbar__logotipe {

            span {
                position: relative;
                margin: 0;
                font-weight: bold;
                padding-left: 20px;
                cursor: pointer;
        
                &::before {
                    content: '';
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    top: 50%;
                    left: 0;
                    transform: translate(0, -50%);
                    background-color: rgb(255, 102, 0);
                    border-radius: 50%;
                }
            }
        }

        .navbar__row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.3em 0.8em;
        }
        
        .navbar__links {
            display: flex;
            gap: 6px;
            margin-right: 10px;
        }

        .navbar__switch {
            display: flex;
            align-items: center;

            input {
                appearance: none;
                opacity: 0;
                height: 0;
                width: 0;
                border: 0;
                outline: 0;
                padding: 0;
                display: flex;
            }

            span {
                display: block;
                margin-right: 9px;
                font-size: 0.9em;
            }

            .selector-tema {
                width: 20px;
                height: 20px;
                cursor: pointer;
                border: 1px solid var(--text-color);
                margin-right: 8px;

                &:last-of-type {
                    margin-right: 0;
                }

                &:active, 
                &:focus-within {
                    box-shadow: 0px 0px 0px 1px var(--border-color-dark), 0px 0px 0px 2px dodgerblue; 
                }

                &:nth-of-type(1) {
                    background-color: #252525;
                }

                &:nth-of-type(2) {
                    background-color: #383838;
                }

                &:nth-of-type(3) {
                    background-color: #b4b4b4;
                }

                &:nth-of-type(4) {
                    background-color: #e2e1e1;
                }
            }

            [type="radio"]:nth-of-type(1):checked ~ label:nth-of-type(1),
            [type="radio"]:nth-of-type(2):checked ~ label:nth-of-type(2),
            [type="radio"]:nth-of-type(3):checked ~ label:nth-of-type(3),
            [type="radio"]:nth-of-type(4):checked ~ label:nth-of-type(4) {
                box-shadow: 0px 0px 0px 1px var(--border-color-dark), 0px 0px 0px 2px dodgerblue;       
            }
        }

        .navbar__bottom {
            height: 15px;
            background-color: var(--bg-color-dark);
            border: 1px solid var(--border-color-dark);
            border-right: 0;
            border-left: 0;
        }
    }

    @media (max-width:575px) {

        .navbar {

            .navbar__logotipe {

                span {
                    font-size: 0.80em;
            
                    &::before {
                        width: 14px;
                        height: 14px;
                    }
                }
            }

            .navbar__switch {

                span {
                    display: none;
                }

                .selector-tema {
                    width: 15px;
                    height: 15px;
                }
            }
        }
    }
</style>