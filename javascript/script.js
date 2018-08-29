$("#submit").on("click", function (event) {
    event.preventDefault();
    omdbSearch();
    bandsInTown();
})


function omdbSearch() {
    var title = $("#input").val();
    var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}
omdbSearch();

// function spotifySearch() {
//     var title = $("#input").val();
//     var query
// }

function bandsInTown() {
    var title = $("#input").val();
    console.log(title);
    $.ajax('https://api.bandsintown.com/artists/' + title + '/events.json', {
        data: {
            api_version: '2.0',
            app_id: 'f073da9fd80bafdfb67ab82c022d6798'
        },
        dataType: 'jsonp',
        jsonpCallback: 'createConcertList',
        crossDomain: true
    }).then(function (response) {
        console.log(response);
    });
}

bandsInTown();
