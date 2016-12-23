
$(function(){
    //var windowWidth = $(window).width();
    //var wH = $(window).height();
    //
    //$('.navbar-toggle').click(function () {
    //    $("body").removeAttr('style');
    //    $(".overflow").show();
    //    if (windowWidth > 767) {
    //        $(".menu").removeAttr("style");
    //    } else {
    //        var rh =50;
    //        $(".menu").css("height",wH-rh);
    //        $("body").css('overflow','hidden');
    //    }
    //});
    $('.menu i.icon-menu').click(function () {
        $(".menu").hide();
        $(".overflow").hide();
        $("body").removeAttr('style');
    });

    $('.icon-menu-1').click(function () {
        $(".menu").show();
        $(".overflow").show();
        $("body").css('overflow','hidden');
    });
	$('.btn-register.btn-1').click(function () {
        //$(".popup-register-now").removeClass("in").hide();
		//$(".modal-backdrop").remove()
		$("body").removeAttr("style")
		$("#register-popup-now").modal('toggle');
    });
	
    var nav = $('.header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > nav.position().top) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });

    var owl = $("#owl-demo");
    owl.owlCarousel({
        itemsCustom : [
            [320, 2],
            [480, 3],
            [768, 4],
            [1024, 5],
            [1366, 6]
        ],
        navigation : true
    });

    var ww = $(window).width();
    if(ww<=768){
        $('#slider').Thumbelina({
            orientation:'horizontal',
            $bwdBut:$('#slider .top'),
            $fwdBut:$('#slider .bottom')
        });
    }
    else{
        $('#slider').Thumbelina({
            orientation:'vertical',
            $bwdBut:$('#slider .top'),
            $fwdBut:$('#slider .bottom')
        });
    }

    $("#slider_zoom").elevateZoom({
        zoomType: "lens",
        lensSize: 200,
        gallery:'slider',
        galleryActiveClass: 'active',
        borderSize: 2,
        lensShape: "round"
    });

    $('.thumbelina li img').click(function(){
        $('#slider_zoom').attr('src',$(this).attr('src'));
        $('#slider_zoom').attr('data-zoom-image',$(this).attr('data-zoom-image'));
    });

    $('.icon-close').click(function(){
        $(this).parent().hide();
    });

    $('.dropdown-toggle').dropdown();

    $('#datetimepicker1').datetimepicker();

    $('#datetimepicker2').datetimepicker();
    $('#datetimepicker3').datetimepicker();
    $('#datetimepicker4').datetimepicker();
    $('#datetimepicker5').datetimepicker();

    $('.edit-change').click(function(){
        $(this).parent().hide();
        $(this).parent().parent().find('.box-change-2').show();
    });

    $('.edit-save').click(function(){
        $(this).parent().hide();
        $(this).parent().parent().find('.box-change-1').show();
    });

    $('.search button').click(function(){
        $('.search input').show();
    });



    $('.img-expert a').click(function(){
        $('.intro-product').hide();
        var boxProductInfo = $(this).data('id');
        $('.box-product-price .product-price').removeClass("active");
        var lt = $(this).parent().parent().parent().position().left;
        var wt = $(this).parent().parent().parent().outerWidth();
        var arl = 0;
        arl = lt + wt /2 ;
        $('.box-product-price .intro-product#'+boxProductInfo+' .after').css('left', arl);
        $('.box-product-price .intro-product#'+boxProductInfo+' .before').css('left', arl);
        $(this).parent().parent().addClass("active");
    });
})