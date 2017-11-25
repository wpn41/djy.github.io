$(function(){
	//主banner轮播
	$("#slideBox").tyslide({
		boxh:430,//盒子的高度
		w:1000,//盒子的宽度
		h:400,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
		isShowNumber:true
    });
    
    /*树状菜单结构轮播*/
	    $("#mainmenu li").hover(function(){   //鼠标移入
					//添加活动的样式
					$(this).find("p").addClass("current")
					//显示当前的主菜单对应的子树状显示出来
					$(this).find(".submenu").show()
				},function(){                         //鼠标移出
					//移除活动样式
					$(this).find("p").removeClass("current")
					//显示当前的主菜单对应的子树状隐藏起来
					$(this).find(".submenu").hide()
				});
				
	//产品列表里面的热卖畅销
	$("#rightHot .rightBook li").eq(0).find("img").css("margin-top","0px");
	$("#rightHot .rightBook li").mouseover(function(){
		//初始状态
		$("#rightHot .rightBook li").css("height","42px");
		$(this).css("height","148px");
		$("#rightHot .rightBook li").find("img").css("margin-top","-18px");
		$(this).find("img").css("margin-top","0px");
	});
});


			