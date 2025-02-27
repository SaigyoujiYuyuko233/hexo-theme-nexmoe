$("table")
  .has("img")
  .addClass("nexmoe-album");

$("#nexmoe-content img").each(function() {
  $(this).attr("data-src", $(this).attr("src"));
  $(this).attr("src", "");
  $(this).addClass("lazyload");
  $(this).attr("referrerPolicy", "no-referrer");
});

$("article:not(.nexmoe-py) img").each(function() {
  var element = document.createElement("a");
  $(element).attr("data-fancybox", "gallery");
  $(element).attr("href", $(this).attr("data-src"));
  $(element).attr("title", $(this).attr("alt"));
  $(this).wrap(element);
});

$("#nexmoe-sidebar a").addClass("mdui-ripple");
mdui.mutation();

/*
 随机封面图
 */

let covers = $(".post-rand-cover");

for (let i = 0; i < covers.length; i++){
  covers[i].src = "https://uuz-blog.oss-cn-hangzhou.aliyuncs.com/images/post-covers/" + Math.round(Math.random() * (7-1)) + ".jpg";
}

