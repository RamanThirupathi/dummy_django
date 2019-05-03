(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.moving-label').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================*/

})(jQuery);