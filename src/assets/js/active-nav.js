$(function () {
  var d = window.location;
  var c = $("ul.nav li a").filter(function () {
    return this.href == d || d.href.indexOf(this.href) == 0
  }).addClass("d-active").parent().parent()
});
