import React from 'react';
import './List.css';
import articles from '../../data/articles.json';

const List = () => {

  return (
    <ul className='list'>
      {
        articles.map(article =>  
          <li key={article.id}>
            {article.title}
          </li>
        )
      }
    </ul>

  )
}

export default List;