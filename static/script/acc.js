"use strict";

// ACCORDION
$(document).ready(function() {
    var $title, $content;
    var $selector = $('.accordion').selector;
    var $title    = $($selector + ' .title');
    var $content  = $($selector + ' .text-container');
    var $close = function(){
        $title.removeClass('active');
        $content.slideUp(500).removeClass('open');			
    }
    $($selector).find('.title').on('click', function(e) {
        var $idTarget = $(this).data('target');
        var currentAttrValue = $(this).attr('href');
        if($(e.target).is('.active')) {
            $($idTarget).css({'display':'block'});
            $close();
        }else {
            $($idTarget).css({'display':'none'});
            $close();
            $(this).addClass('active');
            $($idTarget).slideDown(400).addClass('open'); 
        }
        e.preventDefault();
    });
});