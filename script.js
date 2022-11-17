// Get references to all 'typing code' style  animated banners
const typingTextElements = document.querySelectorAll(".code");
// Set up arrays to keep track of contents, interval timers and character iterators in the banners
let typingTextContents = [];
let typingTextTimers = [];
let typingTextIterators = [];

setUpTypingAnimation(typingTextElements);

// When user scrolls, check each code typing animation to see if it is in the viewport
// If it is, start its animation
window.addEventListener('scroll', function (event) {
    for (let i = 0; i < typingTextElements.length; i++) {
        if (isInViewPort(typingTextElements[i])) {
            animateTyping(i);
        }
    }
}, false);

// Check if typing animation has been started, if not start it
function animateTyping(index) {
    if (typingTextTimers[index] == null) {
        typingTextTimers[index] = setInterval(frame, 140);
    }
    // Iterate through each letter of the typing animation using its iterator
    function frame() {
        if (typingTextIterators[index] <= typingTextContents[index].length) {
            typingTextElements[index].innerText = typingTextContents[index].substring(0, typingTextIterators[index]);
            typingTextIterators[index]++;
        }
        else {
            // If animation is complete, clear the interval timer
            clearInterval(typingTextTimers[index]);
        }
    }
}

// Function checks if supplied element parameter is in the current viewport
function isInViewPort(element) {
    var elementRectangle = element.getBoundingClientRect();
    return (
        elementRectangle.top >= 0 &&
        elementRectangle.left >= 0 &&
        elementRectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        elementRectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Initialise typing banners
function setUpTypingAnimation(elements) {
    elements.forEach(element => {
        typingTextContents.push(element.innerText);
        typingTextTimers.push(null);
        typingTextIterators.push(0);
        element.innerText = "";
    });
}