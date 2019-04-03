// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  //https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC
// #1 get the user's search term
var searchTerm =  $("#search-term").val();
  // #2 make the actual ajax request call
  $.ajax({
    url: "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC" ,
    method: "GET",
    success: function(response) {
        
        console.log(response);
        var gifURL  = '<img src="' + response.data[0].images.original.url+ '"/>';
        //var gifURL = "fake";
        $("#container").html(gifURL);
    },
    });
  // #3 in the success function of the call, append the data to the html so that the giphys show up on the
  
  
});

