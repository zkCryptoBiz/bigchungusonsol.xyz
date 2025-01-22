import collection from 'easter-egg-collection'

$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});



// Show more text option 
    var showChar = 190;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";
    
    //Cut content based on showChar length
    if ($(".toggle-text").length) {
        $(".toggle-text").each(function() {

            var content = $(this).html();
            console.log(content);
     
            if(content.length > showChar) {
     
                var contentExcert = content.substr(0, showChar);
                var contentRest = content.substr(showChar, content.length - showChar);
                var html = contentExcert + '<span class="toggle-text-ellipses">' + ellipsestext + ' </span> <span class="toggle-text-content"><span>' + contentRest + '</span><a href="javascript:;" class="toggle-text-link">' + moretext + '</a></span>';
     
                $(this).html(html);
            }
        });
    }

    
    
    //Toggle content when click on read more link
    $(".toggle-text-link").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });