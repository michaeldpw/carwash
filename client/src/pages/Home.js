import React from 'react'
import './pages.css';
// import { Link } from 'react-router-dom';
import MapContainer from '../components/MapContainer'
import PriceTable from '../components/PriceTable'
import ScrollspyNav from "react-scrollspy-nav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.png'
import first from './first.jpg'
import second from './second.jpg'
import third from './third.jpg'

class Home extends React.Component {



    state = {
        backgroundcolor: '',
        buttonbackgroundcolor: '#488f43',
        textcolor:'white',
        boxshadow: 'none',
        transitionDuration: 'none',
        startDate: new Date(),
        showBook: false,
        visible: false
      }
     
    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    handleChange = date => {
        this.setState({
          startDate: date,
          showBook: true
        });
    };

   
    listenScrollEvent = e => {
        if (window.scrollY > 120) {
          this.setState({
              backgroundcolor: '#488f43',
              buttonbackgroundcolor: 'white',
              textcolor: '#488f43',
              boxshadow: 'rgba(66, 66, 66, 0.4) 0px 4px 10px 0px',
              transitionDuration: '0.5s'
            })
        } else {
          this.setState({
              backgroundcolor: '',
              buttonbackgroundcolor: '#488f43',
              textcolor: 'white',
              boxshadow: 'none'
            
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
       
      }

    goSignIn = () => {
        window.location.href="/#/signin"
    }


    render(){


        const minTime = new Date();
        const maxTime = new Date();
        minTime.setHours(8);
        minTime.setMinutes(30);
        maxTime.setHours(19);
        maxTime.setMinutes(30);

        const { backgroundcolor, buttonbackgroundcolor, textcolor, boxshadow, transitionDuration } = this.state
        return (
            <div className="home-container">
               <header>
                  <nav role="navigation" style={{backgroundColor: backgroundcolor, "boxShadow": boxshadow, "transitionDuration": transitionDuration}}>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><img src={logo}/>ECO-CARWASH</a>
                    <ScrollspyNav
                        scrollTargetIds={["price", "service", "location"]}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        headerBackground="true"
                    >
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#price">Pricing</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#location">Location</a></li>
                        <li><a href="#">About</a></li>
                        <li className="login-btn"> 
                            <a onClick={this.goSignIn}
                                style={{ backgroundColor: buttonbackgroundcolor, 
                                    color: textcolor }}
                            >
                            LOGIN
                            </a>  
                        </li>  
                    </ul>
                    </ScrollspyNav>
                    </div>
                  </nav>
                </header>
               
                <main>
                <section className="section" id="book" style={{"minHeight": "100vh"}}>
                    <div className="maincontainer" style={sectionStyle}>
                        <div className="overlay"></div>
                        <div className="book">
                            <h1>Time saving & eco-friendly</h1>
                            <h3>Have your car washed while shopping.</h3>
                            <h4>Book a session for your car.</h4>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                minTime={minTime}
                                maxTime={maxTime}
                                showTimeSelect
                                dateFormat="MMMM d, yyyy h:mm aa"
                                minDate={new Date()}
                                placeholderText="Select a date and a slot"
                            />
                            <button className="book-btn" 
                                    style={{display: this.state.showBook? 'block': 'none'}}
                                    onClick={this.showModal}          
                            >Book</button>
                            <Modal
                                title="Surprise! This is just a test!"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                width="800px"
                                centered
                            >
                                <p>Our website is undergoing New User Testing.</p>
                                <p>Thank you for your valuable participation!</p>
                            
                            </Modal>   
                        </div>
                        </div>
                  
                 
                </section> 
                <section className="section" id="service">
                    
                        <div className="easy">
                            <div>
                                <h2>How It Works</h2>
                                <h5>Eco-carwash comes to you! And, it takes less than a minute to book.</h5>
                            </div>
                            <div className="procedure"> 
                            
                                <div className="col-sm-4">
                                    <img src={first}/>
                                    <p className="subtitle">1. Park Anywhere</p>
                                    <p>We wash where you park.</p>
                                </div> 
                                <div className="col-sm-4">
                                    <img src={second}/>
                                    <p className="subtitle">2. Book Easily</p>
                                    <p>Online or call us</p>
                                </div>
                                <div className="col-sm-4">
                                    <img src={third}/>
                                    <p className="subtitle">3. Key Exchange</p>
                                    <p className="explanation">Only if you'd like the</p>
                                    <p>inside cleaned as well.</p>
                                </div>
                            
                                
                            </div>
                        </div>
                </section>
                <section className="section" id="price">
                    <div className="price">
                        <h2>Our Price</h2>
                        <PriceTable />
                    </div>
                </section>
                <section className="section" id="location">
                    <div className="location">
                        <div className="where">
                            <h2>Where Are We</h2>
                        </div>
                        <MapContainer />
                    </div>
                </section>
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

export default Home



var sectionStyle = {
    width: "100%",
    // height: "900px",
    // backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    // opacity: "0.8"
  };