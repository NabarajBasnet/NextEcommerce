'use client'
import { useState } from "react";


const Account = () => {
    const [toggle, setToggle] = useState(true);
    const [registered, setRegistered] = useState(false);
    const [passwordmatched, setPasswordMatched] = useState(false);


    // User details states
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Register User
    const userDetailsObj = { firstName, secondName, address, city, state, phoneNumber, email, password, confirmPassword }
    const registerUser = async (e) => {
        e.preventDefault();
        // Check password
        if (password != confirmPassword) {
            setPasswordMatched(true)
            setTimeout(() => {
                setPasswordMatched(false);
            }, 2000);
        }
        else 
        {
            await fetch('http://localhost:3000/api/accounts', {
                method: 'POST',
                body: JSON.stringify(userDetailsObj)
            })
            setRegistered(true);
            setTimeout(() => {
                setRegistered(false);
                setFirstName(''), setSecondName(''), setAddress(''), setCity(''), setState(''), setPhoneNumber(''), setEmail(''), setPassword(''), setConfirmPassword('');
            }, 2000)
        }

    }

    return (
        <>

            <form>

                <div className="flex flex-col mt-8 mb-8 items-center justify-center">
                    {/* Signup */}
                    {registered ? (
                        <>
                            <div className="flex flex-row items-center justify-center">
                                <p className="text-green-500 text-sm"><b> Registration Successfull </b></p>
                            </div>
                        </>
                    ) : ('')}
                    {toggle ?
                        (
                            <div className="border-2 rounded-lg border-black p-6">
                                <h1 className="text-2xl font-bold mb-4">Sign up</h1>
                                <div className="mb-4">
                                    <label className="block mb-2">Full Name:</label>
                                    <div className="flex flex-row">
                                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="border-2 border-black mr-2 px-2 py-1 rounded h-12" placeholder="First Name" />
                                        <input value={secondName} onChange={(e) => setSecondName(e.target.value)} type="text" className="border-2 border-black px-2 py-1 rounded h-12" placeholder="Second Name" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Address:</label>
                                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="border-2 border-black px-2 py-1 w-full rounded h-12" placeholder="Address" />
                                </div>
                                <div className="mb-4 flex flex-row">
                                    <div className="mr-2">
                                        <label className="block mb-2">City:</label>
                                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="City" />
                                    </div>
                                    <div>
                                        <label className="block mb-2">State/Province:</label>
                                        <input value={state} onChange={(e) => setState(e.target.value)} type="text" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Please Select" />
                                    </div>
                                </div>
                                <div className="mb-4 flex flex-row">
                                    <div className="mr-2">
                                        <label className="block mb-2">Phone Number:</label>
                                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <label className="block mb-2">Email:</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Email address" />
                                    </div>
                                </div>
                                <div className="mb-4 flex flex-row">
                                    <div className="mr-2">
                                        <label className="block mb-2">Password:</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Password" />
                                    </div>
                                    <div>
                                        <label className="block mb-2">Confirm Password:</label>
                                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div>
                                    {passwordmatched ? (
                                        <>
                                            <div className="flex flex-row items-center justify-center">

                                                <p className="text-red-600 text-sm"><b> Password Didn't Match ! </b></p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <button onClick={(e) => registerUser(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        ) : (
                            ''
                            // <div className="w-full flex items-center justify-center">
                            //     <div className="w-1/3 border-2 rounded-lg border-black p-8">
                            //         <h1 className="text-2xl font-bold mb-4">Login</h1>
                            //         <div className="mb-4">
                            //             <label className="block mb-2">Username:</label>
                            //             <input type="text" className="border-2 rounded h-12 border-black px-4 py-2 w-full" placeholder="Username" />
                            //         </div>
                            //         <div className="mb-4">
                            //             <label className="block mb-2">Password:</label>
                            //             <input type="password" className="border-2 rounded h-12 border-black px-4 py-2 w-full" placeholder="Password" />
                            //         </div>
                            //         <div className="flex justify-center">
                            //             <button onClick={()=>setToggle(!toggle)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            //                 Login
                            //             </button>
                            //         </div>
                            //     </div>
                            // </div>
                        )}


                    {/* Login */}

                </div>
            </form>
        </>
    );
}

export default Account;
