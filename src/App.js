import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Lights from './Lights';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightSwitchedOff: true
    };
    this.handleLightToggle = this.handleLightToggle.bind(this);
  }

  handleLightToggle() {
    this.setState(prevState => ({
      isLightSwitchedOff: !prevState.isLightSwitchedOff
    }));
  }

  render() {
    const { isLightSwitchedOff } = this.state;

    return (
      <div className="App">
        <header className={isLightSwitchedOff ? "App-header off" : "App-header on"}>
          <Form>
            <Form.Check type='switch' 
              id='custom-switch'
              onChange={this.handleLightToggle}
              checked={isLightSwitchedOff}
              label={isLightSwitchedOff ? 'Lights Off' : 'Lights On'}
            />
          </Form>
            <Lights isLightSwitchedOff={isLightSwitchedOff}/>
        </header>
      </div>
    );
  }
}

export default App;
