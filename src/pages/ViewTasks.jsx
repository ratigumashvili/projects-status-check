import { detectStyle } from "../helpers/getStyles";
import uuid from "react-uuid";

const ViewTasks = ({ students, tasks }) => {
  const handleChangeStatus = (index) => {
    console.log(index);
  };
  return (
    <section>
      <h2>View Tasks</h2>
      <div className="t-row">
        {students?.map((stud) => (
          <div key={stud.id}>
            <p>{stud.name}</p>
            {stud.tasksArr.map((item, idx) => (
              <p
                key={idx}
                className={`circle ${detectStyle(item.status)}`}
                onClick={() => handleChangeStatus(uuid())}
              >
                {/* {item.title} */}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewTasks;
