import React from 'react'

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
                <h1 className='text-6xl font-bold text-gray-800'>404</h1>
                <p className='text-xl text-gray-600 mt-4'>Page Not Found</p>
                <p className='text-gray-500 mt-2'>The page you are looking for does not exist.</p>
            </div>
        </div>
    )
}

export default NotFound