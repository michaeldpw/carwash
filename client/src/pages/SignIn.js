import React from 'react'
import Particles from 'react-particles-js';
import './pages.css'
import SignInPanel from '../components/SignInPanel'
const particlesOptions = {
    particles: {
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
     
    }
  };
class SignIn extends React.Component{
    render(){
        return (
            <div className="signin">
                <Particles params={particlesOptions} width="100%" height="100vh"/> 
                <SignInPanel />
            </div>
            
                   
        )
    }
}

export default SignIn