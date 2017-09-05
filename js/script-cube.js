if ( Modernizr.csstransforms3d && check3dStatus() ) {
    console.log('3d supported!');
    onTransform();

    var turn = 0,
        count = 0;
    
    var first_halfZ = $('.container').height() / 2;
    
    
    // Первоначальные настройки куба
    if (Modernizr.preserve3d) {
    
        $('.side').css('transform', 'translateZ(-' + first_halfZ + 'px)');
        $('.side').css('transform-origin', '');
        
        $('.side.active').css('transform', 'translateZ(' + first_halfZ + 'px)');
        
        resizeSides(first_halfZ);
    } else {
    
        $('.side').css('transform', 'perspective(' + first_halfZ * 6 + 'px) rotateX(180deg) rotateY(0deg) rotateZ(0deg)');
        $('.side').css('transform-origin', '50% 50% -' + first_halfZ + 'px');
        
        $('.side.active').css('transform', 'perspective(' + first_halfZ * 6 + 'px)');
        $('.side.active').css('transform-origin', '50% 50% -' + first_halfZ + 'px');
    
        resizeSidesIE(first_halfZ);
    }
    
    // Подстраиваем куб под размеры окна
    $(window).resize(function(){
        var halfZ = $('.container').height() / 2;
        if ( Modernizr.csstransforms3d && check3dStatus() )
        {
            onTransform();
            if (Modernizr.preserve3d)
            {
                $('.side.active').css('transform', 'translateZ(' + halfZ + 'px)');
                resizeSides(halfZ);
            } else {
                $('.side.active').css('transform', 'perspective(' + halfZ * 6 + 'px)');
                $('.side.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
                resizeSidesIE(halfZ);
            }
        } else {
            $('.side').css('transform', '');
            offTransform();
        }
        
    });
    
    // Поворачиваем куб по прокрутке колеса мыши
    window.addEventListener('wheel', function(e) {
        var delta = e.deltaY || e.detail || e.wheelDelta;

        if ( Modernizr.csstransforms3d && check3dStatus() )
        {
            onTransform();
            e.preventDefault();
            if (delta > 0) {
                if (count === 0) {
                    if (Modernizr.preserve3d) {

                        clickAndTurn(90);
                    } else {
                        clickAndTurnIE(90);
                    }
                }

                count = 1;
            } else {
                if (count === 0) {
                    if (Modernizr.preserve3d) {

                        clickAndTurn(-90);
                    } else {
                        clickAndTurnIE(-90)
                    }
                }

                count = 1;
            }
        } else {
            offTransform();
        }
        
    });
} else {
    console.log('3d not supported');
    offTransform();
}

/*
 *  Навигация
 */
$('#logo').click(function(e) {
    e.stopPropagation();
    e.preventDefault();

    $('#menu li[data-menu=1]').click();
})
$('#next-screen').click(function(e) {
    e.stopPropagation();
    e.preventDefault();

    $('#menu li[data-menu=2]').click();
})

$('#menu li').click(function() {
    var menu = $(this).attr('data-menu'),
        current_menu = $('li.active').attr('data-menu'),
        new_active = $('.layes-0' + menu),
        halfZ = $('.container').height() / 2,
        turn = 90,
        link = $(this).find('a');

    if (menu === current_menu) {
        return;
    }

    if ( Modernizr.csstransforms3d && check3dStatus() )
    {
        onTransform();
        if (Modernizr.preserve3d) {
            if (count === 0) {
    
                $('#menu li').removeClass('active');
                $(this).addClass('active');
            
                $('.side-faces').css('transition', 'all 1.5s ease-in-out');
            
                $('.side').not('.active').css('transform', 'translateZ(-' + halfZ + 'px)');
                $('.side').not('.active').css('transform-origin', '');
            
                if (menu > current_menu)
                {
                    new_active.css('transform', 'rotateX(-90deg) translateY(' + halfZ + 'px)');
                    new_active.css('transform-origin', 'center bottom 0px');
                } else {
                    new_active.css('transform', 'rotateX(-270deg) translateY(-' + halfZ + 'px)');
                    new_active.css('transform-origin', 'center top 0px');
            
                    turn = -90;
                }
            
                if (count === 0) {
                    $('.side-faces').css('transform', 'rotateX('+turn+'deg)');
                }
            
                count = 1;

                animateSvg();
            
                setTimeout(function() {
                    $('.side.active').removeClass('active')
                    new_active.addClass('active');
            
                    $('.side.active').css('transform', 'translateZ(' + halfZ + 'px)');
                    resizeSides(halfZ);
            
                    $('.side-faces').css('transition', 'all 0s ease-in-out');
                    $('.side-faces').css('transform', 'rotateX(0deg)');
            
                    $('.side.active').css('transform', 'translateZ(' + halfZ + 'px)');
            
                    count = 0
                }, 1501);
            }
        } else {
            if (count === 0) {
    
                $('#menu li').removeClass('active');
                $(this).addClass('active');
    
                $('.side').css('transition', '0s');
            
                $('.side').not('.active').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(0deg) rotateY(180deg) rotateZ(180deg)');
                $('.side').not('.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
            
                if (menu > current_menu)
                {
                    new_active.css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg)');
                } else {
                    new_active.css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(90deg) rotateY(0deg) rotateZ(0deg)');
            
                    turn = -90;
                }
    
                // Задержка в 1мс, что бы отработали изменения new_active с transition 0s
                setTimeout(function() {
    
                if (count === 0) {
                    
                    $('.side.active').css('transition', 'all 1.5s ease-in-out');
                    new_active.css('transition', 'all 1.5s ease-in-out');
    
                    if (turn > 0) {
    
                        $('.side.active').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(90deg) rotateY(0deg) rotateZ(0deg)');
                        $('.side.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
    
                        new_active.css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
                
                    } else {
                
                        $('.side.active').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg)');
                        $('.side.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
    
                        new_active.css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
                    }
                }
            
                count = 1;

                animateSvg();
            
                setTimeout(function() {
                    $('.side.active').removeClass('active')
                    new_active.addClass('active');
            
                    $('.side').css('transition', '0s');
                    $('.side.active').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
                    $('.side.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
                    resizeSidesIE(halfZ);
            
                    count = 0
                }, 1501);
    
                }, 1);
            }
        }

    } else {
        offTransform();

        $('#menu li').removeClass('active');
        $(this).addClass('active');

        animateSvg();

        $('html, body').animate({
            scrollTop: $( link.attr('href') ).offset().top
        }, 500);
        return false;
    }
});

// Подстраиваем куб под размеры окна
    $(window).resize(function(){
        var halfZ = $('.container').height() / 2;
        if ( Modernizr.csstransforms3d && check3dStatus() )
        {
            onTransform();
            if (Modernizr.preserve3d)
            {
                $('.side.active').css('transform', 'translateZ(' + halfZ + 'px)');
                resizeSides(halfZ);
            } else {
                $('.side.active').css('transform', 'perspective(' + halfZ * 6 + 'px)');
                $('.side.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
                resizeSidesIE(halfZ);
            }
        } else {
            $('.side').css('transform', '');
            offTransform();
        }
        
    });

function resizeSides(halfZ) {
    var next_slide, prev_slide;

    $('.hexagone').css('transform', 'translateZ(-' + halfZ + 'px)');

    $('.side').not('.active').css('transform', 'translateZ(-' + halfZ + 'px)');
    $('.side').not('.active').css('transform-origin', '');

    if ($('.side.active').next().length)
    {
        $('.side.active').next().css('transform', 'rotateX(-90deg) translateY(' + halfZ + 'px)');
        $('.side.active').next().css('transform-origin', 'center bottom 0px');
    } else {
        $('.side:first-child').css('transform', 'rotateX(-90deg) translateY(' + halfZ + 'px)');
        $('.side:first-child').css('transform-origin', 'center bottom 0px');
    }

    if ($('.side.active').prev().length)
    {
        $('.side.active').prev().css('transform', 'rotateX(-270deg) translateY(-' + halfZ + 'px)');
        $('.side.active').prev().css('transform-origin', 'center top 0px');
    } else {
        $('.side:last-child').css('transform', 'rotateX(-270deg) translateY(-' + halfZ + 'px)');
        $('.side:last-child').css('transform-origin', 'center top 0px');
    }
}

function resizeSidesIE(halfZ) {
    var next_slide, prev_slide;

    $('.side').css('transition', 'all 1.5s ease-in-out');

    // $('.container').css('perspective', '0');
    // $('.hexagone').css('transform', 'perspective(' + halfZ * 6 + 'px)');
    $('.side-faces').css('transform', 'translateZ(' + halfZ + 'px)');
    // $('.side-faces').css('transform', 'translateZ(' + halfZ + 'px)');

    $('.side').not('.active').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(0deg) rotateY(180deg) rotateZ(180deg)');
    $('.side').not('.active').css('transform-origin', '50% 50% -' + halfZ + 'px');

    if ($('.side.active').next().length)
    {
        $('.side.active').next().css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg)');
    } else {
        $('.side:first-child').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg)');
    }

    if ($('.side.active').prev().length)
    {
        $('.side.active').prev().css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(90deg) rotateY(0deg) rotateZ(0deg)');
    } else {
        $('.side:last-child').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(90deg) rotateY(0deg) rotateZ(0deg)');
    }

    $('.side').css('transition', '0s');
}

function clickAndTurn(turn) {
    var halfZ = $('.container').height() / 2;

    $('.side-faces').css('transition', 'all 1.5s ease-in-out');
	$('.side-faces').css('transform', 'rotateX('+turn+'deg)');

    if (turn > 0) {

        if ($('.side.active').next().length)
        {
            $('.side.active').removeClass('active').next().addClass('active');
        } else {
            $('.side.active').removeClass('active');
            $('.side:first-child').addClass('active');
        }

    } else {

        if ($('.side.active').prev().length)
        {
            $('.side.active').removeClass('active').prev().addClass('active');
        } else {
            $('.side.active').removeClass('active');
            $('.side:last-child').addClass('active');
        }
    }

    animateSvg();

    setTimeout(function() {
        checkActiveMenu();
        resizeSides(halfZ);
        
        $('.side-faces').css('transition', 'all 0s ease-in-out');
    	$('.side-faces').css('transform', 'rotateX(0deg)');
    
    	$('.side.active').css('transform', 'translateZ(' + halfZ + 'px)');

        count = 0
    }, 1501);
}

function clickAndTurnIE(turn) {
    var halfZ = $('.container').height() / 2;

    $('.side').css('transition', 'all 1.5s ease-in-out');

    if (turn > 0) {

        $('.side.active').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(90deg) rotateY(0deg) rotateZ(0deg)');
        $('.side.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
    
        if ($('.side.active').next().length)
        {
            $('.side.active').next().css('transform', 'perspective(' + halfZ * 6 + 'px)');
            // $('.side.active').next().css('transform-origin', '50% 50% 0px');
        } else {
            $('.side:first-child').css('transform', 'perspective(' + halfZ * 6 + 'px)');
            // $('.side:first-child').css('transform-origin', '50% 50% 0px');
        }
    
        if ($('.side.active').prev().length)
        {
            $('.side.active').prev().css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(180deg) rotateY(0deg) rotateZ(0deg)');
            // $('.side.active').prev().css('transform-origin', '50% 50% 0px');
        } else {
            $('.side:last-child').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(180deg) rotateY(0deg) rotateZ(0deg)');
            // $('.side:last-child').css('transform-origin', '50% 50% 0px');
        }

        if ($('.side.active').next().length)
        {
            $('.side.active').removeClass('active').next().addClass('active');
        } else {
            $('.side.active').removeClass('active');
            $('.side:first-child').addClass('active');
        }

    } else {

        $('.side.active').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg)');
        $('.side.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
    
        if ($('.side.active').next().length)
        {
            $('.side.active').next().css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(-180deg) rotateY(0deg) rotateZ(0deg)');
            // $('.side.active').next().css('transform-origin', '50% 50% 0px');
        } else {
            $('.side:first-child').css('transform', 'perspective(' + halfZ * 6 + 'px) rotateX(-180deg) rotateY(0deg) rotateZ(0deg)');
            // $('.side:first-child').css('transform-origin', '50% 50% 0px');
        }
    
        if ($('.side.active').prev().length)
        {
            $('.side.active').prev().css('transform', 'perspective(' + halfZ * 6 + 'px)');
            // $('.side.active').prev().css('transform-origin', '50% 50% 0px');
        } else {
            $('.side:last-child').css('transform', 'perspective(' + halfZ * 6 + 'px)');
            // $('.side:last-child').css('transform-origin', '50% 50% 0px');
        }

        if ($('.side.active').prev().length)
        {
            $('.side.active').removeClass('active').prev().addClass('active');
        } else {
            $('.side.active').removeClass('active');
            $('.side:last-child').addClass('active');
        }
    }

    animateSvg();

    setTimeout(function() {
        checkActiveMenu();

        $('.side').css('transition', '0s');
        $('.side.active').css('transform', 'perspective(' + halfZ * 6 + 'px)');
        $('.side.active').css('transform-origin', '50% 50% -' + halfZ + 'px');
        resizeSidesIE(halfZ);
        
        // $('.side-faces').css('transition', 'all 0s ease-in-out');
        // $('.side-faces').css('transform', 'rotateX(0deg)');
    
        // $('.side.active').css('transform', 'translateZ(' + halfZ + 'px)');

        count = 0
    }, 1501);
}

function animateSvg() {
    console.log(1)
    if ($('.layes-02').hasClass('active') || $('li[data-menu=2]').hasClass('active')) {

        console.log(2)

        var svg4 = new Walkway({
            selector: '#ps3',
            duration: 5000
        }).draw();
        var svg4 = new Walkway({
            selector: '#ps2',
            duration: 7000
        }).draw();
        var svg4 = new Walkway({
            selector: '#ps4',
            duration: 5000
        }).draw();
    }
}

function checkActiveMenu() {
    var active_side = $('.side.active').attr('data-anchor');

    $('#menu li').removeClass('active');
    console.log(active_side)

    $.each( $('#menu li'), function(index, el) {
        console.log($(this).attr('data-menuanchor'))
        if ($(this).attr('data-menuanchor') === active_side) {
            $(this).addClass('active');
            return;
        }
    });
}

function check3dStatus() {
    if ( ($('html').hasClass('desktop') || $('html').hasClass('tablet')) && $(window).width() >= 1024 && $(window).height() >= 600) {
        return true;
    } else {
        return false;
    }
}

function offTransform() {
    console.log('try off transform');

    $('.container').addClass('off-transform');
    $('.hexagone').addClass('off-transform');
    $('.side-faces').addClass('off-transform');
    $('.side').addClass('off-transform');
}

function onTransform() {
    console.log('try off transform');

    $('.container').removeClass('off-transform');
    $('.hexagone').removeClass('off-transform');
    $('.side-faces').removeClass('off-transform');
    $('.side').removeClass('off-transform');
}