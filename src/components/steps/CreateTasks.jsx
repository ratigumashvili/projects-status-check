import uuid from "react-uuid";

import { useState } from "react";

const CreateTasks = ({ groups, choosedGroup }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const selected = groups.filter(({ title }) => title === choosedGroup);

  const handleAddTask = () => {
    if (taskTitle.trim() === 0) {
      return;
    }

    const newTask = {
      id: uuid(),
      title: taskTitle,
    };

    selected[0].students.forEach((student) => {
      student.tasks.push(newTask);
    });

    setTaskTitle("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        type="button"
        disabled={taskTitle.trim() === ""}
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default CreateTasks;
