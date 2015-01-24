$(document).ready(function(){
	
	$('nav#menu').mmenu();

    $('.ui.dropdown').dropdown();
    
    $('.ui.menu .dropdown').dropdown({
        on: 'hover'
     });
     
     
     function createCORSRequst(method, url) {
     	
     	var xhr = new XMLHttpRequest();
		 if ("withCredentials" in xhr) {
		
		   // Check if the XMLHttpRequest object has a "withCredentials" property.
		   // "withCredentials" only exists on XMLHTTPRequest2 objects.
		   xhr.open(method, url, true);
		
		 } else if (typeof XDomainRequest != "undefined") {
		
		   // Otherwise, check if XDomainRequest.
		   // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		   xhr = new XDomainRequest();
		   xhr.open(method, url);
		
		 } else {
		
		   // Otherwise, CORS is not supported by the browser.
		   xhr = null;
		
		 }
		 return xhr;
     	
     }
     
     var xhr = createCORSRequst('GET', 'http://jakelacey.com/support/u/1/ticket-search-api/');
     if (!xhr) {
     	throw new Error('Cors not supported');
     }
     
     console.log(xhr);
     
     xhr.onload = function() {
     	var responseText = xhr.responseText;
     	console.log(responseText);
     }
     
     xhr.send();
     
     
     /*AJAX TEST */
    var api_url = "http://jakelacey.com/support/u/1/ticket-search-api/";
    var items;
    
    $.ajax({
    	url: api_url,
    }).done(function (data){
    	
    	$items = "";
    	
    	jQuery(data[0]['nodes']).each(function() {
    		
    		$open = (this.open == 1) ? 'open' : 'closed';

			$items +="<div class='ticket-wrapper row'><div class='col-sm-12 col-md-12'><a href='#'><div class='ticket-details ticket-"+$open+"'><div class='row'><div class='ticket-title col-sm-10 col-md-10'>"+this.title+"</div><div class='ticket-date col-sm-2 col-md-2'>"+this.created+"</div></div><div class='ticket-content'> <p>"+this.body+"</p></div></div></a></div></div>";

    	});
    	
    	jQuery('#test-results').html($items);
    		
    });
   
    
     
 });