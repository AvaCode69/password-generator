import React, { useState } from "react";
import generator from "generate-password";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import './App.scss';
import Toggle from "./components/Toggle.component";

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      password: '',
      isLowerCase: localStorage.getItem('isLowerCase')
        ? localStorage.getItem('isLowerCase') === 'true'
        : true,
      isUpperCase: localStorage.getItem('isUpperCase')
        ? localStorage.getItem('isUpperCase') === 'true'
        : false,
      isNumbers: localStorage.getItem('isNumbers')
        ? localStorage.getItem('isNumbers') === 'true'
        : true,
      isSymbols: localStorage.getItem('isSymbols')
        ? localStorage.getItem('isSymbols') === 'true'
        : true,
      value: localStorage.getItem('value')
        ? localStorage.getItem('value') : 8,
    }



    this.addlowercase = this.addlowercase.bind(this);
    this.addnumbers = this.addnumbers.bind(this);
    this.addsymbols = this.addsymbols.bind(this);
    this.generatePassword = this.generatePassword.bind(this);
    this.addLength = this.addLength.bind(this);
    this.addrange = this.addrange.bind(this);
    this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  copyCodeToClipboard = (event) => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }
  formSubmitHandler(e) {
    e.preventDefault();
  }
  addLength(event) {
    this.setState({ value: event.target.value });
  };

  addlowercase = (e) => {
    localStorage.setItem('isLowerCase', e.target.checked);
    this.setState({ isLowerCase: e.target.checked });

  };

  adduppercase = (e) => {
    localStorage.setItem('isUpperCase', e.target.checked);
    this.setState({ isUpperCase: e.target.checked });
  };
  addnumbers = e => {
    localStorage.setItem('isNumbers', e.target.checked);
    this.setState({ isNumbers: e.target.checked })

  }
  addsymbols = e => {
    localStorage.setItem('isSymbols', e.target.checked);
    this.setState({ isSymbols: e.target.checked })

  }
  addrange = e => {
    localStorage.setItem('value', e.target.value);
    this.setState({ value: e.target.value });
  }

  generatePassword() {
    const pwd = generator.generate({
      length: this.state.value,
      lowercase: this.state.isLowerCase,
      uppercase: this.state.isUpperCase,
      numbers: this.state.isNumbers,
      symbols: this.state.isSymbols
    });
    this.setState({
      password: pwd
    })
  }

  render() {


    return (
      <div className="container-fluid">
        <div class="container">
          <div className="row wrapper">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 first-row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-left">
                <div className="icon-lock"><FontAwesomeIcon icon={faUnlock} /></div>
                <div className="box-left-text-icon"><h3>Generate Password</h3></div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-right">
                <div className="box-right-man"><img className="img-fluid" src="http://water-rocket.ir/images/password-safe.png" /></div>
              </div>



            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <form className="row second-row" onSubmit={this.formSubmitHandler}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-right">

                  <div className="box-right-password-generate">

                    <div>
                      <h2> Password </h2>

                      <input className="show-pass" type="text" value={" " + this.state.password} ref={(textarea) => this.textArea = textarea} />
                      {this.state.isUpperCase === false && this.state.isLowerCase === false && this.state.isNumbers === false && this.state.isSymbols === false
                        ?
                        <input disabled
                          type="button"
                          className="btn pass-btn"
                          value="Generate Password"
                        />
                        :
                        <input
                          type="button"
                          className="btn pass-btn"
                          value="Generate Password"
                          onClick={this.generatePassword} />


                      }

                      <button className="btn pass-btn" onClick={() => this.copyCodeToClipboard()}>
                        Copy Password
          </button>

                    </div>
                  </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-left">
                  <div className="box-left-password-generate">
                    <h2 className="title">Options</h2>

                    <label >
                      <span className="lbl-len">Length:</span>
                      <div className=" rang-tgl">
                        <input
                          type="number" min="8" max="20"
                          className="input-len form-control"
                          value={this.state.value}
                          onChange={this.addLength}
                        />
                        <input className="range"
                          id="typeinp"
                          type="range"
                          min="8" max="20"
                          value={this.state.value}
                          onChange={this.addrange}
                          step="1" />

                      </div>
                    </label>


                    <label className="form-control">
                      <span>LowerCase</span>
                      <div className="switch-tgl">
                        <Toggle
                          className="mr-1"

                          checked={this.state.isLowerCase}

                          onChange={this.addlowercase}

                        />
                      </div>

                    </label>

                    <label className="form-control">
                      <span>UpperCase</span>
                      <div className="switch-tgl">
                        <Toggle
                          className="mr-1"
                          checked={this.state.isUpperCase}

                          onChange={this.adduppercase}

                        />
                      </div>
                    </label>




                    <label className="form-control">
                      <span>Numbers</span>
                      <div className="switch-tgl">
                        <Toggle
                          className="mr-1"
                          checked={this.state.isNumbers}

                          onChange={this.addnumbers}

                        />
                      </div>

                    </label>


                    <label className="form-control">
                      <span>Symbols</span>
                      <div className="switch-tgl">
                        <Toggle
                          className="mr-1"
                          checked={this.state.isSymbols}

                          onChange={this.addsymbols}

                        />
                      </div>

                    </label>


                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

