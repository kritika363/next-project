import React from "react";
import Link from "next/link";


interface usr{
    kv:{
        id: number;
        name: 'string';
        email:'string';
        address: 'string';
        phone:'string'
    }
   
}

const memberDetails = (data:usr) => {
    
  return (
   
      <div className="inner">
        <h4>{data.kv.name}</h4>
        <h5>
          <Link href="mailto:{data.kv.email}">{data.kv.email}</Link>
        </h5>
        <h5>{data.kv.address}</h5>
        <h5>
          <Link href="tel:{data.kv.phone}">{data.kv.phone}</Link>
        </h5>
      </div>
  );
};

export default memberDetails;
