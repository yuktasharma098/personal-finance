import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Layout, Button, DatePicker, Table } from 'antd';
import moment from 'moment';

const { Content } = Layout;
const { RangePicker } = DatePicker;

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);
  const [columns, setColumns] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    if (transactions.length > 0) {
      const columnKeys = Object.keys(transactions[0]).filter(key => key !== 'id');
      const dynamicColumns = columnKeys.map((key) => ({
        title: formatColumnName(key),
        dataIndex: key,
        key,
      }));

      setColumns(dynamicColumns);
      setFilteredData(transactions); 
    } else {
      setColumns([]);
      setFilteredData([]);
    }
  }, [transactions]);

  const formatColumnName = (columnName) => {

    const words = columnName.split('_');
    const formattedWords = words.map((word) =>
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    return formattedWords.join(' ');
  };

  const handleDateRangeChange = () => {
    if (dateRange.length === 2) {
      const startDate = moment(dateRange[0].toDate()).startOf('day');
      const endDate = moment(dateRange[1].toDate()).endOf('day');

      const filtered = transactions.filter(transaction => {
        const transactionDate = moment(transaction.date, 'YYYY-MM-DD');
        return transactionDate.isBetween(startDate, endDate, null, '[]');
      });
if(filtered.length>0){
  setFilteredData(filtered);

}
else{
  setFilteredData([])
}
    } else {
      setFilteredData(transactions); 
    }
  };
console.log(dateRange)
  return (
    <Content
      id="list"
      style={{ minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column',justifyContent:"center"}}
    >
      <div style={{fontSize:"2rem",display:"flex",alignSelf:"center",fontWeight:"600",marginBottom:"9rem"}}>
        List Of Transactions 
      </div>
      <div style={{ marginBottom: '20px' }}>
        <RangePicker
          onChange={(dates) => setDateRange(dates)}
          value={dateRange}
          style={{ marginRight: '10px' }}
        />
        <Button disabled={dateRange===null?true:false} type="primary" onClick={handleDateRangeChange}>Filter</Button>
      </div>

        <Table
          pagination={{ pageSize: 5 }}
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          className="custom-table"
        />
      

    
    </Content>
  );
};

export default TransactionList;
