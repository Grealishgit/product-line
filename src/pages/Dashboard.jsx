import React from 'react';
import { FaBox, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const Dashboard = ({ isOpen, setIsOpen, darkMode, setDarkMode }) => {
    return (
        <div className="items-center justify-center min-h-screen w-full p-4">
            <h1 className="text-4xl text-center font-bold text-gray-800">Dashboard</h1>
            <div className='mt-10'>
                <p className="text-left text-lg mt-2">Welcome back Joy <span role="img" aria-label="smile">😊</span>,</p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                    {/* Products Card */}
                    <div>
                        <div className="border-3 border-[#57acee] rounded-lg p-10 text-center w-60">
                            <div className="flex justify-center items-center text-gray-700 mb-2 text-lg ">
                                <FaBox className="mr-2" />
                                Total Products
                            </div>
                            <p className="text-4xl font-bold">567</p>
                        </div>
                        <div className='w-full items-center justify-center text-center'>
                            <button className='bg-[#4a90e2] cursor-pointer mt-5 rounded-lg text-white py-2 px-8 '>
                                View Products
                            </button>
                        </div>

                    </div>
                    {/* Customers Card */}
                    <div>
                        <div className="border-3 border-[#57acee] rounded-lg p-10 text-center w-60">
                            <div className="flex justify-center text-gray-700 items-center mb-2 text-md ">
                                <FaUsers className="mr-2" />
                                Total Customers
                            </div>
                            <p className="text-4xl font-bold">163</p>

                        </div>
                        <div className='w-full items-center  justify-center text-center'>
                            <button className='bg-[#4a90e2] cursor-pointer mt-5 rounded-lg text-white py-2 px-8 '>
                                View Customers
                            </button>
                        </div>
                    </div>


                    {/* Orders Card */}
                    <div>
                        <div className="border-3 border-[#57acee] rounded-lg p-10 text-center w-60">
                            <div className="flex justify-center text-gray-700 items-center mb-2 text-lg">
                                <FaClipboardCheck className="mr-2" />
                                Total Orders
                            </div>
                            <p className="text-4xl font-bold">54</p>

                        </div>
                        <div className='w-full cursor-pointer items-center justify-center text-center'>
                            <button className='bg-[#4a90e2] mt-5 rounded-lg text-white py-2 px-8 '>
                                View Customers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
