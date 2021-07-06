const dataComponents = [
    {
        id: 'colors-section',
        title: "Colors",
        components : [
            {
                id: 'colors-scheme',
                title : "Colors Themes ",
                preview : `
                <div class="colors-info">
                    <div class="div">
                        <h3> Very low brightness Theme</h3>
                        <div class="theme-color very-low-brightness-theme-expample">
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                        </div>
                    </div>
                    <div class="div">
                        <h3> Low brightness Theme </h3>
                        <div class="theme-color low-brightness-theme-expample">
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                        </div>
                    </div>
                    <div class="div">
                        <h3> High brightness Theme </h3>
                        <div class="theme-color high-brightness-theme-example">
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                        </div>
                    </div>
                    <div class="div">
                        <h3> Very high brightness Theme </h3>
                        <div class="theme-color very-high-brightness-theme-example">
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                            <span class="color"></span>
                        </div>
                    </div>
                </div>
                `,
                description : `This framework has four color themes, 
                the default theme is the very low brightness theme. You can change this by adding
                the corresponding class in the body tag.`,
                codeType: "",
                code: 
`// _variables.scss

 :root {
    --bg-color-dark:          #262626;
    --bg-color-medium :       #323232;
    --bg-color-light:         #383838;
    --border-color-dark:      #1d1d1d;
    --border-color-light:     #525252;
    --text-color:             #e9e9e9;
    --checkbox-color:         #999999;
}

body.low-brightness-theme  {
    --bg-color-dark:         #424242;
    --bg-color-medium:       #535353;
    --bg-color-light:        #606060;
    --border-color-dark:     #383838;
    --border-color-light:    #747474;
    --text-color:            #e9e9e9;
    --checkbox-color:        #999999;
}

body.high-brightness-theme  {
    --bg-color-dark:        #a3a3a3;
    --bg-color-medium :     #cccbcb;
    --bg-color-light:       #7b7b7b;
    --border-color-dark:    #8f8f8f;
    --border-color-light:   #928e8e;
    --text-color:           #313131;
    --checkbox-color:       #6d6d6d;
}

body.very-high-brightness-theme {
    --bg-color-dark:        #dbdbdb;
    --bg-color-medium :     #f0f0f0;
    --bg-color-light:       #a6a6a6;
    --border-color-dark:    #c2c2c2;
    --border-color-light:   #a8a8a8;
    --text-color:           #313131;
    --checkbox-color:       #6d6d6d;
}`,
            },
        ]
    },
    {
        id: 'buttons-section',
        title: "Buttons",
        components : [
            {
                id: 'button-primary',
                title : "Primary Button",
                preview : 
                `<button class="button button_primary">Document setup</button>
                 <button class="button button_primary">Preferences</button>
                `,
                description : `Primary button is used in the options bar
                for document setting matters.`,
                code: 
`<button class="button button_primary">Document setup</button>
<button class="button button_primary">Preferences</button>`,
            },
            {
                id: 'rounded-button',
                title : "Rounded Button",
                preview : 
                `<button class="button button_rounded">OK</button>
                 <button class="button button_rounded">Cancel</button>
                `,
                description : `Rounded button is used for save, cancel or restore changes tools.`,
                code: 
`<button class="button button_rounded">OK</button>
<button class="button button_rounded">Cancel</button>`,
            },
            {
                id: 'icon-button',
                title : "Icon Button",
                preview :
                `<button class="button button_icon" 
                    title="Watch Repository in GitHub">
                    <i class='bx bxs-pointer' ></i>
                </button>
                <button class="button button_icon" 
                    title="Watch Repository in GitHub">
                    <i class='bx bx-pointer' ></i>
                </button>
                <button class="button button_icon" 
                    title="Watch Repository in GitHub">
                    <i class='bx bxs-ruler' ></i>
                </button>
                <button class="button button_icon" 
                    title="Watch Repository in GitHub">
                    <i class='bx bxs-paint'></i>
                </button>
                <button class="button button_icon" 
                    title="Watch Repository in GitHub">
                    <i class="fas fa-palette"></i>
                </button>`,
                description :`The icon button is used to display the creation and editing tools. This framework does not provide 
                the icons, we recommend use libraries like boxicons and fontawesome.`,
                code: 
`<!--- With boxicons --->
<button class="button button_icon">
    <i class="bx bxs-pointer"></i>
</button>

<!--- With Fontawesome --->
<button class="button button_icon">
    <i class="fas fa-palette"></i>
</button>`,
            },
            {
                id: 'disabled-button',
                title : "Disabled Button",
                preview : 
                `<button class="button button_primary" disabled >Aplication item</button>
                <button class="button button_rounded" disabled >Cancel</button>
                <button class="button button_icon" disabled ><i class="fas fa-palette"></i></button>
                `,
                description : "Disabled state for buttons.",
                code: 
`<button class="button button_primary" disabled >Aplication item</button>
<button class="button button_rounded" disabled >Cancel</button>
<button class="button button_icon" disabled ><i class="fas fa-palette"></i></button>`,
            },
        ]
    },
    {
        id: 'inputs-section',
        title: "Inputs",
        components: [
            {
                id: 'input-text',
                title : "Input Text",
                preview : 
                `<label class="input-label" for="Inputexpample">Element:</label> 
                <input id="Inputexpample" class="input-text" type="text" placeholder="100%"/>
                `,
                description : "",
                codeType: "language-html",
                code: 
`<label class="input-label" for="Inputexpample">Element:</label> 
<input id="Inputexpample" class="input-text" type="text" placeholder="100%"/>`,
            },
            {
                id: 'input-range',
                title : "Input Range",
                preview : `<input class="input-range" type="range">`,
                description : "",
                codeType: "language-html",
                code: `<input class="input-range" type="range"/>`,
            },
            {
                id: 'input-checbox',
                title : "Input Checkbox",
                preview : 
                `<div class="checkbox-label">
                    <input class="input-checkbox" type="checkbox" id="checkbox"/>
                    <label class="label-checkbox" for="checkbox"> Option </label>
                </div>
                <div class="checkbox-label">
                    <input class="input-checkbox" type="checkbox" id="disabled" disabled/>
                    <label class="label-checkbox " for="disabled"> Option disabled </label>
                </div>
                <div class="checkbox-label">
                    <input class="input-checkbox" type="checkbox" id="disabledChecked" disabled checked/>
                    <label class="label-checkbox" for="disabledChecked"> Option disabled checked</label>
                </div>
                `,
                description : "",
                codeType: "language-html",
                code: 
`<div class="checkbox-label">
    <input class="input-checkbox" type="checkbox" id="checkbox"/>
    <label class="label-checkbox " for="checkbox"> Option </label>
</div>

<div class="checkbox-label">
    <input class="input-checkbox" type="checkbox" id="disabled" disabled/>
    <label class="label-checkbox" for="disabled"> Option disabled </label>
</div>

<div class="checkbox-label">
    <input class="input-checkbox" type="checkbox" id="disabledChecked" disabled checked/>
    <label class="label-checkbox" for="disabledChecked"> Option disabled checked</label>
</div>`,
            },
        ]
    },
    {
        id: 'select-section',
        title: "Select",
        components: [
            {
                id: 'select',
                title : "Select",
                preview : `
                <select class="select">
                    <option value="one"> One </option>
                    <option value="two"> Two </option>
                </select>
                `,
                description : "",
                codeType: "language-html",
                code: 
`<select class="select">
    <option value="one"> One </option>
    <option value="two"> Two </option>
</select>`,
            },
        ]
    },
    {
        id: 'tabs-section',
        title: "Tabs",
        components: [
            {
                id: 'tabs',
                title : "Tabs",
                preview : 
                `<div class="tabs-wrap">
                    <div class="tabs-header"> 
                        <button class="button">&#171;</button>
                        <button class="button">x</button> 
                    </div>
                    <input class="input-hidden" id="tab-1" type="radio" name="tabs" aria-hidden="true" checked=""/>
                    <input class="input-hidden" id="tab-2" type="radio" name="tabs" aria-hidden="true"/>    
                    <input class="input-hidden" id="tab-3" type="radio" name="tabs" aria-hidden="true"/>   
                    <ul class="tabs">
                        <li class="tab"><label for="tab-1">Element 1</label></li>
                        <li class="tab"><label for="tab-2">Element 2</label></li>
                        <li class="tab"><label for="tab-3">Element 3</label></li>
                    </ul>               
                    <article class="tab-body">
                        <h4 class="tab-title">Element title 1</h4>
                        <p class="tab-text">
                            Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto. 
                            Estaba echado de espaldas sobre un duro caparazón y, al alzar la cabeza, vio su vientre convexo y oscuro, 
                            surcado por curvadas callosidades, sobre el que casi no se aguantaba la colcha, que estaba a punto de 
                            escurrirse hasta el suelo. Numerosas patas, penosamente delgadas en comparación con 
                            el grosor normal de sus piernas, se agitaban sin concierto.
                        </p>
                    </article>             
                    <article class="tab-body">
                        <h4 class="tab-title">Element title 2</h4>
                        <p class="tab-text">
                            No estaba soñando. Su habitación, una habitación normal, aunque muy pequeña, 
                            tenía el aspecto habitual. Sobre la mesa había desparramado un muestrario de paños - 
                            Samsa era viajante 
                            de comercio-, y de la pared colgaba una estampa recientemente recortada de una revista 
                            ilustrada y puesta en un marco dorado.
                        </p>
                    </article>
                    <article class="tab-body">
                        <h4 class="tab-title">Element title 3</h4>
                        <p class="tab-text">
                            Muy lejos, más allá de las montañas de palabras, alejados 
                            de los países de las vocales y las consonantes, viven los textos 
                            simulados. Viven aislados en casas de letras, en la costa de la semántica, 
                            un gran océano de lenguas. Un riachuelo llamado Pons fluye por su pueblo y 
                            los abastece con las normas necesarias.
                        </p>
                    </article>
                </div>`,
                description :`This is a tabs section built 100% with css,
                this raises some limitations, by default the maximum number of tabs is 3, you can change
                this on the tab.sccs file.`,
                code: 
`<div class="tabs-wrap">
    <div class="tabs-header"> 
        <button class="button">&#171;</button>
        <button class="button">x</button> 
    </div>
    <input class="input-hidden" id="tab-1" type="radio" name="tabs" aria-hidden="true" checked=""/>
    <input class="input-hidden" id="tab-2" type="radio" name="tabs" aria-hidden="true"/>    
    <input class="input-hidden" id="tab-3" type="radio" name="tabs" aria-hidden="true"/>   
    <ul class="tabs">
        <li class="tab"><label for="tab-1">Element 1</label></li>
        <li class="tab"><label for="tab-2">Element 2</label></li>
        <li class="tab"><label for="tab-3">Element 3</label></li>
    </ul>               
    <article class="tab-body">
        <h4 class="tab-title">Element title 1</h4>
        <p class="tab-text">
            Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido 
            en un monstruoso insecto. Estaba echado de espaldas sobre un duro caparazónl
        </p>
    </article>             
    <article class="tab-body">
        <h4 class="tab-title">Element title 2</h4>
        <p class="tab-text">
            No estaba soñando. Su habitación, una habitación normal, aunque muy pequeña, 
            tenía el aspecto habitual. Sobre la mesa había desparramado un muestrario de paños.
        </p>
    </article>
    <article class="tab-body">
        <h4 class="tab-title">Element title 3</h4>
        <p class="tab-text">
            Muy lejos, más allá de las montañas de palabras, alejados 
            de los países de las vocales y las consonantes, viven los textos 
            simulados. Viven aislados en casas de letras, en la costa de la semántica, 
            un gran océano de lenguas. Un riachuelo llamado Pons fluye por su pueblo y 
            los abastece con las normas necesarias.
        </p>
    </article>
</div>`,
            },
        ]
    }
]

export default dataComponents