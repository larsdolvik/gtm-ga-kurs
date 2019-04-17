// Her ligger en lenke til analyticsjs dokumentasjonen dersom det skulle være ønskelig
// https://developers.google.com/analytics/devguides/collection/analyticsjs/



// Her ligger ett forslag til mulig løsning på en tracking av "Buy"-knappene på forsiden

function goToProduct(product) {
    // trackProductButtonLink(product)
    window.location = './products/' + product;
}

// function trackProductButtonLink(product) {
//     ga('send', {
//         hitType: 'event',
//         eventCategory: 'Navigation',
//         eventAction: 'frontpage',
//         eventLabel: product
//     });
// }