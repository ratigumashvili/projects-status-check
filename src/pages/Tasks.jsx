import { useState } from "react";
import uuid from "react-uuid";

const Tasks = ({ tasks, setTasks, students }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleAddTitle = (e) => {
    e.preventDefault();
    const newObj = {
      id: uuid(),
      title: taskTitle,
      status: "default",
    };
    setTasks([...tasks, newObj]);
    students.forEach((stud) => {
      stud.tasks.push(newObj);
    });
    setTaskTitle("");
  };
  return (
    <form onSubmit={handleAddTitle}>
      <input
        type="text"
        placeholder="Add tasks title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Tasks;
