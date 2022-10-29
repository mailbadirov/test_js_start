const mainTextArea = document.querySelector('.word-counter'),
  lineCount = document.querySelector('.lines'),
  wordCount = document.querySelector('.words'),
  letterCount = document.querySelector('.letters'),
  charCount = document.querySelector('.chars');

mainTextArea.addEventListener('input', (event) => {
  const textAreaValue = event.target.value;

  lineCount.textContent = 0;
  wordCount.textContent = 0;
  letterCount.textContent = 0;
  charCount.textContent = 0;

  if (textAreaValue.length) {
    lineCount.textContent = textAreaValue.split('\n').length;
    wordCount.textContent = textAreaValue.trim().split(' ').length;
    letterCount.textContent = textAreaValue.match(/[a-z]/gi).length;
    charCount.textContent = textAreaValue.match(/\S/g).length;
  }
});
