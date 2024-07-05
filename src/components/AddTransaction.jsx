import React, { useContext, useState } from 'react';
import { Card, Form, Input, DatePicker, Select, Button, Layout } from 'antd';
import { TransactionContext } from '../context/TransactionContext';
import moment from 'moment';

const { Content } = Layout;
const { Option } = Select;

const AddTransaction = () => {
  const [formData, setFormData] = useState({ type: 'income', amount: '', category: '', date: '' });
  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    console.log(formData)
    addTransaction(formData);
    setFormData({ type: 'income', amount: '', category: '', date: '' });
  };

  return (
    <Content id="add" style={{ minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card title="Add Transaction" style={{ width: '100%', maxWidth: '600px' }}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Amount" required>
          <Input 
            type="number" 
            value={formData.amount} 
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })} 
            placeholder="Amount" 
            required 
          />
        </Form.Item>
        <Form.Item label="Category" required>
          <Input 
            type="text" 
            value={formData.category} 
            onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
            placeholder="Category" 
            required 
          />
        </Form.Item>
        <Form.Item label="Date" required>
          <DatePicker 
            value={formData.date ? moment(formData.date) : null} 
            onChange={(date, dateString) => setFormData({ ...formData, date: dateString })} 
            required 
            style={{ width: '100%' }} 
          />
        </Form.Item>
        <Form.Item label="Type" required>
          <Select 
            value={formData.type} 
            onChange={(value) => setFormData({ ...formData, type: value })} 
            required 
            style={{ width: '100%' }}
          >
            <Option value="income">Income</Option>
            <Option value="expense">Expense</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Add Transaction
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </Content>
  );
};

export default AddTransaction;
