/* This function receives latitude and longitude coordinates as input
and redirects the user to the Wikishoot tool page, which shows Wikidata items, 
Wikipedia articles, and Commons images with coordinates, all on the same map. */

$(document).ready(function() {
    var latText = $('.latitude').text();
    var lonText = $('.longitude').text();
    if ( !latText || !lonText ) return;

    var parseCoordinate = function(coordText) {
        var degrees = parseInt(coordText.match(/\d+/g)[0]);
        var minutes = parseInt(coordText.match(/\d+/g)[1]);
        var seconds = parseInt(coordText.match(/\d+/g)[2]);
        var sign = /[WS]/.test(coordText) ? -1 : 1;
        return sign * (degrees + (minutes / 60) + (seconds / 3600));
    };
    
    var latitude = parseCoordinate(latText);
    var longitude = parseCoordinate(lonText);
    
    var wikishootIcon = $('<img>').attr({
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Simpleicons_Places_map-marker-variant-tool.svg',
        height: 20,
        width: 20,
        title: 'Displays Wikidata items, Wikipedia articles, and Commons images on WikiShootMe tool'  // Tooltip text
    });
    
    $('.mw-indicators').append(wikishootIcon);
    
    wikishootIcon.on('click', function() {
        window.open("https://wikishootme.toolforge.org/#lat=" + latitude + "&lng=" + longitude + "&zoom=15");
    });
    
});
