import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"; // path check karo

function Signup({setUser}) {


    const [check, setCheck] = useState(false)

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        conpassword: ""
    })

    const handleChange = ((e) => {
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        )
    });

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.conpassword) {
            alert("Password is Not Match")
            return;
        }

        const res = await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()
        alert(data.message)

        if (res.ok) {
            navigate("/")
        }

    }


    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);

            const user = result.user;

            // 👇 backend ko bhejo
            const res = await fetch("http://localhost:8080/googleSignup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: user.displayName,
                    email: user.email
                })
            });

            const data = await res.json();
            alert(data.message);

            if (res.ok) {
                setUser(data.user)
                navigate("/");
            }

        } catch (error) {
            console.log(error);
            alert("Google login failed");
        }
    };




    return (
        <div className="h-screen flex items-center  justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">


            <button className="absolute top-5 left-5">
                <Link
                    to="/"
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-md hover:bg-white/30 transition"
                >
                    ← Back
                </Link>
            </button>


            {/* Card */}
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-6">

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
                    Sign Up
                </h1>
                <p className="text-center text-gray-500 mt-2 mb-6">
                    Sign up or for free
                </p>

                {/* Form */}
                <form className="space-y-2" onSubmit={handleSubmit}>

                    {/* Name */}
                    <div>
                        <input
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your Name"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    {/* Email */}
                    <div>
                        <input
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    {/* Password */}
                    <div>
                        <input
                            name='conpassword'
                            value={form.conpassword}
                            onChange={handleChange}
                            type="password"
                            placeholder="Confirm password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* I Agree */}
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
                            i agree to the <span className='text-blue-500 cursor-pointer'>Terms & Conditions</span>
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <button disabled={!check} type='submit' className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 ${check ? "cursor-pointer" : "cursor-not-allowed"}`}>
                        Sign Up
                    </button>



                </form>
                <div className='space-y-3 pt-3'>
                    {/* Divider */}
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                        <p className="text-gray-400 text-sm">OR</p>
                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                    </div>

                    {/* Social Buttons */}
                    <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100">
                        Login with Facebook
                    </button>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
                    >
                        Continue with Google
                    </button>

                    {/* Login */}
                    <p className="text-center text-sm mt-4">
                        Already have an account {" "}
                        <span className="text-blue-500 cursor-pointer hover:underline">
                            <Link to={"/Login"}> Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
