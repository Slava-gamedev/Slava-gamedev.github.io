function ShowAlertIfCheckboxChecked(){
    checkbox =document.getElementById("SpecialCheckbox");
    checkboxText =document.getElementById("CheckboxLabel");
    if(checkbox.checked)
    {
        window.alert("The checkbox was approved! You have obtained 10 social credits!!!");
    }
    else{
        window.alert("The checkbox wasn't approved, 500 social credits were written off from your score.");
        //checkboxText.style.fontSize = "54px";
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