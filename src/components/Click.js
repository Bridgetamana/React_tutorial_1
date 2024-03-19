import React from 'react'

function Click() {
    function handleClick() {
        alert('You just clicked the button')
    }
  return (
    <div className="flex justify-center py-12">
        <button className='py-2 px-6 bg-blue-400 text-white' onClick={handleClick}>Click</button>
    </div>
  )
}

export default Click