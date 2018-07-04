/**
 * 
 */


$(function(){
	
	$(window).on("load resize",function(){
		var height = window.innerHeight;
		var width = window.innerWidth;
		$(".screen1").height(height);
		$(".screen2").height(height);
		$(".screen3").height(height);
		$(".screen4").height(height);
		$(".content").height(height);
		
	});//load resize end
	
	
	$(".children").children(0).on("mouseover",function(){
		
		$(".children").children(0).css({
			background:url("../img/children_01_on.png") no-repeat;
		});
		
		
		
	})//mouseover event end
	
	
	
	
	
	
	
});//javascript end







