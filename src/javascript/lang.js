/* underconstruction & lang */
var pathLocation = location.pathname;
var host = window.document.location.origin;
window.addEventListener('load', function() {

    /* all list pages */
    let htmlList = ['home.html', 'wcp.html', 'policy.html'];
    const n = htmlList.length;

    if (localStorage.uc != undefined || localStorage.uc != 0) {
        if (pathLocation != '/under-construction/uc.html') {
            location.href = host + '/under-construction/uc.html';
        } else {
            return false;
        }
    } else {
        if (localStorage.userLang == undefined) {
            setLang();
        } else if (localStorage.userLang == 'pl') {
            let stopCheck = false;
            for (i = 0; i < n || stopCheck == true; i++) {
                if (pathLocation == '/site/pl/' + htmlList[i]) {
                    stopCheck = true;
                    return false;
                }
                if (i == n - 1) {
                    location.href = host + '/site/pl/home.html';
                }
            }
        } else {
            for (i = 0; i < n || stopCheck == true; i++) {
                if (pathLocation == '/site/en/' + htmlList[i]) {
                    stopCheck = true;
                    return false;
                }
                if (i == n - 1) {
                    location.href = host + '/site/pl/home.html';
                }
            }
        }
    }
});

function setLang() {
    if (navigator.language == "pl-PL" || navigator.language == "pl" || navigator.language == "PL") {
        localStorage.setItem('userLang', 'pl');
        location.href = host + '/site/pl/home.html';
    } else {
        localStorage.setItem('userLang', 'en');
        location.href = host + '/site/en/home.html';
    }
}