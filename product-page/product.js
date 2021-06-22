let windowLoc = window.location.pathname.split('/');
var buyButtonId = windowLoc[windowLoc.length - 1];

// var buyButtonId = 1353893642341;

var selectedOptions = {};

ui.createComponent('product', {
    //test
    id: buyButtonId,
    // node: document.getElementById('my-product'),
    //prod
    node: document.window,
    toggles: [{node: document.querySelector('.header-inner')}],
    options: {
        product: {
            id: buyButtonId,
            iframe: false,
            templates: {
                customLayout: `<div class="section">
                                    <div class="div-block">
                                        {{#data.currentImage.srcLarge}}
                                            <div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper">
                                                <img alt="{{data.currentImage.altText}}" data-element="product.img" class="{{data.classes.product.img}}" src="{{data.currentImage.srcLarge}}" />
                                            </div>
                                        {{/data.currentImage.srcLarge}}
                                        <div class="detail_container" id="detail_container">
                                            <div>
                                                <h1 class="{{data.classes.product.title}}" data-element="product.title">{{data.title}}</h1>
                                            </div>
                                            <div>
                                                {{#data.hasVariants}}
                                                    {{#data.options}}
                                                    <form id={{name}} data-element="product.options">
                                                        <p>{{name}}</p>
                                                        {{#values}}
                                                        <div class="radio-button-field" data-value={{value}}>
                                                            <input id="{{name}}{{value}}" type="radio" class={{data.classes.product.radio}} name={{name}} value="{{value}}" data-value={{value}}><span id="span{{name}}{{value}}" class="fake_radio" data-value={{value}}></span>
                                                            <label for="{{name}}{{value}}" class={{data.classes.product.radioLabel}} data-value={{value}}>{{value}}</label>
                                                        </div>
                                                        {{/values}}
                                                    </form>
                                                    {{/data.options}}
                                                {{/data.hasVariants}}
                                            </div>
                                        </div>
                                    </div>
                                </div>`,
                footer: `<div class="product_footer">
                        <div id="w-node-_164e7708-68ac-ca47-0b9a-f82be4cdf052-62c7c7ee" class="div-block-6">
                            <div class="text-block">Order now (framed) deliveries</div><div class="text-block">typically ship 4 - 6 weeks</div>
                        </div>
                        <div id="w-node-_86f9db59-f15b-8f94-8e84-8057117d35fd-62c7c7ee">
                            <div class="text-block-2">
                                <div class="{{data.classes.product.prices}}" data-element="product.prices">
                                    {{#data.selectedVariant}}
                                        <span class="visuallyhidden">{{data.priceAccessibilityLabel}}&nbsp;</span>
                                        <span class="{{data.classes.product.price}} {{data.priceClass}}" data-element="product.price">{{data.formattedPrice}}</span>
                                        {{#data.hasCompareAtPrice}}
                                            <span class="visuallyhidden">{{data.compareAtPriceAccessibilityLabel}}&nbsp;</span>
                                            <span class="{{data.classes.product.compareAt}}" data-element="product.compareAt">{{data.formattedCompareAtPrice}}</span>
                                        {{/data.hasCompareAtPrice}}
                                        {{#data.showUnitPrice}}
                                            <div class="{{data.classes.product.unitPrice}}" data-element="product.unitPrice">
                                                <span class="visuallyhidden">{{data.text.unitPriceAccessibilityLabel}}</span>
                                            {{data.formattedUnitPrice}}<span aria-hidden="true">/</span><span class="visuallyhidden">&nbsp;{{data.text.unitPriceAccessibilitySeparator}}&nbsp;</span>{{data.formattedUnitPriceBaseUnit}}
                                        </div>
                                        {{/data.showUnitPrice}}
                                    {{/data.selectedVariant}}
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_04595991-cd52-392e-a690-cc68d5684f6d-62c7c7ee" class="div-block-5">
                            <a href="#" class="link">Purchase FAQ</a>
                            <a href="#" class="link">Shipping and Handling FAQ</a>
                        </div>
                        <div id="w-node-_9cc68a89-db0a-ef85-4e4f-829a2ea86ea2-62c7c7ee" class="div-block-7">
                            <button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button>
                        </div>
                    </div>`
            },
            contents: {
                customLayout: true,
                footer: true
            },
            order: [
                'customLayout',
                'footer',
            ],
            classes: {
                radio: 'radio-button',
                radioLabel: 'radio-button-label'
            },
        },
        cart: {
            startOpen: false,
            styles: {
                button: {
                    'background-color': '#333'
                },
            }
        },
        toggle: {
            sticky: false,
            iframe: false,
            contents: {
                icon: false,
                title: false,
                count: true
            },
            styles: {
                wrapper: {
                    'background-color': 'transparent'
                },
                toggle: {
                    'background-color': 'transparent'
                }
            }
        }
      }
})
.then(() => {
    var product = ui.components.product.filter(function (p) {
        return p.id === buyButtonId;
    });

    return product[0];
})
.then((product) => {

    selectedOptions = product.selectedOptions;

    const variantNames = Object.keys(selectedOptions);
    const variantOptions = Object.values(selectedOptions);

    if(product.hasVariants === true){
        // const variantNames = Object.keys(selectedOptions);
        // const variantOptions = Object.values(selectedOptions);

        variantNames.forEach((name) => {
            var id = name + selectedOptions[name];
            document.getElementById(id).checked = true;
        });
    } else {

        let detCon = document.getElementById("detail_container");

        variantNames.forEach((o) => {
            let new_node = document.createElement("div");
            new_node.classList.add("no-variant-text");

            new_node.appendChild(document.createTextNode("Available as: "));
            // new_node.appendChild(document.createTextNode(product.selectedOptions[o]));

            let variant_node = document.createElement("div");
            variant_node.classList.add("no-variant-description");
            variant_node.innerHTML = `${product.selectedOptions[o]}`;

            detCon.appendChild(new_node);
            detCon.appendChild(variant_node);
        })


    }
    
    var buttonArray = document.querySelectorAll('.radio-button-field');
    var fakeButtonArray = document.querySelectorAll('.fake_radio');

    buttonArray.forEach((elem) => {
        elem.addEventListener('change', (e) => {
            
            product.updateVariant(e.target.name, e.target.value);

            selectedOptions = product.selectedOptions;

            const variantNames = Object.keys(selectedOptions);
            const variantOptions = Object.values(selectedOptions);
        
            variantNames.forEach((name) => {
                var id = name + selectedOptions[name];
                document.getElementById(id).checked = true;
            });
        })
    });

    fakeButtonArray.forEach((elem) => {
        elem.addEventListener('click', (e) => {

            var intendedId = e.target.id.substring(4);

            var  radioToUpdate = document.getElementById(intendedId);
            
            product.updateVariant(radioToUpdate.name, radioToUpdate.value);

            selectedOptions = product.selectedOptions;

            const variantNames = Object.keys(selectedOptions);
            const variantOptions = Object.values(selectedOptions);
        
            variantNames.forEach((name) => {
                var id = name + selectedOptions[name];
                document.getElementById(id).checked = true;
            });
        })
    });
}).catch((err) => {
    console.log(err);
});