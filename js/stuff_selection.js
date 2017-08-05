$(document).ready(function(){
  var items_agregados = [];

  $('.productopreview').on('click', function(event){
    var $this = $(this);
    var bg = $this.find(".image-wrapper").css('background-image');
    bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
    var name = $this.find(".name").text();
    agregar(name, bg);
    renderList();

  });

  $('button#remove').on('click', function(event){
    event.preventDefault();
    items_agregados.pop();
    renderList();
  });

  function agregar(name, bg){

    var item = {
      name:name,
      imagen:bg
    }
    items_agregados.push(item);
    console.info(items_agregados);
  }

  function renderList(){
    var items_agregados_length = 0;
    var items_agregados_html = '';

    items_agregados.forEach(function( item ){

      items_agregados_html += '<div class="col-xs-2 col-sm-3 productopreview"><div class="image-wrapper" style="background-image:url('+item.imagen+')"><div class="name">'+item.name+'</div></div></div>';



    });

    $('#row_seleccionados').html(items_agregados_html);
    $('p#productos_seleccionados').html("Has seleccionado "+items_agregados.length+" artículos");

  }


});
