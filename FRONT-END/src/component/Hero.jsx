import React, { useEffect, useState } from "react";
import megasale from "../assets/megasaleimg.png";
import arrivals from "../assets/arrivalsimg.png";
import summercollaction from "../assets/summercollaction.png";
import { FiTruck } from "react-icons/fi";
import Topdeal from "../assets/Topdeal.png";
import flashimg from "../assets/flash-img.png";
import smartphone from "../assets/smartphone.png";
import runningshoes from "../assets/runningshoes.png";
import handbag from "../assets/handbag.png";
import headphones from "../assets/headphones.png";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from "react-router";

function Hero({ Buynowproduct , users }) {

  const [randomProduct, setRandomProduct] = useState([]);
  const [count, setCount] = useState(1)
  const navigate = useNavigate()


  const alert = (e)=>{
    e.preventDefault()
    window.alert("login first")
    navigate("/Login")
  }



  const services = [
    { title: "Free Shipping", desc: "on Orders Over ₹999" },
    { title: "Secure Payment", desc: "100% Secure Payment" },
    { title: "Easy Returns", desc: "7 Days Return Policy" },
    { title: "24/7 Support", desc: "Customer Support" },
  ];

  const sideCards = [
    { img: arrivals, title: "New Arrivals", subtitle: "Latest Trends For You", button: "Discover Now" },
    { img: summercollaction, title: "Summer", subtitle: "Collection", offer: "30% OFF" },
    { img: Topdeal, title: "Top Deals", button1: "Limited Time!", button2: "Shop Now" },
    { img: flashimg, title: "Flash Sale", timer: "Hurry! Ends Soon", offer1: "60% OFF" }
  ];

  const featuredproduct = [
    { img: smartphone, desc: "Smartphone X", price: "₹24,999", ogPrice: "28,999" },
    { img: runningshoes, desc: "Running Shoes", price: "₹2,199", ogPrice: "2,999" },
    { img: handbag, desc: "Women's Handbag", price: "₹3,499", ogPrice: "4,299" },
    { img: headphones, desc: "Wireless Headphones", price: "₹1,999", ogPrice: "2,759" }
  ];

  const categotyCard = [
    { img: smartphone, desc: "Men's Fashion" },
    { img: runningshoes, desc: "Women's Fashion" },
    { img: handbag, desc: "Electronics" },
    { img: headphones, desc: "Home & Living" }
  ]

  useEffect(() => {
    const shuffled = [...featuredproduct].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 4);
    setRandomProduct(selected)
  }, [])

  return (
    <div className="md:mt-[120px] mt-[70px] px-4 lg:px-10">

      <div className="flex flex-col py-3 lg:flex-row gap-5">

        {/* LEFT */}
        <div className="w-full lg:w-[70%]">

          {/* BANNER */}
          <div className="relative group">
            <img
              className="w-full h-[300px] sm:h-[400px] lg:h-[550px] rounded-xl object-fill"
              src={megasale}
              alt=""
            />

            <div className="absolute top-5 sm:top-10 left-5 sm:left-10 text-white">
              <h1 className="text-[30px] sm:text-[50px] lg:text-[70px] font-bold">
                MEGA SALE
              </h1>

              <p className="flex items-center gap-2 sm:gap-3 text-red-500 font-bold">
                <span className="text-[16px] sm:text-[25px]">UP TO</span>
                <span className="text-[40px] sm:text-[70px]">50%</span>
                <span className="text-[16px] sm:text-[25px]">OFF</span>
              </p>

              <button className="mt-3 sm:mt-5 px-4 py-2 sm:px-6 sm:py-3 bg-blue-700 rounded-lg hover:bg-blue-900 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {services.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-5 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <FiTruck className="text-2xl text-blue-700" />
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FEATURED */}
          <div className="mt-6 sm:mt-8">

            {/* HEADING */}
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-2xl font-bold text-blue-900 whitespace-nowrap">
                Featured Products
              </h1>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-5 sm:mt-8">

              {randomProduct.map((item, index) => (
                <div
                  key={index}
                  className="bg-white relative rounded-xl shadow-sm hover:shadow-xl transition duration-300 p-2 sm:p-3 group"
                >

                  <div>
                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-lg">
                      <img
                        className="h-[130px] sm:h-[180px] w-full object-fill group-hover:scale-105 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="mt-2 sm:mt-3">

                      <p className="text-sm sm:text-base font-semibold line-clamp-1">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-2">
                        <h1 className="text-[14px] sm:text-lg font-bold text-green-600 mt-1">
                          {item.price}
                        </h1>
                        <h1 className="text-[12px] sm:text-md font-bold line-through text-red-600 mt-2">
                          {item.ogPrice}
                        </h1>
                      </div>


                      {
                        users ? (
                          <button onClick={() => { Buynowproduct(item) }} className="mt-2 sm:mt-3 w-full py-1.5 sm:py-2 text-sm sm:text-base bg-blue-900 text-white rounded-md hover:bg-blue-700 transition">
                            Add To Cart
                          </button>
                        ) : (
                          <button onClick={alert} className="mt-2 sm:mt-3 w-full py-1.5 sm:py-2 text-sm sm:text-base bg-blue-900 text-white rounded-md hover:bg-blue-700 transition">
                            Add To Cart
                          </button>
                        )
                      }

                    </div>
                  </div>
                  <div >
                    <button className="absolute top-5 right-5">
                      <FaRegHeart className="text-red-800 " />
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>



          {/* SELLERS */}
          <div className="mt-6 sm:mt-8">

            {/* HEADING */}
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-2xl font-bold text-blue-900 whitespace-nowrap">
                Best Sellers
              </h1>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* PRODUCTS GRID */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-5 sm:mt-8">

                {
                  randomProduct.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 p-2 sm:p-3 group"
                      >

                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-lg">
                          <img
                            className="h-[130px] sm:h-[250px] w-full object-fill group-hover:scale-105 transition duration-300"
                            src={item.img}
                            alt=""
                          />
                        </div>

                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[30%] lg:flex lg:flex-col grid sm:grid-cols-2 grid-cols-1 gap-4">

          {sideCards.map((card, index) => (
            <div
              key={index}
              className="relative h-[220px] sm:h-[250px] lg:h-[267px] lg:w-[100%] sm:w-[100%]   rounded-xl overflow-hidden group shadow-md"
            >

              {/* IMAGE */}
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                src={card.img}
                alt=""
              />

              {/* DARK OVERLAY (important for UI like image) */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center px-5 text-white">

                <h1 className="text-[20px] sm:text-[24px] font-bold leading-tight">
                  {card.title}
                </h1>

                {card.subtitle && (
                  <p className="text-sm sm:text-base opacity-90 mt-1">
                    {card.subtitle}
                  </p>
                )}

                {card.offer && (
                  <p className="text-lg font-bold text-yellow-300 mt-2">
                    {card.offer}
                  </p>
                )}

                {/* BUTTON */}
                {card.button && (
                  <button className="mt-3 w-fit px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition">
                    {card.button}
                  </button>
                )}

                {/* TOP DEAL */}
                {card.button1 && (
                  <div className="mt-3">
                    <p className="bg-white text-red-500 text-sm px-3 py-1 rounded w-fit font-semibold">
                      {card.button1}
                    </p>

                    <button className="mt-2 px-4 py-1.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                      {card.button2}
                    </button>
                  </div>
                )}

                {/* FLASH SALE */}
                {card.timer && (
                  <p className="mt-3 bg-red-600 px-3 py-1 text-sm rounded w-fit">
                    {card.timer}
                  </p>
                )}

                {card.offer1 && (
                  <div className="mt-3 bg-yellow-300 text-red-600 font-bold text-lg px-4 py-2 rounded w-fit">
                    {card.offer1}
                  </div>
                )}

              </div>
            </div>
          ))}

          <div className="bg-slate-200 rounded-md p-4">

            {/* HEADER */}
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-lg sm:text-xl font-bold whitespace-nowrap">
                Shop by Category
              </h1>
              <div className="flex-1 h-[1px] bg-black"></div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">

              {categotyCard.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-full aspect-square rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
                  >

                    {/* IMAGE */}
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />

                    {/* OVERLAY TEXT */}
                    <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-1 text-sm sm:text-base">
                      {item.desc}
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;