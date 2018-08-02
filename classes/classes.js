$("#bigButton").on("click", function(){
	$("p").toggleClass("big")
});

$("#hideButton").on("click", function(){
	$("p").toggleClass("hidden")
});

$("#rotateButton").on("click", function(){
	$("p").toggleClass("rotated");
});
