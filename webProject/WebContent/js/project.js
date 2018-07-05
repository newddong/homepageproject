/**
 * 
 */


$(function() {

	$(window).on("load resize", function() {
		var height = window.innerHeight;
		var width = window.innerWidth;
//		$(".screen1").height(height);
//		$(".screen2").height(height);
//		$(".screen3").height(height);
//		$(".screen4").height(height);
//		$(".screen5").height(height);
//		$(".screen6").height(height);
//		$(".screen7").height(height);
//		$(".screen8").height(height);
//		$(".screen9").height(height);
//		$(".screen10").height(height);
//		$(".screen11").height(height);
		$(".main").height(height);
		$(".intro").height(height);

	}); //load resize end
	
	
	for(var i=0;i<4;++i){
		
		(function(i){$(".children").children().eq(i).on("click",function(){
			
			$(".children").children().eq(i).toggleClass('on');
			console.log(i);
			
			
		})})(i);
		
	};






}); //javascript end