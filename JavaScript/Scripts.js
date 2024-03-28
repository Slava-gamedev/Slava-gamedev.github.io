function ShowAlertIfCheckboxChecked(){
    checkbox =document.getElementById("SpecialCheckbox");
    if(checkbox.checked)
    {
        window.alert("The checkbox was checked!!!");
    }
}

function ShowEquationResult(){
    let paragraph = document.getElementById("Equation");
    
    let x = 5;
    let y =64;
    let c = x * y;
    paragraph.innerHTML = "the result is: " + c;
}

function ChangeHTMLSize(){
    let Letter = document.getElementById("SmallLetter");
    
    Letter.style.fontSize = "35px";
}