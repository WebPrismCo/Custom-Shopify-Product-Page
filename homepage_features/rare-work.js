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

const createrareWorkLeft = (product) => {
    //sets large lefthand photo image.
    e("rare-work-left-img").src = product.images[0].src;
    e("rare-work-left-title").innerHTML = product.title;
    e("rare-work-left-price").innerHTML = `Starting at $${findLowestPrice(product)}`;

    //need collection solution before implementing
    // e("rare-work-collection-left").innerHTML = "";

    e("rare-work-left-purchase").setAttribute("href", `../product-page/index.html?productId=${atob(product.id).substring(22)}`);

}

const createrareWorkRight = (product) => {
    //sets smaller righthand photo image
    e("rare-work-right-img").src = product.images[0].src;
    e("rare-work-right-title").innerHTML = product.title;
    e("rare-work-right-price").innerHTML = `Starting at $${findLowestPrice(product)}`;

    e("rare-work-right-purchase").setAttribute("href", `../product-page/index.html?productId=${atob(product.id).substring(22)}`);
}

const createrareWorkThird = (product) => {
    e("rare-work-large-img").src = product.images[0].src;
    e("rare-work-large-title").innerHTML = product.title;
    e("rare-work-large-price").innerHTML = `Starting at $${findLowestPrice(product)}`;

    e("rare-work-large-purchase").setAttribute("href", `../product-page/index.html?productId=${atob(product.id).substring(22)}`);
}

client.collection.fetchAllWithProducts().then((collections) => {
    let rareWork = collections.find(c => c.title === "Website Collection: Rare Work");
    console.log(rareWork.products)
    createrareWorkLeft(rareWork.products[0]);
    createrareWorkRight(rareWork.products[1]);
    createrareWorkThird(rareWork.products[2]);
    
});

// client.product.fetchAll().then((products) => {
//     console.log(products)
//     createrareWorkLeft(products[0]);
//     createrareWorkRight(products[1]);
//     createrareWorkThird(products[2]);
// });