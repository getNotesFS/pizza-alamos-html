$(document).ready(function(){
 
    $('#openMAP').click(function(){ 
      $('#mapaLA').toggleClass("showLA"); 
      $('.footerMainContainer').toggleClass("showLA");
      $('.LINE_YELLOW').toggleClass("showLA");
      $('footer').toggleClass('bg-darkLA');
    });

  });
