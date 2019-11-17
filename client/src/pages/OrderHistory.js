import React from 'react'
import './pages.css'
import { Steps, Button, message, Select, Table, Tag } from 'antd';

const dataSource = [
    {
        key: '0',
        id: 'WE4625',
        date: '11/11/2019',
        type: "Gold",
        duration: "30min",
        status: 'Upcoming',
        credit: ["2000"]
        
      },
    {
      key: '1',
      id: 'KJ3618',
      date: '11/11/2019',
      type: "Gold",
      duration: "30min",
      status: 'Complete',
      credit: ["2000"]
      
    },
    {
      key: '2',
      id: 'NP9700',
      date: '12/08/2019',
      type: "Silver",
      duration: "30min",
      status: 'Complete',
      credit: ["1000"]
    },
  ];
  
  const columns = [
    {
        title: 'Order No.',
        dataIndex: 'id',
        key: 'id',
      },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'

    },
    {
        title: 'Credit Earned',
        dataIndex: 'credit',
        key: 'credit',
        render: credit => (
            <span>
              {credit.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    + {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
    },
  ];
  
  
class OrderHistory extends React.Component {
    render(){
        return (
            <div>
                <div className="title">
                    <h5>Order History</h5>
                </div>
               
                <Table dataSource={dataSource} columns={columns} />

            </div>
        )
    }
}

export default OrderHistory