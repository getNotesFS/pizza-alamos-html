$(document).ready(function () {
  $("#openMAP").click(function () {
    $("#mapaLA").toggleClass("showLA");
    $(".footerMainContainer").toggleClass("showLA");
    $(".LINE_YELLOW").toggleClass("showLA");
    $("footer").toggleClass("bg-darkLA");
  });

  $("#carritoMenu").hover(function () {
    $(".cartListFlotante").removeClass("hideLA");
    $(".cartListFlotante").mouseover(function () {
      $(".cartListFlotante").removeClass("hideLA");
      $(".cartListFlotante").mouseout(function () {
        $(".cartListFlotante").addClass("hideLA");
      
      });
    });
  });

  $(".tabsLogRegistro .logg").click(function () {
    if ($("#registerTab").hasClass("active")) {
      $(".tabsLogRegistro .regg").removeClass("opActive");

      if (!$(".tabsLogRegistro .logg ").hasClass("opActive")) {
        $(".tabsLogRegistro .logg").toggleClass("opActive");
      }
    }
  });

  $(".tabsLogRegistro .regg").click(function () {
    if ($("#loginTab").hasClass("active")) {
      $(".tabsLogRegistro .logg ").removeClass("opActive");

      if (!$(".tabsLogRegistro .regg").hasClass("opActive")) {
        $(".tabsLogRegistro .regg").toggleClass("opActive");
      }
    }
  });
});
