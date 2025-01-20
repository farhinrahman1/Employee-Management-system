import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);
  return (
    <div id="tasklist" className="max-w-5xl mx-auto p-4 rounded-lg shadow-lg mt-10 bg-slate-950">
      <div className="bg-white mb-1 py-1 px-1 grid grid-cols-5 gap-4 rounded">
        <h2 className="font-bold text-black rounded mt-1 p-1">Employee Name</h2>
        <h3 className="font-bold mt-1 text-black p-1 rounded">New Task</h3>
        <h5 className="font-bold mt-1 text-black p-1 rounded">Active Task</h5>
        <h5 className="font-bold mt-1 text-black p-1 rounded">Completed Task</h5>
        <h5 className="font-bold mt-1 text-black p-1 rounded">Failed Task</h5>
      </div>
      <div className="">
        {authData.employees.map((elem,idx) => (
          <div key={idx} className="bg-white mb-2 py-2 px-2 grid grid-cols-5 gap-4 items-center rounded">
            <h2 className="text-black font-medium bg-purple-600 rounded mt-1 p-1">{elem.name}</h2>
            <h3 className="text-black font-medium mt-1 bg-green-600 p-2 rounded">{elem.taskCounts.newTask}</h3>
            <h5 className="text-black font-medium mt-1 bg-yellow-600 p-2 rounded">{elem.taskCounts.active}</h5>
            <h5 className="text-black font-medium mt-1 bg-pink-600 p-2 rounded">{elem.taskCounts.completed}</h5>
            <h5 className="text-black font-medium mt-1 bg-red-600 p-2 rounded">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;