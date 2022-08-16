

// Write your code here!
//Remove main div
const main = document.getElementById('victory');
main.remove();


//Create new heading element with ID atttribute

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.textContent = 'Gilbert-Koech is the champion';

main.appendChild(newHeader);