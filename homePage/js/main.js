 var swiper = new Swiper('.banner .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        onlyExternal : true,
        loop: true,
    });
 var swiper = new Swiper('.active-left-introduct .swiper-container', {
   		pagination: '.swiper-pagination',
   		paginationClickable: true,
   		onlyExternal : true,
        loop: true,
        centeredSlides: true,
        autoplay: 1000,
        autoplayDisableOnInteraction: false

    });

 var swiper = new Swiper('.img .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 775,
        loop: true,
    });

 $(window).on("scroll", function(){ 
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
        // alert(top);
        if(top >= 601){
        	$(".menu").addClass("menu-fixed");
        }else{
        	$(".menu").removeClass("menu-fixed");
        };
    });
 var newsData = {
 	"newest":[
	 	{
	 		"type":"[公告]",
	 		"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 		"time":"03/29"
	 	},
	 	{
	 		"type":"[公告]",
	 		"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 		"time":"03/29"
	 	},
	 	{
	 		"type":"[公告]",
	 		"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 		"time":"03/29"
	 	},
	 	{
	 		"type":"[公告]",
	 		"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 		"time":"03/29"
	 	},
	 	{
	 		"type":"[公告]",
	 		"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 		"time":"03/29"
	 	},
	 	{
	 		"type":"[公告]",
	 		"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 		"time":"03/29"
	 	}
 	],
 	"notice":[
 	{
	 	"type":"[公告1]",
	 	"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 	"time":"03/29"
	},
	{
	 	"type":"[公告]",
	 	"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 	"time":"03/29"
	},
	{
	 	"type":"[公告]",
	 	"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 	"time":"03/29"
	}
 	],
 	"news":[
 	{
	 	"type":"[公告2]",
	 	"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 	"time":"03/29"
	}
	],
	"active":[
 	{
	 	"type":"[公告2]",
	 	"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 	"time":"03/29"
	}
	],
	"media":[
 	{
	 	"type":"[公告2]",
	 	"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 	"time":"03/29"
	}
	],
	"player":[
 	{
	 	"type":"[公告2]",
	 	"desc":"《无冬OL》Xbox剑湾竞技场即将开启 全新内容抢先曝光",
	 	"time":"03/29"
	}
	]
 }

 var professionData = {
 	"profession":[
 		{
 			"type":"灾祸术士",
 			"id":"1"
 		},
 		{
 			"type":"诡术刺客",
 			"id":"2"
 		},
 		{
 			"type":"虔诚牧师",
 			"id":"3"
 		},
 		{
 			"type":"控场法师",
 			"id":"4"
 		},
 		{
 			"type":"猎手游侠",
 			"id":"5"
 		},
 		{
 			"type":"巨武斗士",
 			"id":"6"
 		},
 		{
 			"type":"守护战士",
 			"id":"7"
 		}
 	],
 	"race":[
 		{
 			"type":"守护战士1",
 			"id":"8"
 		},
 		{
 			"type":"守护战士2",
 			"id":"9"
 		},
 		{
 			"type":"守护战士3",
 			"id":"10"
 		},
 		{
 			"type":"守护战士",
 			"id":"11"
 		},
 		{
 			"type":"守护战士",
 			"id":"12"
 		},
 		{
 			"type":"守护战士",
 			"id":"13"
 		},
 		{
 			"type":"守护战士",
 			"id":"14"
 		}
 	]
 }
var proIntroducedata = {
	"1":[
	{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者1",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_01.png"
	}],
	"2":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者2",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师2。",
		"mark":"../homePage/images/desc_01.png"
	}],
	"3":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者3",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_01.png"
	}],
	"4":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者4",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_02.png"
	}],
	"5":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者5",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_01.png"
	}],
	"6":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者6",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_02.png"
	}],
	"7":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者7",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_01.png"
	}],
	"8":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者8",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_02.png"
	}],
	"9":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者9",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_01.png"
	}],
	"10":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者1",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_02.png"
	}],
	"11":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者2",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_01.png"
	}],
	"12":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者3",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_02.png"
	}],
	"13":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者4",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_02.png"
	}],
	"14":[{
		"img":"../homePage/images/desc.png",
		"role":"伤害输出者 次级防御者5",
		"nature":"力量 ，体质，敏捷",
		"energy":"战技",
		"weapon":"巨剑或巨斧",
		"introduce":"挥舞着巨型武器的巨武斗士在战场上劈开一条自己的路。大开大合之间，任何靠近他的敌人都将受到伤害。巨武斗士是近战和范围伤害的大师。",
		"mark":"../homePage/images/desc_01.png"
	}]
}
var playersData = {
 	"player":[
	 	{
	 		"type":"[帮助] ",
	 		"desc":"地下城怎么退出？卡在里面进退两难 新人帖",
	 		"time":"沉墨似金"
	 	},
	 	{
	 		"type":"[帮助] ",
	 		"desc":"地下城怎么退出？卡在里面进退两难 新人帖",
	 		"time":"沉墨似金"
	 	},
	 	{
	 		"type":"[帮助] ",
	 		"desc":"地下城怎么退出？卡在里面进退两难 新人帖",
	 		"time":"沉墨似金"
	 	},
	 	{
	 		"type":"[帮助] ",
	 		"desc":"地下城怎么退出？卡在里面进退两难 新人帖",
	 		"time":"沉墨似金"
	 	},
	 	{
	 		"type":"[帮助] ",
	 		"desc":"地下城怎么退出？卡在里面进退两难 新人帖",
	 		"time":"沉墨似金"
	 	},
	 	{
	 		"type":"[帮助] ",
	 		"desc":"地下城怎么退出？卡在里面进退两难 新人帖",
	 		"time":"沉墨似金"
	 	}
 	]
 }
 for(var i = 0; i< playersData.player.length; i++){
 			$(".player ul").append(
 				'<li><span class="sp1 color1">'+playersData.player[i].type+'&nbsp;'+playersData.player[i].desc+'</span><span class="sp3 color2">'+playersData.player[i].time+'</span></li>'
 				);
 		}
