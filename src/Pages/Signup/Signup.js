import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Icon, Input, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './signup.css'


const SignUp = () =>  {
    return(
        <div>
            <Header />
            <div className="container content" style={{height: '417px'}}>
                <div className="content-header">
                    <h2 className="header"> SignUp Here</h2>
                </div> <br /><br />
                <div className="content-body">
                    <div className="content-left">
                    <Input iconPosition='left' placeholder='Username' className="myInput">
                            <Icon name='user' />
                            <input />
                        </Input> <br />
                        <Input iconPosition='left' placeholder='Email' className="myInput">
                            <Icon name='at' />
                            <input />
                        </Input> <br />
                        <Input iconPosition='left' placeholder='Password'  className="myInput">
                            <Icon name='eye' />
                            <input type="password"/>
                        </Input>
                    </div>
                    <div className="content-right">
                        <h3>or SignUp with</h3><br />
                        <p className="socialLink">
                        <h2><b className="fa fa-facebook-square" style={{ fontSize:'30px'}}></b> &nbsp;&nbsp;&nbsp;
                        <b className="fa fa-google" style={{ fontSize:'30px'}}></b></h2> &nbsp;
                        </p>
                    </div>
                    <div style={{float: 'left', paddingLeft: '50px', marginTop: '25px'}}>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content="Sign Up"
                            onClick={this.close}
                        />
                    </div> <br /><br /><br />
                    <span className="content-center">
                        Already have an account, <NavLink to="/login">Sign In</NavLink>
                    </span>
                </div>
            </div>
            <div className="push">
                <Footer />
            </div>
        </div>
    )
}

export default SignUp;