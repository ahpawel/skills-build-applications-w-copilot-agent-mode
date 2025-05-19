import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fictional-disco-g74wxjgv56rc5x7-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4 bg-white rounded">
      <h1 className="mb-4 text-warning">Users</h1>
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-warning mt-3">Add User</button>
    </div>
  );
}

export default Users;
