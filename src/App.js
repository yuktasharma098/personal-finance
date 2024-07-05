import React from 'react';
import { Layout, Menu, Anchor, Affix } from 'antd';
import './App.css'; 
import About from './About';
import AddTransaction from './components/AddTransaction';
import TransactionProvider from './context/TransactionContext';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import CategoryBreakdown from './components/CategoryBreakdown';

const { Header, Content } = Layout;
const { Link } = Anchor;

const App = () => (
  <TransactionProvider>


  <Layout>
    <Affix>
      <Header className="custom-header">
        <div className="logo">
          <span className="logo-text">Personal Finance</span>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['add']}
          className="custom-menu"
        >
          <Menu.Item key="add" className="custom-menu-item">
            <Anchor affix={false}>
              <Link href="#add" title="Add Transaction" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="list" className="custom-menu-item">
            <Anchor affix={false}>
              <Link href="#list" title="List Transaction" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="summary" className="custom-menu-item">
            <Anchor affix={false}>
              <Link href="#summary" title="Summary" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="chart" className="custom-menu-item">
            <Anchor affix={false}>
              <Link href="#chart" title="Chart" />
            </Anchor>
          </Menu.Item>
        </Menu>
      </Header>
    </Affix>
    <Content style={{ marginTop: 64 }}>
      <About />
      <AddTransaction/>
      <TransactionList/>
      <Summary/>
      <CategoryBreakdown/>
    </Content>
  </Layout>
  </TransactionProvider>
);

export default App;
