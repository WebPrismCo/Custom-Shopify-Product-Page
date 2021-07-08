var client = ShopifyBuy.buildClient({
    domain: "frankrelle.myshopify.com",
    storefrontAccessToken: '50c29f9cb69bf6a23e89e19095c2333a'
});

const e = (e) => {
    return document.getElementById(e) 
};

const findLowestPrice = (p) => {
    let prices = p.variants.map(v => parseInt(v.price));

    return Math.min(...prices)

}

const findProductCollectionFromDescription = (descriptionHtml) => {
    let findSeries = descriptionHtml;

    let findStartSeries = findSeries.search("Series:");
    let startSeries = findSeries.substring(findStartSeries);
    let endSeries = startSeries.search("<");

    let collection = startSeries.substring(8,endSeries).trim();

    return collection;
}

var ui = ShopifyBuy.UI.init(client);

// module.exports = {
//     findLowestPrice: findLowestPrice
// }