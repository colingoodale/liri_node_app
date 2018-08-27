
movieArt = $("#movieInput").val();








$("#artistConcert").on(function (event) {
    var concArt = $("#concertInput").val().trim();
    $.ajax('https://api.bandsintown.com/artists/' + concArt + '/events.json', {
        data: {
            api_version: '2.0',
            app_id: 'eyJUb2tlblR5cGUiOiJBUEkiLCJzYWx0IjoiY2ZhZGZhMzUtOTJiMC00NWUzLWExNmItNzA0MWY0ZTUzZWY2IiwiYWxnIjoiSFM1MTIifQ.eyJqdGkiOiIxMWRiZWQ0Zi05ZmU3LTQ1ZDEtYTY3YS04YmZlZTEyY2NjZDkiLCJpYXQiOjE1MzU0MDY4MDR9.Kd4JR1d1rXksIq5XGFsG1Yk6sTyzn106FqnN8RPXZLJkNoGFVzXTOpOBmJQ6l52AljPC0o1222O-8fDt1JOuww'
        },
        dataType: 'jsonp',
        jsonpCallback: 'response',
        crossDomain: true
    })

    console.log(response)

});