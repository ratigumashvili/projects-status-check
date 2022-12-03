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
    <section className="form-section">
      <div className="groups-input-wrapper">
        <input
          type="text"
          placeholder="Add group title"
          value={groupTitleValue}
          onChange={(e) => setGroupTitleValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-form"
          type="button"
          onClick={handleCreateGroup}
          disabled={groupTitleValue.trim() === ""}
        >
          Add
        </button>
      </div>
      {error && <p>{error}</p>}
    </section>
  );
};

export default CreateGroups;
