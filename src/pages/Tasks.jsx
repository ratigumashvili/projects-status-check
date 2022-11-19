import { useState } from "react";

const Tasks = ({ tasks, setTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleAddTitle = (e) => {
    e.preventDefault();
    const newObj = {
      title: taskTitle,
    };
    setTasks([...tasks, newObj]);
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
