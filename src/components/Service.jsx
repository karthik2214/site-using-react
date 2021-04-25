import React from "react";
import Card from './Card';
import Data from './Imgdata';

const Service = () => {
  return ( 
    <>
    <div className="my-5">
    <h1 className="text-center"> Hello I am Service Page </h1>
    </div>
            {Data.map((val,ind) => {
              return ( 
               <>
               <Card key={ind} imgsrc={val.imgsrc} title={val.title} cardpara={val.cardpara} />
               </>
                )
            })}
  </>
)
}


export default Service;