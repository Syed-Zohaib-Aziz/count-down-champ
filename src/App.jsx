
import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import {Form, FormControl,Button} from 'react-bootstrap'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      deadline:"March 5, 2019",
      newDeadline:""
    }
  }
  changeDeadline(){
    this.setState({deadline: this.state.newDeadline});
    //console.log(this.state.newDeadline)
  }
  render() {
    return (
      <div className='App'> 
        <div className='App-title'>
          Count down champ,App {this.state.deadline}
        </div>
        <Clock deadline = {this.state.deadline}/>
        <Form inline>
          <FormControl placeholder='new date' className="Deadline-input"
          onChange = {event => this.setState({ newDeadline: event.target.value})}/>
          <Button onClick={()=> this.changeDeadline()}>Submit</Button>
        </Form>
        
      </div>
    )
  }
}

export default App;
