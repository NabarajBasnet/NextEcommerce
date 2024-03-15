'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import store from "../redux/store";
import { useSelector } from "react-redux";

const Navbar = () => 
{
    // states
    const [toggle, setToggle] = useState(false);


    // redux 
    const totalProductsInCart = useSelector(state => state.totalItems)    
    useEffect(()=>
    {

    },[totalProductsInCart])
    return (
        <>
            <nav className="fixed w-full z-50"> {/* Added "fixed" class and z-50 for stacking order */}
                <div className='flex justify-between items-center bg-slate-100 p-1'>
                    <div className='flex flex-row items-center ml-5'>
                        <div className='font-bold '>
                            <Link href={'/'}>ACME</Link>
                        </div>
                        {toggle ? (
                            <div className='md:block lg:block sm:block '>
                                <ul className='lg:flex flex-row items-start  '>
                                    <li className='m-2'><Link href={'/all'}>All</Link></li>
                                    <li className='m-2'><Link href={'/categories/apparel'}>Apparel</Link></li>
                                    <li className='m-2'><Link href={'/categories/accessories'}>Accessories</Link></li>
                                    <li className='m-2'><Link href={'/admin'}>Admin Dashboard</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <div className='md:hidden lg:block sm:hidden '>
                                <ul className='flex flex-row items-center '>
                                    <li className='m-2'><Link href={'/all'}>All</Link></li>
                                    <li className='m-2'><Link href={'/categories/apparel'}>Apparel</Link></li>
                                    <li className='m-2'><Link href={'/categories/accessories'}>Accessories</Link></li>
                                    <li className='m-2'><Link href={'/admin'}>Admin Dashboard</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center mr-5'>
                        <div className='md:hidden sm:hidden lg:block'>
                            <div className='flex items-center border-2 w-64 border-solid border-black rounded-lg p-1 '>
                                <input className='outline-0 bg-transparent' type="text" placeholder="Search here..." />
                                <img className='cursor-pointer' src="/icons/searchicon.png" width={25} />
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img className='m-4 cursor-pointer' src="/icons/usericon.png" width={25} />
                            <Link href={'/cart'} className="flex flex-row cursor-pointer">
                                <img className='cursor-pointer' src="/icons/shoppingbag.png" width={25}/>
                                <p>{totalProductsInCart}</p>
                            </Link>
                            {toggle ? (
                                <img className='md:block sm:block lg:hidden cursor-pointer m-4 ' onClick={() => setToggle(!toggle)} src="/icons/closewindow.png" width={25} />
                            ) : (
                                <img className='md:block sm:block lg:hidden cursor-pointer m-4 ' onClick={() => setToggle(!toggle)} src="/icons/burgermenu.png" width={25} />
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
