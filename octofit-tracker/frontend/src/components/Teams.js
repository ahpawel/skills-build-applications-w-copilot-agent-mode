import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://fictional-disco-g74wxjgv56rc5x7-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4 bg-white rounded">
      <h1 className="mb-4 text-info">Teams</h1>
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>{team.members && team.members.map(m => m.username).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-info mt-3">Add Team</button>
    </div>
  );
}

export default Teams;
