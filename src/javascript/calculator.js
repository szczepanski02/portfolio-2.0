const calcBtn = document.querySelectorAll('.calcBtn');
const calcObject = document.getElementById('calculatorModal');
const calcEndBtn = document.getElementById('calcEndBtn');
let btnList = calcObject.querySelectorAll('.button-group button');
let h5 = calcObject.querySelector('.modal-body h5');
const checkBoxList = document.querySelectorAll('input[type=checkbox]');
const checkBoxText = calcObject.querySelectorAll('.checkbox-group span');
var priceAdd = 0;
var checkAmountBar = 0;
var getBaseValue = 0;
const endScreen = document.getElementById('end-box');
const userSetup = document.getElementById('userSetup');
var userConfig;
const extraOptText = calcObject.querySelectorAll('.extra-option');
var bar = new ldBar(".priceBar", {
    "value": 0
});

var first = '';
var sec = '';
var th = '';

calcBtn.forEach(e => {
    e.addEventListener('click', function() {
        calcCore();
    });
});
calcEndBtn.addEventListener('click', () => {
    endCalcScreen();
});

/* end screen */
function endCalcScreen() {
    h5.textContent = 'Koszta twojej usługi zostały oszacowane!';
    endScreen.style.display = 'inline';
    calcObject.querySelector('.button-group').style.display = 'none';
    document.querySelector('.checkbox-group').style.display = 'none';
    calcEndBtn.style.display = 'none';
    if (checkBoxList[0].checked == false && checkBoxList[1].checked == false && checkBoxList[2].checked == false && checkBoxList[3].checked == false) {
        extraOptText[0].style.display = 'inline';
        extraOptText[0].textContent = 'BRAK';
    }

    /* checkbox selected opctions for display in end screen */
    if (userConfig == 'dev-website-info') {
        userSetup.textContent = 'Informacyjna strona internetowa';
    } else if (userConfig == 'dev-website-shop-onepage') {
        userSetup.textContent = 'Sklep internetowy typu One Page Application';
    } else if (userConfig == 'dev-website-blog-onepage') {
        userSetup.textContent = 'Portal internetowy (blog, forum) typu One Page Application';
    } else if (userConfig == 'dev-repair-app') {
        userSetup.textContent = 'Naprawa aplikacji internetowej';
    } else if (userConfig == 'seo-seo-info') {
        userSetup.textContent = 'Realizacja SEO prostej strony internetowej';
    } else if (userConfig == 'design-graphic') {
        userSetup.textContent = 'Projekt graficzny (illustracje, bannery)';
    } else if (userConfig == 'dev-website-shop-multipage') {
        userSetup.textContent = 'Sklep internetowy typu Multi Page Application';
    } else if (userConfig == 'dev-website-blog-multipage') {
        userSetup.textContent = 'Portal internetowy (blog, forum) typu Multi Page Application';
    } else if (userConfig == 'dev-repair-design') {
        userSetup.textContent = 'Poprawa stylistyki strony internetowej, nowe sekcje, podstrony';
    } else if (userConfig == 'seo-seo-expanded') {
        userSetup.textContent = 'Realizacja SEO rozbudowanego portalu internetowego';
    } else if (userConfig == 'seo-googleads') {
        userSetup.textContent = 'Kampania Google ADs, opracowanie strategii';
    } else if (userConfig == 'design-web') {
        userSetup.textContent = 'Projekt graficzny strony, portalu internetowego';
    }
}

function addPriceBar() {
    priceAdd = checkAmountBar * 350;
}

