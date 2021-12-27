$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

$('.menu-nav a[href^="#"').on('click', function(e) {
	e.preventDefault();

	const id = $(this).attr('href'),
		  menuHeight = $('.menu').innerHeight(),
		  targetOffset = $(id).offset().top

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500)
})

$('.logo').on('click', function(e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: 0
	}, 500)
});

$('section').each(function() {
	const height = $(this).height(),
		  offesetTop = $(this).offset().top,
		  menuHeight = $('.menu').innerHeight(),
		  id = $(this).attr('id'),
		  $itemMenu = $('a[href="#' + id + '"]')


	$(window).on('scroll', function() {
		const scrollTop = $(window).scrollTop();

		if(offesetTop - menuHeight < scrollTop && offesetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active')
		} else {
			$itemMenu.removeClass('active')
		}
	})
})