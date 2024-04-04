import React from "react";
import Link from "next/link";

interface usr {
    userr: {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
  };
}

const memberDetails = (dta : usr) => {
  return (
    <div className="inner">
      <h4>{dta.userr.name}</h4>
      <h5>
        <Link href="mailto:{data.kv.email}">{dta.userr.email}</Link>
      </h5>
      <h5>address</h5>
      <h5>
        <Link href="tel:{data.kv.phone}">{dta.userr.phone}</Link>
      </h5>
    </div>
  );
};

export default memberDetails;