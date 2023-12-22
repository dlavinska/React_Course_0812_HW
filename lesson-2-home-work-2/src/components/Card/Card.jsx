import React from 'react';
import './Card.css'

const Card = (props) => {
    const { courcesData } = props;
    
    const handleFormatDuration = (seconds) => {
        const hour = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds / 60) % 60);
        const result = `${hour}h ${minutes}m`;
        return result;
    }
    
    return (
        <>
            {courcesData.map((course) =>
                <div className='card' key={course.id}>
                    <div className='image__container'>
                        <img src={course.image} alt="cources" />
                        <div className="level">{course.level}</div>
                    </div>
                    <h3 className='card__title'> {course.title}</h3>
                    <div className="card__info">
                        <div className="user">
                            <img
                                src={course.user.avatar} alt={course.user.name}
                            />
                            <p>{course.user.name}</p>
                        </div>
                        <div className="rating">
                            <p>{course.rating}</p>
                        </div>
                    </div>
                    <div className="card__info">
                        <div>{course.students} Student</div>
                        <div>{course.modules} Modules</div>
                        <div>{handleFormatDuration (course.duration)}</div>
                    </div>                    
                </div>
                
            )}
        </>
    )
}

export default Card;