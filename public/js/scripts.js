/***************** Waypoints ******************/

$(document).ready(function() {

     $(document).ready(function(){
          $.get("blogs",function(data,status){
            $("#intro .container").html(
              function () {
                var result='';
                var postList = data;
                for(var index in postList) {
                  if(JSON.stringify(postList[index]).length > 10) {
                    result+='<div class="row">';
                    result+='<div class="col-md-8 col-md-offset-2 wp1">';
                    result+='<h1 class="arrow">'+postList[index].title+'</h1>';
                    result+='<p class="time">@'+postList[index].author+' '+postList[index].time+'</p>';
                    if(postList[index].image == null || postList[index].image == "") {
                      result+='<p class="text-left font-color-black">'+postList[index].content+'</p>';
                    } else {
                      result+='<div id="servicesSlider"><ul class="slides">';
                      result+='<li><div class="post-pic"><img src="'+postList[index].image+'"/></div</li>';
                      result+='<li>'+postList[index].content+'</li>';
                      result+='</ul></div>';
                    }
                    result+='</div>';
                    result+='</div>';
                    if(postList.length != ++index) {
                       result+='<hr>';
                    }
                  }
                }
                return result;
              }
            );
          });

          $.get("json/photo.json",function(data,status){
            $("#portfolioSlider .slides").html(
              function () {
                var result='';
                var photoHtml;
                var photoList = data;
                for(var index in photoList) {
                  // var pli = document.createElement("li");
                  if(JSON.stringify(photoList[index]).length > 10) {
                    if(index%3 == 0) {
                       photoHtml='<li>';
                       photoHtml+='<div class="col-md-4 wp4">';
                    } else if(index%3 == 1) {
                       photoHtml='<div class="col-md-4 wp4 delay-05s">';
                    } else {
                       photoHtml='<div class="col-md-4 wp4 delay-1s">';
                    }

                    photoHtml+='<div class="overlay-effect effects clearfix">';
                    photoHtml+='<div class="img">';
                    photoHtml+='<img src="'+photoList[index].image+'" alt="Portfolio Item">';
                    photoHtml+='<div class="overlay">';
                    photoHtml+='<a href="#" class="expand"><i class="fa fa-search"></i><br>View More</a>';
                    photoHtml+='<a class="close-overlay hidden">x</a>';
                    photoHtml+='</div>';
                    photoHtml+='</div>';
                    photoHtml+='</div>';
                    photoHtml+='<h2>'+photoList[index].title+'</h2>';
                    photoHtml+='<p>'+photoList[index].content+'</p>';
                    photoHtml+='</div>';

                    if(index%3 == 2) {
                      photoHtml+='</li>';
                    }
                    result+=photoHtml;
                  }
                }
                return result;
              }
            );
          });

        });

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInDown');
    }, {
        offset: '55%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});