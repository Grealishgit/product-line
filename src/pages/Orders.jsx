import React from 'react'
import { BsMenuButton } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const orders = [
        { orderId: '01123', customerId: '001', orderDate: '4/8/2024', requireDate: '4/8/2024', shippingDate: '4/8/2024', status: 'Shipped' },
        { orderId: '74657', customerId: '002', orderDate: '5/9/2024', requireDate: '5/9/2024', shippingDate: '5/9/2024', status: 'Pending' },
        { orderId: '012343', customerId: '003', orderDate: '6/7/2024', requireDate: '6/7/2024', shippingDate: '6/7/2024', status: 'Pending' },
        { orderId: '96900', customerId: '004', orderDate: '23/1/2025', requireDate: '23/1/2025', shippingDate: '23/1/2025', status: 'Completed' },
    ];

    const navigate = useNavigate();
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className='items-center justify-center w-full flex flex-col mb-6'>
                <h1 className="text-3xl font-bold text-center mb-6">Customers</h1>
                <button onClick={() => navigate('/order')} className="bg-[#4a90e2] cursor-pointer text-white px-8 py-1.5 
                    rounded hover:bg-blue-400 transition">
                    Add Order
                </button>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search order"
                        className="border-2 border-black bg-[#f5f5f5] rounded-md py-2 pl-13 pr-4
                         "
                    />
                    <span className="absolute  left-3 top-2.5 ">
                        <IoSearch className="w-5 h-5" />
                    </span>
                </div>
            </div>
            <table className="w-full border overflow-x-scroll border-blue-300">
                <thead className="bg-[#f5f5f5] border-b-2 border-[#258cbf]">
                    <tr>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Order ID</th>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Customer ID</th>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Order Date</th>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Required Date</th>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Shipping Date</th>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">{order.orderId}</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">{order.customerId}</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">{order.orderDate}</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">{order.requireDate}</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">{order.shippingDate}</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb]  py-2 whitespace-nowrap">
                                <button className={`rounded-lg px-5 text-white py-0.5
                                ${order.status === 'Shipped' ? 'bg-[#4a90e2]' : order.status === 'Pending' ? 'bg-[#5b7798] ' : 'bg-[#4a90e2]'}
                                 whitespace-nowrap`}>
                                    {order.status}
                                </button>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Orders