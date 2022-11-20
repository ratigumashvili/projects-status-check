import { useState } from "react";

const Tasks = ({ tasks, setTasks, students }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleAddTitle = (e) => {
    e.preventDefault();
    const newObj = {
      title: taskTitle,
      status: {
        default: true,
        check: false,
        imrove: false,
        complete: false,
      },
    };
    setTasks([...tasks, newObj]);
    students.forEach((stud) => {
      stud.tasksArr.push(newObj);
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
