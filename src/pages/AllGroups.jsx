import { Link } from "react-router-dom";

const AllGroups = ({ groups, setGroups }) => {
  const handleRemoveGroup = (idToDelete) => {
    setGroups((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  return (
    <section>
      <div className="page-header-wrapper">
        <h2>All Groups</h2>
        <Link to="/add-group">Create group</Link>
      </div>
      {groups?.map(({ id, title, students }) => (
        <article key={id} className="groups-card">
          <div className="header">
            <div className="groups-card__header">
              <h4>{title}</h4>
              <button
                onClick={() => handleRemoveGroup(id)}
                className="btn btn-danger"
              >
                x
              </button>
            </div>
          </div>
          <p>Students: {students?.length}</p>
          <Link to={`/groups/${id}`}>View group</Link>
        </article>
      ))}
    </section>
  );
};

export default AllGroups;
