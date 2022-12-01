$(function() 
{

	$(".item").css("background-color", "#cecece");
	
	$("#cart_items").css("border", "4px solid black");

	$("img").css("border", "1px groove blue");
	
	$(".item > label").css("text-decoration", "underline");
	
	$("#cart_container button").css("color", "red");
	
	$(".item label+label").css("color", "white");
	
	$(":contains('€')").css("color", "green");
	
	$("input").css("color", "green");
	
	$("div:empty").css("background-color", "yellow");

	$(".item:first").css("background-color", "red");
	
	$(".item:last").css("background-color", "red");
	
	$("img[src*='camiseta']").css({"border-color": "green","border": "4px solid "});


});
