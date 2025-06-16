import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5'

const Offices = () => {
    const offices = [
        { officeName: 'Office A', officeCode: '12357', city: 'Nairobi', phone: '+254859869589959', addressLine1: 'Address Line A', addressLine2: 'Address Line B', state: '213-00100, Kileleshwa', country: 'Kenya' },
        { officeName: 'Office B', officeCode: '78796', city: 'Mombasa', phone: '+254859869589959', addressLine1: 'Address Line A', addressLine2: 'Address Line B', state: '213-00100, Kileleshwa', country: 'Kenya' },
    ];
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className='items-center justify-center w-full flex flex-col mb-6'>
                <h1 className="text-3xl font-bold text-center mb-6">Customers</h1>
                <button className="bg-[#4a90e2] flex flex-row gap-2 items-center cursor-pointer text-white px-8 py-1.5 
                              rounded hover:bg-blue-400 transition">
                    <FaPlus className='text-black text-lg' />
                    Add Office
                </button>
            </div>

            <div className="flex items-center justify-between mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search office"
                        className="border-2 border-black bg-[#f5f5f5] rounded-md py-2 pl-13 pr-4
                                       "
                    />
                    <span className="absolute  left-3 top-2.5 ">
                        <IoSearch className="w-5 h-5" />
                    </span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {offices.map((office, idx) => (
                    <div key={idx} className="border-2 border-[#42befb] flex flex-col  w-70 rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl text-center font-semibold mb-2">{office.officeName}</h2>
                        <p className='font-semibold'>Office Code: {office.officeCode}</p>
                        <p className='font-semibold'> {office.city}</p>
                        <p className='font-semibold'>{office.addressLine1}</p>
                        <p className='font-semibold'> {office.addressLine2}</p>
                        <p className='font-semibold'> {office.country}</p>
                        <p className='font-semibold'> {office.state}</p>
                        <p className='font-semibold'>{office.phone}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Offices