function calcCore() {

    /* start content reset */
    endScreen.style.display = 'none';
    calcEndBtn.style.display = 'none';
    if ($(window).width() < 992) {
        calcObject.querySelector('.right-side img').style.display = 'none';
    } else {
        calcObject.querySelector('.right-side img').style.display = 'inline';
    }
    $(window).on('resize', function() {
        if ($(window).width() < 992) {
            calcObject.querySelector('.right-side img').style.display = 'none';
        } else if (fr == 'dev' && sec == 'seo' && th == 'design') {
            calcObject.querySelector('.right-side img').style.display = 'inline';
        }
    });
    calcObject.querySelector('.priceBar').style.display = 'none';
    calcObject.querySelector('.button-group').style.display = 'inline-block';
    document.querySelector('.checkbox-group').style.display = 'none';
    extraOptText[0].style.display = 'none';
    extraOptText[1].style.display = 'none';
    extraOptText[2].style.display = 'none';
    extraOptText[3].style.display = 'none';
    setStartContent();

    /* checkbox restart */
    for (i = 0; i < checkBoxList.length; i++) {
        checkBoxList[i].checked = false;
    }
    checkAmountBar = 0;
    priceAdd = 0;
    userConfig = '';

    /* start screen */
    function setStartContent() {
        h5.innerHTML = 'Jaka usługa Cię interesuje?';

        btnList[0].innerHTML = '<img src="../../src/assets/modal/calculator/dev.svg" width="64px" alt=""><span>Web development</span>'
        btnList[1].innerHTML = '<img src="../../src/assets/modal/calculator/seo.svg" width="64px" alt=""><span>Marketing i seo</span>';
        btnList[2].innerHTML = '<img src="../../src/assets/modal/calculator/design.svg" width="64px" alt=""><span>Grafika i design</span>';

        checkBoxText[0].textContent = 'Layout strony';
        checkBoxText[1].textContent = 'WordPress CMS';
        checkBoxText[2].textContent = 'Statystyki strony';
        checkBoxText[3].textContent = 'Wbudowany czat na stronie';

        for (i = 0; i < checkBoxList.length; i++) {
            checkBoxList[i].style.display = 'inline';
        }

        fr = 'dev';
        sec = 'seo';
        th = 'design';

    }
}
/*  first button action  */
btnList[0].addEventListener('click', function() {
    if (fr == 'dev') {
        bar.set(0);
        calcObject.querySelector('.right-side img').style.display = 'none';
        calcObject.querySelector('.priceBar').style.display = 'inline';
        h5.innerHTML = 'Web Development';
        btnList[0].innerHTML = '<span>Strona internetowa</span>'
        btnList[1].innerHTML = '<span>Naprawa strony</span>'
        btnList[2].innerHTML = '';
        bar.set(450);
        fr = 'dev-website';
        sec = 'dev-repair';
        th = 'none';


    } else if (fr == 'dev-website') {
        bar.set(450);
        h5.innerHTML = 'Strona internetowa';
        btnList[0].innerHTML = '<span>Strona informacyjna</span>'
        btnList[1].innerHTML = '<span>Sklep internetowy</span>'
        btnList[2].innerHTML = '<span>Forum, blog, portal</span>';
        bar.set(800);
        fr = 'dev-website-info';
        sec = 'dev-website-shop';
        th = 'dev-website-blog';


    } else if (fr == 'dev-website-info') {
        bar.set(800);
        getBaseValue = 850;
        h5.innerHTML = 'Dodatkowe opcje';
        calcObject.querySelector('.button-group').style.display = 'none';
        document.querySelector('.checkbox-group').style.display = 'inline';
        bar.set(850);
        calcEndBtn.style.display = 'inline';
        userConfig = 'dev-website-info';

    } else if (fr == 'dev-website-shop-onepage') {
        bar.set(2400);
        getBaseValue = 2600;
        h5.innerHTML = 'Dodatkowe opcje';
        calcObject.querySelector('.button-group').style.display = 'none';
        document.querySelector('.checkbox-group').style.display = 'inline';
        checkBoxText[1].textContent = 'Prosty system zwrotów';
        bar.set(2600);
        calcEndBtn.style.display = 'inline';
        userConfig = 'dev-website-shop-onepage';

    } else if (fr == 'dev-website-blog-onepage') {
        bar.set(1400);
        getBaseValue = 1600;
        h5.innerHTML = 'Dodatkowe opcje';
        calcObject.querySelector('.button-group').style.display = 'none';
        document.querySelector('.checkbox-group').style.display = 'inline';
        checkBoxText[1].textContent = 'Panel użytkownika';
        bar.set(1600);
        calcEndBtn.style.display = 'inline';
        userConfig = 'dev-website-blog-onepage';


    } else if (fr == 'seo-seo') {
        bar.set(350);
        h5.innerHTML = 'Optymalizacja i SEO';
        btnList[0].innerHTML = '<span>Strona informacyjna</span>'
        btnList[1].innerHTML = '<span>Rozbudowany portal internetowy</span>'
        btnList[2].innerHTML = '';
        bar.set(500);
        fr = 'seo-seo-info';
        sec = 'seo-seo-expanded';
        th = '';
    } else if (fr == 'dev-repair-app') {
        userConfig = 'dev-repair-app';
        endCalcScreen();

    } else if (fr == 'seo-seo-info') {
        userConfig = 'seo-seo-info';
        endCalcScreen();
    } else if (fr == 'design-web') {
        bar.set(350);
        userConfig = 'design-web';
        endCalcScreen();
        bar.set(650);
    };

});

/*  second button action  */
btnList[1].addEventListener('click', function() {
    if (sec == 'seo') {
        bar.set(0);
        calcObject.querySelector('.right-side img').style.display = 'none';
        calcObject.querySelector('.priceBar').style.display = 'inline';
        h5.innerHTML = 'Marketing i SEO';
        btnList[0].innerHTML = '<span>Optymalizacja i SEO</span>'
        btnList[1].innerHTML = '<span>Kampania Google ADs</span>'
        btnList[2].innerHTML = '';
        bar.set(350);

        fr = 'seo-seo';
        sec = 'seo-googleads';

    } else if (sec == 'dev-repair') {
        bar.set(450);
        h5.innerHTML = 'Naprawa elementów strony internetowej';
        btnList[0].innerHTML = '<span>Naprawa aplikacji na stronie</span>'
        btnList[1].innerHTML = '<span>Poprawa wyglądu strony</span>'
        btnList[2].innerHTML = '';
        bar.set(500);
        fr = 'dev-repair-app';
        sec = 'dev-repair-design'

    } else if (sec == 'dev-website-shop') {
        bar.set(800);
        h5.innerHTML = 'Typ strony internetowej';
        btnList[0].innerHTML = '<span>One Page App</span>'
        btnList[1].innerHTML = '<span>Multi Page App</span>'
        btnList[2].innerHTML = '';
        fr = 'dev-website-shop-onepage';
        sec = 'dev-website-shop-multipage';
        bar.set(2400);


    } else if (sec == 'dev-website-shop-multipage') {
        bar.set(2400);
        getBaseValue = 2500;
        h5.innerHTML = 'Dodatkowe opcje';
        calcObject.querySelector('.button-group').style.display = 'none';
        document.querySelector('.checkbox-group').style.display = 'inline';
        checkBoxText[1].textContent = 'Prosty system zwrotów';
        bar.set(2500);
        calcEndBtn.style.display = 'inline';
        userConfig = 'dev-website-shop-multipage';

    } else if (sec == 'dev-website-blog-multipage') {
        bar.set(1400);
        getBaseValue = 1600;
        h5.innerHTML = 'Dodatkowe opcje';
        calcObject.querySelector('.button-group').style.display = 'none';
        document.querySelector('.checkbox-group').style.display = 'inline';
        checkBoxText[1].textContent = 'Panel użytkownika';
        bar.set(1500);
        calcEndBtn.style.display = 'inline';
        userConfig = 'dev-website-blog-multipage';


    } else if (sec == 'dev-repair-design') {
        bar.set(500);
        getBaseValue = 550;
        h5.innerHTML = 'Dodatkowe opcje';
        calcObject.querySelector('.button-group').style.display = 'none';
        document.querySelector('.checkbox-group').style.display = 'inline';
        checkBoxText[0].textContent = 'Wbudowany czat na stronie';
        checkBoxText[1].textContent = 'Statystyki strony';
        checkBoxText[2].textContent = 'Dodatkowe grafiki (liczone za jedną)';
        checkBoxText[3].textContent = '';
        checkBoxList[3].style.display = 'none';
        bar.set(550);
        calcEndBtn.style.display = 'inline';
        userConfig = 'dev-repair-design'

    } else if (sec == 'seo-seo-expanded') {
        bar.set(500);
        userConfig = 'seo-seo-expanded';
        endCalcScreen();
        bar.set(750);
    } else if (sec == 'seo-googleads') {
        bar.set(350);
        userConfig = 'seo-googleads';
        endCalcScreen();
        bar.set(400);
    } else if (sec == 'design-graphic') {
        bar.set(350);
        userConfig = 'design-graphic';
        endCalcScreen();
        bar.set(450);
    }
});

