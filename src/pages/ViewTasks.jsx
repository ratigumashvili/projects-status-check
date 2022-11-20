import { detectStyle } from "../helpers/getStyles";

const ViewTasks = ({ students, tasks, setTasks }) => {
  const handleChangeStatus = (grabbedIdx, e) => {
    console.log(grabbedIdx);
    console.log(e.target);
  };
  return (
    <section>
      <h2>View Tasks</h2>
      <div className="t-row">
        {students?.map((stud) => (
          <div key={stud.id}>
            <p>{stud.name}</p>
            {tasks?.map((task, idx) => (
              <span
                key={task.id}
                className={`circle ${detectStyle(task.status)}`}
                onClick={(e) => handleChangeStatus(idx, e)}
              >
                {idx}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewTasks;
