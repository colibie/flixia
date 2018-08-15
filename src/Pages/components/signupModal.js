import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import './style.css'
import { Icon, Input } from 'semantic-ui-react';


class SignUpModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <span>
        <button onClick={this.show('blurring')}>SignUp</button>
          <div>
			<Modal dimmer={dimmer} open={open} onClose={this.close} style={{margin: 'auto', height: 520, marginTop: 'auto', paddingLeft: '2%', paddingRight: '2%', width: 530 }}>
				<div className="modal-body">
					<h1 onClick={this.close} className="modalClose fa fa-close"></h1>

						<div className="modal-content" style={{paddingTop: '5%'}}>
						<button className="btn btn-md btn-primary col-span-12 mass"> <i className="fa fa-facebook"></i> SignUp with facebook </button>
							<button className="btn btn-md btn-default col-span-12 mass"> <i className="fa fa-google"></i> SignUp with Google </button>
							{/* <hr /> */}
							<span style={{margin: '3%'}}> or </span>

						<form style={{display: 'contents'}}onSubmit={this.handleSubmit}>
						<span style={{marginBottom: '20px'}}>
							<Input iconPosition='left' placeholder='Enter Name' className="myInput">
								<Icon name='user' />
								<input />
							</Input> 
							</span>							
							<span>
							<Input iconPosition='left' placeholder='Email' className="myInput">
								<Icon name='at' />
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
								<span style={{ float: 'left'}}>
									<input type="checkbox" /> Remember Me </span>
								<span style={{float: 'right'}}> Forgot password ? </span>
							</span>
						<button className="btn btn-md btn-primary col-span-12 mass"> SignUp </button>
						</form>
						<span style={{margin: 'auto', marginTop: '1%'}}>Already have an account </span>
				</div>
				</div>
			</Modal>
		  </div>
		</span>
    )
  }
}

export default SignUpModal;
