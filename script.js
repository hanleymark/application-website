const typeText = document.querySelector("#code");
const typeTextContent = typeText.textContent;
typeText.textContent = " ";

function animateCode() {
    let timer = null;

    let pos = 1;
    clearInterval(timer);
    timer = setInterval(frame, 140);

    function frame() {
        if (pos <= typeTextContent.length) {
            typeText.innerHTML = typeTextContent.substring(0, pos) + '<span id="cursor"></span>';
            pos++;
        }
        else {
            clearInterval(timer);
        }
    }
}