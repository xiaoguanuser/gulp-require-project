require(["config"],function(){
	require(["jquery", "header", "template","footer"], function($,header,template,footer){
		 new Promise(function(resolve,reject){
		 	$("header").load("/html/component/header.html", function(){
				header.init();
				header.list();
				header.welcome();
				resolve();
			});
		 	$("footer").load("/html/component/footer.html", function(){
		 	});
		 
		 }).then(function(){
		 	$(".tit li").click(function(){
					$(".detail-options-list").eq($(this).index()).show().siblings().hide();
		 		})
		 }).then(function(){
		 		var str = location.search.slice(1);
		 		var arr = str.split("=");
		 		var obj = {};
		 		//console.log(obj);
		 		obj[arr[0]] = arr[1];
		 	//alert("aaa");
		 	$.ajax({
		 		method:"post",
		 		dataType:"json",
				data:obj,
		 		url:"http://localhost/wampserver/api/v1/detail.php",
		 	 	success: function(res){
		 			//console.log(res);
		 			var html = template("pro-detail",{products: res.product});
		 			//console.log(html);
		 			$(".detail-box").html(html);
		 			//点击小图让大图出现
					//点击切换文字和图片
		 			$(".right-list-banner li").click(function(){
						$(".left-img-box img").eq($(this).index()).show(500).siblings().hide(500);
					})
					$(".tit li").click(function(){
						$(".detail-img-box img").eq($(this).index()).show().siblings().hide();
					})
		 			//得到后台数据
		 			var _id = res.product.id;
					 	console.log(_id);
					 	var _img = $("#smallimg").attr("src");
					 	console.log(_img);
					 	var _title = $("#title").html();
					 	console.log(_title);
					 	var _price = $(".detail-price").html();
					 	console.log(_price);
					 	var cart = [];
					 	// var cart = $.cookie("cart");
					 	// arr = JSON.parse("cart");
		 		    $(".detail-btn-addcard").click(function(){
						//console.log("加入购物车");
						var currProduct = {
							id:_id,
							img:_img,
							title:_title,
							price:_price,
							amount:1
						};
						// var cart = $.cookie("cart");
						// //判断是否添加过购物车
						// if(cart){
						// 	cart=JSON.parse(cart);
						// }else{
						// 	cart = [];
						// }
						// //判断cart中是否存在商品对象
						// var has = cart.some(function(product){
						// 	if(product.id == currProduct.id){
						// 		//如果已经有选过的商品就把数量叠加
						// 		product.amount++;
						// 		return true;
						// 	}
						// 	return false;
						// });
						// if(!has);
						
						cart.push(currProduct);
						//var products = JSON.stringify(cart);
						//console.log(products);
				 		//console.log(JSON.stringify(cart));
						//查询cookie中是否存在已选购的商品
						$.cookie("cart",JSON.stringify(cart), {expires:10,path:"/"});
						//console.log("成功");
			 	   })
		 		}
		 	})
		})
	})
})