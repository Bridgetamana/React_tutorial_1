import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className='flex justify-center py-16'>
        <h2 className='mr-2 font-semibold'>Current Time:</h2>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
