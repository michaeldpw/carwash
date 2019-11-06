import React from 'react'
import './components.css'
class SignInPanel extends React.Component {
    render(){
        return (
            <div className="signin-panel">
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
                    <button class="btn waves-effect waves-light" type="submit" name="action">Log In
                        <i class="material-icons right"></i>
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