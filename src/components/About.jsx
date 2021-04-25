import React from "react";
import Common from "./Common";
import img2 from './img/img2.png'

const About = () => {
  return ( 
    <>
    <Common 
     name="Welcome To About Page Of"
     imgsrc={img2}
     para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet commodo mauris sed congue. Proin id magna id metus imperdiet suscipit ut non odio. Etiam vitae tristique lacus."
     visit="/service"
     btnname="Get Started"
     />
     </>
)
}


export default About;