import { useParams, Link } from "react-router-dom";

import { detectStyle } from "../helpers/getStyles";

const OPTIONS = [
  { name: "Default", value: "default" },
  { name: "Failed", value: "failed" },
  { name: "Improve", value: "improve" },
  { name: "Done", value: "done" },
];

const SingleGroup = ({ groups, setGroups }) => {
  const { id } = useParams();

  const currentGroup = groups?.filter((group) => group.id === id);

  const handleDetectStatusNew = (e, groupIdx, studentIdx, taskIdx) => {
    setGroups((prev) => {
      const newGroup = [...prev];

      newGroup[groupIdx].students[studentIdx].tasks[taskIdx].status =
        e.target.value;

      return newGroup;
    });
  };

  return (
    <section>
      <div className="page-header-wrapper">
        <h2>Title: {currentGroup[0].title}</h2>
      </div>

      <>
        <table>
          <thead>
            <tr>
              <th>#</th>
              {groups.map(
                (group) =>
                  group.id === id &&
                  group.students[0].tasks.map((task, idx) => (
                    <th key={idx}>{task.title}</th>
                  ))
              )}
            </tr>
          </thead>
          <tbody>
            {groups.map(
              (group, groupIdx) =>
                group.id === id &&
                group.students.map((student, studentIdx) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    {student.tasks.map((task, taskIdx) => (
                      <td key={taskIdx}>
                        <div
                          className={`circle ${detectStyle(task.status)}`}
                        ></div>
                        <select
                          defaultValue={task.status}
                          onChange={(e) =>
                            handleDetectStatusNew(
                              e,
                              groupIdx,
                              studentIdx,
                              taskIdx
                            )
                          }
                        >
                          {OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </td>
                    ))}
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </>

      <Link to="/groups">Go back to groups</Link>
    </section>
  );
};

export default SingleGroup;
