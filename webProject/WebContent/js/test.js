/**
 * 
 */


$(function(){
	
	
	
	$(".num2").on("click",function(){
		
		$(".num2").animate({x:1},{duration:1000,step:function(x,fx){
			
			fx.elem = $(".num2").get(0);
			$(fx.elem).css("transform","scale("+(1-x)+")");
			$(fx.elem).css("y","0");
		}});
		
	});
	
	$(".num1").on("click",function(){
		$(".num1").animate({y:1},{duration:1000,step:function(y,fx){
			fx.elem = $(".num2").get(0);
			$(fx.elem).css("transform","scale("+y+")");
			$(fx.elem).css("x","0");
		}});
		
	});
	
	
});
