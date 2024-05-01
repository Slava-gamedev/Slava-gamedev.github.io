var selectedRow=null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
        insertNewUser(formData);
        AddUserToDatabase(formData);
    }
    else{
        UpdateRecord(formData);
    }
    resetForm();
}

function AddUserToDatabase(data){
    fetch('http://localhost:3000/api/AddUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('User added successfully!');
        } else {
            console.error('Failed to add user:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error adding user:', error);
    });
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
    cell5.innerHTML = data.bankCardNumber;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.pinCode;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.cvvCode;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.password;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="OnEdit(this)">Edit</a>
                       <a onClick="OnDelete(this)">Delete</a>`;
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
    selectedRow = null;
}

function OnEdit(td){
    selectedRow = td.parentElement.parentElement;
    console.log("inner html" +selectedRow.cells[0].innerHTML);
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telephone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("card_number").value = selectedRow.cells[4].innerHTML;
    document.getElementById("pin_code").value = selectedRow.cells[5].innerHTML;
    document.getElementById("cvv_code").value = selectedRow.cells[6].innerHTML;
    document.getElementById("password").value = selectedRow.cells[7].innerHTML;
}

function UpdateRecord(data){
    selectedRow.cells[0].innerHTML = data.name;
    selectedRow.cells[1].innerHTML = data.age;
    selectedRow.cells[2].innerHTML = data.email;
    selectedRow.cells[3].innerHTML = data.telephone;
    selectedRow.cells[4].innerHTML = data.bankCardNumber;
    selectedRow.cells[5].innerHTML = data.pinCode;
    selectedRow.cells[6].innerHTML = data.cvvCode;
    selectedRow.cells[7].innerHTML = data.password;
}

function OnDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("UserTable").deleteRow(row.rowIndex);
    resetForm();
}
