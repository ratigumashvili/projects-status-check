import uuid from "react-uuid";

import { useState } from "react";

const CreateGroups = ({ setGroups }) => {
  const [groupTitleValue, setGroupTitleValue] = useState("");

  const handleStartCreatingGroup = () => {
    if (groupTitleValue.trim() === "") {
      return;
    }
    setGroups((prev) => [
      ...prev,
      { id: uuid(), title: groupTitleValue, students: [] },
    ]);
    setGroupTitleValue("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add group title"
        value={groupTitleValue}
        onChange={(e) => setGroupTitleValue(e.target.value)}
      />
      <button
        type="button"
        onClick={handleStartCreatingGroup}
        disabled={groupTitleValue.trim() === ""}
      >
        Add
      </button>
    </div>
  );
};

export default CreateGroups;
