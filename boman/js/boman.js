$(".logo").fadeIn(2000);
$(".banner1").show().addClass('animated fadeInLeft');
setTimeout(function(){
	$(".banner2").show().addClass('animated fadeInLeft');
},500)
setTimeout(function(){
	$(".banner3").show().addClass('animated fadeInLeft');
},1000)
setTimeout(function(){
	$(".banner4").show().addClass('animated fadeInLeft');
},1500)
$(".banner1").hover(function(){
	$(this).stop().animate({width:'103%'},1000)
},function(){
	$(this).stop().animate({width:'100%'},1000)
})
$(".banner2").hover(function(){
	$(this).stop().animate({width:'73%'},1000)
},function(){
	$(this).stop().animate({width:'70%'},1000)
})
$(".banner3").hover(function(){
	$(this).stop().animate({width:'48%'},1000)
},function(){
	$(this).stop().animate({width:'45%'},1000)
})
$(".banner4").hover(function(){
	$(this).stop().animate({width:'27%'},1000)
},function(){
	$(this).stop().animate({width:'24%'},500)
});

$(".banner").click(function(){
	$(".logo").addClass("logo-logo");
	$(".logo").fadeOut(1000);
	$(".logo-small").fadeIn(3000);
	$(".jianzhu").hide();
	$(".desc").hide();
	$(".design-desc-title").css({"margin-top":"0px"})
	$(".design-desc-text").css({"margin-top":"70px"})
	var nameClass = $(this).attr("id");
	setTimeout(function(){
		$("."+nameClass+"-desc").show();
		$("."+nameClass+"-title").animate({ marginTop:'-20px'},1000);	
	},500);
	
	setTimeout(function(){
		$("."+nameClass+"-text").animate({ marginTop:'40px'},2000);
	},800)
});

$(".logo").hover(function(){
	var logoWidth = $(this).width();
	var logoLeft = parseInt($(this).css("marginLeft"));
	$(this).stop().animate({width: logoWidth+20+'px',marginLeft:logoLeft-5+'px'},1000);
},function(){
	var logoWidth = $(this).width();
	var logoLeft = parseInt($(this).css("marginLeft"));
	$(this).stop().animate({width: logoWidth-20+'px',marginLeft:logoLeft+5+'px'},1000);
});
$(".logo-small").hover(function(){
	var logoWidth = $(this).width();
	$(this).stop().animate({width: logoWidth+20+'px',right:"80px"},1000);
},function(){
	var logoWidth = $(this).width();
	$(this).stop().animate({width: logoWidth-20+'px',right:"90px"},1000);
});

// $(".logo-com").click(function(){
// 	// $(".banner-box").hide();
// 	$(".desc").hide();
// 	// $(".content").css({"width":"100%"});
// 	// $(".content").css({"animation":"bgcolor 3s forwards"});
// 	$(".bg-mask").show();
// 	$(".btn-cotant").find("a").addClass("content-bian");
// 	$(".return").find("a").addClass("content-bian");
// 	$(".logo-small").hide();
// 	$(".logo").show();
// 	$(".logo").addClass("content-logo").find("a").find("img").attr("src","images/logo21.png");
// 	$(".logo").animate({top:'6%'},2000);
// 	$(".mask").show();
// 	$(".jianzhu").show();
// 	$(".jianzhu-box").show();
// 	$(".return").show();
// 	setTimeout(function(){
// 		$(".city-title").fadeIn(2000);
// 	},2000);


// 	setTimeout(function(){
// 		$(".jianzu1").animate({top:'138px'},2500);
// 	},2000)	
// 	setTimeout(function(){
// 		$(".jianzu2").animate({top:'294px'},3000);
// 	},2500)
// 	setTimeout(function(){
// 		$(".jianzu3").animate({top:'148px'},2500);
// 	},3000)
// 	setTimeout(function(){
// 		$(".jianzu4").animate({top:'222px'},3000);
// 	},3100)

// 	setTimeout(function(){
// 		$(".jianzu5").animate({top:'150px'},2500);
// 	},4000)
// });

$(".logo-com").click(function(){
	$(".bg-mask").show();
	$(".desc").hide();
	$(".jianzhu-box").show();
	$(".btn-cotant").find("a").addClass("content-bian");
	$(".return").find("a").addClass("content-bian");
	$(".logo-small").hide();
	// $(".logo").show();
	// $(".logo").addClass("content-logo").find("a").find("img").attr("src","images/logo21.png");
	//$(".logo").fadeOut(1000);
	$(".logo").hide();
	$(".jianzhu-logo").show();
	$(".jianzhu-logo-width").animate({marginTop:'6%'},2000);
	$(".jianzhu").show();
	$(".jianzhu-box").show();
	$(".return").show();
	$(".bg-mask").css({"animation":"bgcolor 3s forwards"});
	setTimeout(function(){
		$(".city-title").fadeIn(2000);
	},1000);

	setTimeout(function(){
		$(".jianzu1").animate({left:'0'},1200);
		setTimeout(function(){
			$(".jianzu2").animate({left:'14%'},1500);
		})
		setTimeout(function(){
			$(".jianzu3").animate({left:'41%'},1200);
		},600)
		setTimeout(function(){
			$(".jianzu4").animate({left:'59%'},1200);
		},1000)

		setTimeout(function(){
			$(".jianzu5").animate({left:'86%'},1000);
		},1600)
	},500);
	
})

