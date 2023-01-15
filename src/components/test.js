import logo from './logo.svg';
import './App.scss';

import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import Counter from'./components/Counter';
import CounterInput from "react-counter-input";
import {Form,FormGroup,Input,Label,Button} from 'reactstrap';
import UpperCase from './components/Switchtoggle';
import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import generator from "generate-password";

class App extends React.Component {
  constructor(){
    super()
    this.state={
password:'' ,
length:'' ,
isLowerCase:true,
isUpperCase:false,
isNumbers:true,
isSymbols:true,
generator : require('generate-password'),
term:'' ,
value: '',
copied: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event){
    event.preventDefault();
    this.setState({term:event.generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
      symbols: isSymbols
    })})
   
  }

  UpperCase(event){
    event.preventDefault();
    
  }


  render(){ 
    console.log("aaaaa" + this.state.term);
  return (
    <div className="App">
      <header className="App-header">

        <div className="container-fluid">
          <div className="container">
            
            <div className="row first-row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 box-right">
                <div className="box-right-man"><img src="https://passgenerator.ir/img/pass-img-bg.594b1ee1.svg" /></div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 box-left">
                <div className="icon-lock"><FontAwesomeIcon icon={faUnlock} /></div>
                <div className="box-left-text-icon"><h2>Generate Password</h2><h3>Simple random password generator</h3></div>
              </div>

            </div>
            <div className="row ">
            <form className="second-row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 box-right">

                <div className="box-right-password-generate">
                  <h2> Password</h2>
                  <input type="text"  value={this.state.term} placeholder={this.state.term}  value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})}/>
                  <input type="submit" className="btn pass-btn" value="Generate Password" onChange={this.handleClick} />
               

                
                  <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button className="btn pass-btn"> Copy Password </button>
        </CopyToClipboard>
                  {/* <input type="submit" className="button success" value="Copy Password" className="btn pass-btn" /> */}
            
                </div>

              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 box-left">
              <div className="box-left-password-generate">
                <h2>Options</h2>
        <div className="pass-length">
        <h5>Password Length</h5>
                <CounterInput
        min={0}
        max={10}
        onCountChange={count => console.log(count)}
      />
        </div>
        <h5>Password Content</h5>
        <div className="pass-content">
        <label>UpperCase</label>
        <input type="checkbox" classname="mr-1" checked="{isLowerCase}" onchange={this.UpperCase} />
       
        </div>
        <div className="pass-content">
        <label>LowerCase</label>
       <UpperCase />
       
        </div>
        <div className="pass-content">
        <label>Numbers</label>
       <UpperCase />
       
        </div>

        <div className="pass-content">
        <label>Symbols</label>
       <UpperCase />
       
        </div>

      </div>
              </div>
              </form>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}
}

export default App;
