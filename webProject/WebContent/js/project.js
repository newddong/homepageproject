/**
 * 
 */


$(function() {
	
	var height = window.innerHeight;
	var width = window.innerWidth;
	if(window.innerWidth>=1920){
		width = 1920;
	}
//	else if(window.innerWidth<=640){
//		width = 640;	
//	}
	
	$(".main").width(width);
	$(".intro").height(height);
	$(".intro").width(width);
	$(".menubar_content").width(width);
	
	if(width>=800){
		$(".screen11").height(width*0.447);
		$(".pic1wrap").css({top:0,left:0,width:'50%',height:'50%'});
		$(".pic2wrap").css({top:'50%',left:0,width:'25%',height:'50%'});
		$(".pic3wrap").css({top:'50%',left:'25%',width:'25%',height:'50%'});
		$(".pic4wrap").css({top:0,left:'50%',width:'25%',height:'100%'});
		$(".pic5wrap").css({top:0,left:'75%',width:'25%',height:'50%'});
		$(".pic6wrap").css({top:'50%',left:'75%',width:'25%',height:'50%'});
	}
	else{
		$(".screen11").height(width*4*0.447);
		$(".pic1wrap").css({top:0,left:0,width:'100%',height:'25%'});
		$(".pic2wrap").css({top:'25%',left:0,width:'50%',height:'25%'});
		$(".pic3wrap").css({top:'25%',left:'50%',width:'50%',height:'25%'});
		$(".pic4wrap").css({top:'50%',left:0,width:'50%',height:'50%'});
		$(".pic5wrap").css({top:'50%',left:'50%',width:'50%',height:'25%'});
		$(".pic6wrap").css({top:'75%',left:'50%',width:'50%',height:'25%'});
	}
	
	$(window).on("resize", function() {//화면 사이즈를 변경할 때
		
		height = window.innerHeight;
		width = window.innerWidth;
		if(window.innerWidth>=1920){
			width = 1920;
		}
//		else if(window.innerWidth<=640){
//			width = 640;	
//		}
		$(".screen1").height(width/2.14);
		$(".screen2").height(width/2.14);
		$(".screen3").height(width/2.14);
		$(".screen5").height(width/2.44);
		$(".screen6").height(width/2.75);
		$(".screen7").height(width/2.75);
		$(".screen8").height(width/1.75);
		$(".screen10").height(width/2.14);
		
		$(".screen4").height(width*1645/1920);
		$(".screen4 .movie").height(width*500/1920);
		$(".screen4 .text").height(width*300/1920);
		$(".screen4 .sc4background").height(width*677/1920);
		$(".screen4 .sc4background2").height(width*167/1920);
		$(".screen4 .child.num1").css('background-size',width*155/1920+"px "+width*417/1920+"px");
		$(".screen4 .child.num2").css('background-size',width*158/1920+"px "+width*561/1920+"px");
		$(".screen4 .child.num3").css('background-size',width*290/1920+"px "+width*609/1920+"px");
		$(".screen4 .child.num4").css('background-size',width*210/1920+"px "+width*807/1920+"px");
		
		for(var g=0;g<$(".screen4 .round").length;g++){
			if($(".screen4 .round").eq(g).hasClass("on")){
				$(".screen4 .round").eq(g).height(width*300/1920);
				$(".screen4 .round").eq(g).width(width*300/1920);
			}else{
				$(".screen4 .round").eq(g).height(width*150/1920);
				$(".screen4 .round").eq(g).width(width*150/1920);
			}
		}
		
		if(width/height>=1){//정상 사이즈일 때
			$(".screen9").height(width*0.678);
			$(".screen11").height(width*0.447);
			$(".pic1wrap").css({top:0,left:0,width:'50%',height:'50%'});
			$(".pic2wrap").css({top:'50%',left:0,width:'25%',height:'50%'});
			$(".pic3wrap").css({top:'50%',left:'25%',width:'25%',height:'50%'});
			$(".pic4wrap").css({top:0,left:'50%',width:'25%',height:'100%'});
			$(".pic5wrap").css({top:0,left:'75%',width:'25%',height:'50%'});
			$(".pic6wrap").css({top:'50%',left:'75%',width:'25%',height:'50%'});
			
			$(".screen9 .pic1").width(width*(480/1920)).height(width*0.678*326/1200).css('position','absolute');
			$(".screen9 .pic2").width(width*(480/1920)).height(width*0.678*326/1200).css('position','absolute');
			$(".screen9 .text1").width(width*(600/1920)).height(width*0.678*300/1200).css('position','absolute');
			$(".screen9 .text2").width(width*(600/1920)).height(width*0.678*300/1200).css('position','absolute');
			
			$(".screen1 .text").css("fontSize",width/100);
			$(".screen2 .text").css("fontSize",width/100);
			$(".screen3 .text").css("fontSize",width/100);
			
		}
		else{//모바일과같이 세로가 길 때
			$(".screen1").height(height);
			$(".screen2").height(height);
			$(".screen3").height(height);
			$(".screen5").height(height);
			$(".screen6").height(height);
			$(".screen7").height(height);
			
			$(".screen1 .text").css("fontSize",width/50);
			$(".screen2 .text").css("fontSize",width/50);
			$(".screen3 .text").css("fontSize",width/50);
			
			
			$(".screen9").height(width*1.6);
			$(".screen11").height(width*4*0.447);
			$(".pic1wrap").css({top:0,left:0,width:'100%',height:'25%'});
			$(".pic2wrap").css({top:'25%',left:0,width:'50%',height:'25%'});
			$(".pic3wrap").css({top:'25%',left:'50%',width:'50%',height:'25%'});
			$(".pic4wrap").css({top:'50%',left:0,width:'50%',height:'50%'});
			$(".pic5wrap").css({top:'50%',left:'50%',width:'50%',height:'25%'});
			$(".pic6wrap").css({top:'75%',left:'50%',width:'50%',height:'25%'});
			
			$(".screen9 .pic1").width(width*480/800).height(width*326/800).css('position','relative');
			$(".screen9 .pic2").width(width*480/800).height(width*326/800).css('position','relative');
			$(".screen9 .text1").width(width*600/800).height('').css('position','relative');
			$(".screen9 .text2").width(width*600/800).height('').css({'position':'relative','text-align':'left'});
		}
		
		
		
		$(".main").width(width);
		$(".intro").height(height);
		$(".intro").width(width);
		$(".menubar_content").width(width);
		
		
		
		
		$(".screen4 .text").css("fontSize",width/100);
		$(".screen4 .round").css("fontSize",width/20);
		
		$(".screen5 .text").css("fontSize",width/100);
		$(".screen6 .text").css("fontSize",width/100);
		$(".screen7 .text").css("fontSize",width/100);
		$(".screen8 .text").css("fontSize",width/100);
		$(".screen9").css("fontSize",width/100);
		$(".screen10").css("fontSize",width/100);
		$(".screen5 .round1").height(width*0.0417).width(width*0.0417);
		$(".screen5 .logo").height(width*0.0625);
		$(".screen6 .round2").height(width*0.0417).width(width*0.0417);
		$(".screen7 .round3").height(width*0.0417).width(width*0.0417);
		
		$(".pdfdown").width(width*(250/1920)).height(width/2.14/45);
		$(".buynow").width(width*(200/1920)).height(width/2.14/45);
		$(".screen8 .logo").width(width*(304/1920)).height(width*(96/1920));
		
		
		
		
	}); //load resize end
	
	
	$(".roundoff").on("click",function(){
		$(".menubar .menubar_content .nav").css('display','unset');
		$(".roundoff").stop().animate({z:1},{queue:false,duration:500,step:function(z){
			$(".roundoff").css("transform","scale("+(1-z)+")");
		}}).animate({x:1},{queue:false,duration:500,step:function(x){
			$(".roundon").css("transform","scale("+x+")");
			
		}}).animate({y:150},{queue:false,duration:600,step:function(y){
			$(".round").css("transform","scale("+y+")");
		},complete:function(){
			for(var i=0;i<6;++i){
				$(".menubar .menubar_content .nav li p").eq(i).slideDown(400);
				
			}
		}});
		$(".roundoff").css({x:0,y:0});
		$(".roundon").css({x:0,y:0});
		
	});
	
	$(".roundon").on("click",function(){
		for(var i=0;i<6;++i){
			$(".menubar .menubar_content .nav li p").eq(i).slideUp(400);
			
		}
		$(".roundon").stop().animate({x:1},{queue:false,duration:500,
			step:function(x){
			$(".roundon").css("transform","scale("+(1-x)+")");
			}}).animate({y:149},{queue:false,duration:600,
			step:function(y){	
			$(".round").css("transform","scale("+(150-y)+")");
			}}).animate({z:1},{queue:false,duration:500,
			step:function(z){
			$(".roundoff").css("transform","scale("+z+")");
			},complete:function(){
				$(".menubar .menubar_content .nav").css('display','none');
				
			}
			});
		$(".roundoff").css({x:0,y:0});
		$(".roundon").css({x:0,y:0});
	});

	
	
	
	
	var children = [0,1,2,3];
	for(var i=0;i<4;++i){
		
		(function(i){$(".children").children().eq(i).on("click",function(){
			children.forEach(function(elt, index, array) {
				if(index != i){
					$(".children").children().eq(index).removeClass('on');
					$(".step").children().eq(index).removeClass('on');
					$(".step").children().eq(index).height(width*150/1920);
					$(".step").children().eq(index).width(width*150/1920);
				}
				else{
					$(".children").children().eq(index).addClass('on');
					$(".step").children().eq(index).addClass('on');
					$(".step").children().eq(index).height(width*300/1920);
					$(".step").children().eq(index).width(width*300/1920);
					
				}
			})
		})})(i);
		
	};
	
	$(window).scrollTop($(".content").position().top);
	
//	var previous = $(window).scrollTop();	
//	var moved = false;
//	$(window).on("scroll",function(){
//		var cur = $(this).scrollTop();
//		var direction;
//		if(cur>previous){
//			direction='D';
////			$(".round").text(cur + ":DN:"+moved);
//		}
//		else{
//			direction='U';
////			$(".round").text(cur + ":UP:"+moved);
//		}
//		
//		previous = cur;
//		
//		if(direction=='D'){
//			for(var k=0;k<$(".content").children().length;k++){
//				if(cur<$(".content").children().eq(k).position().top){
//					$(window).scrollTop($(".content").children().eq(k).position().top-1);
//					break;
//				}
//			}
//		}
//		else if(direction=='U'){
//			for(var j=$(".content").children().length-1;j>=0;j--){
//				
//				var top = $(".content").children().eq(j).position().top;
//				
//				
//				if(cur>top){
//					$(window).scrollTop($(".content").children().eq(j).position().top+1);
//					break;
//				}
//				else if(cur<$(".content").position().top){
//					$(window).scrollTop(0);
//					break;
//				}
//				
//			}
//			
//			
//		}
//		
//		
//		
//		
//		
//	})	
		
		
		
		
		
		
		
		
		
		
		
		
	

}); //javascript end