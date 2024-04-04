'use client'

import Link from "next/link"
import { useState } from "react"



const Login = () => 
{
    const [checkbox, setCheckBox] = useState(false)
    console.log(checkbox)
    return (
        <>
            <h1>Login here</h1>
            <div className="w-full flex items-center justify-center mb-8">
                <div className="w-1/3 border-2 rounded-lg border-black p-8">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <div className="mb-4">
                        <label className="block mb-2">Username:</label>
                        <input type="text" className="border-2 rounded h-12 border-black px-4 py-2 w-full" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password:</label>
                        <input type="password" className="border-2 rounded h-12 border-black px-4 py-2 w-full" placeholder="Password" />
                    </div>
                    <div className="flex justify-center flex-col">

                        <div className="flex flex-row items-center justify-between mt-4">
                            <label className="flex items-center mb-4">
                                <input type="checkbox" value={checkbox} onChange={(e)=>setCheckBox(e.target.value)} className="form-checkbox h-6 w-6 mr-3 border border-gray-300 rounded-md" />
                                <h1 className="text-base">Remember me</h1>
                            </label>

                            <Link href={'/account/resetpassword'}>
                                <h2 className="text-sm text-black font-bold">Forget Password?</h2>
                            </Link>
                        </div>

                        <button className="w-full bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button>
                        <div className="flex flex-row items-center justify-between mt-4">
                            <h2>Don't have an account?</h2>
                            <Link href={'/account/signup'}>
                                <h2 className="text-sm text-black font-bold">register here</h2>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
