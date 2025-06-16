import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Offices from './pages/Offices'
import Orders from './pages/Orders'
import Payments from './pages/Payments'
import Products from './pages/Products'
import Employees from './pages/Employees'
import Customers from './pages/Customers'
import NotFound from './pages/NotFound'
import ProductCard from './components/ProductCard'
import OrderCard from './components/OrderCard'
import Layout from './components/Layout'


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/offices" element={<Offices />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/order" element={<OrderCard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App