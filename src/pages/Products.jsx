import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const products = [
        { code: '01234', name: 'Product A', price: 'Kshs 4500', stock: 70 },
        { code: '56874', name: 'Product B', price: 'Kshs 3570', stock: 54 },
        { code: '76847', name: 'Product C', price: 'Kshs 7890', stock: 31 },
        { code: '24356', name: 'Product D', price: 'Kshs 5000', stock: 20 },
    ];

    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

            <div className="flex items-center justify-between mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search products"
                        className="border-2 border-black rounded-md py-2 pl-10 pr-4
                         "
                    />
                    <span className="absolute left-3 top-2.5 ">
                        <IoSearch className="w-5 h-5" />
                    </span>
                </div>
                <button onClick={() => navigate('/product')} className="bg-[#4a90e2] cursor-pointer text-white px-8 py-1.5 
                rounded hover:bg-blue-400 transition">
                    Add Product
                </button>
            </div>

            <table className="w-full border border-blue-300">
                <thead className="bg-gray-100 border-b-2 border-[#258cbf]">
                    <tr>
                        <th className=" px-4 py-2 text-center">Product Code</th>
                        <th className=" px-4 py-2 text-center">Name</th>
                        <th className=" px-4 py-2 text-center">Price</th>
                        <th className=" px-4 py-2 text-center">Stock</th>
                        <th className=" px-4 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="border-t font-medium text-center border-[#42befb] px-4 py-2">{product.code}</td>
                            <td className="border-t font-medium text-center border-[#42befb] px-4 py-2">{product.name}</td>
                            <td className="border-t font-medium text-center border-[#42befb] px-4 py-2">{product.price}</td>
                            <td className="border-t font-medium text-center border-[#42befb] px-4 py-2">{product.stock}</td>
                            <td className="border-t font-medium text-center border-[#42befb] px-4 py-2">
                                <button className="bg-[#4a90e2] cursor-pointer text-white px-5 py-0.5 rounded hover:bg-blue-400 transition">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
