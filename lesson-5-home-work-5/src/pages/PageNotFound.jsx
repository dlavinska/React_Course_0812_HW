import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
        <h1>Page not found</h1>
        <Link to="/" className="btn btn-primary mt-4 mb-4" >Back to home Page</Link>
    </div>
  )
}

export default PageNotFound;