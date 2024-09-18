import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import Navbar from './Navbar';
import { Pagination, Table, Button, Input, Modal, Form } from 'antd';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const handleView = (key) => {
    console.log('View', key);
  };

  const handleEdit = (key) => {
    console.log('Edit', key);
  };

  const handleDelete = (key) => {
    console.log('Delete', key);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = (values) => {
    console.log('New Customer:', values);
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      align: 'right',
      render: (text, record) => (
        <div className='d-flex gap-2 justify-content-end'>
          <Button 
            type="link" 
            onClick={() => handleView(record.key)} 
            icon={<FaEye />} 
            style={buttonStyle} 
          />
          <Button 
            type="link" 
            onClick={() => handleEdit(record.key)} 
            icon={<FaEdit />} 
            style={buttonStyle} 
          />
          <Button 
            type="link" 
            onClick={() => handleDelete(record.key)} 
            icon={<FaTrash />} 
            style={buttonStyle} 
          />
        </div>
      ),
    },
  ];

  const buttonStyle = {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    marginLeft: '5px',
  };

  return (
    <div className=''>
      <Navbar />
      <div className='container'>
        <div className='d-flex justify-content-between my-2'>
          <div>
            <Input placeholder="Search ..." size='large' style={{ width: "300px" }} />
          </div>
          <Button className='btn btn-primary' onClick={showModal}>Add Customer</Button>
        </div>
        <Table 
          dataSource={dataSource} 
          columns={columns} 
          pagination={false} 
          rowClassName="table-row"
        />
        <Pagination className='mt-2' align="end" defaultCurrent={1} total={50} />

        <Modal
          title="Add Customer"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form onFinish={handleOk}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input the name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input the age!' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
