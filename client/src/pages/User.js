import React from 'react'
import './pages.css'
import logo from './logo.png'
import { NavLink, Route, Switch } from 'react-router-dom';
import Account from './Account'
import Bookings from './Bookings'

class User  extends React.Component {
    render (){
        return (
            <div>
                <header>
                    <nav className="user-nav">
                        <div className="nav-wrapper">
                        <a href="#" className="brand-logo"><img src={logo}></img>Eco-carwash</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="/">Logout</a></li>
                        </ul>
                        </div>
                    </nav>
                </header>
                <main>
                <div className="user-container">
                    <div className="row">
                        <div className="col s3 panel">
                            <h5>Welcome, Michael</h5>
                            <ul className="user-ul">
                                <NavLink to="/user">
                                    <li>
                                        <i className="material-icons">account_circle</i> <span>My Account</span>
                                    </li>
                                </NavLink>
                                <NavLink to="/user/bookings">
                                    <li>
                                        <i className="material-icons">event_available</i> <span>Bookings</span>
                                    </li>
                                </NavLink>
                                <li>
                                <i className="material-icons">view_list</i> <span>Order History</span>
                                </li>
                                <li>
                                    <i className="material-icons">redeem</i> <span>My Credit</span>
                                </li>
                                <li>
                                    <i className="material-icons">power_settings_new</i> <span>Logout</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col s9">
                            <div className="col s1">

                            </div>
                            <div className="col s11 detail">
                            <Switch>
                                <Route exact path='/user' component={Account} />
                                <Route exact path='/user/bookings' component={Bookings} />
                                
                            </Switch>
                            </div>
                        </div>
                    
                    </div>
                </div>
                </main>
                <footer className="page-footer">
        <div className="container">
            <div className="row">
            <div className="col l6 s12">
                <h5 className="white-text">Eco-carwash</h5>
                <ul>
                <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Login</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Reservation</a></li>
                </ul>
            </div>
            <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Quick Links</h5>
                <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Pricing</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Terms & Conditions</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Service Coverage</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright. All rights reserved.
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
        </div>
    </footer>
               
            </div>
        )
    }
}

export default User