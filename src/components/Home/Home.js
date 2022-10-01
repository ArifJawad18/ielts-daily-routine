import React from 'react';
import { useState,useEffect } from 'react';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import './Home.css'
import logo from '../../images/favicon.ico.png'
import Activity from '../Activity/Activity'

const Home = () => {
    const [activities,setActivities] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[]);
    const handleCart = (activity) =>{
       const newCart = [...cart,activity]
       setCart(newCart)
    }
    return (
        <div>
            
            <div className="home-container">
                <div className="left-side">
               
               <div className="nav">
                <img src={logo} alt="" className='logo-img' />
                </div>
               
                    <div className="heading">
                        
                        <span className='heading-text'> IELTS Daily Routine</span>
                    </div>
                    <h1 className='learning-text'>Now Select Your IELTS Learning</h1>
                    <div className="activity-container">
                    {
                    activities.map((activity => 
                    <Activity 
                        activity={activity} 
                        key={activity?.id} 
                        handleCart ={handleCart}
                    ></Activity>))}
                </div>
                </div>
                <div className="right-side">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <div className='blog'>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;