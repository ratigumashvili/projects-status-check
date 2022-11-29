import uuid from "react-uuid";

import { useState, useEffect } from "react";

const CreateStudents = ({ groups, choosedGroup, setChoosedGroup }) => {
  const [studentName, setStudentName] = useState("");
  const selected = groups.filter(({ title }) => title === choosedGroup);

  useEffect(() => {
    setChoosedGroup(groups[0].title);
  }, [groups, setChoosedGroup]);

  const handleChooseGroup = (e) => {
    setChoosedGroup(e.target.value);
  };

  const handleAddStudent = () => {
    if (studentName.trim() === "") {
      return;
    }

    const newStudent = {
      id: uuid(),
      name: studentName,
      tasks: [],
    };

    selected[0].students.push(newStudent);
    setStudentName("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add students"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button
        type="button"
        disabled={studentName.trim() === ""}
        onClick={handleAddStudent}
      >
        Add
      </button>

      {groups?.map((item, idx) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <label htmlFor={id}>{title}</label>
            <input
              type="radio"
              name="group"
              id={id}
              value={title}
              defaultChecked={idx === 0}
              onChange={handleChooseGroup}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CreateStudents;
