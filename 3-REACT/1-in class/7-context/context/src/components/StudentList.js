import React, { useContext } from "react";
import StudentItem from "./StudentItem";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
