import uuid from "react-uuid";

import { useState, useEffect } from "react";

const CreateStudents = ({
  groups,
  setGroups,
  choosedGroup,
  setChoosedGroup,
}) => {
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    if (!choosedGroup) {
      setChoosedGroup(groups[0].title);
    }
  }, [groups, setChoosedGroup, choosedGroup]);

  const handleChooseGroup = (e) => {
    setChoosedGroup(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddStudent();
    }
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

    setGroups((prevState) => {
      return prevState.filter((item) =>
        item.title === choosedGroup ? item.students.push(newStudent) : item
      );
    });

    setStudentName("");
  };
  return (
    <section className="form-section">
      <div className="groups-input-wrapper">
        <input
          type="text"
          placeholder="Add students"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-form"
          type="button"
          disabled={studentName.trim() === ""}
          onClick={handleAddStudent}
        >
          Add
        </button>
      </div>

      <div className="form-radio-buttons">
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
                defaultChecked={
                  choosedGroup ? title === choosedGroup : idx === 0
                }
                onChange={handleChooseGroup}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CreateStudents;
