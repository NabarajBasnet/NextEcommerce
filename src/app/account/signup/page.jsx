'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Account = () => {
    const [registered, setRegistered] = useState(false);
    const [passwordmatched, setPasswordMatched] = useState(false);
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [userExists, setUserExists] = useState(false)
    const [requiredFields, setRequiredFields] = useState(false);

    const registeredUsersEmails = registeredUsers.map((val) => {
        return val.email;
    })
    console.log(registeredUsersEmails)

    const registeredUsersPhoneno = registeredUsers.map((val) => {
        return val.phoneNumber;
    })
    console.log(registeredUsersPhoneno)

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

    // Verify if user credentials already exists
    const getUserDetails = async () => {
        const user = await fetch('http://localhost:3000/api/accounts');
        const userData = await user.json();
        setRegisteredUsers(userData.result);


    }
    useEffect(() => {
        getUserDetails()
    }, []);



    // Login after signup
    const loginRouter = useRouter()

    // Register User
    const userDetailsObj = { firstName, secondName, address, city, state, phoneNumber, email, password, confirmPassword }

    const registerUser = async (e) => {
        e.preventDefault();
        // Check password
        if (password != confirmPassword) {
            alert('User already exists!')
            setPasswordMatched(true)
            setTimeout(() => {
                setPasswordMatched(false);
            }, 2000);
        }
        else if (!firstName || !secondName || !address || !city || !state || !phoneNumber || !email || !password || !confirmPassword) {
            setRequiredFields(true)
            setTimeout(() => {
                setRequiredFields(false);
            }, 2000);
        }
        else if (registeredUsersEmails.includes(email) || registeredUsersPhoneno.includes(phoneNumber)) {
            setUserExists(true)
            setTimeout(() => {
                setUserExists(false);
            }, 2500);
        }
        else {
            await fetch('http://localhost:3000/api/accounts', {
                method: 'POST',
                body: JSON.stringify(userDetailsObj)
            })
            setRegistered(true);
            setTimeout(() => {
                setRegistered(false);
                setFirstName(''), setSecondName(''), setAddress(''), setCity(''), setState(''), setPhoneNumber(''), setEmail(''), setPassword(''), setConfirmPassword('');
                loginRouter.push('/account/login')
            }, 2000)

        }

    }

    return (
        <>
            <div className="flex flex-row items-center">
                <div>
                    <img src="/backgroundimages/loginpage.jpg" className="object-cover h-screen"  />
                </div>

                <form>
                    <div className="flex flex-col mt-8 mb-8 items-center justify-center">
                        {registered ? (
                            <>
                                <div className="flex flex-row items-center justify-center">
                                    <p className="text-green-500 text-sm"><b> Registration Successfull </b></p>
                                </div>
                            </>
                        ) : ('')}
                        <div className="border-2 rounded-lg border-black p-6">
                            <h1 className="text-2xl font-bold mb-4">Sign up</h1>
                            <div className="mb-4">
                                <label className="block mb-2">Full Name:</label>
                                <div className="flex flex-row">
                                    <div className="flex flex-col">
                                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="border-2 border-black mr-2 px-2 py-1 rounded h-12" placeholder="First Name" />
                                        {requiredFields ? (
                                            <p className="text-red-600 text-sm font-bold animate-bounce">
                                                Empty fields!
                                            </p>
                                        ) : ('')}
                                    </div>

                                    <div className="flex flex-col">
                                        <input value={secondName} onChange={(e) => setSecondName(e.target.value)} type="text" className="border-2 border-black px-2 py-1 rounded h-12" placeholder="Second Name" />
                                        {requiredFields ? (
                                            <p className="text-red-600 text-sm font-bold animate-bounce">
                                                Empty fields!
                                            </p>
                                        ) : ('')}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Address:</label>
                                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="border-2 border-black px-2 py-1 w-full rounded h-12" placeholder="Address" />
                                {requiredFields ? (
                                    <p className="text-red-600 text-sm font-bold animate-bounce">
                                        Empty fields!
                                    </p>
                                ) : ('')}
                            </div>
                            <div className="mb-4 flex flex-row">
                                <div className="mr-2">
                                    <label className="block mb-2">City:</label>
                                    <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="City" />
                                    {requiredFields ? (
                                        <p className="text-red-600 text-sm font-bold animate-bounce">
                                            Empty fields!
                                        </p>
                                    ) : ('')}
                                </div>
                                <div>
                                    <label className="block mb-2">State/Province:</label>
                                    <input value={state} onChange={(e) => setState(e.target.value)} type="text" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Please Select" />
                                    {requiredFields ? (
                                        <p className="text-red-600 text-sm font-bold animate-bounce">
                                            Empty fields!
                                        </p>
                                    ) : ('')}
                                </div>
                            </div>
                            <div className="mb-4 flex flex-row">
                                <div className="mr-2">
                                    <label className="block mb-2">Phone Number:</label>
                                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Phone Number" />
                                    {requiredFields ? (
                                        <p className="text-red-600 text-sm font-bold animate-bounce">
                                            Empty fields!
                                        </p>
                                    ) : ('')}
                                    {userExists ? (
                                        <>
                                            <p className="text-red-500 text-sm font-bold">User Already exists</p>
                                        </>
                                    ) : ('')}
                                </div>
                                <div>
                                    <label className="block mb-2">Email:</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Email address" />
                                    {requiredFields ? (
                                        <p className="text-red-600 text-sm font-bold animate-bounce">
                                            Empty fields!
                                        </p>
                                    ) : ('')}
                                    {userExists ? (
                                        <>
                                            <p className="text-red-500 text-sm font-bold">User Already exists</p>
                                        </>
                                    ) : ('')}
                                </div>
                            </div>
                            <div className="mb-4 flex flex-row">
                                <div className="mr-2">
                                    <label className="block mb-2">Password:</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Password" />
                                    {requiredFields ? (
                                        <p className="text-red-600 text-sm font-bold animate-bounce">
                                            Empty fields!
                                        </p>
                                    ) : ('')}
                                </div>
                                <div>
                                    <label className="block mb-2">Confirm Password:</label>
                                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="border-2 rounded h-12 border-black px-2 py-1" placeholder="Confirm Password" />
                                    {requiredFields ? (
                                        <p className="text-red-600 text-sm font-bold animate-bounce">
                                            Empty fields!
                                        </p>
                                    ) : ('')}
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
                            <div className="flex justify-center flex-col">
                                <div>
                                    <label className="flex flex-row items-center m-2">
                                        <input type="checkbox" className="form-checkbox h-6 w-6 border border-gray-500 rounded-md" />
                                        <h2 className="ml-3">I agree to <Link href={'/account/privacypolicy'}> <span className="text-sm cursor-pointer font-bold">privacy policy and terms</span> </Link> </h2>
                                    </label>
                                </div>
                                <button onClick={(e) => registerUser(e)} className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                                    Sign Up
                                </button>
                                <div className="flex flex-row items-center justify-between mt-4 mb-4">
                                    <h1>Already have an account ?</h1>
                                    <Link href={'/account/login'}>
                                        <h2 className="text-sm text-black font-bold">Log In</h2>
                                    </Link>
                                </div>
                            </div>
                            <div>

                                <div class="flex justify-center items-center">
                                    <div class="border border-black h-full w-full"></div>
                                    <div class="flex flex-col items-center">
                                        <div className="m-4">
                                            <h1>Or</h1>
                                        </div>
                                    </div>

                                    <div class="border border-black h-full w-full"></div>
                                </div>
                                <div className="flex flex-row items-center justify-center">
                                    <Link href={''}><img src="/icons/google.png" width={30} /></Link>
                                    <Link href={''}><img src="/icons/facebook.png" width={30} /></Link>
                                    <Link href={''}><img src="/icons/twitter.png" width={30} /></Link>
                                    <Link href={''}><img src="/icons/github.png" width={30} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Account;
