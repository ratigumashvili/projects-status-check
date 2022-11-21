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
  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <span className={`circle ${detectStyleNew(status)}`}></span>
      <select onChange={(e) => handleChangeStatus(e)}>
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusSelect;
