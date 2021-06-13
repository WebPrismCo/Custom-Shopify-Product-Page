// const base_elem = document.getElementById('product_features');

// var client = ShopifyBuy.buildClient({
//     domain: "frankrelle.myshopify.com",
//     storefrontAccessToken: '50c29f9cb69bf6a23e89e19095c2333a'
// });

// const e = (e) => {
//     return document.getElementById(e) 
// };

const getProduct = (id) => {
    client.product.fetch(id).then((product) => {
        // Do something with the product
            console.log(product)
        }).catch(error => {
            console.log(error)
        });
}

const findLowestPrice = (p) => {
    let prices = p.variants.map(v => parseInt(v.price));

    return Math.min(...prices)

}

const createRecentWorkLeft = (product) => {
    //sets large lefthand photo image.
    e("recent-work-left-image").src = product.images[0].src;
    e("recent-work-1").innerHTML = product.title;
    e("recent-work-price-left").innerHTML = `Starting at $${findLowestPrice(product)}`;

    //need collection solution before implementing
    // e("recent-work-collection-left").innerHTML = "";

    e("recent-work-purchase-left").setAttribute("href", `../product-page/index.html?productId=${atob(product.id).substring(22)}`);

}

const createRecentWorkRight = (product) => {
    //sets smaller righthand photo image
    e("recent-work-image-right").src = product.images[0].src;
    e("recent-work-title-right").innerHTML = product.title;
    e("recent-work-price-right").innerHTML = `Starting at $${findLowestPrice(product)}`;

    e("recent-work-purchase-right").setAttribute("href", `../product-page/index.html?productId=${atob(product.id).substring(22)}`);
}

const createRecentWorkThird = (product) => {
    e("recent-work-large-img").src = product.images[0].src;
    e("recent-work-large-title").innerHTML = product.title;
    e("recent-work-large-price").innerHTML = `Starting at $${findLowestPrice(product)}`;

    e("recent-work-large-purchase").setAttribute("href", `../product-page/index.html?productId=${atob(product.id).substring(22)}`);
}

// client.collection.fetchAllWithProducts().then((collections) => {
//     let recentWork = collections.find(c => c.title === "Website Collection: Recent Work");
//     console.log(recentWork.products)
//     createRecentWorkLeft(recentWork.products[0]);
//     createRecentWorkRight(recentWork.products[1]);
//     createRecentWorkThird(recentWork.products[2]);
    
// });

client.product.fetchAll().then((products) => {
    console.log(products)
    createRecentWorkLeft(products[0]);
    createRecentWorkRight(products[1]);
    createRecentWorkThird(products[2]);
});