import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="userlistbody">
    <div className="container">
      <h1>User List</h1>

      {/* Search bar with button */}
      <div className="search-wrapperss">
        <input
          type="text"
          placeholder="Search by name or email"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>

      {filteredUsers.map((user) => (
        <div key={user.id} className="card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default UserList;
