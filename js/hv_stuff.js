$(document).ready(function(){
  var items = [{}];


  function fillCategorySelect(){
    categories.forEach(function callback( element, index ){
      var option = '<option value="'+index+'">'+element.name+'</option>';
      $('select#my_category').append( option );
    });
  }

  function renderList(){
    console.info( categories);
    var items_length = 0;
    var items_html = '';

    categories.forEach(function( element ){
      var category_items_length = element.items.length;
      var my_style = 'style="background-color:'+element.background+'; color:'+element.color+'"';
      if( category_items_length > 0 ){
        var category_title = category_items_length+' Articulo de  '+element.name;
        if(category_items_length > 1){
          category_title = category_items_length+' Articulos de  '+element.name;

        }

        items_html += '<li class="list-group-item active" '+my_style+'>'+category_title+'</li>';
        element.items.forEach(function(array_element){
        items_html += '<li class="list-group-item" '+my_style+'>'+array_element+'</li>';
        })
        items_length += category_items_length;
      }

    });


    $('p#counter').html('Tienes ' + items_length +' elementos');
    $('ul#items_list').html( items_html );
  }
  $('form#adding_list').on('submit', function( event ){
    event.preventDefault();
    var my_category = $('select#my_category').val();
    var array_of_texts = ( $('input#my_item').val() ).split(',');
    array_of_texts.forEach(function( element, index ){
      if( element.trim() ){
        categories[ my_category ].items.push( element );
      }
    });
    renderList();
    $('input#my_item').val('');
  });
  $('button#remove').on('click', function( event ){
    event.preventDefault();
    items.pop();
    renderList();
  });

  fillCategorySelect();
});
