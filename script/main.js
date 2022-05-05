let elForm = document.querySelector("#form");
let elInput = elForm.querySelector("#input");
let elBtn = elForm.querySelector("#button");
let elReadyOutputP = elForm.querySelector(".readyOutput");

let arr = [4545, 1212, 2222, 2020, 2003, 0890];
let warningMessage = "Error";


elBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let elInputNumber = Number(elInput.value);

    if (arr.includes(elInputNumber)) {
        window.open("main.html")
    }
    else if (elInputNumber = !Number(elInputNumber) || elInputNumber == " ") {
        elInput.value = "Write only Number";
        elInput.style.borderColor = "red";
    }

    else {
        elInput.style.borderColor = "red";
        elInput.value = "Error Password";
    }

    // readyOutput.append()
})
elInput.style.borderColor = "black";