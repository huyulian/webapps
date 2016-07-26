$(function(){

var $link = $('.link');
var $voteButton = $('.vote a');
	$('.enter').hover(function(){
		$link.css("background-position","0 -79px");
	}, function(){
		$link.css("background-position","0 0");
	});

	$('.game').hover(function(){
		$link.css("background-position","0 -158px");
	},function(){
		$link.css("background-position","0 0");
	});

	$voteButton.hover(function(){
		if($(this).hasClass('mark'))return;
		$(this).css("background-position","-232px 0");
	},function(){
		if($(this).hasClass('mark'))return;
		$(this).css("background-position","0 0");
	});

	$('.vote li img').hover(function(){
		var name = $(this).parent().attr("desc");
		$(this).attr("src", "images/vote_"+name+".png");
	},function(){
		var name = $(this).parent().attr("id");
		$(this).attr("src", "images/vote_"+name+".png");
	})
	$voteButton.click(function(){
		if($(this).hasClass('mark')){
			$(this).unbind();
			return;
		}

		var getNumber = {
				"voteNumber" : $(this).parent().attr("desc"),
			}
		$.ajax({
			"type" : "post",
			"dataType" : "json",
			"data":getNumber,
			"url" : "../sky/data/text.json",
			"success" : function(response){
				alert("选中的是"+getNumber.voteNumber);
			}
		})
		$(this).css("background-position","-464px 0");
		$(this).addClass('mark');
	});
})