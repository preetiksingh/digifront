$( document ).ready(function() {
  $('.second-nav').affix({
    offset: {
      top: 760
    }
  });
  count=3

  $(".add-btn").click(function(){
        $(".violation-input").append('<input type="text" placeholder="Violation Number"  class="mar-20 mar-small" id=' + '"violation-' + count + '">' )
    });

  $('#secondary-nav > ul.nav li a').click(function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    console.log('working');
});

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});
