import React from "react";
import MemberDetails from "../../components/uers/users";
interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
}

const getuser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

const teamMember = async () => {
  const teams = await getuser();
  return (
    <div className="teamMember mt-20 pt-10">
      <div className="container">
        <h1 className="text-center">Our Team</h1>
        <div className=" grid grid-cols-3 gap-4">
          {teams.map((team: User) => (
            <MemberDetails userr={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default teamMember;
