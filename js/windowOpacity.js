// moyu/js/windowOpacity.js
let currentOpacityLevel = 0;
const opacityLevels = [1, 0.7, 0.4, 0.1];

function adjustWindowOpacity() {
    currentOpacityLevel = (currentOpacityLevel + 1) % opacityLevels.length;
    const newOpacity = opacityLevels[currentOpacityLevel];
    document.body.style.opacity = newOpacity;
}

module.exports = {
    adjustWindowOpacity
};