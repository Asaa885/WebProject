import React from 'react';
import './Home.css';
import img001 from './../asset/images/Fvi2.PNG';
import img002 from './../asset/images/Fvi1.PNG';

const Home = () => {
  return (
    <div className="home-container">
      <h1>  Welcome To Advance Admission System</h1>
      <div className="home-img">
        <img src={img002} alt="Admission System Image 1" />
        <img src={img001} alt="Admission System Image 2" />
      </div>
    </div>
  );
};

export default Home;
