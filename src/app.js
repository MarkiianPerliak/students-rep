const form = document.getElementById("add-student-form")
const submit = document.querySelector(".submit-btn")
const getStudentsBtn = document.getElementById("get-students-btn")

// Функція для відображення студентів у таблиці
function renderStudents(students) {
    students.forEach(student => {
        const htmlCode = `
        
        `;
    })
}

// Функція для отримання всіх студентів
function getStudents() {
    return fetch("http://localhost:3000/students")
}

getStudentsBtn.addEventListener("click", (event) => {
    getStudents().then((data) => data.json()).then((resultdata) => renderStudents(resultdata))
})

// Функція для додавання нового студента

function addStudent(student) {
const options = {
method: "POST",
body: JSON.stringify(student),
headers: {
"Content-Type": "application/json; charset=UTF-8",
},
};
    fetch("http://localhost:3000/students", options)
}



// Функція для оновлення студента

function updateAPI(object, id) {
const options = {
method: "PATCH",
body: JSON.stringify(object),
headers: {
"Content-Type": "application/json; charset=UTF-8",
},
};
fetch(`http://localhost:3000/students/${id}`, options)
}

// Функція для видалення студента

function deleteProduct(posthid) {
    fetch(`http://localhost:3000/students/${posthid}`, {method: "DELETE",})
}