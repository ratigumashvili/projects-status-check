import { studentsData } from "../Data";
import TestSelect from "./StatusSelect";

const Play = () => {
  return (
    <>
      <div className="table">
        <div className="first-col">
          <div></div>
          {studentsData[0].tasks.map((record) => (
            <div key={record.id}>{record.title}</div>
          ))}
        </div>
        {studentsData.map((student) => (
          <div key={student.id}>
            <div>{student.name}</div>
            {student.tasks.map((task) => (
              <div key={task.id}>
                {/* <p>{task.title}</p> */}
                <TestSelect task={task} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Play;
