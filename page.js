document.querySelector("a").addEventListener("click", btnShadow);

function btnShadow() {

    var btnInput = document.querySelector("a");

    btnInput.classList.add("box-shadow");

    setTimeout(() => {
        btnInput.classList.remove("box-shadow");
    }, 100);
}