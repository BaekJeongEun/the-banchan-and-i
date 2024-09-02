//留� �됯� �좊땲硫붿씠�� �④낵
function aniWaveEffect(){
    $("#taste .a-button-wave").click(function(){
        $("#taste .a-button-wave__circle--size-s").removeClass("active");
        $("#taste .a-button-wave__circle--size-m").removeClass("active");
        $("#taste .a-button-wave__circle--size-l").removeClass("active");
        $(this).children(".a-button-wave__circle--size-s").addClass("active");
        $(this).children(".a-button-wave__circle--size-m").addClass("active");
        $(this).children(".a-button-wave__circle--size-l").addClass("active");
    });
    $("#amount .a-button-wave").click(function(){
        $("#amount .a-button-wave__circle--size-s").removeClass("active");
        $("#amount .a-button-wave__circle--size-m").removeClass("active");
        $("#amount .a-button-wave__circle--size-l").removeClass("active");
        $(this).children(".a-button-wave__circle--size-s").addClass("active");
        $(this).children(".a-button-wave__circle--size-m").addClass("active");
        $(this).children(".a-button-wave__circle--size-l").addClass("active");
    });
    $("#packaging .a-button-wave").click(function(){
        $("#packaging .a-button-wave__circle--size-s").removeClass("active");
        $("#packaging .a-button-wave__circle--size-m").removeClass("active");
        $("#packaging .a-button-wave__circle--size-l").removeClass("active");
        $(this).children(".a-button-wave__circle--size-s").addClass("active");
        $(this).children(".a-button-wave__circle--size-m").addClass("active");
        $(this).children(".a-button-wave__circle--size-l").addClass("active");
    });
}

//蹂꾩젏
var numOfStars = function(){
    var checked = document.querySelector(".stars input:checked");        
    var disp = document.querySelector(".rates");

    disp.style.display = "block";
    disp.innerHTML = checked.value;
};

$(document).ready(function () {

	/* 2023-01-14 �꾧린 (S)*/
	//留� �됯� �좊땲硫붿씠�� �④낵
	aniWaveEffect();	
	
	//蹂꾩젏 臾멸뎄 �몄텧
    $(".stars").on("click", numOfStars);
    
    //�ы넗�꾧린�꾩껜蹂닿린
    if($(".crop").length > 0) {
    	$(".crop .slider").slick({
        	autoplay: false,
	        dots: false,
	        slidesToShow: 6,
	        slidesToScroll: 1,
	        arrows: false,
	        centerMode: false,
	        infinite: false,
	        variableWidth : true //異붽��� �듭뀡	        
	    });
	    
	    $(".crop .slick-slider .slick-slide .delete").click(function(){
	        $(this).parent().hide();
	    });
	    
	    var length = $(".crop .slick-slider .slick-slide").length;
	    var total = length - 1;
	    //alert(length);
	    $(".crop .slick-slider .slick-slide").first().addClass("upload").css("display","block").append("<span>�ъ쭊0/"+total+"</span>");
    }
    
    //5�� �댁긽 �꾧린 �ъ쭊泥⑤� �꾧린 泥댄겕
    $(".checks .check-btn").click(function(){
        $(this).toggleClass("on");
    });
    
    //�꾧린�앹뾽 �リ린(怨듯넻)
	$(".cd-popup").on("click", function(event){
		if( $(event.target).is(".cd-popup-close") || $(event.target).is(".cd-popup") ) {
			event.preventDefault();
			$(this).removeClass("is-visible");
		}
	});
    
    //�대윴 �먯씠 醫뗭븯�댁슂
    /*$("#reviewWrite1 .review-tags span").on("click", function(){
        $(this).toggleClass("active");
    });*/
    
    /* 2023-01-14 �꾧린 (E)*/

});

//Enter�� 李⑤떒
$(".textarea-box.short textarea").keypress(function(e) { 
	if (e.keyCode == 13) e.preventDefault(); 
});