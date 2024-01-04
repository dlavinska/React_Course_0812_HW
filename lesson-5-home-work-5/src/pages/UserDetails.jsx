import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!userId) return;
    const getUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setUser(data);
    
      } catch (e) {
        setError(e.message);
      }
    }
    getUser();
  }, [userId]);  
  
  console.log(user);
  return (
    <div className='col-4 mt-4'>
      {error &&
        <div>
          <h2>Opps..</h2>
          <p>{error}</p>
        </div>
      }
      {user && 
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{user.name}</h5>
            <p className='card-text'>Email: {user.email} </p>
            <p className='card-text'>Phone: {user.phone} </p>
            <p className='card-text'>Company: {user.company.name} </p>
            <p className='card-text'>City: {user.address.city} </p>
            <Link to={`/users`} className='btn btn-primary'>Back to users-list</Link>
          </div>
        </div>      
      }

      
    </div>
  )
}

export default UserDetails;