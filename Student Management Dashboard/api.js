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

export const getStudents = () => {
    return mockStudentDb;
}

export const addStudentsAPI = (newStudentData) => {
    const savedStudent = {
        id: Date.now(),     
        ...newStudentData
    };
    mockStudentDb.push(savedStudent);
    console.log("Returned Saved Object: ", savedStudent);
    return savedStudent;
}

console.log("Initial DB State: ", getStudents());
addStudentsAPI({
    firstName: 'John',
    lastName: 'AWS',
    email: 'john.aws@example.com'
});
console.log("Updated DB State: ", getStudents());

