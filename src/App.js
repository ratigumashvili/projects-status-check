import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Students from "./pages/Students";
import Tasks from "./pages/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [students, setStudents] = useState([]);
  return (
    <div className="App">
      <h1>
        <Link to="/">Tasks App</Link>
      </h1>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route
          path="/add-students"
          element={
            <Students
              students={students}
              setStudents={setStudents}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route
          path="/add-tasks"
          element={<Tasks tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
