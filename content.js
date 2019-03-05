// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      $('a').attr('href', 'https://www.youtube.com/watch?v=N9hIpjiGDq4?autoplay=1&loop=1&playlist=N9hIpjiGDq4');

      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

    $('body').animate({
              'opacity': '0.0',
              'left': "+=50",
              'height': "12%"},120000
               );

    $('body.scrollbar').animate({
              'opacity': '0.0',
              'left': "+=50",
              'height': "12%"},120000
               );


	  $('html').css({'cursor': 'none'});
    // not sure how to hide the cursor when hovered over links
    $('a:visibile').css({'cursor':'none'});

  
  

	var iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.src = "https://www.youtube.com/watch?v=N9hIpjiGDq4?autoplay=1&loop=1&playlist=N9hIpjiGDq4";
	document.body.appendChild(iframe);

    
    
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
)


// also desired --> add the same fade-out time on the text on the tab headers
