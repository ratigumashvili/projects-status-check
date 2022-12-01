import { useParams, Link } from "react-router-dom";

const SingleGroup = ({ groups }) => {
  const { id } = useParams();

  const currentGroup = groups?.filter((group) => group.id === id);
  const students = currentGroup[0]?.students?.map((student) => student?.tasks);

  console.log(currentGroup);

  return (
    <div>
      <h2>Title: {currentGroup[0].title}</h2>

      <table>
        <thead>
          <tr>
            <th>#</th>
            {students[0]?.map((task) => (
              <th key={task.id}>{task.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentGroup[0]?.students?.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              {students[0]?.map((task) => (
                <td key={task.id}>{task.status}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/groups">Go back to groups</Link>
    </div>
  );
};

export default SingleGroup;
