// import uuid from "react-uuid";

import { useState } from "react";

const CreateTasks = ({ setGroups, choosedGroup }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (taskTitle.trim() === 0) {
      return;
    }

    const newTask = {
      // id: uuid(),
      title: taskTitle,
      status: "default",
    };

    setGroups((prevState) => {
      return prevState.filter((item) =>
        item.title === choosedGroup
          ? item.students.map((stud) => stud.tasks.push(newTask))
          : item
      );
    });

    setTaskTitle("");
  };
  return (
    <section className="form-section">
      <div className="groups-input-wrapper">
        <input
          type="text"
          placeholder="Add task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-form"
          type="button"
          disabled={taskTitle.trim() === ""}
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default CreateTasks;
