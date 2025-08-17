// Функція для отримання всіх студентів
function getStudents() {
    return fetch("http://localhost:3000/students");
}
getStudents();
// Функція для відображення студентів у таблиці
function renderStudents(students) {}
// Функція для додавання нового студента
function addStudent(student) {
    const options = {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    };
    fetch("http://localhost:3000/students", options);
}
// Функція для оновлення студента
function updateAPI(object, id) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(object),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    };
    fetch(`http://localhost:3000/students/${id}`, options);
}
// Функція для видалення студента
function deleteProduct(posthid) {
    fetch(`http://localhost:3000/students/${posthid}`, {
        method: "DELETE"
    });
}

//# sourceMappingURL=students-rep.816e7b21.js.map
