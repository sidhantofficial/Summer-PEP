const text = document.getElementsByTagName("textarea")[0];
const wordLength = document.getElementsByTagName("h2")[0];

text.addEventListener("input", function() {
    const txt = text.value;
    wordLength.innerHTML = `Words: ${txt.length}`;
});
