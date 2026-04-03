import React, { useState } from 'react'

function Buynow() {

    const [qty, setQty] = useState(1)
    let buynow = JSON.parse(localStorage.getItem("cart")) || []

    const handleRemove = ((index) => {

        let updated = [...buynow]
        updated.splice(index, 1)

        localStorage.setItem("cart", JSON.stringify(updated))


        window.location.reload()

    })

    return (
        <div className='mt-[120px] px-10'>

            <h1 className='text-3xl font-semibold mb-6'>Shopping Cart</h1>

            <div className='flex gap-6 my-2'>

                {/* LEFT SIDE */}
                <div className='w-[70%] bg-white shadow rounded-lg p-4'>

                    {/* HEADER */}
                    <div className='flex bg-gray-100 py-3 px-4 font-semibold text-gray-600'>
                        <div className='w-[30%]'>Product</div>
                        <div className='w-[15%]'>Price</div>
                        <div className='w-[15%]'>Quantity</div>
                        <div className='w-[20%]'>Total</div>
                        <div className='w-[20%] text-center'>Action</div>
                    </div>

                    {/* ITEMS */}
                    {
                        buynow.length > 0 ? (
                            buynow.map((item, index) => {
                                return (
                                    <div key={index} className='flex items-center border-b py-4 px-4'>

                                        {/* PRODUCT */}
                                        <div className='w-[30%] flex items-center gap-4'>
                                            <img className='w-[70px] h-[70px] object-cover rounded' src={item.img} alt="" />
                                            <h1 className='font-medium'>{item.desc}</h1>
                                        </div>

                                        {/* PRICE */}
                                        <div className='w-[15%]'>
                                            <p className='text-red-500 font-semibold'>{item.price}</p>
                                            <p className='line-through text-gray-400 text-sm'>{item.ogPrice}</p>
                                        </div>

                                        {/* QUANTITY */}
                                        <div className='w-[15%] flex items-center gap-2'>
                                            <button disabled={qty <= 1} className='px-2 py-1 border rounded' onClick={() => setQty(qty - 1)} >-</button>
                                            <span>{qty}</span>
                                            <button className='px-2 py-1 border rounded' onClick={() => setQty(qty + 1)}>+</button>
                                        </div>

                                        {/* TOTAL */}
                                        <div className='w-[20%] font-semibold'>
                                            {parseInt(item.price.slice(1).replace(",", "")) * qty}
                                        </div>

                                        {/* ACTION */}
                                        <div className='w-[20%] flex justify-center'>
                                            <button onClick={() => handleRemove(index)} className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm'>
                                                Remove
                                            </button>
                                        </div>

                                    </div>
                                )
                            })
                        ) : (
                            <h1 className='w-full text-center py-10 text-gray-500 text-lg sm:text-xl md:text-2xl font-medium'>
                                No item added 🛒
                            </h1>
                        )
                    }

                    {/* COUPON */}
                    <div className='flex gap-2 mt-6'>
                        <input
                            type="text"
                            placeholder='Enter Coupon Code'
                            className='border px-4 py-2 w-full rounded outline-none'
                        />
                        <button className='bg-blue-600 text-white px-6 rounded'>
                            Apply
                        </button>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className='w-[30%]'>

                    <div className='bg-white shadow rounded-lg p-5'>
                        <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>

                        <div className='flex justify-between mb-2'>
                            <span>Subtotal</span>
                            <span>₹53,696</span>
                        </div>

                        <div className='flex justify-between mb-2'>
                            <span>Coupon</span>
                            <span className='text-green-600'>SAVE200</span>
                        </div>

                        <div className='flex justify-between font-semibold text-lg border-t pt-3 mt-3'>
                            <span>Total</span>
                            <span>₹53,496</span>
                        </div>

                        <button className='w-full bg-yellow-400 mt-5 py-3 rounded font-semibold'>
                            Proceed to Checkout
                        </button>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default Buynow