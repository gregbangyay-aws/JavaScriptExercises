export const studentForm = document.querySelector('#studentForm');
export const studentTableBody = document.querySelector('#studentTableBody');

export const mockStudentDb = [
  {
    id: 1779353927081,
    firstName: 'Leslie',
    lastName: 'Andrews',
    email: 'leslie.andrews@example.com'
  },
  {
    id: 1779353927082,
    firstName: 'Emma',
    lastName: 'Baumgarten',
    email: 'emma.baumgarten@example.com'
  }
];

export const localStudent = []

export const getStudents = () => {
    return localStudent;
}

export const addStudentsAPI = (newStudentData) => {
    const savedStudent = {
        id: Date.now(),     
        ...newStudentData
    };
    localStudent.push(savedStudent);
    return savedStudent;
}

export const renderTable = (dataArray) => {
    studentTableBody.innerHTML = '';

    if (dataArray.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="4" style="text-align: center; padding: 20px; color: #000000;">
                No student records found.
            </td>
        `;
        studentTableBody.appendChild(row);
        return;
    }

    dataArray.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
        `;
        studentTableBody.appendChild(row);
    });
};

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (!firstName || !lastName || !email) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    const studentData = {
        firstName,
        lastName,
        email
    };
    const savedStudent = addStudentsAPI(studentData);
    renderTable(localStudent);
    studentForm.reset();
});

const initApp = () => {
    localStudent.push(...mockStudentDb);    // Push initial data from mockStudentDb
    renderTable(localStudent);
}

window.addEventListener('DOMContentLoaded', initApp);



