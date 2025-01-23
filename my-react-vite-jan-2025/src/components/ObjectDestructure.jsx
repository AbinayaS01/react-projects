function ObjectDestructure() {
    let student={
        studentName:"John",
        studentAge:"30",
        studentCity:"New York",
    };
    let sName=student.studentName;
    let sAge=student.studentAge;
    let sCity=student.studentCity;

    let {studentName,studentAge,studentCity}=student;
    let middleStudent={
        // studentName:student.studentName,
        // studentAge:student.studentAge,
        // studentCity:student.studentCity,
        ...student,
        studentMark:40,
        studentGrade:"A",
    };
    return ( <>
        <h2>Object Destructuring demo</h2>
        <h3>Student Details</h3>
        <p>Student Name: {sName}</p>
        <p>Student Age: {sAge}</p>
        <p>Student City: {sCity}</p>
        <h3>Student Details by Object Destructuring</h3>
        <p>Student Name: {studentName}</p>
        <p>Student Age: {studentAge}</p>
        <p>Student City: {studentCity}</p>
        <h3>Student Details using spread operator</h3>
        <p>Student Name: {middleStudent.studentName}</p>
        <p>Student Age: {middleStudent.studentAge}</p>
        <p>Student City: {middleStudent.studentCity}</p>
        <p>Student Mark: {middleStudent.studentMark}</p>
        <p>Student Grade: {middleStudent.studentGrade}</p>
    </> );
}

export default ObjectDestructure;