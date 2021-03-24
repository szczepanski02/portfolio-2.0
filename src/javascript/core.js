/* preloader */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add("fade-out");
    }, 1000);
    setTimeout(() => {
        document.getElementById('preloader').style.display = "none";
    }, 2000);
});

/* navbar */
$(document).ready(function() {
    $(document).scroll(function(event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

/* search system */

function sreachAction() {

    let wordList = ['usługi', 'services', 'kalkulator', 'calculator', 'cennik', 'price', 'price list', 'projekty', 'projects', 'wcp', 'cat', 'kontakt', 'contact', 'privacy', 'policy', 'polityka', 'prywatność'];

    let sreachQuestion = document.getElementById('sreachWord').value.toLowerCase();
    let sreachWord = sreachQuestion.split(' ');
    let questionN = sreachWord.length;

    /* scroll to element - section */
    const services = document.querySelectorAll('.services');
    const contact = document.getElementById('contact');

    for (i = 0; i < questionN; i++) {
        if (wordList.indexOf(sreachWord[i]) !== -1) {
            if (localStorage.userLang == 'pl') {
                document.getElementById('sreachWord').placeholder = 'Szukaj';
            } else {
                document.getElementById('sreachWord').placeholder = 'Search';
            }
            /* do zrobienia: kalkulator, cennik, projekty, wcp, cat, privacy, policy, polityka, prywatności + ang */
            /* usługi */
            if (sreachWord[i] == 'usługi') {
                document.getElementById('sreachWord').value = '';
                if (window.screen.width <= 768) {
                    services[1].scrollIntoView();
                } else {
                    services[0].scrollIntoView();
                }
            }

            /* kontakt */
            else if (sreachWord[i] == 'kontakt') {
                document.getElementById('sreachWord').value = '';
                contact.scrollIntoView();
            }

        } else if (sreachWord[i] === '') {
            if (localStorage.userLang == 'pl') {
                document.getElementById('sreachWord').placeholder = 'Musisz coś wpisać';
            } else {
                document.getElementById('sreachWord').placeholder = 'You have to type something';
            }

        } else {
            document.getElementById('sreachWord').value = '';
            if (localStorage.userLang == 'pl') {
                document.getElementById('sreachWord').placeholder = 'Nie znaleziono';
            } else {
                document.getElementById('sreachWord').placeholder = 'Not found';
            }
        }
    }
}

$('input[type=sreach]').on('keydown', function(e) {
    if (e.which == 13) {
        sreachAction();
    }
});
$('#sreachBtn').on('click', function(e) {
    sreachAction();
});

/* input for phone only numbers */
$('[type=tel]').on('change', function(e) {
    $(e.target).val($(e.target).val().replace(/[^\d\.]/g, ''));
});
$('[type=tel]').on('keypress', function(e) {
    keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    return keys.indexOf(event.key) > -1;
});


/* contact modal */
const contactModalBtn = document.querySelectorAll('.contactBtnAction');
const chooseType = document.getElementById('choose-contact-type');
const contactForm = document.getElementById('modal-contact-form');

contactModalBtn.forEach(btnEl => {
    btnEl.addEventListener('click', function() {
        document.querySelector('#contactModal .modal-body h5').textContent = 'Wybierz formę kontaktu';
        chooseType.style.display = 'inline';
        contactForm.style.display = 'none';
    });
});

document.getElementById('mail-contact').addEventListener('click', function() {
    contactModalForm();
});
document.getElementById('phone-contact').addEventListener('click', function() {
    $("#contactModal").modal('hide');
});
document.getElementById('fb-contact').addEventListener('click', function() {
    $("#contactModal").modal('hide');
    window.open(
        'https://www.facebook.com/rszczepanski.web',
        '_blank'
    );
});
document.getElementById('facebookBtn').addEventListener('click', function() {
    window.open(
        'https://www.facebook.com/rszczepanski.web',
        '_blank'
    );
});

function contactModalForm() {
    document.querySelector('#contactModal .modal-body h5').textContent = 'Wypełnij formularz kontaktowy';
    chooseType.style.display = 'none';
    contactForm.style.display = 'inline';
}

/* scroll to */
const servicesSection = document.querySelectorAll(".scroll-to-services");
servicesSection.forEach(el => {
    el.addEventListener('click', function() {
        if (window.screen.width >= 992) {
            document.getElementById('services-desktop').scrollIntoView({
                behavior: 'auto',
                block: 'center',
            });
        } else {
            document.getElementById('services-mobile').scrollIntoView({
                behavior: 'auto',
                block: 'start',
            });
        }
    });
});
const wcpSection = document.querySelectorAll(".scroll-to-wcp");
wcpSection.forEach(el => {
    el.addEventListener('click', function() {
        if (window.screen.width <= 768) {
            document.getElementById('WCP').scrollIntoView({
                behavior: 'auto',
                block: 'start',
            });
        } else {
            document.getElementById('WCP').scrollIntoView({
                behavior: 'auto',
                block: 'center',
            });
        }
    });
});