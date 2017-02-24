$(function(){
	$(".banner").fadeOut(4000);
	//描述淡入
	setTimeout(function(){
		$(".small_luntai").fadeIn(1000)
	},1000);
	setTimeout(function(){
		$(".banner-desc-bg").show(2000)
	},1500)
	setTimeout(function(){
		$(".banner-desc-one").show(2000)
	},2500)
	setTimeout(function(){
		$(".banner-desc-two").show(2000)
	},3500)
	setTimeout(function(){
		$(".light").show(1000)
	},4000)
	//光点效果
	lightTop();
	lightBottom();
	function lightTop(){
		var $lightTop = $(".light-top");
		$lightTop.animate({"left":"850px","opacity":0},4000,function(){
			$lightTop.css({"left":"30px"});
			$lightTop.animate({"opacity":1},0,lightTop);
		});	
	};
	function lightBottom(){
		var $lightBottom = $(".light-bottom");
		$lightBottom.animate({"left":"800px","opacity":0},4000,function(){
			$lightBottom.css({"left":"0"});
			$lightBottom.animate({"opacity":1},0,lightBottom);
		})
	};

	$(window).scroll(function () {
		if(0<$(".big-desc").offset().top - $(window).scrollTop() && $(".big-desc").offset().top - $(window).scrollTop() <$(window).height()){
			shaoMiao();
			function shaoMiao(){	
				$(".shaomiao").animate({"top":"450px","opacity":"0" }, 3000,function(){
							$(".shaomiao").css({"top":"0","opacity":"1"});	
					$(".shaomiao").animate({"opacity":"1"},0, shaoMiao )	
				});
			}
			
			//function shaoMiao(){
			//	$(".shaomiao").show();
			//	$(".shaomiao").animate({"top":"450px"}, 3000,function(){
			//		$(".shaomiao").animate({"opacity":"1"},0, shaoMiao )	
			//	});
			//	$(".shaomiao").fadeOut(500);
			//		setTimeout(function(){
			//	$(".shaomiao").css({"top":"0"});
			//},500)
				
			//}
			
			// $(".shaomiao").fadeOut(500);
			$(".desc-one").slideDown(1500);
			setTimeout(function(){
				$(".desc-two").slideDown(1500);
			},500)
			setTimeout(function(){
				$(".desc-three").slideDown(1500);
			},2000)
			setTimeout(function(){
				$(".desc-four").slideDown(1500);
			},1400)
			
		}
	});

})