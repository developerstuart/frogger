import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 10}
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    console.log(this.state.currentCount);
    if(this.state.currentCount < 1) {
      //clearInterval(this.intervalId);
      this.setState({
        currentCount: 10
      })
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return(
      <div className="clock">{this.state.currentCount}</div>
    );
  }
}

export default Clock;
