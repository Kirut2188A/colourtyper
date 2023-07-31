const textInput = document.getElementById('textInput');
const body = document.body;

textInput.addEventListener('input', function () {
  const inputText = textInput.value;

  body.style.background = inputText;
});
