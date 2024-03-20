import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  toggleVisibility() {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));

}

  render() {
    return (
        <div className='flex flex-row-reverse justify-center py-16 items-center gap-4'>
        <button className='py-2 px-6 bg-black text-white rounded-md' onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide Clock' : 'Show Clock '}
        </button>
        {this.state.isVisible ? (
          <div>
            <h2 className='mr-2 font-semibold'>Current Time:</h2>
            <p>{this.state.time}</p>
          </div>
        ) : (
          <div>
            <h2>The clock is hidden</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Clock;
