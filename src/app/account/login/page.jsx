'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


const Login = () => 
{
    const [users, setUsers] = useState([]);
    const [userEmail, setUserEmail] = useState('nabarajbasnet2@gmail.com')
    const [userPassword, setUserPassword] = useState('whatif')
    const [logedIn, setLogedIn] = useState(null)

    const [checkbox, setCheckBox] = useState(false)
    const [userEmailLogin, setUserEmailLogin] = useState()
    const [userPasswordLogin, setUserPasswordLogin] = useState()

    const router = useRouter()

    useEffect(()=>
    {
        const getUsersData = async()=>
        {
            const usersData = await fetch('http://localhost:3000/api/accounts')
            const finalUserData = await usersData.json();
            setUsers(finalUserData.result)
        }
        getUsersData()
    },[])


    

    // Handle Login
    const handleLogin = async()=>
    {
        for (let i=0; i<users.length; i++)
        {
            if(userEmail === userEmailLogin && userPassword === userPasswordLogin)
            {
                setTimeout(()=>
                {
                    setLogedIn(false)
                    router.push('/all/')
                },2000)
                setLogedIn(true)
            }
            else
            {
                setLogedIn(false)
            }
        }
    }

    

    return (
        <>
            <h1>Login here</h1>
            <div className="w-full flex items-center justify-center mb-8">
                <div className="w-1/3 border-2 rounded-lg border-black p-8">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <div className="mb-4">
                        <label className="block mb-2">Email: </label>
                        <input value={userEmailLogin} onChange={(e)=>setUserEmailLogin(e.target.value)} type="text" className="border-2 rounded h-12 border-black px-4 py-2 w-full" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password:</label>
                        <input value={userPasswordLogin} onChange={(e)=>setUserPasswordLogin(e.target.value)} type="password" className="border-2 rounded h-12 border-black px-4 py-2 w-full" placeholder="Password" />
                    </div>
                    <div>
                        {logedIn?(
                            <>
                            <h1>Login Successfull</h1>
                            </>
                        ):(
                            <>
                                <h1></h1>
                            </>
                        )}
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

                        <button onClick={handleLogin} className="w-full bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
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
