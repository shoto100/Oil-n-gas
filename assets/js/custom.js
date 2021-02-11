



$(document).ready(function(){
    //!  <!-- NAV-BAR SETTINGS -->
    $(window).on("scroll",function(){
        if($(document).scrollTop() > 20){
            $(".custom-nav").addClass("scroll");
        }
        else{
            $(".custom-nav").removeClass("scroll");
        }
    });

    //!Modal 
    $('#moreMember').modal('handleUpdate');
    
    //!Owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    //!Type It
    new TypeIt("#head-txt1", {
        strings: "Oil and Gas Centre Partner Business",
        speed: 65,
        afterComplete: function (step, instance) {
            instance.destroy();
        }
      }).go();
    //!AOS animation
    AOS.init({
        once: true
    });

});