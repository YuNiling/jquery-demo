$(document).ready(function(){
	// func1();
	func2();
});

//采用DOM方式判断复选框是否被选中
function func1(){
	var $cr = $("#cr");
	var cr = $cr[0];
	$cr.click(function(){
		if(cr.checked){
			alert("感谢你的支持！你可以继续操作！");
		}
	});
}

//采用jQuery对象方式判断复选框是否被选中
function func2(){
	var $cr = $("#cr");
	$cr.click(function(){
		if($cr.is(":checked")){
			alert("感谢你的支持！你可以继续操作！");
		}
	});
}
