const display = document.getElementsByClassName('display')
const value = document.getElementsByClassName('value')

value.addEventListener("click", () => {
    display.innerText += value;
})