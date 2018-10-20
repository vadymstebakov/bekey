$(document).ready(function(){
	var video = document.getElementById('video');
	var img = $('.img-bred, .img-hat');
	var imgIndex = $('#img-gift');
	
	video.addEventListener('timeupdate', function() {
		var timeVideo = video.currentTime;

		if (timeVideo >= 1) {
			img.fadeIn();
		}
		if (timeVideo >= 23 && timeVideo <= 26) {
			imgIndex.fadeIn();
		}
		if (timeVideo <= 23 || timeVideo >= 26) {
			imgIndex.fadeOut();
		}
	}, false);

	imgIndex.on('click', function(){
		if (video.paused) {
            video.play();
        } else {
			video.pause();
		}  
		
        $('.popup').toggleClass('active');
        $('.popup').slideToggle(150)
    });

    $('.popup__close').click(function(){
        $('.popup').removeClass('active');
        $('.popup').slideToggle(150);
        video.play();
    });
	
});

