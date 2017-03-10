
$("button").on("click", function() {
      // In this case, the "this" keyword refers to the button that was clicked
      var toonGuy = $(this).attr("cartoon");
		//<script src="assets/javascript/gifTastic.js">
		//var animal = $(this).attr("data-animal");
		//var toonGuy="mickey mouse"
		// Constructing a queryURL using the animal name
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
		toonGuy + "&api_key=dc6zaTOxFJmzC&limit=10";
		// Performing an AJAX request with the queryURL
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
			// Creating a paragraph tag with the result item's rating
			var p = $("<p>").text("Rating: " + toonResults[i].rating);
				// Creating and storing an image tag
				var toonImage = $("<img>");
				// Setting the src attribute of the image to a property pulled off the result item
				toonImage.attr("src", toonResults[i].images.fixed_height_small_still.url);
				// Appending the paragraph and image tag to the toonDiv
				//toonDiv.append(p);
				toonDiv.append(toonImage);
				toonDiv.append(p);
				$("#newCartoonGuy").prepend(toonDiv);
				}
			})

				});
				
		
	