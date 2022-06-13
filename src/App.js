import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  Exchanges,
  CryptoDetails,
  News,
} from './components'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route
                    path="/cryptocurrencies"
                    element={<Cryptocurrencies />}
                  />
                  <Route path="/exchanges" element={<Exchanges />} />
                  <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                  <Route path="/news" element={<News />} />
                </Routes>
              </div>
            </Layout>

            <div className="footer">
              <Typography.Title
                level={5}
                style={{ color: 'white', textAlign: 'center' }}
              >
                CryptoDrop
                <br />
                All rights reserved
              </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
              </Space>
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
