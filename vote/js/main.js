$(function(){
	var $inforTitle = $('.infor-title li');
	var $characterButton = $(".character-button");
	var $introduceList = $(".introduce li");
	var infor = {
		"recommend":"《三国战纪》主机版是由台湾鈊象电子IGS原版团队打造，完美世界代理的16周年纪念续作。游戏继承<br>街机版《三国战纪》的经典玩法和特色，并突破性的增加了武将养成等全新系统，可进行最多4人联机<br>合作闯关，体验不同角色的操作特殊，感受游戏乐趣。<br>就在6月16日！ 《三国战纪》将以全新面貌登陆索尼Playstation4国服。<br>战火再燃新平台，你做好准备了吗？",
		"explain":"在《三国演义》中有着这么一句话，“一吕二马三典韦, 四关五赵六张飞, 黄许孙太两夏侯, 二张徐庞<br>甘周魏, 枪神张绣和文颜, 虽勇无奈命太悲, 三国二十四名将, 打末邓艾和姜维。”话虽如此，但对于三<br>国武将的排名人人心中各有不同。那你心中武神TOP1又会是谁呢？参与票选《三国战纪》主机版第<br>一武将，赢取索尼PS4主机，三国兔背包、京东卡等多重大礼。快快行动吧！",
		"mode":"从下列《三国战纪》主机版现有十一大武将中，选出3位你认为最厉害的武将，为TA投上一票。<br>1. 活动结束后，我们将从得票数最高的武将中抽取1名幸运玩家，送上PS4主机一台；<br>2. 所有登陆游民ID在论区留言的玩家，写出自己心目中排名第一的三国武将及理由.在后续版本研发。<br>活动结束后，我们将从中抽取幸运参与者，送上三国兔背包、京东卡等好礼。"
	}
//infor
$inforTitle.click(function(){
	$inforTitle.css({'background':'url(../vote/images/recommend_bg.png) no-repeat center center'});
	$inforTitle.find("div").css("display", "none");
	$(this).find("div").css("display","block");
	var name = $(this).attr("id");
	$("."+name+"-border").css("display", "none");
	var $prev = $("."+name+"-border").prevAll();
	var $next = $("."+name+"-border").nextAll();
	$next.css("display", "block");
	$prev.css("display", "block");
	$(this).css({'background':'url(../vote/images/explain_bg.png) no-repeat center center'});
	$(".infor-desc").find("p").html(eval('infor.'+name));
});


$characterButton.click(function(){
	var mythis = $(this);
	var _id = $(this).parent().attr("id");
	$.ajax({
		"type" : "get",
		"dataType" : "json",
		"url" : "../vote/data/test.json",
		"data":{id:_id},
		"success" : function(response){
			if(response.status<0){
				alert(response.message);
				return;
			}
			mythis.css({'background':'url(../vote/images/character_button.png) 0 0'});
			mythis.append('<p class="submite">已有<span class="span-cur">'+response.number+'</span>人支持</p>'); 		
		}
	});
	$(this).unbind();
});

//人物介绍
	$(".character-mark").hover(function(){
		$(this).find("div").hide();
		$(this).nextAll("div").show();
	}, function(){
		$(this).find("div").show();
		$(this).nextAll("div").hide();
	});

	$(".introduce-mark").hover(function(){
		$(this).show();
		$(this).prevAll("div").find("div").hide();
	}, function(){
		$(this).hide();
		$(this).prevAll("div").find("div").show();
	});

})