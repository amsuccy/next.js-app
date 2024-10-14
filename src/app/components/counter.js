"use client"
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0) 

        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <p className='text-2x1 font-semibold mb-4'>
                you clicked <span className='text-blue-600'>{count}</span> times
            </p>
            <div className='d-flex'><button
            onClick={() => setCount( count > 0 ? count - 1 : 0)}
            className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 m-3'
            >
                Minus
            </button>
            <button
            onClick={() => setCount(count + 1)}
            className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
            >
                add
            </button></div>
          </div>
        )
      
      
}

export default Counter