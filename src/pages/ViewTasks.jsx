import StatusSelect from "./StatusSelect";
const ViewTasks = ({ students }) => {
  console.log(students);
  return (
    <>
      {students.length !== 0 && (
        <div className="table">
          <div className="first-col">
            <div>#</div>
            {students[0]?.tasks.map((record) => (
              <h4 key={record.id}>{record.title}</h4>
            ))}
          </div>
          {students?.map((student) => (
            <div key={student.id} className="col">
              <h4>{student.name}</h4>
              {student.tasks.map((task) => (
                <StatusSelect key={task.id} task={task} />
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ViewTasks;
