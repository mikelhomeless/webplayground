var counter = 0;
var bulbs = document.getElementById("wire").querySelectorAll("li");

bulbs.forEach((item) => {
        item.addEventListener('click', () => popBulb(item))
    });

async function popBulb(bulb) {
    bulb.style.visibility = 'hidden';
    counter += 1;
    if (counter >= bulbs.length) {
        await delay(500);
        resetGame();
    }
}

function resetGame() {
    bulbs.forEach((bulb) => bulb.style.visibility = 'visible');
    counter = 0;
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}