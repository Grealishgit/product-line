import React from 'react'
import { IoScale } from 'react-icons/io5'

const ProductCard = () => {
    return (
        <div className="w-90 mt-4 left-70 absolute justify-start mx-auto px-4 py-8">
            <div className='flex flex-col items-center p-3 rounded-xl bg-[#234566] justify-center mb-4'>
                <h2 className='text-2xl font-bold text-white'>Good afternoon, Joy✨</h2>
                <p className='text-white'>Here is the latest on Product A</p>
                <p className='text-white'>June 12, 2025</p>
            </div>
            <div className='flex border-2 p-3 rounded-md border-[#9adcfd] flex-col mt-4'>
                <h3 className="text-2xl font-semibold">Product A</h3>
                <p className="text-gray-600"> <strong>Description</strong>Product A jffhjhr </p>
                <p> <strong>Vendor:</strong>Vendor 1 </p>
                <p className='flex flex-row items-center gap-1'><IoScale className='text-black w-5 h-5' /> <strong>Scale:</strong>567 </p>
                <p> <strong>Price:</strong>Kshs 5600 1 </p>
                <div className='flex items-center justify-between'>
                    <p> <strong>Stock:</strong>100 </p>
                    <button className='rounded-md px-6 py-1 text-white bg-[#4a90e2]'>Edit</button>
                </div>

                <p> <strong>Product Line:</strong>Product Line A </p>

            </div>
        </div>
    )
}

export default ProductCard