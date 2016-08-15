	var $navArea = $(".nav")
	var $navList = $(".nav li a");
	var $mask = $(".mask");
	var popupVideo = $(".popup-video");
	var $videoList = $(".video li a");
	var imgLength = $(".img-list li").length-1;
	var time;
	var cur = 0;
	var imgWidth = $(".img-list li").width();
	$(".img-list").css("width",(imgLength+1)*imgWidth);
 	var array =[$("#game").offset().top,$("#liev").offset().top,$("#interact").offset().top,$("#splendid").offset().top,$("#show").offset().top,$("#message").offset().top] ;
	$(window).on("scroll", function(){ 
        var top = $(this).scrollTop();
        if(top >= 750){
        	$navArea.show();
        	if( top < array[1] && top >= array[0]  ){
        	 navScroll(0);
		}else if(top < array[2] && top >= array[1]){
			 navScroll(1);
		}else if(top < array[3] && top >= array[2]){
			 navScroll(2);
		}else if(top < array[4] && top >= array[3]){
			 navScroll(3);
		}else if(top < array[5] && top >= array[4]){
			 navScroll(4);
		}else if (top >= array[5]){
			 navScroll(5);
		}
        }else {
        	$navArea.hide();
        };
    });
	$navList.find("img").hover(function(){	
		$(this).prev("span").stop().fadeIn(300);
	},function(){
		if($(this).parent("a").hasClass("li-cur"))return;
		$(this).prev("span").stop().fadeOut(300);
	});
	$navList.find("span").hover(function(){	
		$(this).stop().fadeIn(300);
	},function(){
		if($(this).parent("a").hasClass("li-cur"))return;
		$(this).stop().fadeOut(300);
	})	

	$navList.click(function(){
		if($(this).hasClass("li-cur"))return;
		navScroll(this);
		$(window).scrollTop(array[$(this).parent('li').index()]);
	});

	function navScroll(num){
		$navList.removeClass("li-cur").find("img").attr("src","images/nav_img.png");
		$navList.find("span").hide();
		$navList.eq(num).addClass("li-cur").find("img").attr("src","images/nav_img_cur.png");
		$navList.eq(num).find("span").show();
	}


//图片轮播
	$(".splendid").hover(function(){
		clearInterval(time);
	},function(){
		time = setInterval("changTo()",1000);
	})
	$(".next").click(function(){
		changTo();
	})
	$(".prev").click(function(){
		cur --;
		if(cur <0){
			cur = imgLength;
		}
		var goLeft = cur*imgWidth;
		$(".img-list").stop().animate({left:"-"+goLeft+'px'},500);
	})
	function changTo(){
		cur++;
		if(cur>imgLength){
			cur=0;
		}
		var goLeft = cur*imgWidth;
		$(".img-list").stop().animate({left:"-"+goLeft+'px'},500);
	}
	time = setInterval("changTo()",1000);


//游戏介绍
	$videoList.hover(function(){
		var name = $(this).attr("id");
		$(this).css("background","url(./images/liev/play_cur.png)").parent("li").css({"background":"url(./images/liev/"+name+".png)","background-position":"-288px 0"});	
	},function(){
		var name = $(this).attr("id");
		$(this).css("background","url(./images/liev/play.png)").parent("li").css({"background":"url(./images/liev/"+name+".png)","background-position":"0 0"});
	})
$videoList.click(function(){
	$mask.show();
	popupVideo.show();
})
$(".exit").click(function(){
	$mask.hide();
	popupVideo.hide();
})
//图片翻转
	$('.game-list li').quickFlip({
		closeSpeed:155, 
		openSpeed:120, 
	});   
    // set up a hover effect for each of the quickflip wrappers
    for ( var i = 0; i < $.quickFlip.wrappers.length; i++ ) {
      var thisOne = $.quickFlip.wrappers[i];
      $(thisOne.wrapper).hover( function() {
        $(this).quickFlipper(); //  反转一下
      }, function() {});
    }

