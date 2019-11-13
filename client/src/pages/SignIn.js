import React from 'react'
import Particles from 'react-particles-js';
import './pages.css'
import SignInPanel from '../components/SignInPanel'
import { Icon } from 'antd';

class SignIn extends React.Component{
	goBack = () => {
        window.location.href="/#/"
    }
    render(){
        return (
            <div className="signin">
				<SignInPanel />
				<button className="back" onClick={this.goBack} style={{position: 'fixed', top: '2%', left: '2%', }}><Icon type="home" style={{fontSize: '18px', marginRight: '4px'}}></Icon> Home Page</button>
                <Particles style={{position: 'absolute', top: '0', left: '0'}}
					params={{
						"particles": {
							"number": {
								"value": 50
							},
							"size": {
								"value": 3
							}
						},
						"interactivity": {
							"events": {
								"onhover": {
									"enable": true,
									"mode": "repulse"
								}
							}
						}
					}} />
                
            </div>
            
                   
        )
    }
}

export default SignIn