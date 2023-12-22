import React from 'react';
import './Card.css'

const Card = ({courcesData}) => {
    const { id, image, level, title, user, rating, modules, students, duration } = courcesData;
    
    const handleFormatDuration = (seconds) => {
        const hour = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds / 60) % 60);
        const result = `${hour}h ${minutes}m`;
        return result;
    }
    
    return (
         
        <div className='card' key={id}>
            <div className='image__container'>
                <img src={image} alt="cources" />
                <div className="level">{level}</div>
            </div>
            <h3 className='card__title'> {title}</h3>
            <div className="card__info">
                <div className="user">
                    <img
                        src={user.avatar} alt={user.name}
                    />
                    <p>{user.name}</p>
                </div>
                    <div className="rating">
                        <p>{rating}</p>
                    </div>
            </div>
            <div className="card__info">
                <div>{students} Student</div>
                <div>{modules} Modules</div>
                <div>{handleFormatDuration (duration)}</div>
            </div>                    
        </div>

    )
}

export default Card;