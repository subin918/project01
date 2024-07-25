$(document).ready(function(){

  // 하위메뉴 마우스 hover시 slide
  $(".sub").hide();
  $(".sub_bg").hide();
  $(".gnb").mouseenter(function(){
    $(".sub_bg").stop().slideDown();
  });
  $(".gnb>li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
    $(this).children().not(".sub").stop().sldeUp();
  });
  $(".gnb>li").mouseleave(function(){
    $(".sub").stop().slideUp();
  });
  $("header").mouseleave(function(){
    $(".sub").stop().slideUp();
    $(".sub_bg").stop().slideUp();
  });


});