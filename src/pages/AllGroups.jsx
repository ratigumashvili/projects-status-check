import { Link } from "react-router-dom";

const AllGroups = ({ groups }) => {
  return (
    <div>
      <h2>All Groups</h2>
      {groups?.map(({ id, title, students }) => (
        <article key={id} className="groups-card">
          <h4>{title}</h4>
          <p>Students: {students.length}</p>
          <Link to={`/groups/${id}`}>View group</Link>
        </article>
      ))}
    </div>
  );
};

export default AllGroups;
