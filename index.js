$(function () {
  $(".button-up").bind("click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 400);
  });
});
