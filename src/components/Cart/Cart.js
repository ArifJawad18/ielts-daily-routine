import React from 'react';
import { useState,} from 'react';
import './Cart.css'
import image from '../../images/img.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = (props) => {
    const [time,settimeout] = useState(0)
    const{cart}=props
     let totalTime = 0;
     for(const learning of cart){
        totalTime=totalTime + learning.time;
     } 
     const handleBreak =() =>{
        settimeout(10)
    }
    const handleBreak2 =() =>{
        settimeout(20)
    }
    const handleBreak3 =() =>{
        settimeout(30)
    }
    const handleBreak4 =() =>{
        settimeout(40)
    }
    const handleBreak5 =() =>{
        settimeout(50)
    }

    const handleToast =()=>{
       
        toast.success(" Congratulations, You Completed IELTS Tasks :) !");
    }
    return (
        <div className='cart'>
            <div className="profile">
                <img className='avatar' src={image} alt="" />
                <div className='location'>
                    <h3>Jon</h3>
                    <p>London,UK</p>
                </div>
            </div>
            <div className="about">
                <div className="weight">
                    <h2>50</h2>
                    <p>Weight</p>
                </div>
                <div className="weight">
                    <h2>5.6</h2>
                    <p>Height</p>
                </div>
                <div className="weight">
                    <h2>25</h2>
                    <p>Age</p>
                </div>
            </div>
            <div className="break">
                <h3>Add A Break</h3>
                <div className="break-btn">
                    <button onClick={handleBreak} className='btn'> 10 min</button>
                    <button onClick={handleBreak2} className='btn'>20 min</button>
                    <button onClick={handleBreak3} className='btn'>30 min</button>
                    <button onClick={handleBreak4} className='btn'>40 min</button>
                    <button onClick={handleBreak5} className='btn'>50 min</button>
                </div>
            </div>
            <div className="">
                <h3>Learning Details</h3>
                <div className="break-btn">
                    <h4>Learning Time</h4>
                    <p>{totalTime} min</p>
                </div>
            </div>
            <div className=""><br></br>
                <div className="break-btn">
                    <h4>Break Time</h4>
                        <p>{time} </p>
                </div><br></br>
                <button className='card-btn'onClick={handleToast}>Activity completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};
export default Cart;