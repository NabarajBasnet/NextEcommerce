import Link from "next/link"



const Login = () => {
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
                        <button className="w-full bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button>
                        <div className="flex flex-row items-center justify-between mt-4">
                            <h2>Don't have an account?</h2>
                            <Link href={'/account/signup'}>
                            <h2 className="underline text-black font-bold">register here</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
