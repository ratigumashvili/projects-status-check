import { Link } from "react-router-dom";

const Home = ({ students, tasks }) => {
  return (
    <section className="home">
      <h2>Home</h2>
      <div className="home__controls">
        <Link className="btn btn-common" to="/add-students">
          Add students
        </Link>
        {students.length !== 0 && (
          <Link className="btn btn-common" to="/add-tasks">
            Add tasks
          </Link>
        )}
        {tasks.length !== 0 && (
          <Link className="btn btn-common" to="/view-tasks">
            View tasks
          </Link>
        )}
      </div>
    </section>
  );
};

export default Home;
