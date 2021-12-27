$('[data-group]').each(function() {
    const $allTarget = $(this).find('[data-target]'),
          $allClick = $(this).find('[data-click]'),
          activeClass = 'active'

    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);


    $allClick.on('click', function(e) {
        e.preventDefault();

        const id = $(this).data('click'),
              $target = $('[data-target="' + id + '"]')


        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);

        $target.addClass(activeClass);
        $(this).addClass(activeClass)

    })
})