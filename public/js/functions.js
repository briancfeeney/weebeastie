/* global console */

jQuery(document).ready(function ($) {
		
	var workID, workIDclass, workIDid,
		$body = $("html, body"), 
		$videoPlayer = $("#videoPlayer"),
		htmlVideo;
		
		// Video playback.
		
		
	$(".workItem").on("click", function() {
		workID = $(this).data("workid"); 
		workIDclass = '.video_' + workID;
		workIDid = '#video_' + workID;
		htmlVideo = workIDid + '_html5_api';
			// DEBUG:
			// console.log(workID);
			// console.log(workIDclass);
			// console.log(workIDid);
			// console.log(htmlVideo);

 		//$videoPlayer.slideDown("slow");
 		$videoPlayer.fadeIn("slow");
		$body.animate({ scrollTop: 0 }, 600);

		$('.topVideo').hide(function() {
			$(this).children().get(0).pause();
			// $topVideos.children().get(0).pause();
			// $(this).children().get(0).pause();
			// $(this).pause();
		});

		$videoPlayer.animate({
		    opacity: 1,
		  }, 100, function() {
		    // Animation complete.
		});


		$(workIDid)
			// .css({'height': '', 'padding': '', 'margin': '', 'width': '', 'opacity': ''})
			.slideDown("slow", function() {
			$(this).children(htmlVideo).get(0).play();
			// $playingVideo = $(this).children( $ topVideo ).get(0);
			// 			if ($playingVideo) {
			// 				$playingVideo.play();
			// 			}
		});
	
		$('audio,video').each(function() {
			this.pause();
		});
	});

	$('audio,video').bind('play', function() {
		var activated = this;
		$('audio,video').each(function() {
			if(this !== activated) {
				this.pause();
			}
		});
	});
	
	// Home page carousel.
	
	var $flexslider = $('.flexslider');
	if ($flexslider) {
		$flexslider.flexslider({
		  animation: "slide",
		  slideshow: false
		});
	
		$(".flex-direction-nav", ".flex-control-nav").on('click', function() {
			$('audio,video').each(function() {
				this.pause();
			});
		});
	}
	
	
	// Dropdown filters.

	$(document).on("change", "#dropdown", function(){
		console.log ("Dropdown has changed.");
		var $workItems = $(".workItem");
		if ($(this).val() === "showAll") {
		    $workItems.fadeIn("slow").addClass("grid");
	    } else  {
	        $workItems.hide("fast").removeClass("grid");
			$('.' + $(this).val()).fadeIn("slow").addClass("grid");
			$("#videoPlayer").hide();
	    }
	});

});
