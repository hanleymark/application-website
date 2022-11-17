const typeText = document.querySelector("#code");
const typeTextContent = typeText.textContent;
let timer = null;
typeText.textContent = "";

window.addEventListener('scroll', function (event) {
    if (isInViewPort(typeText)) {
        animateCode();
    }
}, false);

function animateCode() {
    let pos = 1;
    if (timer == null) {
        clearInterval(timer);
        timer = setInterval(frame, 140);
        console.log("In animateCode()");
    }

    function frame() {
        if (pos <= typeTextContent.length) {
            typeText.innerHTML = typeTextContent.substring(0, pos);// + '<span id="cursor"></span>';
            pos++;
        }
        else {
            clearInterval(timer);
        }
    }
}

function isInViewPort(element) {
    var elementRectangle = element.getBoundingClientRect();
    return (
        elementRectangle.top >= 0 &&
        elementRectangle.left >= 0 &&
        elementRectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        elementRectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};