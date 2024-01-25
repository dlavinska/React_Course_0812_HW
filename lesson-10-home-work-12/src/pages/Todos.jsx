import React from 'react';
import useFetch from "../hooks/useFetch";

const Todos = () => {
  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (isLoading) {
    return (
      <h1>Loading....</h1>
    );
  }

  return (
    <div className="col-4 mt-4">
      {error && <p>Opps... {error}</p>}
      <h1>Todos-List</h1>
      <ul className="list-group">
        {!!data &&
          data.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <h5 className="card-title">{todo.title}</h5>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todos;