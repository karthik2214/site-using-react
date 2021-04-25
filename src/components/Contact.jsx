import React, { useState } from "react";

const Contact = () => {
  
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const inputEvent = (event) => {
    const { name, value} = event.target;
    
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  
   const formSubmit = (e) => {
     e.preventDefault();
   }
  
  return (
    <>
    <div className="my-5">
    <h1 className="text-center"> Contact Page </h1>
    </div>
    <div className="container contact_div"> 
     <div className="row"> 
      <div className="col-md-6 col-10 mx-auto"> 
      <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h2> Full Name </h2></label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your Name" required="bf" />
   </div>
<div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h2> Phone </h2></label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your mobile number" required="bf" />
   </div>
<div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h2> Email </h2></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={inputEvent} placeholder="Enter your Email" required="gd" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
 <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><h2> Message </h2></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={inputEvent} placeholder="Enter here" required="nd" ></textarea>
</div>
  
  <button type="submit" className="btn btn-outline-primary mb-4">Submit</button>
</form>
    </div>
    </div>
    </div>
    </>
)
}


export default Contact;