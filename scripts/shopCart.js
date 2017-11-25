$(function(){
	
	//初始化
	totalPricesNumber();
	//点击+添加数量
	$("#cart .plus").click(function(){
//		console.debug($(this).prev().val)  //打印出来就是输入框中的值
      //找到输入框
     var numobj=$(this).prev()
      //获取输入框的值
      var numValue=parseInt(numobj.val()) 
      //把得到的值+1 赋值给输入框的值
     numobj.val(++numValue);
     
     //找到单价       获得内容 - text()、html() 以及 val()  text() - 设置或返回所选元素的文本内容    html() - 设置或返回所选元素的内容（包括 HTML 标记） val() - 设置或返回表单字段的值 

//   var rowsPrices=$(this).parent().prev().find("span").text()
//   //更新小计
//  $(this).parent().next().find("span").text((numValue*rowsPrices).toFixed(2))
      updateSubtotal (this,numValue)
      totalPricesNumber();
     
	});
	
	
	
	
	//点击-减少数量
	$("#cart .reduce").click(function(){
//		console.debug($(this).prev())
      //找到输入框
     var numobj=$(this).next()
      //获取输入框的值
      var numValue=parseInt(numobj.val()) 
      //把得到的值-1 赋值给输入框的值
      if(numValue>1)
      {
      	numobj.val(--numValue);
      }
//    else
//    {
//    	$(this).prop("disabled",true)
//    }
     //找到单价     

//   var rowsPrices=$(this).parent().prev().find("span").text()
//   //更新小计
//  $(this).parent().next().find("span").text((numValue*rowsPrices).toFixed(2))
//	})
       updateSubtotal (this,numValue)
       totalPricesNumber();
    });
	
	//失去焦点
	$("#cart .num").blur(function(){
		var numValue=Math.abs(parseInt($(this).val()));
		
//		isNaN()  全局函数判断一个数字是否是不是一个数字
	     if(isNaN(numValue))
	     {
	     	//如果不是一个数字,就报错
	     	$(this).next().next().css("display","block")
	     }
	     else
	     {
	     	//更新小计
	     	//是数字就更新数量
	     	$(this).val(numValue)  //小数了就变回原来的数字
	       updateSubtotal (this,numValue)
	       //正确的数字就隐藏
	       $(this).next().next().hide()
	       
	       totalPricesNumber();
	     }
	});
	
	//删除当前行
	$(".cartCont .delRows").click(function(){
		if(confirm("你确定要删除它么"))
		{
			$(this).parent().parent().remove()
		}
	})
	
	//全选   点击全选对应地下的全部选中
	$(".checkAll").click(function(){
		$(".cartCont .checkRows").prop("checked",$(this).prop("checked"))
		$(".checkAll").prop("checked",$(this).prop("checked"))
		
			totalPricesNumber();
		
	})
	
	//单机每一行选择框的事件
	$(".cartCont .checkRows").click(function(){
		
			totalPricesNumber();
		
	})
	
	//删除选中的商品  点击选中行   遍历出每一行
	$("#delSelected").click(function(){
		$(".checkRows").each(function(){
			if($(this).prop("checked"))
			{
				confirm("你确定要删除它么")
				$(this).parent().parent().remove();
				totalPricesNumber()
			}  
		})
	})
//	
	//更新小计
	function updateSubtotal(obj,numValue)
	{
		//找到单价       获得内容 - text()、html() 以及 val()  text() - 设置或返回所选元素的文本内容    html() - 设置或返回所选元素的内容（包括 HTML 标记） val() - 设置或返回表单字段的值 

     var rowsPrices=$(obj).parent().prev().find("span").text()
     //更新小计
     $(obj).parent().next().find("span").text((numValue*rowsPrices).toFixed(2))
	}
	
	
	//更新商品总的件数  选中的商品数量 选中商品的总价
	function totalPricesNumber(){
		//初始化
		var totalNum=0,selectedNum=0,selectedPrices=0;
		//遍历购物车  累计和
		$(".cartCont").each(function(){
//			console.debug($(this).find(".checkRows"))
              //遍历每一行选择框
           var  isRowsCheck=$(this).find(".checkRows").prop("checked")
           //找到行的数量
           var isRowsNum=parseInt($(this).find(".num").val())  
           //找到行的小计
           var isRowsPrice=parseInt($(this).find(".subtotal").find("span").text())
           if(isRowsCheck){
           	selectedNum+=isRowsNum
           	selectedPrices+=isRowsPrice
           }
          totalNum++;
		})
		
		//遍历结束就完成累加和,同时更新商品总的件数  选中的商品数量 选中商品的总价
		$("#itemTotal").text(totalNum)
		$("#selectTotalNum").text(selectedNum)
		$("#totalPrice").text(selectedPrices.toFixed(2))
		
	}	
})