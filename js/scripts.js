(function($) {
	
	let win = $(window);
	let doc = $(document);

	doc.ready(function() {
		
		
	});
	
	win.on("load", function() {
		
		$('.carousel').carousel();
		$('.prevBtn').on("click", function() {
			$('.carousel').carousel('prev');
			return false;
		});
		$('.nextBtn').on("click", function() {
			$('.carousel').carousel('next');
			return false;
		});
		
		$("#mainVideo").on("click", function() {
			let video = $("#mainVideo");
			
			if ( video.hasClass("isPlaying") ) {
				video.removeClass("isPlaying");
				video.get(0).pause();
			} else {
				video.addClass("isPlaying");
				video.get(0).play();
			}
		});
		
		setTimeout(function() {
			$('.siteLoaderImg').addClass("zoomFade");
		}, 500);
		
		setTimeout(function() {
			$('.siteLoader').fadeOut();
		}, 1000);
		
	});
	
	win.on("scroll", function() {
		
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  // true for mobile device
		}else{
		
/*
		var scrollTop = win.scrollTop();
		
		$('.imageBorder').css({
			top :  "-" + scrollTop / 5 + "px"
		});
		
		$('#mainImage').css({
			top :  scrollTop / 10 + "px",
			opacity : 1 - ( scrollTop / 1100 )
		});
		
		$('#paint').css({
			top :  "-" + scrollTop / 5 + "px"
		});
*/
		
		  // false for not mobile device
		}
		
	});
	
})(jQuery);