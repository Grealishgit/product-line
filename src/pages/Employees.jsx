import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5'
import { MdDelete, MdEdit } from 'react-icons/md';

const Employees = () => {
    const employees = [
        { employeeName: 'Employee A', employeeId: '001A', specialization: 'Sales Representative', officeCode: '12357', email: 'employee@gmail.com', reportsTo: 'Employee B' },
        { employeeName: 'Employee B', employeeId: '001B', specialization: 'Support Specialist', officeCode: '78796', email: 'employee@gmail.com', reportsTo: 'Employee C' },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className='items-center justify-center w-full flex flex-col mb-6'>
                <h1 className="text-3xl font-bold text-center mb-6">Customers</h1>
                <button className="bg-[#4a90e2] flex flex-row items-center gap-2 cursor-pointer text-white px-8 py-1.5 
                        rounded hover:bg-blue-400 transition">
                    <FaPlus className='text-black text-lg' />
                    Add Employee
                </button>
            </div>

            <div className="flex items-center justify-between mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search employee"
                        className="border-2 border-black bg-[#f5f5f5] rounded-md py-2 pl-13 pr-4
                                 "
                    />
                    <span className="absolute  left-3 top-2.5 ">
                        <IoSearch className="w-5 h-5" />
                    </span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {employees.map((employee, idx) => (
                    <div key={idx} className="border-2 border-[#42befb] flex flex-col items-center w-70 rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold mb-2">{employee.employeeName}: {employee.employeeId}</h2>
                        <p> {employee.specialization}</p>
                        <p>Office Code {employee.officeCode}</p>
                        <p className='flex justify-between flex-row gap-6 items-center'> {employee.email} <MdEdit className='w-7 h-7' /></p>
                        <p className='flex justify-between flex-row gap-6 items-center'>Reports to {employee.reportsTo}<MdDelete className='w-7 h-7' /></p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Employees