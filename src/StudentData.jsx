import Student from "./Student"

const StudentData= (props) => {
  return (
    <>
      {props.students.map(student => 
        <Student key={student.name} student={student} />
        )}
    </>
  )
}

export default StudentData