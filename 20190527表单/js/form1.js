$(function(){
	//文本框获取焦点与失去焦点
	var $texts=$(':input');
	$texts.focus(function(){
		$(this).addClass('focus');
	}).blur(function(){
		$(this).removeClass('focus');
	})

	
})
