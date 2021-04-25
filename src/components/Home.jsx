import React from "react";
//import {NavLink} from "react-router-dom";
import Common from './Common';
import Img from './img/img-home.svg';

const Home = () => {
  return ( 
    <Common
     name="Grow your business with"
     imgsrc={Img}
     para1 = "We are The team of talented Web developers."
     visit="/service"
     btnname="Get Started"
    />
)
}


export default Home;