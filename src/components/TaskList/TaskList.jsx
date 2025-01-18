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
      <div id="tasklist" className="overflow-x-auto">
        <div className="flex space-x-4">
          <div className="bg-white text-black p-4 rounded shadow-md h-80 w-60 flex-shrink-0">
            <div className="flex justify-between">
              <h3 className=" bg-black text-sm p-1 rounded">High</h3>
              <h4 className='text-black text-sm p-1 font-medium rounded'>16 Jan 2025</h4>
            </div>
            <h2 className='text-black mt-5 text-xl font-semibold'>Make a Instagam logo</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
          </div>
          <div className="bg-white text-black p-4 rounded shadow-md h-80 w-60 flex-shrink-0">
            <div className="flex justify-between">
              <h3 className=" bg-black text-sm p-1 rounded">High</h3>
              <h4 className='text-black text-sm p-1 font-medium rounded'>06 Feb 2025</h4>
            </div>
            <h2 className='text-black mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
          </div>
          <div className="bg-white text-black p-4 rounded shadow-md h-80 w-60 flex-shrink-0">
            <div className="flex justify-between">
              <h3 className=" bg-black text-sm p-1 rounded">High</h3>
              <h4 className='text-black text-sm p-1 font-medium rounded'>29 July 2025</h4>
            </div>
            <h2 className='text-black mt-5 text-xl font-semibold'>Make a react project</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
          </div>
          <div className="bg-white text-black p-4 rounded shadow-md h-80 w-60 flex-shrink-0">
            <div className="flex justify-between">
              <h3 className=" bg-black text-sm p-1 rounded">High</h3>
              <h4 className='text-black text-sm p-1 font-medium rounded'>30 Jan 2025</h4>
            </div>
            <h2 className='text-black mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
