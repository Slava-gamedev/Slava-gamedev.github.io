
function onFormSubmit(){
    console.log("the submit function runs!!!");
    var formData = readFormData();
    //insertNewUser(formData);
    fetch('http://localhost:3000/api/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.status(200)) {
            console.log('User added successfully!');
            resetForm();
        } else {
            console.error('Failed to add user:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error adding user:', error);
    });
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["email"] = document.getElementById("email").value;
    formData["telephone"] = document.getElementById("telephone").value;
    formData["bankCardNumber"] = document.getElementById("card_number").value;
    formData["pinCode"] = document.getElementById("pin_code").value;
    formData["cvvCode"] = document.getElementById("cvv_code").value;
    formData["password"] = document.getElementById("password").value;
    return formData;
}
 function insertNewUser(data){
    var table = document.getElementById("UserTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telephone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.card_number;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.pin_code;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.cvv_code;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.password;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="OnEdit(this)">Edit</a><a onClick="OnDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("card_number").value = "";
    document.getElementById("pin_code").value = "";
    document.getElementById("cvv_code").value = "";
    document.getElementById("password").value = "";
    console.log("the reset function runs!!!");
}

function onEdit(){

}

function OnDelete(){

}
