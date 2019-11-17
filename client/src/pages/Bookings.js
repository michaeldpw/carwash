import React from 'react'
import './pages.css'
import { Steps, Button, message, Select } from 'antd';
import CustomizedDatePicker from '../components/CustomizedDatePicker'

const { Step } = Steps;
const { Option } = Select;

const minTime = new Date();
const maxTime = new Date();
minTime.setHours(8);
minTime.setMinutes(30);
maxTime.setHours(19);
maxTime.setMinutes(30);

const steps = [
    {
      title: 'Choose an available time',
      content: <CustomizedDatePicker />
    },
    {
      title: 'Choose service type',
      content:  
      <Select style={{ width: 240 }} placeholder="Choose a service type">
        <Option value="jack">Silver</Option>
        <Option value="lucy">Gold</Option>
        <Option value="disabled" >
            Platinum
        </Option>
      </Select>
     ,
    },
    {
      title: 'Confirm',
      content: <div style={{display:'flex', flexDirection: "column", justifyContent: "center"}}>
                    <h4>Please confirm your booking.</h4>
                    <Button type="primary" style={{marginBottom: "10px"}}>I confirm</Button>
                    <Button >Cancel</Button>
                </div>,
    },
    // {
    //     title: 'Finished',
    //     content: <div>
    //         <h5>Thank you for booking!</h5>
    //         <p>Time: </p>
    //         <p>Service type: </p>
    //     </div>
    //   },
  ];


class Account extends React.Component {

    
      state = {
          current: 0,
          startDate: new Date()
        };
    handleChange = date => {
        this.setState({
          startDate: date,
          showBook: true
        });
    };
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render(){
        const { current } = this.state;
       
       
        

        return (
            <div>
                <div className="title" style={{borderBottom: 'none'}}>
                    <h5>Bookings</h5>
                </div>
                <Steps current={current} style={{marginTop: '0px'}}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>

                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                        Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        Previous
                        </Button>
                    )}
                </div>


            </div>
        )
    }
}

export default Account