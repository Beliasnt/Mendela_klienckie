document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("movement");
    const cursor = document.getElementById("cursor");
    const whiteBlocks = document.getElementById("whiteBlocks");

    // Pobierz pozycję X dla białego bloku
    const inputRect = inputField.getBoundingClientRect();
    const cursorRect = cursor.getBoundingClientRect();
    const xPosition = cursorRect.left - inputRect.left + cursorRect.width;
    const charWidth = 13.5
    const text = inputField.value;

    const lastChar = text[text.length - 1];

    // Utwórz biały blok na początku
    const whiteBlock = document.createElement("div");
    whiteBlock.style.width = "15px";
    whiteBlock.style.height = "15px";
    whiteBlock.style.backgroundColor = "white";
    whiteBlock.style.position = "absolute";
    whiteBlock.style.top = "155px";
    whiteBlock.style.left = (xPosition + (text.length - 1) * charWidth - 278) + "px";
    whiteBlocks.appendChild(whiteBlock);

});
document.getElementById("movement").addEventListener("input", function () {
    const inputField = document.getElementById("movement");
    const cursor = document.getElementById("cursor");
    const whiteBlocks = document.getElementById("whiteBlocks");

    whiteBlocks.innerHTML = '';
    const text = inputField.value;
    const charWidth = 13.5; // szerokość pojedynczej litery

    const inputRect = inputField.getBoundingClientRect();
    const cursorRect = cursor.getBoundingClientRect();
    const xPosition = cursorRect.left - inputRect.left;

    const whiteBlock = document.createElement("div");
    whiteBlock.style.width = "15px";
    whiteBlock.style.height = "15px";
    whiteBlock.style.backgroundColor = "white";
    whiteBlock.style.position = "absolute";
    whiteBlock.style.top = "155px";
    whiteBlock.style.left = (xPosition + (text.length - 1) * charWidth + 345) + "px";
    whiteBlocks.appendChild(whiteBlock);

});