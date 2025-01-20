import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-black text-white">
      < Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />  
      <TaskList data={props.data} />

      <footer className="bg-black p-4 text-center">
        <p>&copy; 2025 Employee Management System</p>
      </footer>
    </div>
  );
};

export default EmployeeDashboard;