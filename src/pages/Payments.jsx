import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5'

const Payments = () => {
    const payments = [
        { customerId: 'C001', checkNo: '01234', amount: '4500', date: '31/2/2025' },
        { customerId: 'C002', checkNo: '56874', amount: '3570', date: '4/06/2025' },
        { customerId: 'C003', checkNo: '76847', amount: '7890', date: '8/12/2025' },
        { customerId: 'C004', checkNo: '24356', amount: '500', date: '21/9/2025' },
    ];
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className='items-center justify-center w-full flex flex-col mb-6'>
                <h1 className="text-3xl font-bold text-center mb-6">Customers</h1>
                <button className="bg-[#4a90e2] flex flex-row gap-2 items-center cursor-pointer text-white px-8 py-1.5 
                           rounded hover:bg-blue-400 transition">
                    <FaPlus className='text-black text-lg' />
                    Add Payment
                </button>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search payment"
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
                        <th className="px-4 py-2 text-center whitespace-nowrap">Customer ID</th>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Check No</th>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Amount</th>
                        <th className="px-4 py-2 text-center whitespace-nowrap">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">{payment.customerId}</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">{payment.checkNo}</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">Kshs {payment.amount}</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2 whitespace-nowrap">{payment.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Payments