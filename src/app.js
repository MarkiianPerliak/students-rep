const form = document.getElementById("add-student-form")
const submit = document.querySelector(".submit-btn")
const getStudentsBtn = document.getElementById("get-students-btn")
const modal2 = document.querySelector(".modal2")
const backdrop2 = document.querySelector(".backdrop2")
const closeModal2 = document.querySelector(".close-modal2")
const dataSendButton2 = document.querySelector('.datasend2')
const modalForm2 = document.querySelector(".modal-form2");

// Функція для додавання нового студента

function addStudent(student) {
    const options = {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    fetch("https://68a180f86f8c17b8f5da0043.mockapi.io/students/students", options)
}

// Функція для оновлення студента

function updateAPI(object, id) {
    const options = {
        method: "PUT",
        body: JSON.stringify(object),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    fetch(`https://68a180f86f8c17b8f5da0043.mockapi.io/students/students/${id}`, options)
}

// Функція для видалення студента

function deleteProduct(posthid) {
    fetch(`https://68a180f86f8c17b8f5da0043.mockapi.io/students/students/${posthid}`, { method: "DELETE", })
}

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
      <td class="id">${student.id}</td>
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
    return fetch("https://68a180f86f8c17b8f5da0043.mockapi.io/students/students")
}

getStudentsBtn.addEventListener("click", (event) => {
    getStudents().then((data) => data.json()).then((resultdata) => {
        const thbody = document.querySelector(".thbody")
        thbody.innerHTML = "";
        renderStudents(resultdata)
        const deletebtns = document.querySelectorAll(".delete")
        const updatebtns = document.querySelectorAll(".update")
        deletebtns.forEach(button => {
            button.addEventListener("click", (event) => {
                const theid = button.parentElement.parentElement.querySelector(".id").textContent;
                deleteProduct(theid)
            })
        })
        updatebtns.forEach(button => {
            button.addEventListener("click", (event) => {
                backdrop2.classList.remove("hidden")
                modalForm2.addEventListener("submit", (event) => {
                    event.preventDefault()
                    const theid = button.parentElement.parentElement.querySelector(".id").textContent;
                    const name = event.target.elements.name.value;
                    const age = event.target.elements.age.value;
                    const course = event.target.elements.course.value;
                    const skills = event.target.elements.skills.value
                        .split(",")
                        .map(s => s.trim());
                    console.log(skills)
                    const email = event.target.elements.email.value;
                    const enrolled = event.target.elements.enrolled;

                    let enrolledchecked = "";
                    if (enrolled.checked) {
                        enrolledchecked = true
                    } else {
                        enrolledchecked = false
                    }
                    const object = {
                        "name": `${name}`,
                        "age": Number(age),
                        "course": `${course}`,
                        "skills": skills,
                        "email": `${email}`,
                        "isEnrolled": enrolledchecked
                    }
                    updateAPI(object, theid)
                })
            })
        })
    })
})


closeModal2.addEventListener("click", (event) => {
    backdrop2.classList.add("hidden")
})

dataSendButton2.addEventListener("click", (event) => {
    backdrop2.classList.add("hidden")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const course = event.target.elements.course.value;
    const skills = event.target.elements.skills.value
        .split(",")
        .map(s => s.trim());
    const email = event.target.elements.email.value;
    const enrolled = event.target.elements.enrolled;

    let enrolledchecked = "";
    if (enrolled.checked) {
        enrolledchecked = true
    } else {
        enrolledchecked = false
    }
    const object = {
        "name": `${name}`,
        "age": Number(age),
        "course": `${course}`,
        "skills": skills,
        "email": `${email}`,
        "isEnrolled": enrolledchecked
    }
    addStudent(object)
})