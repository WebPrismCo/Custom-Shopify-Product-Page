const createRecentWorkLeft = (product) => {
    //sets large lefthand photo image.
    e("recent-work-left-image").src = product.images[0].src;
    e("recent-work-1").innerHTML = product.title;
    e("recent-work-price-left").innerHTML = `Starting at $${findLowestPrice(product)}`;

    e("recent-work-collection-left").innerHTML = "Collection: " + findProductCollectionFromDescription(product.descriptionHtml);

    e("recent-work-purchase-left").setAttribute("href", `../product/${atob(product.id).substring(22)}`);

}

const createRecentWorkRight = (product) => {
    //sets smaller righthand photo image
    e("recent-work-image-right").src = product.images[0].src;
    e("recent-work-title-right").innerHTML = product.title;
    e("recent-work-price-right").innerHTML = `Starting at $${findLowestPrice(product)}`;

    e("recent-work-collection-right").innerHTML = "Collection: " + findProductCollectionFromDescription(product.descriptionHtml);

    e("recent-work-purchase-right").setAttribute("href", `../product/${atob(product.id).substring(22)}`);
}

const createRecentWorkThird = (product) => {
    e("recent-work-large-img").src = product.images[0].src;
    e("recent-work-large-title").innerHTML = product.title;
    e("recent-work-large-price").innerHTML = `Starting at $${findLowestPrice(product)}`;

    e("recent-work-large-collection").innerHTML = "Collection: " + findProductCollectionFromDescription(product.descriptionHtml);

    e("recent-work-large-purchase").setAttribute("href", `../product/${atob(product.id).substring(22)}`);
}

client.product.fetchAll().then((products) => {
    createRecentWorkLeft(products[0]);
    createRecentWorkRight(products[1]);
    createRecentWorkThird(products[2]);
});