import React, { useState } from 'react'
import mensectionbanner from '../assets/mensectionbanner.png'

function Men() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='w-full mt-[100px] md:mt-[120px] px-4 md:px-10 py-5 bg-gray-100 min-h-screen'>

            {/* Banner */}
            <div className='relative w-full h-[220px] sm:h-[260px] md:h-[330px] rounded-t-xl overflow-hidden'>
                <img className='w-full h-full object-fill' src={mensectionbanner} alt="" />

                <div className='absolute top-1/2 left-4 md:left-6 -translate-y-1/2'>
                    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold'>
                        MEN FASHION
                    </h1>

                    <div className='flex flex-wrap gap-2 mt-3'>
                        <button className='bg-white px-3 py-1 rounded text-sm'>T-Shirts</button>
                        <button className='bg-white px-3 py-1 rounded text-sm'>Shirts</button>
                        <button className='bg-white px-3 py-1 rounded text-sm'>Jeans</button>
                    </div>
                </div>
            </div>

            {/* Filter & Sort */}
            <div className='bg-white h-auto md:h-[60px] flex  md:flex-row items-center md:items-center justify-between px-4 md:px-6 py-2 md:py-0 shadow mt-2'>
                <div className='flex gap-4 md:gap-6'>
                    <span className='font-semibold'>Filter</span>
                    <span className='font-semibold'>Sort</span>
                </div>
                <div className='flex md:hidden gap-4 '>
                    <span onClick={() => setMenuOpen(!menuOpen)} className='border-2 border-black px-1 rounded-sm'>☰</span>
                </div>
            </div>

            {/* Main Section */}
            <div className='flex flex-col md:flex-row gap-6 mt-4'>

                {/* Sidebar */}
                <div className='w-full max-h-[594px] lg:w-[250px] md:w-[200px] md:flex flex-col hidden bg-white p-4 rounded shadow'>
                    <h2 className='font-semibold mb-3'>Category</h2>
                    <ul className='space-y-2 text-gray-600'>
                        <li>T-Shirts</li>
                        <li>Jeans</li>
                        <li>Shoes</li>
                    </ul>

                    <h2 className='font-semibold mt-6 mb-3'>Brand</h2>
                    <ul className='space-y-2 text-gray-600'>
                        <li>Nike</li>
                        <li>Adidas</li>
                        <li>Puma</li>
                    </ul>

                    <h2 className='font-semibold mt-6 mb-3'>Rating</h2>
                    <ul className='space-y-2 text-yellow-400'>
                        <li>⭐⭐⭐⭐⭐</li>
                        <li>⭐⭐⭐⭐</li>
                        <li>⭐⭐⭐</li>
                    </ul>


                    <h2 className='font-semibold mt-6 mb-3'>Range</h2>
                    <div className='flex items-center justify-between'>
                        <p>100</p>
                        <p>1000</p>
                    </div>
                    <input type="range" />
                </div>

                {
                    menuOpen && (
                        <>
                            {/* Sidebar */}
                            <div className='w-full md:w-[250px] md:hidden flex-col bg-white p-4 rounded shadow'>
                                <h2 className='font-semibold mb-3'>Category</h2>
                                <ul className='space-y-2 text-gray-600'>
                                    <li>T-Shirts</li>
                                    <li>Jeans</li>
                                    <li>Shoes</li>
                                </ul>

                                <h2 className='font-semibold mt-6 mb-3'>Brand</h2>
                                <ul className='space-y-2 text-gray-600'>
                                    <li>Nike</li>
                                    <li>Adidas</li>
                                    <li>Puma</li>
                                </ul>

                                <h2 className='font-semibold mt-6 mb-3'>Range</h2>
                                <div className='flex items-center justify-between'>
                                    <p>100</p>
                                    <p>1000</p>
                                </div>
                                <input type="range" />

                            </div>
                        </>
                    )
                }

                {/* Products */}
                <div className='flex-1 grid grid-cols-2 max-h-[600px] overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6' style={{ scrollbarWidth: 'none' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
                        <div key={item} className='bg-white p-3 rounded shadow hover:shadow-lg transition'>
                            <div className='h-[150px] sm:h-[160px] bg-gray-200 rounded mb-3'></div>
                            <h3 className='font-semibold'>Product Name</h3>
                            <p className='text-gray-600'>₹1,999</p>
                            <button className='mt-2 w-full bg-yellow-400 py-1 rounded font-semibold'>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Men