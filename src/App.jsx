import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './Layout/Layout'
import Offices from './pages/Offices'
import Orders from './pages/Orders'
import Payments from './pages/Payments'
import Products from './pages/Products'
import Employees from './pages/Employees'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/offices" element={<Offices />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  )
}

export default App