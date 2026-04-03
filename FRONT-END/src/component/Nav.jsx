import React, { useState } from 'react'
import { SiBigcartel } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaUserAltSlash } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Nav({ ref, users, setUser }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();


    const handleLogout = () => {
        setUser(null);
        navigate("/Logout");
    };


    return (
        <div>

            {/* HEADER */}
            <header className='w-full z-50 h-[70px] bg-white fixed top-0 flex items-center justify-between px-4 md:px-10 shadow'>

                {/* LOGO */}
                <h1 className='flex items-center text-[24px] md:text-[32px] text-blue-700 font-bold gap-2'>
                    <SiBigcartel />
                    <span>ShopKart</span>
                </h1>

                {/* SEARCH (HIDE ON SMALL) */}
                <div className='hidden md:flex items-center'>
                    <input
                        type="text"
                        placeholder='Search for products...'
                        ref={ref}
                        className='border border-neutral-300 w-[250px] lg:w-[350px] pl-4 py-2 outline-none rounded-l-md'
                    />
                    <button className='bg-blue-700 text-white px-3 py-3 rounded-r-md'>
                        <IoSearch />
                    </button>
                </div>

                {/* RIGHT ICONS */}
                <ul className='hidden md:flex items-center gap-5 text-[16px]'>
                    <li>
                        <Link to={"/Wishlist"} className='flex items-center gap-1 cursor-pointer'>
                            <FaHeart className='text-red-500' />
                            <span className='hidden lg:block'>Wishlist</span>
                        </Link>
                    </li>

                    <li className='flex items-center gap-1 cursor-pointer'>
                        <Link to={"/Buynow"} className='flex items-center gap-1 cursor-pointer'>
                            <GiShoppingCart />
                            <span className='hidden lg:block'>Cart</span>
                        </Link>
                    </li>

                    <li className='flex items-center gap-1 cursor-pointer'>
                        {
                            users ? (
                                <button onClick={handleLogout}>
                                    Log out
                                </button>
                            ) : (
                                <Link to={"/Login"}>Log in</Link>
                            )

                        }
                    </li>
                </ul>

                {/* MOBILE MENU BUTTON */}
                <div className='md:hidden text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX /> : <HiMenu />}
                </div>

            </header>

            {/* NAV LINKS DESKTOP */}
            <div className='hidden md:flex fixed top-[70px] w-full h-[50px] bg-[#4c5c75] z-40 items-center justify-center'>
                <ul className='flex gap-10 text-white text-[16px]'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><Link to="/Men">Men</Link></li>
                    <li>Women</li>
                    <li>Electronics</li>
                    <li>Beauty</li>
                    <li>Deals</li>
                    <li>Blog</li>
                </ul>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className='fixed top-[70px] left-0 w-full bg-white shadow-md z-40 md:hidden'>

                    {/* SEARCH */}
                    <div className='flex p-3'>
                        <input
                            type="text"
                            placeholder='Search...'
                            className='border w-full pl-3 py-2 rounded-l-md outline-none'
                        />
                        <button className='bg-blue-700 text-white px-3 rounded-r-md'>
                            <IoSearch />
                        </button>
                    </div>

                    {/* LINKS */}
                    <ul className='flex flex-col text-[16px]'>
                        <li className='p-3 border-b'><Link to="/">Home</Link></li>
                        <li className='p-3 border-b'><Link to="/Shop">Shop</Link></li>
                        <li className='p-3 border-b'><Link to="/Men">Men</Link></li>
                        <li className='p-3 border-b'>Women</li>
                        <li className='p-3 border-b'>Electronics</li>
                        <li className='p-3 border-b'>Beauty</li>
                        <li className='p-3 border-b'>Deals</li>
                        <li className='p-3 border-b'>Blog</li>
                    </ul>

                    {/* ICONS */}
                    <div className='flex justify-around p-3 border-t'>
                        <FaHeart className='text-red-500 text-xl' />
                        <GiShoppingCart className='text-xl' />
                        {
                            users ? (
                                <FaUserAltSlash ser className='text-xl' onClick={handleLogout} />
                            ) : (
                                <Link to={"/Login"}><FaUser className='text-xl' /></Link>
                            )
                        }
                    </div>

                </div>
            )}

        </div>
    )
}

export default Nav;