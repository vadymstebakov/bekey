$(document).ready(function(){

    $('.img-bred') .delay(1000).fadeIn();
    
    $('.img-hat') .delay(1000).fadeIn();

    $('#img-gift').delay(24000).fadeIn();

    $('#img-gift').delay(3000).fadeOut();

    $('#img-gift').click(function(){
        $('.popup').toggleClass('active');
        $('.popup').slideToggle(150)
    });

    $('.popup__close').click(function(){
        $('.popup').removeClass('active');
        $('.popup').slideToggle(150);
        $("#video").get(0).play();
    });

    $('#img-gift').click(function(){
        if ($("#video").get(0).paused) {
            $("#video").get(0).play();
        } else {
            $("#video").get(0).pause();
        }  
        
    });  
});

