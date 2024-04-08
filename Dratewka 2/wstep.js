document.addEventListener("DOMContentLoaded", function (event) {

    let czolowka = document.getElementById("czołówka")
    let wstep1 = document.getElementById('wstep1')
    let wstep2 = document.getElementById('wstep2')
    let main = document.getElementById("container")
    let won = document.getElementById("wygrana")
    let focus = document.getElementById("movement")
    document.getElementById("rat").style.display = "none"
    document.getElementById("ne").style.display = "none"
    document.getElementById("youWon").style.display = "none"
    won.style.display = "none"
    main.style.display = "none"
    wstep1.style.display = "none"
    wstep2.style.display = "none"
    setTimeout(function () {
        czolowka.style.display = "none"
        wstep1.style.display = "block"
    }, 10000)
    setTimeout(function () {
        wstep1.style.display = "none"
        wstep2.style.display = "block"
    }, 30000)
    setTimeout(function () {
        wstep2.style.display = "none"
        main.style.display = "block"
        focus.focus()
    }, 39000)
})