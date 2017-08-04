$(function() {
	$(".tl-dates").draggable({ 
		axis: "x" ,

		drag: function( event, ui ) {
//			if(ui.position.left>0){
//				$(".tl-dates").css("left",0);
//				return false;
//			};
			$(".flights").css("left",ui.offset.left);
		},
		stop: function( event, ui ) {
			//console.log("stop tl-dates");
			if(ui.position.top>0){
				$(".flights").animate({
				"top":0	
				},300);
				$(".row-labels").animate({
				"top":0	
				},300);
			}
		}
	});
	
	$(".flights").draggable({ 
		drag: function( event, ui ) {
//					
//					if(ui.position.top>0){
//						$(".flights").css("top",0);
//						return false;
//					};
			$(".row-labels").css("top",ui.position.top);
			$(".tl-dates").css("left",ui.offset.left-72);
		},
		stop: function( event, ui ) {
			console.log("stop flights");
			if(ui.position.top>0){
				$(".flights").animate({
				"top":0	
				},1);
				$(".row-labels").animate({
				"top":0	
				},1);
			}
		}
	});
	
	
});
/** TIMELINE **/
