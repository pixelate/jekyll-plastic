$(document).ready(function() {
	var url = $(".game").data("promoter-url");
	
	if(url !== undefined) {
		url += ".jsonp?callback=?";
		
	  $.getJSON("http://" + url,
	  	function(data){
	      $("#awards").html(createAwardsList(data.product.awards));
	      $("#reviews").html(createReviewsList(data.product.reviews));
	  	}
		);
	}
});

function createAwardsList(awards) {
	var html = "";
    		
  $.each(awards, function() {
    html += '<li>“';
    html += this.title;
    html += '“ <span class="location">';
    html += this.location;
    html += ' ';
    html += this.year;
    html += '</span>';
    html += '</li>';                    
  });

	return html;
}

function createReviewsList(reviews) {
  var html = "";

  $.each(reviews, function() {
    html += '<blockquote>"';
    html += this.quote;
    html += '"<cite>';
    html += this.reviewer_name;
    html += ', <a href="' + this.url + '">' + this.publication_name + '</a>';
    html += '</cite>';
    html += '</blockquote>';
  });
	
	return html;
}