import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
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
          {data.tasks.map((elem,idx) => {
            if (elem.active) {
              return (<AcceptTask key={idx} data={elem} />
              )
            }
            if (elem.newTask) {
              return (
                <NewTask key={idx} data={elem}/>
              )
            }
            if (elem.completed) {
              return (
                <CompleteTask key={idx} data={elem}/>
              )
            }
            if (elem.failed) {
              return (
                <FailedTask key={idx} data={elem}/>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
