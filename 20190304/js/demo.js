	$(function(){
	$("tr:even").css("background","skyblue").css("color","pink");
	$("tr:odd").css("background","#bbffaa");
	
	$("tr:even").hover(function(){
		$(this).css("background","yellow")
	},function(){
		$(this).css("background","skyblue")
	})
	$("tr:odd").hover(function(){
		$(this).css("background","yellow")
	},function(){
		$(this).css("background","#bbffaa")
	})
})