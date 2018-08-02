// Write all your JavaScript and JQuery code in this file! :)
var num = 0 

$("#counter").on("click", function(){
	num++;
	$("#num").html(num);
	//alert("hello world!")
});

$("#reset").on("click", function(){
	num = 0;
	$("#num").html(num);
});