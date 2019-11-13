import React from 'react'
import './pages.css'

class Account extends React.Component {
    render(){
        return (
            <div>
                <div className="title">
                    <h5>Account Details</h5>
                </div>
                <div className="user-info">
                    <p className="item-title">Name:</p>
                    <p className="item-content">Peiwen Du</p>
                    <p className="item-title">Email:</p>
                    <p className="item-content">123456789@gmail.com</p>
                    <p className="item-title">Phone:</p>
                    <p className="item-content">0421703429</p>
                    <button className="edit">Update Profile / Password</button>
                </div>
                

            </div>
        )
    }
}

export default Account