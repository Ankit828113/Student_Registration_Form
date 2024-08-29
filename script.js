
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.querySelector('#studentTable tbody');

// Function to retrieve students from local storage
function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    studentTableBody.innerHTML = '';
    students.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.studentId}</td>
            <td>${student.eAddress}</td>
            <td>${student.contact}</td>
            <td>
                <button class="action-btn" onclick="editStudent(${index})">Edit</button>
                <button class="action-dbtn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Function to add new student
function addStudent(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const studentId = document.getElementById('sId').value;
    const eAddress = document.getElementById('eAddress').value;
    const contact = document.getElementById('contact').value;

    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ name,studentId, eAddress, contact });
    localStorage.setItem('students', JSON.stringify(students));

    studentForm.reset();
    loadStudents();
}

// Function to edit a student
function editStudent(index) {
    const students = JSON.parse(localStorage.getItem('students'));
    const student = students[index];

    document.getElementById('name').value = student.name;
    document.getElementById('sId').value = student.studentId;
    document.getElementById('eAddress').value = student.eAddress;
    document.getElementById('contact').value = student.contact;

    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    loadStudents();
}

// Function to delete a student
function deleteStudent(index) {
    const students = JSON.parse(localStorage.getItem('students'));
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    loadStudents();
}

studentForm.addEventListener('submit', addStudent);

loadStudents();