$(function(){
	var $newsNav = $(".news-nav li");
	var $newsDesc = $(".news-desc");
	var $professionNav = $(".profession-nav li");
	var $professionDesc = $(".profession-desc");
	var $professionIntroduce = $(".profession-introduce");
	var $popup = $(".popup");
	var $mark = $(".mark");
	var $topPopup = $(".top-popup");
	var $swiperButtonnext = $(".popup-next");
	var $swiperButtonprev = $(".popup-prev");
	var $videoLeft = $(".video-left-video");
	var $videoRight = $(".video-right-img");
 	$newsNav.click(function(){
 		if($(this).hasClass("news-nav-cur"))return;
 		if($(this).hasClass("li-jia"))return;
 		$newsDesc.html("");
 		$newsNav.removeClass("news-nav-cur");
 		$(this).addClass("news-nav-cur");
 		var _id = $(this).attr("id");
 		var data = newsData[_id];
 		for(var i = 0; i< data.length; i++){
 			$newsDesc.append(
 				'<li><span class="sp1">'+data[i].type+'</span><span class="sp2">'+data[i].desc+'</span><span class="sp3">'+data[i].time+'</span></li>'
 				);
 		}
 	});

 	$professionNav.click(function(){
 		if($(this).hasClass("profession-nav-cur"))return;
 		if($(this).hasClass("kong")) {
 			return;
 		}
 		$professionNav.removeClass("profession-nav-cur");
 		$(this).addClass("profession-nav-cur");
 		$professionDesc.html("");
 		var proId = $(this).attr("id");
 		var proData = professionData[proId];
 		for(var i = 0;i<proData.length; i++){
 			$professionDesc.append(
 				'<li id="'+proData[i].id+'">'+proData[i].type+'</li>'
 				);
 		if(i==0){
 			$professionDesc.find("li").addClass("profession-desc-cur");
 		}
 		}
 	});
 	$professionDesc.on('click','li',function(){
 		$professionDesc.find("li").removeClass("profession-desc-cur");
 		$(this).addClass("profession-desc-cur");
 		$professionIntroduce.html("");
 		var proDescid = $(this).attr("id");
 		var proIntroData = proIntroducedata[proDescid];
 		$professionIntroduce.append(
 			'<div class="profession-introduce-img">'+
							'<img src="'+proIntroData[0].img+'">'+
						'</div>'+
						'<div class="profession-introduce-desc">'+
							'<p>职业角色：<span>'+proIntroData[0].role+'</span></p>'+
							'<p>职业属性：<span>'+proIntroData[0].nature+'</span></p>'+
							'<p>威能来源：<span>'+proIntroData[0].energy+'</span></p>'+
							'<p>武&nbsp; &nbsp; &nbsp;&nbsp;器：<span>'+proIntroData[0].weapon+'</span></p>'+
						'</div>'+'<img src="'+proIntroData[0].mark+'" class="right-img">'+'<p class="introduce">'+proIntroData[0].introduce+'</p>'+
					'</div>'
 			);
 	});
 	$(".right-nav li").hover(function(){
 	$(this).stop(true, false).animate({width:'133px'},500);
	if($(this).hasClass("right-nav-03")){
		$(".sao").fadeIn(1000);
	}
	if($(this).hasClass("right-nav-04")){
		$(".fenxiang").fadeIn(1000);

	}
	},function(){
		$(this).stop(true, false).animate({width:'54px'},500);
		if($(this).hasClass("right-nav-03")){
		$(".sao").fadeOut(500);
	}
	if($(this).hasClass("right-nav-04")){
		$(".fenxiang").fadeOut(1000);
	}
	});

	$(".fenxiang").hover(function(){
		$(this).stop();
		$(this).show();
	},function(){
		$(this).fadeOut(500);
	});
//变暗
	 $videoRight.hover(function(){
	 	$("#left").show();
	 }, function(){
	 	$("#left").hide();
	 })
	 $videoLeft.hover(function(){
	 	$("#right").show();
	 }, function(){
	 	$("#right").hide();
	 })
// 弹框
	 $videoRight.click(function(){
		$popup.show();
		$mark.show();
	})

	$popup.hover(function(){
		$topPopup.show();
		$swiperButtonnext.show();
		$swiperButtonprev.show();
		$(".right-close").show();
	},function(){
		$topPopup.hide();
		$swiperButtonnext.hide();
		$swiperButtonprev.hide();
		$(".right-close").hide();
	});
	$(".close").click(function(){
		$(this).parent("div").hide();
		
		$mark.hide();
	})
	$videoLeft.click(function(){
		$(".vedio-popup").show();
		$mark.show();
	})
//右边字体颜色改变：
$(".news-right li").hover(function(){
	$(this).find("a").eq(0).css("color","#ffffff");
},function(){
	$(this).find("a").eq(0).css("color","#888898");
});

})


 