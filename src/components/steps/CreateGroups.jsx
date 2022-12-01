import uuid from "react-uuid";

import { useState } from "react";

const CreateGroups = ({ setGroups }) => {
  const [groupTitleValue, setGroupTitleValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCreateGroup();
    }
  };

  const handleCreateGroup = () => {
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
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        onClick={handleCreateGroup}
        disabled={groupTitleValue.trim() === ""}
      >
        Add
      </button>
    </div>
  );
};

export default CreateGroups;
