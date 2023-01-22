    $(document).ready(function() {

        $.each($('.checkbox'), function(index, val) {
            if($(this).find('input').prop('checked')==true){
                $(this).addClass('active'); 
            }
        });
        $(document).on('click', '.checkbox', function(event) {
            if($(this).hasClass('active')){
                $(this).find('input').prop('checked',false);
                document.body.setAttribute('dark', '');
                       
            }else{
                $(this).find('input').prop('checked',true);
                document.body.removeAttribute('dark');
                    
            }
            $(this).toggleClass('active');
    
            return false;
        }); 
 
    });

    

    