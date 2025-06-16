import React from 'react'
import { FaPhone, FaPhoneAlt } from 'react-icons/fa'

const OrderCard = () => {
    return (
        <div className="w-105 mt-4 left-70 absolute justify-start mx-auto px-4 py-8">
            <div className='flex flex-col items-center p-3 rounded-xl bg-[#234566] justify-center mb-4'>
                <h2 className='text-2xl font-bold text-white'>Good afternoon, Joy✨</h2>
                <p className='text-white'>Here is the latest on Product A</p>
                <p className='text-white'>June 12, 2025</p>
            </div>
            <div className='flex border-2 p-5 rounded-md border-[#9adcfd] flex-col mt-4'>
                <h3 className="text-xl font-semibold">Order ID: 0111</h3>
                <div className='flex items-center justify-between'>
                    <p className='flex flex-row gap-2 font-semibold items-center'> <FaPhoneAlt /> Order Line: +254656676</p>
                    <button className='rounded-md px-6 cursor-pointer text-white py-1 bg-[#4a90e2]'>Edit</button>
                </div>
                <table className="w-full mt-7 border overflow-x-scroll border-blue-300">
                    <thead className="bg-[#f5f5f5] border-b-2 border-[#258cbf]">
                        <tr>
                            <th className="px-4 py-2 text-center">Product Code</th>
                            <th className="px-4 py-2 text-center">Quantity</th>
                            <th className="px-4 py-2 text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2">0123</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2">5</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2">Kshs 3400</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2">0123</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2">5</td>
                            <td className="border-t-2 font-medium text-center border-[#42befb] px-4 py-2">Kshs 3400</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderCard