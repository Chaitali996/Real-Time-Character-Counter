const charVal = document.getElementById('textarea');
let totalCount = document.getElementById('total-counter');
let remainingCount = document.getElementById('remaining-counter');

let char = 0;
const updateCounter = () => {
  userchar = charVal.value.length;
  totalCount.innerText = userchar;
  remainingCount.innerText = 150 - userchar;
};
charVal.addEventListener('keyup', () => updateCounter());

// copy the text code

const copyText = () => {
  charVal.select();
  charVal.setSelectionRange(0, 9999); // for mobile version
  navigator.clipboard.writeText(charVal.value);
};
