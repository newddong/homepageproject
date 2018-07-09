/**
 * 
 */


$(function() {
	
	var height = window.innerHeight;
	var width = window.innerWidth;
	if(window.innerWidth>=1920){
	width = 1920;
	}
	else if(window.innerWidth<=640){
		width = 640;	
	}
	$(".main").width(width);
	$(".intro").height(height);
	$(".intro").width(width);
	$(".menubar_content").width(width);
	var verticalbar = $(".intro").height()+$(".screen1").height()+$(".screen2").height()+$(".screen3").height()+$(".screen4").height()+$(".screen5").height()+$(".screen6").height();
	verticalbar = verticalbar-$(".screen6").height()*0.25;
	$(".verticalbar").css('top',verticalbar+"px");
	$(".verticalbar").height($(".screen6").height()*0.5);
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
	
	$(window).on("resize", function() {
		height = window.innerHeight;
		width = window.innerWidth;
		if(window.innerWidth>=1920){
		width = 1920;
		}
		else if(window.innerWidth<=640){
			width = 640;	
		}
		$(".screen1").height(width/2.14);
		$(".screen2").height(width/2.14);
		$(".screen3").height(width/2.14);
		$(".screen4").height(width/2.14);
		$(".screen5").height(width/2.44);
		$(".screen6").height(width/2.75);
		$(".screen7").height(width/2.75);
		$(".screen8").height(width/1.75);
		$(".screen10").height(width/2.14);
		
		
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
		
		
		verticalbar = $(".intro").height()+$(".screen1").height()+$(".screen2").height()+$(".screen3").height()+$(".screen4").height()+$(".screen5").height()+$(".screen6").height();
		verticalbar = verticalbar-$(".screen6").height()*0.25;
		$(".verticalbar").css('top',verticalbar+"px");
		$(".verticalbar").height($(".screen6").height()*0.5);
		
		$(".main").width(width);
		$(".intro").height(height);
		$(".intro").width(width);
		$(".menubar_content").width(width);
		
		
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
				if(index == i){
					$(".children").children().eq(index).addClass('on');
				}
				else{
					$(".children").children().eq(index).removeClass('on');
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