var $awardLogin = $(".award-login a");
var $awardLottery = $(".award-lottery a");
var $award = $("#award");
var $mask = $(".mask");
$(function(){
//已登录
$awardLogin.hover(function(){
	if($(this).hasClass("marker"))return;
	$awardLogin.css({'background-position': '0 -81px'});
}, function(){
	if($(this).hasClass("marker"))return;
	$awardLogin.css({'background-position': '0 0'});
});
$awardLogin.click(function(){
	$awardLogin.addClass("marker");
	$awardLogin.css({'background-position': '0 -162px'});
	if($(this).hasClass("marker"))return;
});
//已抽奖
$awardLottery.hover(function(){
	if($(this).hasClass("marker"))return;
	$awardLottery.css({'background-position': '0 -81px'});
}, function(){
	if($(this).hasClass("marker"))return;
	$awardLottery.css({'background-position': '0 0'});
});

$(".error").click(function(){
	var name = $(this).attr("id");
	$("#"+name+"Popup").css("display","none");
	$mask.css("display","none");
});
})

var speed = 100;
var time = "";
var a;
var apiData;
var j=0;
var i=0;
var round;
$(function () {
	$(".award-lottery").click(function() {
		$(this).unbind();
		$.ajax({
			type:"POST",
			dataType:"json",
			url:"data/test.json",
			success:function(rep){
				apiData = rep;
				a=rep.data;
				dispose();
			}
		});
	});
});

function dispose(){
	if(parseInt(apiData.status) == 0){
		getAwardHistory(parseInt(a));
	}else if(parseInt(apiData.status)>0){
		startLottery();
	}else {
		alert(apiData.message);
	}
		
}
function startLottery(){
	
	round = 30-7+parseInt(a);
	time = setInterval(playgame,speed); 
}
var playgame = function(){
	$(".cj").removeClass("cur");
	$("#cj"+i).addClass("cur");
	if(round>0){
		round--;
		clearInterval(time);
		time = setInterval(playgame, speed);
	} else {
		clearInterval(time);
		speed += 80;
		time = setInterval(playgame, speed);
	}
	if( a==i && round == 0){
		clearInterval(time);
		getAward(a);
	}
	i++;
	if(i>=10){
		i=0;
	}
}

function getAward(a){
	if(a == 3 || a == 8){
		$("#hide1Popup").css("display", "block");
		$mask.css("display","block");
	}else if(a == 4 || a == 9){
		$("#hide2Popup").css("display", "block");
		$mask.css("display","block");
	}else{
		if(a == 0){
			$award.html("PS4手柄");
		}else if (a == 1)
		{
			$award.html("iPhone 6S");
		}else if(a == 2){
			$award.html("鸡腿抱枕");
		}else if(a == 7){
			$award.html("三国萌兔");
		}else if(a == 6){
			$award.html("京东50元卡");
		}else if(a == 5){
			$award.html("PS4主机");
		}
		$("#hidePopup").css("display", "block");
		$mask.css("display","block");
	}
	$awardLottery.addClass("marker");
	$awardLottery.css({'background-position': '0 -162px'});
	}

function getAwardHistory(a){
	var desc = $("#cj"+parseInt(a)).attr("desc");
	if(a==3 || a==8){
			$('.popup1-text').html('您已获得<span>'+desc+'</span>');
			$('.history').show();
		}else if(a==4 || a==9){
			$('.popup1-text').html('您已获得“'+desc+'”');
			$('.history').show();

		}else {
			$('.popup1-text').html('您已获得<span>'+desc+'</span>');
			$('.history').show();
		}
		$('.mask').show();
	}



