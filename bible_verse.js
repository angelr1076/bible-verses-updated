$(document).ready(function() {
    //function to call a quote and bible verse
    function getNewQuote() {
    console.log(getNewQuote);
    $.ajax({
        type: "GET",
        url: "https://uncovered-treasure-v1.p.mashape.com/random",
        data: {},
        dataType: "json",
        success: 

        
    function displayQuote(data) {
        //display the quote
        $(".quote").text(data.results[0].text);
        //display the author of the book the verse is being taken from
        $(".book").text("-" + data.results[0].context);
        $("#tweet-button").attr("href", "https://twitter.com/intent/tweet?text=" + '"' + data.results[0].text + '"' + ' ' + ' -' + ' ' + data.results[0].context).attr('target', '_blank');

        //Add verse letter count limit
        },

        //error message to display if the call does not work
        error: function() {
        prompt("Try again, God is on your side.");
        },
        
        //Mashape authorization and key
        beforeSend: function setHeader(xhr) {
        xhr.setRequestHeader(
            "X-Mashape-Key",
            "yWj9n9u3HdmshPYY3CZIzxRlfyczp1sh5gmjsnsAaGgE4pk62a"
        );

        xhr.setRequestHeader("Accept", "application/json");
        }
        });
    }
    $("#quote-button").click(getNewQuote);
});
