import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/add-students">Add students</Link>
      <Link to="/add-tasks">Add tasks</Link>
      <Link to="/view-tasks">View tasks</Link>
    </div>
  );
};

export default Home;
