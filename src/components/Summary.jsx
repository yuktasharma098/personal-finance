import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import {Card, Row, Col } from 'antd';
import './Summary.css'; // Import your custom CSS file for styling
import { Content } from 'antd/es/layout/layout';

const Summary = () => {
  const { transactions } = useContext(TransactionContext);

  // Calculate total income, expenses, and balance
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  
  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  
  const balance = income - expenses;

  return (
    <Content id="summary"
    style={{ minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column',justifyContent:"center"}}

     >
      <div className="summary-content">
        <h2 className="summary-heading">Summary</h2>
        <Row gutter={16} justify="space-around">
          <Col span={8}>
            <Card className="summary-card" title="Total Income" bordered={false}>
              <p className="summary-amount" style={{color:"green"}}>₹{income.toFixed(2)}</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="summary-card" title="Total Expenses" bordered={false}>
              <p className="summary-amount" style={{color:"red"}}>₹{expenses.toFixed(2)}</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="summary-card" title="Balance" bordered={false}>
              <p className="summary-amount" style={{color:"blue"}}>₹{balance.toFixed(2)}</p>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Summary;
