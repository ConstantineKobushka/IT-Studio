$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list-active");
    $(this).toggleClass("menu__btn-active");
  });

  $(".footer__title").on("click", function () {
    $(this).toggleClass("footer__title-active");
    $(this).next().slideToggle();
  });
});
