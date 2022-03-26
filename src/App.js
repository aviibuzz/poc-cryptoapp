import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Exchanges,Cryptocurrencies,News, Cryptodetails } from './components';
import './App.css';

const App = () => {
  return (
      <div className='app'>
          <div className="navbar">
    <Navbar/>
          </div>
          <div className="main">
              <Layout>
                  <div className="routes">
                      <Switch>
                          <Route exact path="/">
                              <Homepage/>
                          </Route>
                           <Route exact path="/exchanges">
                              <Exchanges/>
                          </Route>
                           <Route exact path="/cryptocurrencies">
                              <Cryptocurrencies/>
                          </Route>
                           <Route exact path="/crypto/:coinId">
                              <Cryptodetails/>
                          </Route>
                           <Route exact path="/news">
                              <News/>
                          </Route>

                      </Switch>
                  </div>
              </Layout>
          <div className="footer" level={5}>
              <Typography.Title
              >   poc-cryptoapp <br />
                  All rights reserved
              </Typography.Title>
              <Space>
                  <Link to="/">Home</Link>
                  <Link to="/exchanges">Exchanges</Link>
                  <Link to="/news">News</Link>
                   <Link to="/blog">blog</Link>
              </Space>
              </div>
              

          </div>
    </div>
  )
}

export default App