/*  third button action  */
btnList[2].addEventListener('click', function() {
    if (th == 'design') {
        bar.set(0);
        calcObject.querySelector('.right-side img').style.display = 'none';
        calcObject.querySelector('.priceBar').style.display = 'inline';
        h5.innerHTML = 'Grafika i design';
        btnList[0].innerHTML = '<span>Projekt strony internetowej</span>'
        btnList[1].innerHTML = '<span>Grafika komercyjna</span>'
        btnList[2].innerHTML = '';
        bar.set(250);

        fr = 'design-web';
        sec = 'design-graphic';


    } else if (th == 'dev-website-blog') {
        bar.set(800);
        h5.innerHTML = 'Typ strony internetowej';
        btnList[0].innerHTML = '<span>One Page App</span>'
        btnList[1].innerHTML = '<span>Multi Page App</span>'
        btnList[2].innerHTML = '';
        bar.set(1400);

        fr = 'dev-website-blog-onepage';
        sec = 'dev-website-blog-multipage';


    }
});


/* check boxes */
checkBoxList[0].addEventListener('change', function() {
    if (this.checked) {
        checkAmountBar++;
        addPriceBar();
        bar.set(getBaseValue + priceAdd);

        if (checkBoxText[0].textContent == 'Layout strony') {
            extraOptText[0].textContent = 'graficzny projekt strony internetowej, ';
            extraOptText[0].style.display = 'inline';

        } else if (checkBoxText[0].textContent == 'Wbudowany czat na stronie') {
            extraOptText[0].textContent = 'wbudowany czat na stronie, ';
            extraOptText[0].style.display = 'inline';
        }
    } else {
        checkAmountBar--;
        addPriceBar();
        bar.set(getBaseValue + priceAdd);
        extraOptText[0].style.display = 'none';
    }
});
checkBoxList[1].addEventListener('change', function() {
    if (this.checked) {
        checkAmountBar++;
        addPriceBar();
        bar.set(getBaseValue + priceAdd);

        if (checkBoxText[1].textContent == 'WordPress CMS') {
            extraOptText[1].textContent = 'wordpress CMS, ';
            extraOptText[1].style.display = 'inline';
        } else if (checkBoxText[1].textContent == 'Prosty system zwrotów') {
            extraOptText[1].textContent = 'system zwrotów, ';
            extraOptText[1].style.display = 'inline';
        } else if (checkBoxText[1].textContent == 'Panel użytkownika') {
            extraOptText[1].textContent = 'panel użytkownika, ';
            extraOptText[1].style.display = 'inline';
        } else if (checkBoxText[1].textContent == 'Statystyki strony') {
            extraOptText[1].textContent = 'statystyki strony na żywo, ';
            extraOptText[1].style.display = 'inline';
        }
    } else {
        checkAmountBar--;
        addPriceBar();
        bar.set(getBaseValue + priceAdd);
        extraOptText[1].style.display = 'none';
    }
});
checkBoxList[2].addEventListener('change', function() {
    if (this.checked) {
        checkAmountBar++;
        addPriceBar();
        bar.set(getBaseValue + priceAdd);

        if (checkBoxText[2].textContent == 'Dodatkowe grafiki (liczone za jedną)') {
            extraOptText[2].textContent = 'dodatkowe pliki graficzne (illustracje, bannery).';
            extraOptText[2].style.display = 'inline';
        }
    } else {
        checkAmountBar--;
        addPriceBar();
        bar.set(getBaseValue + priceAdd);
        extraOptText[2].style.display = 'none';
    }
});
checkBoxList[3].addEventListener('change', function() {
    if (this.checked) {
        checkAmountBar++;
        addPriceBar();
        bar.set(getBaseValue + priceAdd);

        if (checkBoxText[3].textContent == 'Wbudowany czat na stronie') {
            extraOptText[3].textContent = 'wbudowany czat na stronie.';
            extraOptText[3].style.display = 'inline';
        }
    } else {
        checkAmountBar--;
        addPriceBar();
        bar.set(getBaseValue + priceAdd);
        extraOptText[3].style.display = 'none';
    }
});

document.getElementById('calcContactBtn').addEventListener('click', function() {
    $('#calculatorModal').modal('hide')
});