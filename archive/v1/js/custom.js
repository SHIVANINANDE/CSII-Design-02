// Custom JS code coming here....

$(document).ready(function () {
    $(".search_buton").click(function () {
        $(".search-area").show();
    });
    $(".search-close").click(function () {
        $(".search-area").hide();
    });

    // global contact
    $(".gcontact div.dropdown-menu .global-cont").click(function () {
        $("#global_contact").show();
        $("#canada_contact").hide();
        $("#india_contact").hide();
        $("#nigeria_contact").hide();
        $("#senegal_contact").hide();
    });
    $(".gcontact div.dropdown-menu .canada-cont").click(function () {
        $("#global_contact").hide();
        $("#canada_contact").show();
        $("#india_contact").hide();
        $("#nigeria_contact").hide();
        $("#senegal_contact").hide();
    });
    $(".gcontact div.dropdown-menu .india-cont").click(function () {
        $("#global_contact").hide();
        $("#canada_contact").hide();
        $("#india_contact").show();
        $("#nigeria_contact").hide();
      $("#senegal_contact").hide();
    });
    $(".gcontact div.dropdown-menu .nigeria-cont").click(function () {
        $("#global_contact").hide();
        $("#canada_contact").hide();
        $("#india_contact").hide();
        $("#nigeria_contact").show();
        $("#senegal_contact").hide();
    });
    $(".gcontact div.dropdown-menu .senegal-cont").click(function () {
        $("#global_contact").hide();
        $("#canada_contact").hide();
        $("#india_contact").hide();
        $("#nigeria_contact").hide();
        $("#senegal_contact").show();
    });
});

$(".gcontact .dropdown-menu a").click(function(){
  $(this).parents(".dropdown.gcontact").find('.btn').html($(this).text() + ' Contacts <span class="caret"></span>');
  $(this).parents(".dropdown.gcontact").find('.btn').val($(this).data('value'));
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 5) {
        $('.main-nav').addClass('fixed-top white shadow');
    }
    if (scroll < 5) {
        setTimeout(function () {
            $('.main-nav').removeClass('fixed-top white shadow');
        }, 100);
    }

    if (scroll >= 240) {
        $('.inner-menu').addClass('fixed-top white border-top shadow');
    }
    if (scroll < 240) {
        setTimeout(function () {
            $('.inner-menu').removeClass('fixed-top white border-top shadow');
        }, 100);
    }
});

var setHeight = function (element, height) {
    if (!element) {
        ;
        return false;
    }
    else {
        var elementHeight = parseInt(window.getComputedStyle(element, null).height, 10),
            toggleButton = document.createElement('a'),
            text = document.createTextNode('Show more...'),
            parent = element.parentNode;

        toggleButton.src = '#';
        toggleButton.className = 'show-more';
        toggleButton.style.paddingRight = '0px';
        toggleButton.style.fontSize = '13px';
        toggleButton.style.color = '#E64A19';
        toggleButton.style.textDecoration = 'underline';
        toggleButton.style.cursor = 'pointer';
        toggleButton.style.marginBottom = '15px';
        toggleButton.style.display = 'inline-block';
        toggleButton.appendChild(text);

        parent.insertBefore(toggleButton, element.nextSibling);

        element.setAttribute('data-fullheight', elementHeight);
        element.style.height = height;
        return toggleButton;
    }
}

var toggleHeight = function (element, height) {
    if (!element) {
        return false;
    }
    else {
        var full = element.getAttribute('data-fullheight'),
            currentElementHeight = parseInt(element.style.height, 10);

        element.style.height = full == currentElementHeight ? height : full + 'px';
    }
}


// show more and less on content  script
var toggleText = function (element) {
    if (!element) {
        return false;
    }
    else {
        var text = element.firstChild.nodeValue;
        element.firstChild.nodeValue = text == 'Show more...' ? 'Show less...' : 'Show more...';
    }
}


var applyToggle = function (elementHeight) {
    'use strict';
    return function () {
        toggleHeight(this.previousElementSibling, elementHeight);
        toggleText(this);
    }
}


var modifyDomElements = function (className, elementHeight) {
    var elements = document.getElementsByClassName(className);
    var toggleButtonsArray = [];


    for (var index = 0, arrayLength = elements.length; index < arrayLength; index++) {
        var currentElement = elements[index];
        var toggleButton = setHeight(currentElement, elementHeight);
        toggleButtonsArray.push(toggleButton);
    }

    for (var index = 0, arrayLength = toggleButtonsArray.length; index < arrayLength; index++) {
        toggleButtonsArray[index].onclick = applyToggle(elementHeight);
    }
}
modifyDomElements('shorten-text', '24px'); 

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search_news_event');
    filter = input.value.toUpperCase();
    ul = document.getElementById("news_events_list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//form validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();