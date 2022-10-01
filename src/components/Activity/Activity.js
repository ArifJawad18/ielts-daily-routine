import React from 'react';
import './Activity.css';
const Activity = ({activity,handleCart}) => {
    const {image,details,time,activity_name}=activity;
    return (
        <div>
            <div className="card" data-aos="fade-zoom-in">
            <img src={image} alt="" className='activity-img'/>
            <h3>{activity_name}</h3>
            <p> {details}
            </p>
            <p>Time Required: {time}s</p>
             <button onClick={() =>handleCart(activity)}
             className='card-btn'>
                Add To List</button>
            </div>
        </div>
    );
};

export default Activity;