



var students = [];
var courses = [];

loadCourses();
loadStudents();




function loadCourses() {
    $.getJSON("http://localhost:8080/courses", (response) => {
        courses = response;
        for (var cour of courses) {
            document.getElementById("selectCourse").innerHTML += `<option value= ${cour.id}>${cour.name}</option>`;

        }
    })
}

function loadStudents() {
    $.getJSON("http://localhost:8080/students", (response) => {
        for (let stud of response) {
            addNewRow(stud);
        }
    })
}





//Save a product

function save() {
    var stud = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputPhone").value,
        course: document.getElementById("selectCourse").value,
        turn1: document.getElementById("turn1").checked,
        turn2: document.getElementById("turn2").checked,
        turn3: document.getElementById("turn3").checked,



    };

    console.log("saves");

    addNewRow(stud);
    students.push(stud)

    document.getElementById("formStudent").reset();
}

function addNewRow(stud) {
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(stud.id);
    newRow.insertCell().appendChild(idNode);

    var nomeNode = document.createTextNode(stud.name);
    newRow.insertCell().appendChild(nomeNode);

    var emailNode = document.createTextNode(stud.email);
    var cell = newRow.insertCell();
    cell.className = 'd-none d-md-table-cell'
    cell.appendChild(emailNode);

    var telNode = document.createTextNode(stud.phone)
    cell = newRow.insertCell();
    cell.className = 'd-none d-md-table-cell'
    cell.appendChild(telNode);

    var cursoNode = document.createTextNode(courses[stud.idCurso - 1].name);
    cell = newRow.insertCell();
    cell.className = 'd-none d-md-table-cell'
    cell.appendChild(cursoNode);

    var options = "";

    switch (stud.period) {
        case 1:
            options = 'Manhã';
            break;

        case 2:
            options = 'Tarde';
            break;

        case 3:
            options = 'Noite';
            break;

        default:
            break;
    }

    cell = newRow.insertCell();
    cell.className = 'd-none d-md-table-cell'
    cell.innerHTML = options;
}