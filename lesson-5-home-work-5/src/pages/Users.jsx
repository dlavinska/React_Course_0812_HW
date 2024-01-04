import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        setError(e.message);
      }
      
    }
    getUsers();
   }, []);

  return (
    <div className='col-4 mt-4'>
      {error &&
        <div>
          <h2>Opps..</h2>
          <p>{error}</p>
        </div>
      }
      
      <div className='card'>
        <h1>Users-List:</h1>
        <ul className='list-group'>
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <Link to={`${user.id}`} >{user.name}</Link>
            </li>
          ))}
        </ul>
        <Link to={`/`} className="btn btn-primary mt-4 mb-4 ml-3 mr-3">Back Home-Page</Link>
      </div>
    </div>
  )
}

export default Users;