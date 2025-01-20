import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({data}) => {
  console.log("I am here")
  return (
    <div className="w-full p-1 bg-black">
      <Header data={data} />
          <CreateTask />
          <AllTask />
    </div>
  );
};

export default AdminDashboard;
