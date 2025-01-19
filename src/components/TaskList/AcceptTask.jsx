import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="bg-white text-black p-4 rounded shadow-md h-80 w-60 flex-shrink-0">
            <div className="flex justify-between">
              <h3 className=" bg-black text-sm p-1 rounded">{data.category}</h3>
              <h4 className='text-black text-sm p-1 font-medium rounded'>{data.taskDate}</h4>
            </div>
      <h2 className='text-black mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-black text-sm mt-2'> { data.taskDescription}</p> 
          <div className="flex justify-between mt-2">
              <button className='bg-green-500 py-1 font-semibold px-1 text-sm rounded'>Mark completed</button>
              <button className='bg-red-500 py-1 px-1 font-semibold text-sm rounded'>Mark failed</button>
          </div>
          </div>
  )
}

export default AcceptTask