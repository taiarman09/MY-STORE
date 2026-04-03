import React, { useEffect, useState } from 'react'

function SellOffer() {


    const [para, setpara] = useState(0)

    const paregraph = [
        {
            id: 1,
            para: "Super Sale! Up to 50% Off on All items - Shop Now!"
        },
        {
            id: 2,
            para: "Super Sale! Up to 50% Off on All item"
        }
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            setpara((prev) => (prev + 1) % paregraph.length)
        }, 3000);
        return()=> clearInterval(interval)
    }, [])



    return (
        <div className='relative md:top-[120px] top-[70px] py-2  text-center' style={{ backgroundColor: "rgb(243, 242, 247)" }}>
            <p className='md:text-[18px] text-[15px]'>{paregraph[para].para}</p>
        </div>
    )
}

export default SellOffer
