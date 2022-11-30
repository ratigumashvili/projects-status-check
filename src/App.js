import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Students from "./pages/Students";
import Tasks from "./pages/Tasks";
import ViewTasks from "./pages/ViewTasks";
import AddGroups from "./pages/AddGroups";
import AllGroups from "./pages/AllGroups";

import useLocalstorage from "./hooks/useLocalstorage";

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [students, setStudents] = useState([]);
  //v2
  // const [groups, setGroups] = useState([]);
  const [groups, setGroups] = useLocalstorage("groups", []);
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
          element={<Students students={students} setStudents={setStudents} />}
        />
        <Route
          path="/add-tasks"
          element={
            <Tasks tasks={tasks} setTasks={setTasks} students={students} />
          }
        />
        <Route
          path="view-tasks"
          element={<ViewTasks students={students} tasks={tasks} />}
        />
        <Route
          path="/add-group"
          element={<AddGroups groups={groups} setGroups={setGroups} />}
        />
        <Route path="/groups" element={<AllGroups groups={groups} />} />
      </Routes>
    </div>
  );
}

export default App;
