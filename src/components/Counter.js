import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <p>Count: {count}</p>
        <button className='py-2 px-6 bg-blue-400 text-white' onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  )
}

export default Counter