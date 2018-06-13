
import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props){
      super(props);
      this.state = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
      }
  }
  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount(){
    setInterval(()=> this.getTimeUntil(this.props.deadline),1000);
  }
  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)% 60);
    const minutes = Math.floor((time/1000*60)% 60);
    const hours = Math.floor((time/(1000*60*60))% 24);
    const days = Math.floor((time/(1000*60*60*24)));

    //this.setState({days:Days,hours:Hours,minutes:Minutes,seconds:Seconds});
    // or
    this.setState({days,hours,minutes,seconds});
  }
  leadingZeroHandler(num){
    return num>=10 ? num : '0'+num;
  }

  render(){
    return(
      <div>
          <div className="clock-days">{this.leadingZeroHandler(this.state.days)} Days</div>
          <div className="clock-hours">{this.leadingZeroHandler(this.state.hours)} Hours</div>
          <div className="clock-minutes">{this.leadingZeroHandler(this.state.minutes)} Minutes</div>
          <div className="clock-seconds">{this.leadingZeroHandler(this.state.seconds)} Seconds</div>
    </div>
    )
    
  }

}

export default Clock;
