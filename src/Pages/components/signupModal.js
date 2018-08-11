import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import './style.css'
import { Icon, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class SignUpModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show('blurring')}>SignUp</Button>
          <div>
			<Modal dimmer={dimmer} open={open} onClose={this.close} style={{margin: 'auto', height: '400px', marginTop: 'auto'}}>
				<div className="modalbody">
					<div className="modal-header">
						<h2 className="header"> SignUp Here</h2>
						<h1 onClick={this.close} className="modal-close"> X </h1>
					</div>
				<div className="model-content" style={{height: '250px'}}>
					<div className="modal-left">
          <Input iconPosition='left' placeholder='Username or Email' className="myInput">
							<Icon name='user' />
							<input />
						</Input> <br />
						<Input iconPosition='left' placeholder=' Email' className="myInput">
							<Icon name='at' />
							<input />
						</Input> <br />
						<Input iconPosition='left' placeholder='Password'  className="myInput">
							<Icon name='eye' />
							<input type="password"/>
						</Input>
					</div>
					<div className="modal-right">
						<h3>OR SignUp with</h3><br />
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
								content="Sign Up"
								onClick={this.close}
							/>
						</div> <br /><br />
						<span className="modal-content-center">
							Already have an account, <NavLink to="/loginModal">Sign In</NavLink>
						</span>
					</Modal.Actions>
				</div>
			</Modal>
		  </div>
		</div>
    )
  }
}

export default SignUpModal
