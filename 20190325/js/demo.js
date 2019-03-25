$(function(){
	var $cate=$('div p:gt(0)');
	$cate.hide();
	var $btn=$('button');
	$btn.click(function(){
			$cate.show();
			$btn.hide();
	})
})
