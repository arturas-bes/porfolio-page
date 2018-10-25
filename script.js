


$('.nav-btn').click( function(){
   

    $('.nav-links').toggleClass('show-links');
});
// click outside closes menu
$(document).click(function (e) {
    e.stopPropagation();


    //check if the clicked area is dropDown or not
    if ($('.nav').has(e.target).length === 0) {
        $('.nav-links').removeClass('show-links');
    }
})
// link click closes menu 
$('.nav ul li a').click(function () {
  
    $('.nav-links').removeClass('show-links');
})
 


var prevScrollpos = window.pageYOffset; //get old position
    
    $(window).scroll(function () {
        var currentScrollPos = window.pageYOffset; // get current position
        if (prevScrollpos > currentScrollPos) { //if old position is more than current one leave zero else shrink header
            $(".nav").css('top', '0');
        } else {
            $(".nav").css("top", "-150px");
        }
        prevScrollpos = currentScrollPos; // and get new position witch stores in current one (reapeat loop)

        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop, .home-link').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    //smooth scrool effect
    $('a').click(function () {    //take all a tags in doc
        if (this.hash !== "") {  // if hash is not empty do stuff
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }   //end of if 
    });

