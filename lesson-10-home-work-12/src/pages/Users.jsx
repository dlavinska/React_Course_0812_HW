import React from "react";
import useFetch from "../hooks/useFetch";

const Users = () => {
  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) {
    return (<h1>Loading....</h1>);
  }

  return (
    <div className="col-4 mt-4">
      {error && <p>Opps... {error}</p>}
      <div className="card">
        <h1>Users-List Cart:</h1>
        <ul className="list-group">
          {!!data &&
            data.map((user) => (
              <li key={user.id} className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Email: {user.email} </p>
                  <p className="card-text">Phone: {user.phone} </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
