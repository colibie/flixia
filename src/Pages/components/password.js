import React, { Component } from 'react';


class PasswordComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // ...props
        }
    }

    render(){
        // let { goodPasswordPrinciples } = this.props;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group has-success has-feedback">
                            <label className="control-label" for="password-input">Password</label>
                            <input type="password" className="form-control" id="password-input" value="" placeholder="Password" /> 
                                <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true">
                            </span> 
                        </div> 
                    </div> 
                    <div className="col-md-4"> 
                        <div className="panel panel-default"> 
                            <div className="panel-body">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success"  style={{ width: '100%' }}>
                                    </div>
                                </div>
                                    Password Strength Meter
                                    <h5>A good password is:</h5>
                                <ul>
                                    <li className="text-success"> 
                                        <small> 6+ characters </small>
                                    </li> 
                                    <li className="text-success">
                                        <small> with at least one digit  </small> 
                                    </li>
                                    <li className="text-success"> 
                                        <small> with at least one special character</small>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        
        )
    }
}

export default PasswordComponent;
// learn to quit fast
// fail fast and the learn quick.
//ant
// 0811 099 5425
