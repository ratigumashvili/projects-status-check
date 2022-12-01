import uuid from "react-uuid";

import { useState } from "react";

const CreateGroups = ({ groups, setGroups }) => {
  const [groupTitleValue, setGroupTitleValue] = useState("");
  const [error, setError] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCreateGroup();
    }
  };

  const handleCreateGroup = () => {
    setError(false);

    const newGroup = { id: uuid(), title: groupTitleValue, students: [] };

    if (groupTitleValue.trim() === "") {
      return;
    }

    if (groups?.some(({ title }) => title === newGroup.title)) {
      setError("Group with that name allready registered");
      return;
    }

    setGroups((prev) => [...prev, newGroup]);

    setGroupTitleValue("");
  };
  return (
    <div>
      {error && <p>{error}</p>}
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
