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
            <p>Time required: {time}s</p>
             <button onClick={() =>handleCart(activity)}  className='card-btn'>Add to list</button>
            </div>
        </div>
    );
};
export default Activity;