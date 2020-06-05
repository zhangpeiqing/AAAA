
$(function() {
    $(".x_close").click(function(){
        $('.mask,.mask_t').fadeOut()
    })
    setTimeout(function(){
        $('.mask,.mask_t').fadeOut()
    },6000)

    $('.nav li').each(function(index){
	    $(this).mouseenter(function(){
	    	$(this).addClass('hover').siblings('li').removeClass('hover')
	       $('.tabcon').hide().stop().eq(index).show()
	    })
	})

	$('.navs li').each(function(index){
	    $(this).mouseenter(function(){
	    	$(this).addClass('hover').siblings('li').removeClass('hover')
	       $('.tabtable').hide().stop().eq(index).show()
	    })
	})
	$("#weon").hover(function(){
		$(".we").show()
	},function(){
		$(".we").hide()
	})

	// 点击跳跃
	$('.fixed_r a').click(function () {
			$('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 500);
			return false;
	});
})
