const menuToggles = [
    {
        Button: '#user, #user__desktop',
        Toggle: '#user__drop',
        Up: ''
    },

    {
        Button: '#search',
        Toggle: '#search__drop',
        Up: ''
    },

    {
        Button: '#__language',
        Toggle: '#language__list',
        Up: '#currency__list'
    },

    {
        Button: '#__currency',
        Toggle: '#currency__list',
        Up: '#language__list'
    }

]

const toggleIcons = [
    {
        Button: '#search',
        Show: '#search>.search__icon',
        Hide: '#search>.close__icon'
    }
]

$(document).ready(function () {
    menuToggles.forEach(element => {
        $(element.Button).click(() => {
            $(element.Toggle).slideToggle('slow');
        });
    });


    toggleIcons.forEach(element => {
        $(element.Hide).css('display', 'none');
        let status = true;
        $(element.Button).click(() => {
            if (status) {
                $(element.Show).hide();
                $(element.Hide).show();
                status = false;
            }
            else {
                $('.fa-plus').show();
                $('.fa-minus').hide();
                $(element.Show).show();
                $(element.Hide).hide();
                status = true;
            }
        });
    });

    $('.menu__btn').click(function () {
        if ($(this).parent('li').next('.offcanvas__sublist').hasClass('active')) {
            $(this).removeClass('fa-minus').addClass('fa-plus');
            $(this).parent('li').next('.offcanvas__sublist').slideUp().removeClass('active');
        }
        else {
            $('.menu__btn').addClass('fa-plus').removeClass('fa-minus');
            $('.menu__btn').parent('li').next('.offcanvas__sublist').slideUp().removeClass('active');
            $(this).removeClass('fa-plus').addClass('fa-minus');
            $(this).parent('li').next('.offcanvas__sublist').slideDown().addClass('active');
        }
    });


    $('.offcanvas__left .offcanvas__sublist').slideUp();

    $('#btn__offcanvas').click(function () {
        if ($(this).next('.offcanvas__left').hasClass('active')) {
            $(this).next().css("transform", "translateX(-100%)").removeClass('active');
        }
        else {
            $(this).next('.offcanvas__left').css("transform", "translateX(0)").addClass('active');
        }
    });

    $('#btn__offcanvas__close').click(function () {
        $('.offcanvas__left').css("transform", "translateX(-100%)").removeClass('active');
    });

    $('.contact__wrapper .h5').click(function () {
        if ($(window).width() < 992) {
            if ($(this).next('.contact__toggle').hasClass('active')) {
                $(this).next('.contact__toggle').slideUp().removeClass('active');
                $(this).children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
            else {
                $('.contact__wrapper .h5').children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
                $('.contact__wrapper .contact__toggle').slideUp().removeClass('active');
                $(this).next('.contact__toggle').slideDown().addClass('active');
                $(this).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            }
        }
    });

    window.onload(function () {
        if (window.innerWidth >= 992) {
            $('.contact__wrapper .contact__toggle').slideDown('h5');
        }
    });
});

function countDown() {
    const dayRender = document.querySelector(".day__render");
    const hourRender = document.querySelector(".hour__render");
    const minRender = document.querySelector(".min__render");
    const secRender = document.querySelector(".sec__render");

    let today = new Date().getTime();
    let outDate = new Date("01/01/2023");
    let totalSecond = (outDate - today) / 1000;
    let days = Math.floor(totalSecond / 86400);
    let hours = Math.floor((totalSecond - days * 86400) / 3600);
    let minutes = Math.floor((totalSecond - days * 86400 - hours * 3600) / 60);

    let seconds = Math.floor(totalSecond % 60);

    dayRender.innerHTML = days;
    hourRender.innerHTML = hours.toString().padStart(2, '0');
    minRender.innerHTML = minutes.toString().padStart(2, '0');
    secRender.innerHTML = seconds.toString().padStart(2, '0');
}

let idCountDown = setInterval(countDown, 1000);

const button = document.getElementById("btn__home");
button.addEventListener("click", returnHome);

window.onscroll = function () {
    visibleReturnHomeButton();
}

function visibleReturnHomeButton() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}

function returnHome() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}