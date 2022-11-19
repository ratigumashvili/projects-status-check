import uuid from "react-uuid";
import { useState } from "react";

const Students = ({ students, setStudents }) => {
  const [studentName, setStudentName] = useState("");
  const handleAddStudent = (e) => {
    e.preventDefault();
    const newObj = {
      id: uuid(),
      name: studentName,
    };
    setStudents([...students, newObj]);
    setStudentName("");
  };
  return (
    <form onSubmit={handleAddStudent}>
      <input
        type="text"
        placeholder="Add student name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Students;
