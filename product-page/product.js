let windowLoc = window.location.pathname.split('/');
// var buyButtonId = windowLoc[windowLoc.length - 1];

var buyButtonId = 6576167157827;

var selectedOptions = {
    size: null,
    frame: null,
    glass: null
};

const handleNoOptions = () => {
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

const disableFrameGlass = () => {
    document.querySelectorAll(".Frame.Type").forEach((n) => {
        n.disabled = true;
    });

    document.querySelectorAll(".Glass.Choice").forEach((n) => {
        n.disabled = true;
    })
}

const handleVariantSelection = (e, product) => {

};

ui.createComponent('product', {
    id: buyButtonId,
    node: document.getElementById('my-product'),
    toggles: [{node: document.querySelector('.header-inner')}],
    options: {
        product: {
            id: buyButtonId,
            iframe: false,
            width: '2048px',
            templates: {
                customLayout: `<div class="section" style="padding-bottom: 80px">
                                    <div class="div-block">
                                        {{#data.currentImage.src}}
                                            <div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper">
                                                <img alt="{{data.currentImage.altText}}" data-element="product.img" class="{{data.classes.product.img}}" src="{{data.currentImage.src}}" />
                                            </div>
                                        {{/data.currentImage.src}}
                                        <div class="detail_container" id="detail_container">
                                            <div>
                                                <h1 class="{{data.classes.product.title}}" data-element="product.title">{{data.title}}</h1>
                                            </div>
                                            <div>
                                                {{#data.hasVariants}}
                                                    {{#data.options}}
                                                    <form id="{{name}}" data-element="product.options">
                                                        <p>{{name}}</p>
                                                        <fieldset class="{{name}}">
                                                        {{#values}}
                                                        <label for="{{name}}{{value}}" class={{data.classes.product.radioLabel}} data-value="{{value}}">
                                                            <input id="{{name}}{{value}}" type="radio" class="{{data.classes.product.radio}}" radio-button-field" name="{{name}}" value="{{value}}" data-value="{{value}}">
                                                            <div class="check"></div>
                                                            {{value}}
                                                        </label>
                                                        {{/values}}
                                                        </fieldset>
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

    // selectedOptions = product.selectedOptions;

    const variantNames = Object.keys(selectedOptions);
    const variantOptions = Object.values(selectedOptions);

    console.log(product);

    if(product.hasVariants === true){
        disableFrameGlass();
    } else {
        handleNoOptions();
    }
    
    var buttonArray = document.querySelectorAll('fieldset');

    buttonArray.forEach((elem) => {
        elem.addEventListener('change', (e) => {

            console.log("fired");
            handleVariantSelection(e.target.value, product);
        })
    });
}).catch((err) => {
    console.log(err);
});