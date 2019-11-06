import React from 'react'
import './components.css'
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd';

class SignInPanel extends React.Component {

    goBack = () => {
        window.location.href="/"
    }
    render(){
        return (
            <div className="signin-panel">
                 <button className="back" onClick={this.goBack}> <Icon type="arrow-left" theme="outlined" /></button> 
                <h5>Sign In To Eco-carwash</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id="username" type="text" className="validate" />
                        <label for="username">Username</label>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" className="validate" />
                        <label for="password">Password</label>
                    </div>
                    <button  className="btn waves-effect waves-light" type="submit" name="action">Log In
                        
                    </button>
                           
                        {/* {
                            this.state.error &&
                            <div className="alert alert-danger" role="alert">{this.state.error}</div>
                        }
                        {
                            this.state.isLoading?
                            <button type="submit" className="signin-btn" style={{"opacity": "0.5"}}disabled={true}>Logging in...</button>
                            :
                            <button type="submit" className="signin-btn" disabled={false}>Log In</button>
                        } */}
                        
                    </form>
            </div>
        )
    }
}

export default SignInPanel