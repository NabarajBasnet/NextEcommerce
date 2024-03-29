'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import store from "../redux/store";
import { useSelector } from "react-redux";

const Navbar = () => {
    // states
    const [toggle, setToggle] = useState(false);

    const cartItems = useSelector(state => state.cartItems);
    const [cartItemsLength, setCartItemsLength] = useState(0)
    useEffect(() => {
        setCartItemsLength(cartItems.reduce((acc, item) => acc + item.quantity, 0))
    }, [cartItems])
    useEffect(() => {

    }, [cartItemsLength])
    // redux
    // const cartItemsLength = useSelector(state => state.cartItems.length)
    // redux 
    // const totalProductsInCart = useSelector(state => state.totalItems)    
    return (
        <>
            <nav className="fixed w-full  z-50"> {/* Added "fixed" class and z-50 for stacking order */}
                <div className='flex justify-between h-20 items-center bg-slate-100 p-1'>
                    <div className='flex flex-row items-center ml-5'>
                        <div className='font-bold '>
                            <Link href={'/all'}>ACME</Link>
                        </div>
                        {toggle ? (
                            <div className='md:block lg:block sm:block '>
                                <ul className='lg:flex flex-row items-start  '>
                                    <li className='m-2'><Link href={'/all'}>All</Link></li>
                                    <li className='m-2'><Link href={'/categories'}>Categories</Link></li>
                                    {/* <li className='m-2'><Link href={'/categories/electronics'}>Electronics</Link></li> */}
                                    {/* <li className='m-2'><Link href={'/categories/fashion'}>Fashion</Link></li> */}
                                    <li className='m-2'><Link href={'/admin'}>Admin</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <div className='md:hidden lg:block sm:hidden '>
                                <ul className='flex flex-row items-center '>
                                    <li className='m-2'><Link href={'/all'}>All</Link></li>
                                    <li className='m-2'><Link href={'/categories'}>Categories</Link></li>
                                    {/* <li className='m-2'><Link href={'/categories/electronics'}>Electronics</Link></li> */}
                                    {/* <li className='m-2'><Link href={'/categories/fashion'}>Fashion</Link></li> */}
                                    <li className='m-2'><Link href={'/admin'}>Admin</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center mr-5'>
                        <div className='md:hidden sm:hidden lg:block'>
                            <div className='flex items-center border-2 border-gray-400 lg:w-96  md:w-64 border-solid rounded-xl p-1 '>
                                <input className='outline-0 h-9 bg-transparent lg:w-80 md:w-44' type="text" placeholder="Search products..." />
                                <img className='cursor-pointer ml-10' src="/icons/searchicon.png" width={25} />
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img className='m-4 cursor-pointer' src="/icons/usericon.png" width={25} />
                            <Link href={'/cart'} className="flex flex-row cursor-pointer">
                                <img className='cursor-pointer' src="/icons/shoppingbag.png" width={25} />
                                <p>{cartItemsLength}</p>
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
