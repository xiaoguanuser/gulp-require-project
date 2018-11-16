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
		})
	})
})