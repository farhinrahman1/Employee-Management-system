import React from "react";

const CreateTask = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 rounded-lg shadow-lg mt-8 bg-slate-950">
      <h2 className="text-3xl font-bold text-white mb-6">Create Task</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-6">
            {/* Task Title */}
            <div className="flex flex-col">
              <label htmlFor="taskTitle" className="text-lg font-semibold text-white mb-2">
                Task Title
              </label>
              <input
                id="taskTitle"
                type="text"
                className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter task title"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label htmlFor="description" className="text-lg font-semibold text-white mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                rows="6"
                placeholder="Enter task description"
              ></textarea>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-6">
            {/* Date */}
            <div className="flex flex-col">
              <label htmlFor="date" className="text-lg font-semibold text-white mb-2">
                Date
              </label>
              <input
                id="date"
                type="date"
                className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Assign To */}
            <div className="flex flex-col">
              <label htmlFor="assignTo" className="text-lg font-semibold text-white mb-2">
                Assign To
              </label>
              <input
                id="assignTo"
                type="text"
                className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Employee name"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label htmlFor="category" className="text-lg font-semibold text-white mb-2">
                Category
              </label>
              <input
                id="category"
                type="text"
                className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Design, Development, etc."
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-3">
          <button
            type="submit"
            className="w-1/6 bg-sky-950 text-white font-semibold p-3 rounded-lg hover:bg-sky-900 transition-colors"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
