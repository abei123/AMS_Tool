function getFlights() {
	$.get("/ws.json", function(data) {
	  var a=JSON.parse(data);
	  $.each(a,function(k,v){
		 console.log(v); 
	  });
	});
}