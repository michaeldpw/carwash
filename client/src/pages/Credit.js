import React from 'react'
import './pages.css'
import CountUp from 'react-countup';


class Credit extends React.Component {

    componentDidMount(){
        console.log(this.props.location.pathname)
    }
    render(){
        return (
            <div>
                <div className="title">
                    <h5>My Credit</h5>
                </div>
                <div style={{marginTop:"20px", display:"flex", flexDirection: "column", justifyContent: "center", textAlign: "center"}}>
                    <h6>You have earned</h6>
                    <div>
                        <CountUp className="countup"
                                start={0} 
                                end={3000} 
                                duration={2.00} 
                                style={{color: "#FFD700", fontSize: "40px", fontWeight: "600 !important"}}/> 
                        <span display="inline"> points</span>
                    </div>
                </div>
                
                

            </div>
        )
    }
}

export default Credit