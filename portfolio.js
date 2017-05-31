$(document).ready(function() {
$(".whatsup").click(whatsupClicked);
function whatsupClicked()
 {
  $(".myNumber").fadeToggle();
}
if ($('#back-to-top').length) {
    var scrollTrigger = 100,
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
$("nav div ul li:nth-child(1)").click(click1);
function click1() {
  $("nav div ul li:nth-child(1)").toggleClass("active");
  $("nav div ul li:nth-child(2)").removeClass("active");
  $("nav div ul li:nth-child(3)").removeClass("active");
}
  $("nav div ul li:nth-child(2)").click(click2);
  function click2() {
    $("nav div ul li:nth-child(1)").removeClass("active");
    $("nav div ul li:nth-child(3)").removeClass("active");
    $("nav div ul li:nth-child(2)").addClass("active");
  }
  $("nav div ul li:nth-child(3)").click(click3);
  function click3() {
    $("nav div ul li:nth-child(1)").removeClass("active");
    $("nav div ul li:nth-child(2)").removeClass("active");
    $("nav div ul li:nth-child(3)").addClass("active");
  }
  $("nav div ul li:nth-child(2)").click(tille);
  function tille() {
    $(".myDetails").css("padding-top","60px");

  }
  $("nav div ul li:nth-child(3)").click(tilled);
  function tilled() {
    $("#works-head").css("padding-top","60px");

  }
})
