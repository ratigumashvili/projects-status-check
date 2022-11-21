import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Students from "./pages/Students";
import Tasks from "./pages/Tasks";
import ViewTasks from "./pages/ViewTasks";

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
        <Route index element={<Home students={students} tasks={tasks} />} />
        <Route
          path="/add-students"
          element={
            <Students
              students={students}
              setStudents={setStudents}
              tasks={tasks}
            />
          }
        />
        <Route
          path="/add-tasks"
          element={
            <Tasks tasks={tasks} setTasks={setTasks} students={students} />
          }
        />
        <Route path="view-tasks" element={<ViewTasks students={students} />} />
      </Routes>
    </div>
  );
}

export default App;
