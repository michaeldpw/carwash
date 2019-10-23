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
      service: 'Exterior wash',
      money: '$30',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      service: 'Windows',
      money: '$15',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      service: 'Interior Vacuum',
      money: '$12',
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  

class PriceTable extends React.Component {
    render(){
        return (
            <Table
                columns={columns}
                dataSource={data}
                bordered
                />
        )
    }
}

export default PriceTable