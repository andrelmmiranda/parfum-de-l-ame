$(()=>{

    $(window).on({
        scroll: function(){
            if($(window).scrollTop() >= 400){
                $('.top').fadeIn();
            } else{
                $('.top').fadeOut();
            }
        },
    });

    $('.top').on({
        click: function(){
            $('html, body').animate({
                scrollTop: 0
            },800);
        }
    });

    $('input, textarea').on({
        keyup: function(){
            if(isNaN($(this).val())){
                $(this).removeClass('fail');
                $(this).addClass('success');
            } else{
                $(this).removeClass('success');
                $(this).addClass('fail');
            }
        }
    })

    $('input[type="email"]').on({
        keyup: function(){
            if((/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/).test($('input[type="email"]').val())){
                $(this).removeClass('fail');
                $(this).addClass('success');
            } else{
                $(this).removeClass('success');
                $(this).addClass('fail');
            }
        }
    })

    $('input, textarea').on({
        keyup: function(){
            var teste = $('input[type="text"]').hasClass('success') && $('input[type="email"]').hasClass('success') && $('textarea').hasClass('success')
            console.log(teste)


            if($('input[type="text"]').hasClass('success') && $('input[type="email"]').hasClass('success') && $('textarea').hasClass('success')){
                $('button[type="submit"]').prop('disabled', false)
            } else{
                $('button[type="submit"]').attr('disabled', true)
            }
        }
    })

})