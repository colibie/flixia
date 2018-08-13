import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import './style.css'
import { Icon, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignUpModal from './signupModal';

class LoginModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show('blurring')}>Login</Button>
          <div>
			<Modal dimmer={dimmer} open={open} onClose={this.close} style={{margin: 'auto', height: '400px', marginTop: 'auto'}}>
				<div className="modalbody">
					<div className="modal-header">
						<h2 className="header"> Login Here</h2>
						<h1 onClick={this.close} className="modal-close"> X </h1>
					</div>
				<div className="model-content">
					<div className="modal-left" style={{height: '100px'}}>
						<Input iconPosition='left' placeholder='Username or Email' className="myInput">
							<Icon name='user' />
							<input />
						</Input> <br />
						<Input iconPosition='left' placeholder='Password'  className="myInput">
							<Icon name='eye' />
							<input type="password"/>
						</Input>
					</div>
					<div className="modal-right">
						<h3>OR SignIn with</h3><br />
						<p className="socialLink">
						<h2><b className="fa fa-facebook-square" style={{ fontSize:'30px'}}></b> &nbsp;&nbsp;&nbsp;
						<b className="fa fa-google" style={{ fontSize:'30px'}}></b></h2> &nbsp;
						</p>
					</div>
				</div>
					<Modal.Actions>
						<div style={{float: 'left', paddingLeft: '100px'}}>
							<Button
								positive
								icon='checkmark'
								labelPosition='right'
								content="Sign In"
								onClick={this.close}
							/>
						</div> <br /><br />
						<span className="modal-content-center">
							Don't have an account,<SignUpModal/>
						</span>
					</Modal.Actions>
				</div>
			</Modal>
		  </div>
		</div>
    )
  }
}

export default LoginModal
