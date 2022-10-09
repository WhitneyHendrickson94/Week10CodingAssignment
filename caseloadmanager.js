let id = 0; 

document.getElementById('add').addEventListener('click', () => {
    let DOB = new Date();
    let dueDate = new Date();
    let table = document.getElementById('studentList');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('firstName').value;
    row.insertCell(1).innerHTML = document.getElementById('lastName').value;
    row.insertCell(2).innerHTML = `${DOB.getFullYear()}-${DOB.getMonth()+1}-${DOB.getDate()}`;
    row.insertCell(3).innerHTML = document.getElementById('disabilityCode').value;
    row.insertCell(4).innerHTML = `${dueDate.getFullYear()}-${dueDate.getMonth()+1}-${dueDate.getDate()}`;
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('firstName').value = '';

});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}