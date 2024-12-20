"use strict"

function changePage(page){
        location.href = page;
}

document.addEventListener("DOMContentLoaded", chooseRandom);

function chooseRandom() {
    let chance = Math.floor(Math.random() * 11);
    if (chance === 5) {
        document.getElementById("riddle").hidden = false;
    }
}


function openItem(id,button) {
    if (document.getElementById(id).hidden === true) {
        document.getElementById(id).hidden = false;
        document.getElementById(button).innerText = `v`;
    } else {
        document.getElementById(id).hidden = true;
        document.getElementById(button).innerText = `>`;
    }
}

const SKY = document.querySelector(`[data-sky]`);
const QUANTITY = SKY.dataset.sky ? +SKY.dataset.sky : 40;

if (SKY) {
    setStars();
    window.addEventListener(`resize`, setStars);

    function setStars() {
        const skySize = {
            width: SKY.offsetWidth,
            height: SKY.offsetHeight
        }

        const TOTAL_STARS = getStarsQuantity(skySize);
        let starTemplate = ``;

        for (let star = 0; star < TOTAL_STARS; star++) {
            const starPos = getStarPos(skySize);
            const starStyle = `
                position: absolute;
                top: ${starPos.top}px;
                left: ${starPos.left}px;
            `;
            const starClass = `star star--type-${Math.floor(Math.random() * 3)}`
            starTemplate += `<div style="${starStyle}" class="${starClass}"></div>`
        }

        SKY.innerHTML = starTemplate;
    }
    function getStarsQuantity(skySize) {
        const qH = skySize.width / 100 * (QUANTITY / 2);
        const qV = skySize.height / 100 * (QUANTITY / 2);
        return qH + qV;
    }
    function getStarPos(skySize) {
        return {
            top: Math.floor(Math.random() * skySize.height),
            left: Math.floor(Math.random() * skySize.width)
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Select the element with id "corrupt"
    const corruptElement = document.getElementById('corrupt');
  
    // Split the text content into words
    const words = corruptElement.textContent.split(' ');
  
    // Clear the content of the element
    corruptElement.innerHTML = '';
  
    // Function to create the corrupt effect for each word
    function createCorruptEffect(word) {
      // Create a new span element for the word
      const wordSpan = document.createElement('span');
      wordSpan.textContent = word;
      wordSpan.classList.add('corrupt-word');
      wordSpan.setAttribute('data-text', word); // Use the word as the data-text
  
      return wordSpan;
    }
  
    // Loop through each word and add the corrupt effect
    words.forEach(word => {
      const wordSpan = createCorruptEffect(word);
      corruptElement.appendChild(wordSpan);
      corruptElement.appendChild(document.createTextNode(' ')); // Add a space between words
    });
  });
  

// CSS (Add this in your stylesheet or within a <style> tag)
const style = document.createElement('style');
style.innerHTML = `
  .corrupt-word {
    display: inline-block;
    position: relative;
  }

  .corrupt-word::before,
  .corrupt-word::after {
    content: attr(data-text);
    position: absolute;
    z-index: -1;
  }

  .corrupt-word::before {
    top: -8px;
    left: 15px;
    color: #002064;
  }

  .corrupt-word::after {
    top: -2px;
    left: -10px;
    color: #660000;
  }
  
  @keyframes corrupt {
    0% { content: "!@#"; }
    5% { content: "16//16//16//16"; }
    10% { content: "⊗⊕∂"; }
    15% { content: "⧫⧿∇"; }
    20% { content: "✖✴✳"; }
    25% { content: "$%^"; }
    30% { content: "☀☾☽"; }
    35% { content: "561⚛⚔"; }
    40% { content: "⨉⨁⨂"; }
    45% { content: "∞≡≠"; }
    50% { content: "&*("; }
    55% { content: "⎋⌦⏚"; }
    60% { content: "✂✉✎"; }
    65% { content: "▒▓░"; }
    70% { content: "𓀀𓂀𓃗"; }
    75% { content: "_+-"; }
    80% { content: "♠♥♣"; }
    85% { content: "☁☂☄"; }
    90% { content: "ϞϟϠ"; }
    95% { content: "╳✕✖"; }
    100% { content: "><|"; }
  }
`;

document.head.appendChild(style);
