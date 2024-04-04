'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/action";

const Navbar = () => {
    // states
    const [toggle, setToggle] = useState(false);
    const [searchedWord, setSearchedWord] = useState('')
    const cartItems = useSelector(state => state.cartItems);
    const [cartItemsLength, setCartItemsLength] = useState(0)
    useEffect(() => {
        setCartItemsLength(cartItems.reduce((acc, item) => acc + item.quantity, 0))
    }, [cartItems])
    useEffect(() => {

    }, [cartItemsLength])

    const dispatch = useDispatch();

    // Pass search query when key pressed
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(setSearchQuery(searchedWord))
        }
    }
    const
        // Pass search query when icon clicked 
        clickAndSetSearched = () => {
            dispatch(setSearchQuery(searchedWord));
        }
    // Pass search query in change of every letter 
    useEffect(() => {
        dispatch(setSearchQuery(searchedWord))
    }, [searchedWord])

    return (
        <>
            <nav className="fixed w-full  z-50"> {/* Added "fixed" class and z-50 for stacking order */}
                <div className='flex justify-between h-20 items-center bg-slate-100 p-1'>
                    <div className='flex flex-row items-center ml-5'>
                        <div className='font-bold hover:scale-110 transition-all'>
                            <Link href={'/all'}>ACME</Link>
                        </div>
                        {toggle ? (
                            <div className='md:block lg:block sm:block '>
                                <ul className='lg:flex flex-row items-start  '>
                                    <li className='m-2 hover:scale-105 transition-all'><Link href={'/all'}>All Products</Link></li>
                                    <li className='m-2 hover:scale-105 transition-all'><Link href={'/admin'}>Admin</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <div className='md:hidden lg:block sm:hidden '>
                                <ul className='flex flex-row items-center '>
                                    <li className='m-2 hover:scale-105 transition-all'><Link href={'/all'}>All Products</Link></li>
                                    <li className='m-2 hover:scale-105 transition-all'><Link href={'/admin'}>Admin</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center mr-5'>
                        <div className='md:hidden sm:hidden lg:block'>
                            <div className='flex items-center border-2 border-gray-400 lg:w-96  md:w-64 border-solid rounded p-1 bg-white'>
                                <input onKeyPress={(e) => handleKeyPress(e)} className='outline-0 h-9 bg-transparent lg:w-80 md:w-44' type="text" placeholder="Search products..." value={searchedWord} onChange={(e) => setSearchedWord(e.target.value)} />
                                <img onClick={clickAndSetSearched} className='cursor-pointer ml-10 hover:scale-105 transition-all' src="/icons/searchicon.png" width={25} />
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Link href={'/account/login/'}>
                                <img className='m-4 cursor-pointer hover:scale-105 transition-all' src="/icons/usericon.png" width={25} />
                            </Link>
                            <Link href={'/cart'} className="flex flex-row cursor-pointer">
                                <img className='cursor-pointer hover:scale-105 transition-all' src="/icons/shoppingbag.png" width={25} />
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
