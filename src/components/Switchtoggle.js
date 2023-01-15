import React, { useState } from 'react';
import Fragment from 'render-fragment';
import { Switch } from 'react-switch-input';

class UpperCase extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        value: false,
      };
      this.handleChangeSwitch=this.handleChangeSwitch.bind(this)
    }
    handleChangeSwitch = e => {
      const value = e.target.checked;
      this.setState({value});
    }
    render() {
      return (
        <div>
          <Switch value={this.state.value}
            onChange={this.handleChangeSwitch}
          />
          <span>{`Value: ${this.state.value}`}</span>
        </div>
      );
    }
  
   
  }
  export default UpperCase;