import React, { useState, useEffect } from 'react';
import { Divider, Table } from 'antd';
import axios from 'axios';
import { Base_url } from '../../config'; // Adjust the import according to your project structure

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Message',
    dataIndex: 'message',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};

const AppointmentData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectionType, setSelectionType] = useState('checkbox');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_url}/appointment/get-all-appointment`, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        console.log(response.data.appointment);
        // Ensure each item has a key property
        const formattedData = response.data.appointment.map((item, index) => ({
          key: index.toString(), // or any unique identifier
          ...item,
        }));
        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointment data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default AppointmentData;
