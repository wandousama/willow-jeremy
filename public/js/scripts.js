/***************** Waypoints ******************/
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

var setOverlays=function(){
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
};

/***************** Flexsliders ******************/

var setFlexsliders=function() {

	$('#photosSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('.blogsSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
};

var setClass = function(fatherNode) {
    if(!fatherNode) {
        fatherNode="";
    }

    $(fatherNode+'.wp1').waypoint(function() {
    $(fatherNode+'.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $(fatherNode+'.wp2').waypoint(function() {
        $(fatherNode+'.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $(fatherNode+'.wp3').waypoint(function() {
        $(fatherNode+'.wp3').addClass('animated fadeInDown');
    }, {
        offset: '55%'
    });
    $(fatherNode+'.wp4').waypoint(function() {
        $(fatherNode+'.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $(fatherNode+'.wp5').waypoint(function() {
        $(fatherNode+'.wp5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $(fatherNode+'.wp6').waypoint(function() {
        $(fatherNode+'.wp6').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
};

var currentBlogNum=0;
$(document).ready(function() {

    var buildBlogs = function(data) {
        var result='';
        var blogList = data;
        for(var index in blogList) {
            if(JSON.stringify(blogList[index]).length > 10) {
                result+='<div class="row">';
                result+='<div class="col-md-8 col-md-offset-2 wp1">';
                result+='<h1 class="arrow">'+blogList[index].title+'</h1>';
                result+='<p class="time">@'+blogList[index].author+' '+blogList[index].time+'</p>';
                if(blogList[index].image == null || blogList[index].image == "") {
                  result+='<p class="text-left font-color-black">'+blogList[index].content+'</p>';
                } else {
                  result+='<div class="blogsSlider"><ul class="slides">';
                  result+='<li><div class="blog-pic"><img src="'+blogList[index].image+'"/></div</li>';
                  result+='<li>'+blogList[index].content+'</li>';
                  result+='</ul></div>';
                }
                result+='</div>';
                result+='</div>';

                lastPostId=blogList[index]._id;

                if(blogList.length != ++index) {
                   result+='<hr>';
                }
                currentBlogNum++;
            }
        }
        return result;
    }

    var buildPhotos = function(data) {
        var result="";
        var photoHtml;
        var photoList = data;
        for(var index in photoList) {
          // var pli = document.createElement("li");
          if(JSON.stringify(photoList[index]).length > 10) {
            if(index%3 == 0) {
                photoHtml='<li>';
            } else {
                photoHtml='';
            }
            photoHtml+='<div class="col-md-4 wp4">';
            photoHtml+='<div class="overlay-effect effects clearfix">';
            photoHtml+='<div class="img">';
            photoHtml+='<img src="'+photoList[index].image+'" alt="Photos Item">';
            photoHtml+='<div class="overlay">';
            photoHtml+='<a href="#photos" class="expand"><i class="fa fa-search"></i><br>View More</a>';
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

    $('.datetimepicker').datetimepicker({
        format: 'yyyy-mm-dd hh:ii'
    });

    $.get("blogs?limit=3",function(data,status){
        $("#blogList").html(buildBlogs(data));
        setClass();
    });
    $.get("photos",function(data,status){
        $("#photosSlider .slides").html(buildPhotos(data));
        setClass();
        setOverlays();
        setFlexsliders();
    });


    var messageNotice = function (responseMessage, isWarning) {
        if(isWarning == 1) {
            $('.concat-response').addClass("red")
            $('#message').focus();
        } else {
            $('.concat-response').removeClass("red");
            $("#message").val("");
        }
        $('.concat-response').html(responseMessage);
        $('.concat-response').fadeIn("slow");
        $('.concat-response').fadeOut(3000);
    }

    $("#submitMessage").click(function() {
        var message= $("#message").val();

        if(message.trim()=="") {
            messageNotice("Hmm, No words to say?", 1);
        } else {
            $.post(
                "messages",
                {
                    content:message
                },
                function(data, status) {
                    if(status != 'success') {
                        messageNotice("Oops, Something Wrong!", 1);
                    } else {
                        messageNotice("Thanks for concat us !", 0);
                    }
                },
                'json'
            );
            setTimeout(function () {
                if($("#message").val() == message) {
                    messageNotice("Oops, Something Wrong when leave message!", 1);
                }
            },1000);

        }
    });

    $("#moreBlogs").click(function() {
        $.get("blogs?limit=3&offset="+currentBlogNum,function(data,status){
            $("#blogList").append("<hr>");
            $("#blogList").append(buildBlogs(data));
            setClass();
            setFlexsliders();
        });
    });
});
