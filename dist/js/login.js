"use strict";require(["config"],function(){require(["jquery","header","footer","jquerycookie"],function(t,n,e,o){new Promise(function(e,o){t("header").load("/html/component/header.html",function(){n.init(),n.list(),e(),n.welcome()}),t("footer").load("/html/component/footer.html",function(){})}).then(function(){t("form").submit(function(e){t("#username").val(),t("#password").val();var o={username:t("#username").val(),password:t("#password").val()};return t.ajax({method:"post",data:o,dataType:"json",url:"http://localhost/wampserver/api/v1/login.php",success:function(e){console.log(e),1===e.code?(alert("登录成功！"),t.cookie("username",e.project.name,{path:"/"}),location.href="http://localhost:1000/index.html"):alert("登录失败！请重新登录")}}),e.preventDefault(),!1})})})});