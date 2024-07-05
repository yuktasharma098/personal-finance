import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Content } from 'antd/es/layout/layout';

const CategoryBreakdown = () => {
  const { transactions } = useContext(TransactionContext);
  
  // Filter and sum expenses by category
  const categories = {};
  transactions.forEach(transaction => {
    if (transaction.type === 'expense') {
      if (categories[transaction.category]) {
        categories[transaction.category] += parseFloat(transaction.amount);
      } else {
        categories[transaction.category] = parseFloat(transaction.amount);
      }
    }
  });

  // Prepare chart data with category names and values
  const chartData = Object.keys(categories).map(category => ({
    name: category,
    value: categories[category]
  }));

  // Define a set of colors for the pie chart segments
  const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658', '#f0a0a0'];

  return (
    <Content id="chart" style={{ minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    
      <ResponsiveContainer width="100%" height={400}>
        <span style={{fontSize:"2rem",fontWeight:"600",display:"flex",justifyContent:"center"}}>Expenses By Category</span>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Content>
  );
};

export default CategoryBreakdown;
