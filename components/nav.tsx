"use client";
import React, { useState } from 'react'



const nav = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className='text-black '>
        <nav className='bg-white w-full h-20 fixed top-0 z-50'>
            <div className='container mx-auto  h-20  flex flex-row items-center justify-between'>
                <a href="/">
                    <div className=' mx-5 md:mx-0'>
                        <h1 className='font-bold text-3xl'>Logo</h1>
                    </div>
                </a>
                <div className=''>
                    <ul className='hidden md:flex flex-row justify-between items-center lg:gap-x-24 md:gap-x-5'>
                        <div className='relative inline-block text-left dropdown'>
                            <span className="rounded-md shadow-sm">
                                <button className="inline-flex justify-center w-full border-none text-sm font-medium leading-5 text-blacktransition duration-150 ease-in-outhover:text-gray-500 focus:outline-none" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                 <a href="/bank/bank"><span>Bank</span></a>
                                    <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
                                </button> 
                            </span>
                            <div className="opacity-0 dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                    <div className="py-1">
                                        <a href="/bank/bank-1" className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Encrypted Bank Account</a>
                                        <a href="/bank/bank-2"  className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Debit Cards</a>
                                        <a href="/bank/bank-3"  className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >FIAT Currencies Exchange</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative inline-block text-left dropdown'>
                            <span className="rounded-md shadow-sm">
                                <button className="inline-flex justify-center w-full border-none text-sm font-medium leading-5 text-blacktransition duration-150 ease-in-outhover:text-gray-500 focus:outline-none" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                <a href="/crypto/crypto"><span>Crypto</span></a>
                                    <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
                                </button> 
                            </span>
                            <div className="opacity-0 dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                    <div className="py-1">
                                        <a href="/crypto/crypto-1" className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Non Custodial Wallet</a>
                                        <a href="/crypto/crypto-2"  className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Trade-Off Platform</a>
                                        <a href="/crypto/crypto-3"  className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Buy & Sell Crypto Using FIAT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative inline-block text-left dropdown'>
                            <span className="rounded-md shadow-sm">
                                <button className="inline-flex justify-center w-full border-none text-sm font-medium leading-5 text-blacktransition duration-150 ease-in-outhover:text-gray-500 focus:outline-none" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                    <a href="/financial/financial"><span>Financial</span></a>
                                    <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
                                </button> 
                            </span>
                            <div className="opacity-0  dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                    <div className="py-1">
                                        <a href="/financial/financial-1" className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Incorporation of Offshore Companies</a>
                                        <a href="/financial/financial-2"  className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Financial Legal solutions</a>
                                        <a href="/financial/financial-3"  className="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Funds Relocation Service</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="/prices" className='text-sm font-medium'>Prices</a>
                        </div>
                        <div>
                            <a href="/work" className='text-sm font-medium'>Work with us</a>
                        </div>
                        <div>
                            <button className=' w-full px-5 py-2 bg-[#1F562B] text-white rounded-md'>
                                <a href="/">Online Banking</a>
                            </button>
                        </div>
                    </ul>
                    <button className='space-y-1 md:hidden z-50 mx-5' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="w-6 h-1 bg-black" ></div>
                        <div className="w-6 h-1 bg-black" ></div>
                        <div className="w-6 h-1 bg-black" ></div>
                    </button>
                    {isMenuOpen && (
                        <ul className='text-white font-medium text-xl absolute left-0 top-0 w-full p-10 rounded-b-2xl space-y-10 text-center bg-white shadow-md flex flex-col'>
                            <button className='space-y-1 md:hidden z-50' onClick={closeMenu}>
                                <div className="w-6 h-1 bg-black" ></div>
                                <div className="w-6 h-1 bg-black" ></div>
                                <div className="w-6 h-1 bg-black" ></div>
                            </button>
                            <div className="tab w-full text-black">
                                <div className=" relative ">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-10 top-0 left-6" type="checkbox" id="chck1"></input>
                                    <header className="flex justify-center items-center cursor-pointer select-none tab-label border-none text-sm font-medium leading-5" >
                                    <a href="/bank/bank"><span>Bank</span></a>
                                        <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
                                    </header>
                                    <div className="tab-content">
                                        <div className=" pb-5 ">
                                            <ul className=" flex flex-col items-center">
                                            <a href="/bank/bank-1" className="text-black font-semibold py-2 text-sm leading-5 "  role="menuitem" >Encrypted Bank Account</a>
                                            <a href="/bank/bank-2"  className="text-black font-semibold py-2 text-sm leading-5 "  role="menuitem" >Debit Cards</a>
                                            <a href="/bank/bank-3"  className="text-black font-semibold py-2 text-sm leading-5 " role="menuitem" >FIAT Currencies Exchange</a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab w-full text-black">
                                <div className=" relative ">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-10 top-0 left-6" type="checkbox" id="chck1"></input>
                                    <header className="flex justify-center items-center cursor-pointer select-none tab-label border-none text-sm font-medium leading-5" >
                                    <a href="/crypto/crypto"><span>Crypto</span></a>
                                        <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
                                    </header>
                                    <div className="tab-content">
                                        <div className=" pb-5 ">
                                            <ul className=" flex flex-col items-center">
                                                <a href="/crypto/crypto-1" className="text-black font-semibold py-2 text-sm leading-5 "  role="menuitem" >Non Custodial Wallet</a>
                                                <a href="/crypto/crypto-2"  className="text-black font-semibold py-2 text-sm leading-5 "  role="menuitem" >Trade-Off Platform</a>
                                                <a href="/crypto/crypto-3"  className="text-black font-semibold py-2 text-sm leading-5 " role="menuitem" >Buy & Sell Crypto Using FIAT</a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab w-full text-black">
                                <div className=" relative ">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-10 top-0 left-6" type="checkbox" id="chck1"></input>
                                    <header className="flex justify-center items-center cursor-pointer select-none tab-label border-none text-sm font-medium leading-5" >
                                    <a href="/financial/financial"><span>Financial</span></a>
                                        <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
                                    </header>
                                    <div className="tab-content">
                                        <div className=" pb-5 ">
                                            <ul className=" flex flex-col items-center">
                                                <a href="/financial/financial-1" className="text-black font-semibold py-2 text-sm leading-5 "  role="menuitem" >Incorporation of Offshore Companies</a>
                                                <a href="/financial/financial-2"  className="text-black font-semibold py-2 text-sm leading-5 "  role="menuitem" >Financial Legal solutions</a>
                                                <a href="/financial/financial-3"  className="text-black font-semibold py-2 text-sm leading-5 " role="menuitem" >Funds Relocation Service</a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href="" className='text-sm font-medium text-black'>Prices</a>
                            </div>
                            <div>
                                <a href="" className='text-sm font-medium text-black'>Work with us</a>
                            </div>
                            <div>
                                <button className=' w-full px-5 py-2 bg-[#1F562B] text-white rounded-md'>
                                    <a href="">Online Banking</a>
                                </button>
                            </div>
                        </ul>
                    )}
                </div>
            </div>  
        </nav>
    </div>
  )
}

export default nav

