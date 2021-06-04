const base_elem = document.getElementById('product_features');

var client = ShopifyBuy.buildClient({
    domain: "webprism.myshopify.com",
    storefrontAccessToken: 'ef68cc186fb5d8db38a709863556a586'
});

const getProduct = (id) => {
    client.product.fetch(id).then((product) => {
        // Do something with the product
            console.log(product)
        }).catch(error => {
            console.log(error)
        });
}

const createWrapper = (collection) => {
    let elem = document.createElement("div");
    elem.id = collection.id.toString();
    elem.classList.add("collection_wrapper");

    let collection_title = document.createElement("h1");
    collection_title.innerHTML = collection.title;

    elem.appendChild(collection_title);

    return elem;
}

const createProduct = (product) => {
    let elem = document.createElement("div");
    elem.id = product.id.toString();

    let product_img = document.createElement('img');
    product_img.src = product.images[0].src;

    elem.appendChild(product_img);

    let product_title = document.createElement("p");
    product_title.innerHTML = product.title;

    elem.appendChild(product_title);

    return elem;

}

client.collection.fetchAllWithProducts().then((collections) => {
    console.log(collections);

    collections.forEach((c) => {
        let new_wrapper = createWrapper(c);
        base_elem.appendChild(new_wrapper);

        let products = c.products;

        products.forEach((p) => {
            let new_product_elem = createProduct(p);

            new_wrapper.appendChild(new_product_elem);
        })
    })


});

