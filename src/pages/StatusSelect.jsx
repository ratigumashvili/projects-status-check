import { useState } from "react";
import { detectStyleNew } from "../helpers/getStyles";

const OPTIONS = [
  { name: "Default", value: "default" },
  { name: "Failed", value: "failed" },
  { name: "Improve", value: "improve" },
  { name: "Done", value: "done" },
];

const StatusSelect = ({ task }) => {
  const [status, setStatus] = useState(task.status);
  const [show, setShow] = useState(false);
  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="table-item">
      <button
        className="btn btn-edit"
        onClick={() => setShow(!show)}
        title="Edit item"
      >
        ...
      </button>
      <span className={`circle ${detectStyleNew(status)}`}></span>
      {show && (
        <select
          className="status-select"
          defaultValue={status}
          onChange={(e) => handleChangeStatus(e)}
        >
          {OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default StatusSelect;
