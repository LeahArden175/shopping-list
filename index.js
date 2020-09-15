
function addItem (){
    //create sumbit event
    $("#js-shopping-list-form").submit(event => {
        //prevent default behavior
        event.preventDefault();
        //create newItem
        const newItem = $(this).find('#shopping-list-entry').val();
            //add newItem to li
           $('.shopping-list').append(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
        });
        //When check button is pressed put line through word
    $('.shopping-list').on('click', ".shopping-item-toggle", function(event){
      console.log($(this));
        $(this).closest(".shopping-item-controls").siblings(".shopping-item").toggleClass('shopping-item__checked');
    });
        //when delete button is pressed remove item from li
    $('.shopping-list').on('click', ".shopping-item-delete", function(event){
        $(this).closest('li').remove();
    });
}
//call function
$(addItem);