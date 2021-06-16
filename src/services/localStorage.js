import { getSchoolCollection ,getClassCollection, getDivisionCollection} from './collcetion'

const KEYS ={
    students:'students',
    studentID:'studentID'
}

export function insertStudent(data) {
    let students = getAllStudents();
    data['id'] = generateStudentId()
    students.push(data)
    localStorage.setItem(KEYS.students,JSON.stringify(students))
}

export function deleteStudent(id) {
    let students = getAllStudents();
    students = students.filter(x => x.id != id)
    localStorage.setItem(KEYS.students, JSON.stringify(students));
}


export function generateStudentId() {
    if (localStorage.getItem(KEYS.studentID) == null)
        localStorage.setItem(KEYS.studentID, '8')
    var id = parseInt(localStorage.getItem(KEYS.studentID))
    localStorage.setItem(KEYS.studentID, (++id).toString())
    return id;
}

export function getAllStudents() {
    if (localStorage.getItem(KEYS.students) == null)
        localStorage.setItem(KEYS.students, JSON.stringify([]))
    let students = JSON.parse(localStorage.getItem(KEYS.students));

    let schools = getSchoolCollection();
    let classStus = getClassCollection();
    let divisions = getDivisionCollection();

    return students.map(x => ({
        ...x,
        school: schools[x.school - 1]?.title,
        classStu: classStus[x.classStu - 1]?.title,
        division: divisions[x.division - 1]?.title
    }))
}