const footer = document.createElement('footer');
const footerContainer = document.createElement('div');
const wrapper = document.createElement('div'); 
const social = document.createElement('div');
const footerH4 = document.createElement('h4');
const icon1 = document.createElement('i');
const icon2 = document.createElement('i');
const icon3 = document.createElement('i');
const footerLogo = document.createElement('img')

$(footerContainer).addClass('container');
$(wrapper).addClass('wrapper');
$(footerH4);
$(footerLogo).attr({
    class: 'footerLogo',
    src: './img/logo1.png',
})
$(social).addClass('social')
$(icon1).addClass('fab fa-linkedin-in')
$(icon2).addClass('fab fa-instagram')
$(icon3).addClass('fab fa-facebook-f')


$('body').append(
    $(footer)
        .append($(footerContainer)
            .append($(wrapper)
                .append($(footerH4)
                    .append(footerLogo))
                .append($(social)
                    .append(icon1)
                    .append(icon2)
                    .append(icon3)
    )))
);

/*

<footer>
    <div class="container">
        <div class="wrapper">
            <h4><img class="footerLogo"  src="..."></h4>
            <div class="social">
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-facebook-square"></i>
            </div>
        </div>
    </div>
</footer>

*/