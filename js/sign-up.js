$(document).ready(function(){
  /*$('#main-form').on('submit',function( event ){
    event.preventDefault();
  });*/
  $('input#name').focus(function(){
    var $this = $(this);
    $this
      .css({
        'opacity':0.5
      })
      .animate({
        'opacity':1
      }, 300);
  });

  $('#main-form .next-one input').on('change keyup',function(){
    var $this = $(this),
        text = $this.val(),
        $parent = $this.closest('.col-xs-12'),
        $next = $parent.next().find(".form-group");
    if( text ){
      $next.removeClass('hidden');
    }else{
      $next.addClass('hidden');
    }

  });
    });
