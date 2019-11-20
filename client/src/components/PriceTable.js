import { Table } from 'antd';
import React from 'react'

const columns = [
    {
      title: 'Service',
      dataIndex: 'service',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Price',
      className: 'column-money',
      dataIndex: 'money',
    }
  ];

  const data = [
    {
      key: '1',
      service: 'Silver',
      money: '$30',
     
    },
    {
      key: '2',
      service: 'Gold',
      money: '$45',
      
    },
    {
      key: '3',
      service: 'Platinum',
      money: '$55',
      
    },
  ];

  

class PriceTable extends React.Component {
    render(){
        return (
            <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={false}
                />
        )
    }
}

export default PriceTable