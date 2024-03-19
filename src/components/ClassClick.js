import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        alert('You just double clicked the button');
    }
  render() {
    return (
      <div className="flex justify-center">
        <button className='py-2 px-6 bg-blue-400 text-white' onDoubleClick={this.clickHandler}>Double Click Me</button>
      </div>
    )
  }
}

export default ClassClick