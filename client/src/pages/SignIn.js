import React from 'react'
import Particles from 'react-particles-js';
import './pages.css'
import SignInPanel from '../components/SignInPanel'
// const particlesOptions = {
//     particles: {
//         "particles": {
// 	        "number": {
// 	            "value": 80
// 	        },
// 	        "size": {
// 	            "value": 3
// 	        }
// 	    },
// 	    "interactivity": {
// 	        "events": {
// 	            "onhover": {
// 	                "enable": true,
// 	                "mode": "repulse"
// 	            }
// 	        }
// 	    }
     
//     }
//   };
class SignIn extends React.Component{
    render(){
        return (
            <div className="signin">
				<SignInPanel />
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