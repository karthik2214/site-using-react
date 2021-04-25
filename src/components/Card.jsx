import React from 'react';
import { NavLink }from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

const Card = (props) => {
  
  return (
    <>
  <div className="container-fluid">
  <div className="row">
  <div className="col-10 mx-auto"> 
  <div className="row">
  <div className="col-md-4 col-12 mx-auto"> 
  <div className="card border-4 border-dark">
          <img src={props.imgsrc} className="card-img-top" alt="Images"/>
          <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.cardpara}</p>
          <NavLink to="" target="_blank" className="btn btn-primary">Go somewhere</NavLink>
   </div>
   </div>
   </div>
   </div>
 </div>
 </div>
</div>
    </>
    )
}

export default Card;