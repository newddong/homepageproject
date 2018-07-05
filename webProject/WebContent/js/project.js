/**
 * 
 */


$(function() {

	$(window).on("load resize", function() {
		var height = window.innerHeight;
		var width = window.innerWidth;
		$(".screen1").height(height);
		$(".screen2").height(height);
		$(".screen3").height(height);
		$(".screen4").height(height);
		$(".content").height(height);

	}); //load resize end
	
	
	for(var i=0;i<4;++i){
		
		(function(i){$(".children").children().eq(i).on("click",function(){
			
			$(".children").children().eq(i).toggleClass('on');
			console.log(i);
			
			
		})})(i);
		
	};






}); //javascript end