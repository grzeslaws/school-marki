$(document).foundation();

// function addVisible() {
//   $('.orbit-container .is-active .orbit-caption h1').css('visibility', 'visible');
// }
// setTimeout(addVisible, 200);

//sub-menu

  $('.menu-main li').not($('.sub-menu')).hover(
    function() {
      $( this ).find('.sub-menu').addClass('sub-visible');
    },
    function() {
      $( this ).find('.sub-menu').removeClass('sub-visible');
    }
  );

  $('.breadcrumbs ul li:first-child a').text("");


  // add animation class

  function detectBrowser() {
        // Opera 8.0+
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';

        // Safari 3.0+ "[object HTMLElementConstructor]"
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;

        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;

        // Chrome 1+
        var isChrome = !!window.chrome && !!window.chrome.webstore;

        if (isOpera) {
            document.body.classList.add("opera");
        } else if (isFirefox) {
            document.body.classList.add("firefox");
        } else if (isSafari) {
            document.body.classList.add("safari");
        } else if (isIE) {
            document.body.classList.add("ie");
        } else if (isEdge) {
            document.body.classList.add("edge");
        } else if (isChrome) {
            document.body.classList.add("chrome");
        }
    }

  function checkVisibility(elements) {
        Object.keys(elements).map(function(key) {
            if (!elements[key].classList.contains('visible') && visibleY(elements[key])) {
                elements[key].classList.add('visible');
                delete elements[key];
            }
        });
    }

    var visibleY = function(el){
        var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height,
            el = el.parentNode;
        do {
            rect = el.getBoundingClientRect();
            if (top <= rect.bottom === false) return false;
            // Check if the element is out of view due to a container scrolling
            if ((top + height) <= rect.top) return false;
            el = el.parentNode;
        } while (el != document.body);
        // Check its within the document viewport
        return top <= document.documentElement.clientHeight;
    };

    window.onload = function() {
        var elementsToCheckVisibility = document.querySelectorAll('.js-check-visibility');
        var sec = 0;

        document.addEventListener('scroll', function () {
            checkVisibility(elementsToCheckVisibility);
        });

        checkVisibility(elementsToCheckVisibility);
        detectBrowser();
    };
