//解决jQuery与其他库的冲突:
//第一种jQuery库在其他库之后倒入
//第1种
function func1(){
	jQuery.noConflict();            //将变量$的控制权移交给prototype.js
	jQuery(function(){              //使用jQuery
		jQuery("p").click(function(){
			alert("第1种："+jQuery(this).text());
		});
	});
	$("pp").style.display = "none"; //使用prototype
}

//第2种
function func2(){
	var $j = jQuery.noConflict();  //自定义一个快捷方式
	$j(function(){                 //使用jQuery
		$j("p").click(function(){
			alert("第2种："+$j(this).text());
		});
	});
	$("pp").style.display = "none";//使用prototype
}

//第3种
function func3(){
	jQuery.noConflict();           //将变量$的控制权移交给prototype.js
	jQuery(function($){            //使用jQuery
		$("p").click(function(){
			alert("第3种："+$(this).text());
		});
	});
	$("pp").style.display = "none";//使用prototype
}

//第4种
function func4(){
	jQuery.noConflict();            //将变量$的控制权移交给prototype.js
	(function($){                   // 定义匿名函数并设置形参$
		$(function(){               //匿名函数内部的$均为jQuery
			$("p").click(function(){
				alert("第4种："+$(this).text());
			});
		});
	})(jQuery);                    //执行匿名函数且传递实参jQuery
	$("pp").style.display = "none";//使用prototype
}

//第二种jQuery库在其他库之前导入
func5();

function func5(){
	jQuery(function(){                 //直接使用jQuery，无需调用“jQuery.noConflict()”函数
		jQuery("p").click(function(){
			alert("第5种："+jQuery(this).text());
		});
	});                    
	$("pp").style.display = "none";    //使用prototype
}