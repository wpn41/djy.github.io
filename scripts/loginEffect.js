$(function(){
	$("#loginTitle li").click(function(){
		$(this).addClass("current").siblings().removeClass("current")
		
		//让他的内容隐藏
		$(".logincon").hide();
		
		//显示当前的登录方式
		var index=$(this).index()
		if(index==0){
		//显示完成移动端登录后要执行动画效果
			$(".logincon").eq(index).show(function () {
				//二维码和手机的动画效果
				$("#qrCode").animate({"left":"23px"},function () {
					$("#phone").animate({"opacity":"100"});
					
					//当动画完成后过几秒钟,以动画方式复位
					setTimeout(function () {
						//动画方式把phone设置透明度为0,动画完成后再把二维码移动到中间
						$("#phone").animate({"opacity":"0"},function () {
							$("#qrCode").animate({"left":"90px"});
						});
					},2000);
				});
			});
		} 
		else{
			$(".logincon").eq(index).show();
			
			//切换为电脑登录时应该复位到初始状态
			$("#phone").css("opacity","0");
			$("#qrCode").css("left","90px");
		}
	});
	
})
