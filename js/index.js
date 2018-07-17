$(document).ready(function(){
	fun1();
	fun2();
	fun3();
});

//控制菜单栏
function fun1(){
	$(".has_children").click(function(){
		$(this).addClass("highlight")
				.children("a").show().end()
			.siblings().removeClass("highlight")
				.children("a").hide();
	});
}

//在一个id为table的表格的tbody中，如果每行最后一列中的checkbox没有被禁用
//则把这行的背景设为红色
function fun2(){
	$("#table>tbody>tr:has(td:last:has(:checkbox:enabled))").css("background-color","red");
	// :has() 选择器选取所有包含一个或多个元素在其内的元素，匹配指定的选择器。
	// :last 选择器选取最后一个元素
	// :checkbox 选择器选取类型为 checkbox 的 <input> 元素。
	// :enabled 选择器选取所有启用的表单元素。
}

//jQuery对象与DOM对象之间相互转换
function fun3(){
	//jQuery对象转换成DOM对象
	var $cr = $("#cr");                           //jQuery对象
	var cr1 = $cr[0];                             //DOM对象 
	var cr2 = $cr.get(0);                         //DOM对象 与上一行代码等价
	console.log(cr1.checked);                     //检测这个checkbox是否被选中
	console.log(cr2.checked);
	
	//DOM对象转换成jQuery对象
	var  cr_ = document.getElementById("cr");    //DOM对象 
	var $cr_ = $(cr_);                           //jQuery对象
	console.log(cr_.checked);
	console.log($cr_.is(":checked"));
	console.log($cr_.attr("checked") == "checked");
}




