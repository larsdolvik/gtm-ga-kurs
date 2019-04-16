
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

function button() {
    console.log("button click");
    ga('send', {
        hitType: 'event',
        eventCategory: 'Videos',
        eventAction: 'play',
        eventLabel: 'Fall Campaign'
    });

    // Legge opp det forskjellige måtene å legge opp events på?

}

// Click page 