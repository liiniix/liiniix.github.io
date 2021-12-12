$(document).ready(function() {

    $('body').on('click', '#btnLong', function(){
        $('#short-div').slideUp('slow',function(){
            $('#long-div').slideDown();
        });
        
    })

    $('body').on('click', '#btnShort', function(){
        $('#long-div').slideUp('slow',function(){
            $('#short-div').slideDown();
        });
    })

    $('.collapsible').click(function(e){
        $(e.target).next('.content').slideToggle('slow', function(){
            $(e.target).toggleClass('active');
        });
    })
});