import React from 'react';

const TaskList = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>

      {/* Work Description */}
      <div className="mb-6">
        <p className="bg-gray-800 p-2 rounded text-white">
          Here you can find the tasks assigned to you. Please complete the pending tasks and update the status accordingly.
        </p>
      </div>

      {/* Horizontally Sliding Task Cards */}
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          <div className="bg-yellow-500 text-black p-4 rounded shadow-md h-40 w-96 flex-shrink-0">
            Task 1 Description
          </div>
          <div className="bg-yellow-500 text-black p-4 rounded shadow-md h-40 w-96 flex-shrink-0">
            Task 2 Description
          </div>
          <div className="bg-yellow-500 text-black p-4 rounded shadow-md h-40 w-96 flex-shrink-0">
            Task 3 Description
          </div>
          <div className="bg-yellow-500 text-black p-4 rounded shadow-md h-40 w-96 flex-shrink-0">
            Task 4 Description
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
