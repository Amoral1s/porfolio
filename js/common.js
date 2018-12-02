$(document).ready(function() {
    $(".toggle1").click(function() {
   $(".main-mid-hidden-1").addClass('active');
   $(".main-mid-hidden-2").removeClass('active');
   $(".main-mid-hidden-3").removeClass('active');
   $(".main-mid-hidden-4").removeClass('active');
   $(".toggle1").addClass('active-t');
   $(".toggle2").removeClass('active-t');
   $(".toggle3").removeClass('active-t');
   $(".toggle4").removeClass('active-t');
  });
  
    $(".toggle2").click(function() {
   $(".main-mid-hidden-2").addClass('active');
   $(".main-mid-hidden-1").removeClass('active');
   $(".main-mid-hidden-3").removeClass('active');
   $(".main-mid-hidden-4").removeClass('active');
   $(".toggle2").addClass('active-t');
   $(".toggle1").removeClass('active-t');
   $(".toggle3").removeClass('active-t');
   $(".toggle4").removeClass('active-t');
  });
    $(".toggle3").click(function() {
   $(".main-mid-hidden-3").addClass('active');
   $(".main-mid-hidden-1").removeClass('active');
   $(".main-mid-hidden-2").removeClass('active');
   $(".main-mid-hidden-4").removeClass('active');
   $(".toggle3").addClass('active-t');
   $(".toggle2").removeClass('active-t');
   $(".toggle1").removeClass('active-t');
   $(".toggle4").removeClass('active-t');
  });
  
    $(".toggle4").click(function() {
   $(".main-mid-hidden-4").addClass('active');
   $(".main-mid-hidden-1").removeClass('active');
   $(".main-mid-hidden-2").removeClass('active');
   $(".main-mid-hidden-3").removeClass('active');
   $(".toggle4").addClass('active-t');
   $(".toggle2").removeClass('active-t');
   $(".toggle3").removeClass('active-t');
   $(".toggle1").removeClass('active-t');
  });
 
  
  $(".slider").slick({
    autoplay: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{ 
        breakpoint: 768,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1
        } 
    },
    { 
        breakpoint: 578,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        } 
    }
    
]
});

$(".form-btn").click(function() {
	if ($(".form-btn-check").is(":visible")) {
        $(".form-btn-check").slideUp(600);
        
	} else {
		$(".form-btn-check").slideDown(600);
	};
});

$(".ost-letter").click(function() {
    $(".card").addClass('active-letter');
    
    
   });
$(".back-back").click(function() {
    $(".card").removeClass('active-letter');
    
    
   });


$(".toggle-mob1").click(function() {
    $(".hidden-mob-1").addClass('active-mob');
    $(".hidden-mob-2").removeClass('active-mob');
    $(".hidden-mob-3").removeClass('active-mob');
    $(".hidden-mob-4").removeClass('active-mob');
    $(".toggle-mob1").addClass('active-mob-toggle');
    $(".toggle-mob2").removeClass('active-mob-toggle');
    $(".toggle-mob3").removeClass('active-mob-toggle');
    $(".toggle-mob4").removeClass('active-mob-toggle');
   });
$(".toggle-mob2").click(function() {
    $(".hidden-mob-2").addClass('active-mob');
    $(".hidden-mob-1").removeClass('active-mob');
    $(".hidden-mob-3").removeClass('active-mob');
    $(".hidden-mob-4").removeClass('active-mob');
    $(".toggle-mob2").addClass('active-mob-toggle');
    $(".toggle-mob1").removeClass('active-mob-toggle');
    $(".toggle-mob3").removeClass('active-mob-toggle');
    $(".toggle-mob4").removeClass('active-mob-toggle');
   });
$(".toggle-mob3").click(function() {
    $(".hidden-mob-3").addClass('active-mob');
    $(".hidden-mob-2").removeClass('active-mob');
    $(".hidden-mob-1").removeClass('active-mob');
    $(".hidden-mob-4").removeClass('active-mob');
    $(".toggle-mob3").addClass('active-mob-toggle');
    $(".toggle-mob2").removeClass('active-mob-toggle');
    $(".toggle-mob1").removeClass('active-mob-toggle');
    $(".toggle-mob4").removeClass('active-mob-toggle');
   });
$(".toggle-mob4").click(function() {
    $(".hidden-mob-4").addClass('active-mob');
    $(".hidden-mob-2").removeClass('active-mob');
    $(".hidden-mob-3").removeClass('active-mob');
    $(".hidden-mob-1").removeClass('active-mob');
    $(".toggle-mob4").addClass('active-mob-toggle');
    $(".toggle-mob2").removeClass('active-mob-toggle');
    $(".toggle-mob3").removeClass('active-mob-toggle');
    $(".toggle-mob1").removeClass('active-mob-toggle');
   });

   $(".toggle-hamburger").click(function() {
	if ($(".dropdown").is(":visible")) {
        $(".dropdown").slideUp(600);
        
	} else {
		$(".dropdown").slideDown(600);
	};
});
   $(".popup-toggle").click(function() {
	if ($(".popup").is(":visible")) {
        $(".popup").fadeOut(600);
        
	} else {
		$(".popup").fadeIn(600);
	};
});
   $(".popup-close").click(function() {
	if ($(".popup").is(":visible")) {
        $(".popup").fadeOut(600);
        
	} else {
		$(".popup").fadeIn(600);
	};
});
// $('.head').parallax({imageSrc: 'dist/img/bg-head.jpg'});
// $('.credo').parallax({imageSrc: 'dist/img/bg-credo.jpg'});
  });
  (function() {

    "use strict";
  
    var toggles = document.querySelectorAll(".toggle-hamburger");
  
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
  
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  
  })();