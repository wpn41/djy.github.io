$(function(){
	//电子书轮播
	$(".layerEbookBan").tyslide({
		boxh:217,//盒子的高度
		w:334,//盒子的宽度
		h:217,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:3,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#fff",//普通控制按钮的颜色
		controlsCurrentColor:"#f7f7f7",//当前控制按钮的颜色
		isShowNumber:false    //切记这块一定不能加分号....
    });
    
    //电子书的滑动菜单
    $("#ebook #ebookTitle li").mouseover(function(){
    	//把当前的li菜单点亮,其余的兄弟移除点亮
    	$(this).addClass("current").siblings().removeClass("current")
    	//获取菜单的索引
    	var index=$(this).index();
    	//隐藏所有的内容
    	$("#ebook .ebookClassRig").hide();
    	//显示索引对应的内容
    	$("#ebook .ebookClassRig").eq(index).show();	
    })
    
    //电子书排行榜
    $("#ebookRank li").mouseover(function(){
    	
    	//初始状态就是所有的标题显示,图片隐藏
//  	console.debug($("#ebookRank li .rankIMG"))
        $("#ebookRank li .rankIMG").hide()
        $("#ebookRank li .rankText").show()
    	//当前li上的图片显示,标题隐藏(默认)
    	$(this).find(".rankIMG").show();
    	$(this).find(".rankText").hide();
    })
    
    //服装轮播
	$(".layerClothBan").tyslide({
		boxh:340,//盒子的高度
		w:424,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:3,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#fff",//普通控制按钮的颜色
		controlsCurrentColor:"#f7f7f7",//当前控制按钮的颜色
		isShowNumber:false,   //切记这块一定不能加分号....
    });
    
    //服装的滑动菜单
    $("#cloth #ClothTitle li").mouseover(function(){
    	//把当前的li菜单点亮,其余的兄弟移除点亮
    	$(this).addClass("current").siblings().removeClass("current")
    	//获取菜单的索引
    	var index=$(this).index();
    	//隐藏所有的内容
    	$("#cloth .publicCon").hide();
    	//显示索引对应的内容
    	$("#cloth .publicCon").eq(index).show();	
    })
    
     //户外轮播
	$(".layerOutdoorBan").tyslide({
		boxh:340,//盒子的高度
		w:424,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:3,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#fff",//普通控制按钮的颜色
		controlsCurrentColor:"#f7f7f7",//当前控制按钮的颜色
		isShowNumber:false,    //切记这块一定不能加分号....
		
    });
    
    //户外的滑动菜单
    $("#outdoors #outdoosTitle li").mouseover(function(){
    	//把当前的li菜单点亮,其余的兄弟移除点亮
    	$(this).addClass("current").siblings().removeClass("current")
    	//获取菜单的索引
    	var index=$(this).index();
    	//隐藏所有的内容
    	$("#outdoors .publicCon").hide();
    	//显示索引对应的内容
    	$("#outdoors .publicCon").eq(index).show();	
    })
    
     //户外轮播
	$(".layerChildrenBan").tyslide({
		boxh:340,//盒子的高度
		w:424,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:3,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#fff",//普通控制按钮的颜色
		controlsCurrentColor:"#f7f7f7",//当前控制按钮的颜色
		isShowNumber:false,   //切记这块一定不能加分号....
		liNumber:10 //控制按钮的右边距
    });
    
    //户外的滑动菜单
    $("#children #childrenTitle li").mouseover(function(){
    	//把当前的li菜单点亮,其余的兄弟移除点亮
    	$(this).addClass("current").siblings().removeClass("current")
    	//获取菜单的索引
    	var index=$(this).index();
    	//隐藏所有的内容
    	$("#children .publicCon").hide();
    	//显示索引对应的内容
    	$("#children .publicCon").eq(index).show();	
    })
    
    //推广商品的滚屏效果
    $("#popularizeTitle li").mouseover(function(){
    	$(this).addClass("current").siblings().removeClass("current")
    	$("#popContent").stop(true,false).animate({"left":-1200*$(this).index()},200)
    })
    
    //首页跳转楼层的效果  :分析 鼠标移入展开,鼠标移走隐藏 还原   就跟淘宝 京东类似
    $("#floorScroll li").hover(function(){
    	
       //移動到每個li上面都有不同的顏色,並且顏色是固定不變的,所以考慮用索引來获取颜色
       var colorArray=["#93d56f","#f55828","#ba9eee","#ff7494","#c2ed51","#5dd2fd","#f868bd","#666"];
       //把索引对应的颜色设置给对应的li
//     console.debug(colorArray[$(this).index()])//遍历出每个颜色给当前的li
        $(this).css({"background-color":colorArray[$(this).index()],"background-position-x":"-40px"});//设置
        //文字数组
		var textArray=["推荐","图书","服装","户外","童装","家居","推广","顶部"];
		//把索引对应的文字设置给当前的li,为了方便于定位文本位置,加入了span标签
		$(this).html("<span>"+textArray[$(this).index()]+"</span>");
		//速度太快时,防止残影,清空队列并拉到终点,快速设置为默认宽度
		//方法1
		$("#floorScroll li").stop(true,true).css("width","40px");
		
		//移入事件
       $(this).animate({"width":"80"},200)
    },function(){
    	//移出事件
    	$(this).animate({"width":"40"},200)
    	$(this).css({"background-color":"#dedede","background-position-x":"0px"})//设置
//  	$(this).text("")
        $(this).html("")//文本为空
    })
    
    //返回顶部
    $("#floorScroll li:last").click(function(){
    	$("html,body").animate({"scrollTop":"0px"})
    })
    
    //获取当前的位置与顶部距离的偏移值  在代码里面设置class=floor来标识
    //点击楼层跳转到对应的楼层
     $("#floorScroll li:not(:last)").click(function(){
     	//图标的索引值
     	var index=$(this).index();
     	//获取当前的位置与顶部距离的偏移值 
     	var floorTopValue=$(".floor").eq(index).offset().top
     	//动画跳转到指定的楼层
     	$("html,body").animate({"scrollTop":floorTopValue},400)
     	
     })
     
     //二维码的制作
     $("#disRight .c2").hover(function(){
     	$("#QRcode").stop(true,false).animate({left:"-100px",opacity:"100"})
     },function(){
     	$("#QRcode").stop(true,false).animate({left:"39px",opacity:"0"})
     })
    
    
    //注册滚动条事件
    $(window).scroll(function(){
    	//定义变量滚动条距离滚动顶部距离得值
    	var topDisValue=$(window).scrollTop()
    	
    	if(topDisValue>300)
    	{
    		$("#topSearchFix").slideDown(); //展开
    		
    		//显示楼层滚动
    		$("#floorScroll").fadeIn();
    		
    		//把搜索移动到固定的搜索里面来
    		$("#SearchLogoWhite").after($("#search"))
    	}
    	else
    	{
    		//动画执行完毕后必须通过回调函数的方式   把搜索框移动到原来的位置,免得动画没执行完毕就一下子收尾
    		$("#topSearchFix").slideUp(function(){
    			$("#shoppingCart").after($("#search"))
    		}) 
    		
    		//收起
    		$("#floorScroll").fadeOut();
//  		$("#shoppingCart").after($("#search"))
    	}
    })
});
