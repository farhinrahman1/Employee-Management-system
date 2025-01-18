import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
          < Header />
          <TaskListNumbers />  
          <TaskList/>

      {/* Footer */}
      <footer className="bg-black p-4 text-center">
        <p>&copy; 2025 Employee Management System</p>
      </footer>
    </div>
  );
};

export default EmployeeDashboard;