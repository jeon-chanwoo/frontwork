$(() => {
    // 전체 내려오기
    /*
    $('.nav').mouseover(function() {
        $('.submenu').stop().slideDown();
    });
    $('.nav').mouseout(function() {
        $('.submenu').stop().slideUp();
    })
    */

    // 각각 내려오기
    $('.nav1>li').mouseover(function() {
        $(this).children('.submenu1').stop().slideDown();
    })
    $('.nav1>li').mouseout(function() {
        $(this).children('.submenu1').stop().slideUp();
    })

    // 이미지 fadeIn_Out 적용

    /*
    let x = $('#imgslide>img');
    let y = 3;
    setInterval(function() {
        y--;
        if(y == 0) {
            x.fadeIn();
            y=3;
        } else {
            x.eq(y).fadeOut();
        }
    }, 2000);
    */
})