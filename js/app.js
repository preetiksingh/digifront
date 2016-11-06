$(document ).ready(function() {
  $('.second-nav').affix({
    offset: {
      top: 760
    }
  });
  count=3

  $(".add-btn").click(function(){
    $(".violation-input").append('<input type="text" placeholder="Violation Number"  class="mar-20 mar-small" id=' + '"violation-' + count + '">' )
  });

  // $('#scroll-content').scrollspy({target: "#scroll-target"});


  $("#secondary-nav ul.nav li a").each(function() {
    var href = window.location.href.slice(0,-1);
    var path = this['href'];
    if (window.location.pathname != '/' && href == path) {
      $('#secondary-nav ul.nav li:first').removeClass('active');
      $(this).parent().addClass('active');
    }
  });


  $(".search").click(function(){
   var boro_no = $('#borough-select').val();
   var house_no = $('#house-no').val();
   var street = $('#street').val();
   var params = { 
    boro: boro_no,
    houseno: house_no,
    street: street
  }

  var url = "http://a810-bisweb.nyc.gov/bisweb/PropertyProfileOverviewServlet?" + $.param(params)
  console.log(url);
  window.location=url;
});



  $(function() {
    $('#secondary-nav a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 75
          }, 1000);
          return false;
        }
      }
    });
  });

$("#scroll-target ul li a[href^='#']").on('click', function(e) {
 e.preventDefault();
 var hash = this.hash;
 $('#scroll-content').animate({
     scrollTop: $(hash).offset().top
   }, 700, function(){
     window.location.hash = hash;
   });

});

});
