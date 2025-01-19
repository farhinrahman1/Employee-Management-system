import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
    <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* New Task Card */}
          <div className="bg-yellow-400 text-black p-4 rounded shadow-md">
            <h2 className="text-xl text-black font-bold mb-2">{data.taskCounts.newTask}</h2>
            <h2 className="text-xl text-black font-bold mb-2">New Tasks</h2>
          </div>

          {/* Completed Task Card */}
          <div className="bg-green-500 text-black p-4 rounded shadow-md">
            <h2 className="text-xl text-black font-bold mb-2">{data.taskCounts.completed}</h2>
            <h2 className="text-xl text-black font-bold mb-2">Completed Tasks</h2>
          </div>

          {/* Accepted Task Card */}
          <div className="bg-blue-500 text-black p-4 rounded shadow-md">
            <h2 className="text-xl text-black font-bold mb-2">{data.taskCounts.active}</h2>
            <h2 className="text-xl text-black font-bold mb-2">Accepted Tasks</h2>

          </div>

          {/* Failed Task Card */}
          <div className="bg-red-600 text-black p-4 rounded shadow-md">
            <h2 className="text-xl text-black font-bold mb-2">{data.taskCounts.failed}</h2>
            <h2 className="text-xl text-black font-bold mb-2">Failed Tasks</h2>
          </div>
        </div>
      </main>
  )
}

export default TaskListNumbers;