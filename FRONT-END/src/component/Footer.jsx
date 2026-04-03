import React from 'react'
import { SiBigcartel } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t ">

      <div className="max-w-[1200px] mx-auto px-5 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left Side */}
          <div className="md:w-[30%]">
            <h1 className="flex items-center text-[24px] md:text-[30px] text-blue-700 font-bold gap-2">
              <SiBigcartel />
              <span>ShopKart</span>
            </h1>
            <p className="mt-3 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro, expedita fuga provident doloremque quas dicta quod atque nulla.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:w-[65%]">

            {/* Quick Links */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="hover:text-blue-600 cursor-pointer">Home</li>
                <li className="hover:text-blue-600 cursor-pointer">Shop</li>
                <li className="hover:text-blue-600 cursor-pointer">About</li>
                <li className="hover:text-blue-600 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Company</h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                <li className="hover:text-blue-600 cursor-pointer">Careers</li>
                <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                <li className="hover:text-blue-600 cursor-pointer">Templates</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Contact</h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Email: support@shopkart.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Location: India</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-5 text-center text-sm text-gray-500">
          © 2026 ShopKart. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer