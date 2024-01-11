import React from 'react';
import BooksList from './BooksList';

const Container = () => {
  return (
    <div className="col-12 mt-12">
      <div className='row'>
        <div className="col-12">
          <h1>My Books-List for reading in 2024:</h1>
        </div>       
      </div>
      <BooksList/>
  </div>
        
  );
}

export default Container;