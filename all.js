const getProduct = (id) => {
    client.product.fetch(id).then((product) => {
        // Do something with the product
            console.log(product)
        }).catch(error => {
            console.log(error)
        });
}


client.product.fetchAll().then((products) => {
    // Do something with the products
    // console.log(products[0].id);
    productId = products[0].id;

    getProduct(productId);
}).catch(error => {
    console.log(error)
});