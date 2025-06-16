import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    const isActive = (tabName) => {
        return activeTab === tabName ? 'bg-gray-700' : '';
    }
    const navigate = useNavigate();
    return (
        <div>
            <aside className="fixed top-0  left-0 w-60 h-full bg-[#1a2f43] text-white shadow-lg">
                <div className="p-4">
                    <h1 className="text-xl text-[#4a90e2] font-bold">Product<span className='text-white'>Line</span> </h1>
                </div>
                <nav className="mt-4 w-full">
                    <ul className='space-y-4 '>

                        <li className=''>
                            <button onClick={() => {
                                handleTabClick('Home');
                                navigate('/');
                            }}
                                className={`w-full  text-left text-[#4a90e2] cursor-pointer text-lg font-semibold  px-6 py-2  hover:bg-gray-700 ${isActive('Home')}`}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleTabClick('Products');
                                    navigate('/products')
                                }}
                                className={`w-full text-left text-[#4a90e2] cursor-pointer text-lg font-semibold  px-6 py-2  hover:bg-gray-700 ${isActive('Products')}`}
                            >
                                Products
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleTabClick('Customers');
                                    navigate('/customers')
                                }}
                                className={`w-full text-left text-[#4a90e2] cursor-pointer text-lg font-semibold  px-6 py-2  hover:bg-gray-700 ${isActive('Customers')}`}
                            >
                                Customers
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleTabClick('Orders');
                                    navigate('/orders')
                                }}
                                className={`w-full text-left text-[#4a90e2] cursor-pointer text-lg  font-semibold px-6 py-2  hover:bg-gray-700 ${isActive('Orders')}`}
                            >
                                Orders
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleTabClick('Payments');
                                    navigate('/payments')
                                }}
                                className={`w-full text-left text-[#4a90e2] cursor-pointer text-lg font-semibold  px-6 py-2  hover:bg-gray-700 ${isActive('Payments')}`}
                            >
                                Payments
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleTabClick('Employees');
                                    navigate('/employees')
                                }}
                                className={`w-full text-left text-[#4a90e2] cursor-pointer  text-lg font-semibold px-6 py-2 rounded hover:bg-gray-700 ${isActive('Employees')}`}
                            >
                                Employees
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleTabClick('Offices')
                                    navigate('/offices')
                                }}
                                className={`w-full text-left text-[#4a90e2] cursor-pointer text-lg font-semibold  px-6 py-2 rounded hover:bg-gray-700 ${isActive('Offices')}`}
                            >
                                Offices
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div >
    )
}

export default Sidebar