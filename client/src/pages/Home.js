import React from 'react'
import Background from './background.jpg';
import './pages.css'
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

    // handleButtonClick = () => {
    //     alert("f")
    // }

    listenScrollEvent = e => {
        if (window.scrollY > 120) {
          this.setState({
              backgroundcolor: '#488f43',
              buttonbackgroundcolor: 'white',
              textcolor: '#488f43'
            })
        } else {
          this.setState({
              backgroundcolor: '',
              buttonbackgroundcolor: '#488f43',
              textcolor: 'white'
            
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }



    render(){

        const { backgroundcolor, buttonbackgroundcolor, textcolor } = this.state
        return (
            <div>
               <header>
                  <nav style={{backgroundColor: backgroundcolor}}>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><img src={logo}/>AUTOSITTER</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Price</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li className="login">
                            <a href="collapsible.html" 
                            style={{ backgroundColor: buttonbackgroundcolor, 
                                    color: textcolor }}
                            >
                            LOGIN
                            </a>
                        </li>
                    </ul>
                    </div>
                  </nav>
                </header>
                <main>
                <section className="section" id="book" style={{"min-height": "100vh"}}>
                  <div className="maincontainer" style={sectionStyle}>
                    <div className="overlay"></div>
                    <div className="book">
                        <h1>Don't waste your weekend.</h1>
                        <h3>Let the car wash come to you.</h3>
                        <h4>Book a session for you car.</h4>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            dateFormat="Pp"
                        />
                        <button className="book-btn" 
                                style={{display: this.state.showBook? 'block': 'none'}}
                                onClick={this.showModal}          
                        >Book</button>
                        <Modal
                            title="Thank you for making a booking!"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <p>AutoSitter is newly established business</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>   
                    </div>
                  </div>
                </section> 
                <section className="section" id="service">
                    
                        <div className="easy">
                            <div>
                                <h2>How It Works</h2>
                                <h5>AutoSitter comes to you! And, it takes less than a minute to book.</h5>
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
                </main>
                <footer className="page-footer">
        <div className="container">
            <div className="row">
            <div className="col l6 s12">
                <h5 className="white-text">AutoSitter</h5>
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
    height: "900px",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    // opacity: "0.8"
  };