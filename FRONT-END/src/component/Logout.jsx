import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Logout() {

    const navigate = useNavigate()

    const handleLogout = (() => {
        localStorage.removeItem("users")
        navigate("/")
        window.location.reload()
    })

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-gray-800">
                    Logout
                </h1>

                <p className="text-gray-500 mt-3 mb-6">
                    Are you sure you want to logout?
                </p>
                

                {/* Buttons */}
                <div className="flex gap-4 justify-center">

                    {/* Cancel */}
                    <button
                        onClick={() => navigate("/")}
                        className="px-5 py-2 rounded-lg border hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                    >
                        Logout
                    </button>


                </div>
            </div>
        </div>
    )
}

export default Logout