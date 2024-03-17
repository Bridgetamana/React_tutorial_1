import React from 'react'

const Greet = (props) => {
  return (
    <div className="text-3xl font-bold underline">Hi I'm {props.name}!</div>
  )
}

export default Greet