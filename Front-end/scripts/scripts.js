var courses = [];
var students = [];


loadCourses();
loadStudents();

function loadCourses() {
    $.ajax({
        url: "http://localhost:8080/courses",
        type:'GET',
        async: false,
        success: (response) => {
            courses = response;
            for (var cour of courses) {
                document.getElementById("selectCourse").innerHTML += `<option value= ${cour.id}>${cour.name}</option>`;

            }
        }
    }).fail(function () {
        console.log("error");
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
        idCurso: document.getElementById("selectCourse").value,
        turn1: document.getElementById("turn1").checked,
        turn2: document.getElementById("turn2").checked,
        turn3: document.getElementById("turn3").checked,
    };

    $.ajax({
        url: "http://localhost:8080/students",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(stud),
        success: (student) => {
            addNewRow(stud);
            students.push(stud)
            document.getElementById("formStudent").reset();
            console.log("saves");
        }
    })

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

    var options = '';

    if (stud.turn1 || stud.period == 1) {
        options =  'Manhã';
           
    }if(stud.turn2 || stud.period ==2 ) {
        options =  'Tarde';
    }if(stud.turn3 || stud.period ==3 ) {
        options =  'Noite';
    }

    cell = newRow.insertCell();
    cell.className = 'd-none d-md-table-cell'
    cell.innerHTML = options;
}