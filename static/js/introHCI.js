'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$('.jumbotron h1').addClass("active");
	});
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    // prevent the page from reloading      
    e.preventDefault();    	  
	console.log("Project clicked"); 
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
	   $(description).fadeOut();
		//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}
}


