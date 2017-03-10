// Starting Array of Cartoon Characters- will be added to dynamically throughout prg
 var toonGuy = ["Mickey Mouse","Donald Duck","Tweety Bird","Popeye","Felix the Cat","Olive Oyl","Fred Flintstone","Snoopy","Mr. Magoo","Charlie Brown"];

      function displayCartoonInfo(){
      // In this case, the "this" keyword refers to the button that was clicked
      var toonGuy1 = $(this).attr("data-name");
		// Combine the input with the URL in prep to make the call
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
		toonGuy1 + "&api_key=dc6zaTOxFJmzC&limit=10";
		// Ajax Call to get toonGuy1
		$.ajax({
		url: queryURL,
		method: "GET"
		})
// After data comes back from the request
		.done(function(response) {
		console.log(queryURL);
		console.log(response);
		// storing the data from the AJAX request in the results variable
		var toonResults = response.data;
		// Looping through each result item
		$("#newCartoonGuy").empty();
		for (var i = 0; i < toonResults.length; i++) {
		// Creating and storing a div tag
		var toonDiv = $("<div>");
		toonDiv.addClass("rateTag");
			// Creating a paragraph tag with the result item's rating
			var p = $("<p>").text("Rating: " + toonResults[i].rating);
				// Creating and storing an image tag
				var toonImage = $("<img>");
				// Setting the src attribute of the image to a property pulled off the result item
				toonImage.attr("src", toonResults[i].images.fixed_height_small_still.url);
				// Appending the paragraph and image tag to the toonDiv 
				toonDiv.append(toonImage);
				toonDiv.append(p);
				$("#newCartoonGuy").prepend(toonDiv);
				console.log(toonDiv);
				}
			});

				}
				
		
	

	// Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#toonButton").empty();

        // Looping through the array of movies
        for (var i = 0; i < toonGuy.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("cartoon");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", toonGuy[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(toonGuy[i]);
          // Adding the button to the HTML
          $("#toonButton").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#searchBtn").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        // This line will grab the text from the input box
        var toonGuy1 = $("#cartoonCharacter").val().trim();
        // The movie from the textbox is then added to our array
        toonGuy.push(toonGuy1);
        console.log(toonGuy);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

 $(document).on("click", ".cartoon", displayCartoonInfo);
renderButtons();










