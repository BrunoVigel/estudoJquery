const classActive = 'active'

$('.animais .tab-menu a').first().addClass(classActive)
$('.animais .item').first().addClass(classActive)

$('.animais .tab-menu a').on('click', function(e) {
    e.preventDefault();
    const itemId = $(this).attr('href')

    $('.animais .tab-menu a, .animais .item').removeClass(classActive)
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
})

$('.florestas .tab-menu a').first().addClass(classActive)
$('.florestas .item').first().addClass(classActive)

$('.florestas .tab-menu a').on('click', function(e) {
    e.preventDefault();
    const itemId = $(this).attr('href')

    $('.florestas .tab-menu a, .florestas .item').removeClass(classActive)
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
})
