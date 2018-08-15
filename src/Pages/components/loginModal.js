import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import './style.css'
import { Icon, Input } from 'semantic-ui-react';

class LoginModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <span>
        <button onClick={this.show('blurring')} className=" " >Login</button>
          <div>
			<Modal dimmer={dimmer} open={open} onClose={this.close} style={{margin: 'auto', height: 520, marginTop: 'auto', paddingLeft: '2%', paddingRight: '2%', width: 530 }}>
				<div className="modal-body">
					<h1 onClick={this.close} className="modalClose fa fa-close"></h1>

						<div className="modal-content">
						<button className="btn btn-md btn-primary col-span-12 mass"> <i className="fa fa-facebook"></i> Login with facebook </button>
							<button className="btn btn-md btn-default col-span-12 mass"> <i className="fa fa-google"></i> Login with Google </button>
							<span style={{margin: '3%'}}> or </span>
						<form style={{display: 'contents'}}onSubmit={this.handleSubmit}>
							<span style={{marginBottomt: '20px'}}><Input iconPosition='left' placeholder='Username or Email' className="myInput">
								<Icon name='user' />
								<input />
							</Input> 
							</span>
							<span><br />
							<Input iconPosition='left' placeholder='Password'  className="myInput">
								<Icon name='eye' />
								<input type="password"/>
							</Input>
							</span>
							<span className="modal-deet">
								<span style={{paddingLeft: '15%', float: 'left'}}>
									<input type="checkbox" /> Remember Me </span>
								<span style={{paddingRight: '15%', float: 'right'}}> Forgot password </span>
							</span>
						<button className="btn btn-md btn-primary col-span-12 mass"> Login with </button>
						</form>
					</div>
				</div>
			</Modal>
		  </div>
		</span>
    )
  }
}

export default LoginModal
