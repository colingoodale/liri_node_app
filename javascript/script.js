$("#submit").on("click", function (event) {
    event.preventDefault();
    omdbSearch();
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
