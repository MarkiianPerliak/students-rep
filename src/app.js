const form = document.getElementById("add-student-form")
const submit = document.querySelector(".submit-btn")
const getStudentsBtn = document.getElementById("get-students-btn")

// Функція для відображення студентів у таблиці
function renderStudents(students) {
    const thbody = document.querySelector(".thbody")
    students.forEach(student => {
        let text = "";
        if (student.isEnrolled === true) {
            text = "Online"
        } else {
            text = "Offline"
        }
        const htmlCode = `
    <tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills}</td>
      <td>${student.email}</td>
      <td>${text}</td>
      <td><button class="delete">Delete</button><button class="update">Update</button></td>
    </tr>        
        `;
        thbody.insertAdjacentHTML("afterbegin", htmlCode)
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

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const course = event.target.elements.course.value;
    const skills = event.target.elements.skills.value;
    const email = event.target.elements.email.value;
    const enrolled = event.target.elements.enrolled.value;
    let enrolledchecked = "";
    if (enrolled === "on") {
        enrolledchecked = true
    } else {
        enrolledchecked = false
    }
    const object = {
        "name": `${name}`,
        "age": Number(age),
        "course": `${course}`,
        "skills": [``, ``],
        "email": `${email}`,
        "isEnrolled": enrolledchecked
    }
    addStudent(object)
})

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