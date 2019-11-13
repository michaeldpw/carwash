// import React from 'react'
// import './components.css'
// import { NavLink } from 'react-router-dom'
// import { Icon } from 'antd';

// class SignInPanel extends React.Component {

//     goBack = () => {
//         window.location.href="/"
//     }
//     render(){
//         return (
//             <div className="signin-panel">
//                  <button className="back" onClick={this.goBack}> <Icon type="arrow-left" theme="outlined" /></button> 
//                 <h5>Sign In To Eco-carwash</h5>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="input-field">
//                         <input id="username" type="text" className="validate" />
//                         <label for="username">Username</label>
//                     </div>
//                     <div className="input-field">
//                         <input id="password" type="password" className="validate" />
//                         <label for="password">Password</label>
//                     </div>
//                     <button  className="btn waves-effect waves-light" type="submit" name="action">Log In
                        
//                     </button>
                           
                     
                        
//                     </form>
//             </div>
//         )
//     }
// }

// export default SignInPanel

import React from 'react'
import './components.css'
import {
    Icon,
    Input,
    Checkbox
} from 'antd'
import 'antd/dist/antd.css';
import logo from '../pages/logo.png'


class SigninPanel extends React.Component{

    state = {
        username:'',
        password:''

    }

    login(){
        window.location.href = '/user'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('s')
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user)
    }
    render(){
        return ( 
        // <React.Fragment>
            
            <div className="signin-panel">
               <div className="login-logo">
                <img src={logo} style={{height: '60px', width: '60px', borderRadius: '30px', marginBottom: '10px'}}/>
                <h4>Sign in to Eco-carwash</h4>
            </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="username">
                        
                    <Input
                         type="text"
                        placeholder="Username"
                        id="username"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="password">
                    <Input
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <checkbox style={{color: '#ddd'}}>Remember me</checkbox>
                        <a href="#">Forgot your password?</a>
                        
                    </div>
                    <button className="login" type="submit" onClick={this.login}>Login</button>
                    
                   
                    
                    
                </form>
                
            </div>
            // </React.Fragment>
        )
    }
}

export default SigninPanel