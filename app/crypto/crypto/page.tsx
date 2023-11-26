import React from 'react'

import Immediate from '../../../components/immediate';

const page = () => {
  return (
    <>
      <div className=' w-full h-screen bg-heroCrypto-pattern bg-cover bg-no-repeat'>
        <div className=' container mx-auto w-full h-screen flex flex-col  justify-center items-center'>
            <h1 className='text-4xl md:text-6xl font-bold mx-5 text-center'>Banking for a new generation</h1>
            <div className=' container mx-auto flex flex-row items-center my-10'>
              <div className=' w-3 h-10 bg-green-700 md:mr-5 mx-5'></div>
              <h1 className=' font-semibold text-2xl'>Crypto Services</h1>
            </div>
        </div>
      </div>
      <div className=' w-full h-full '>
        <div className=' container mx-auto relative md:bottom-48 bottom-36 pt-5'>
          <div className=' flex md:flex-row flex-col justify-between gap-x-10 mx-5'>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#F0F0F0] hover:bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 text-[#343434]'>
                <h1 className=' font-bold text-xl text-center'>Non Custodial Wallet</h1>
                <p className=' text-center pt-6 text-lg'>We provide to our clients a non custodial wallet to protect their digital assets keeping clients safe from exchanges default, and  keeping their financial anonymity.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/crypto/crypto-1">SEE MORE</a>
              </button>
            </div>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#F0F0F0] hover:bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 text-[#343434]'>
                <h1 className=' font-bold text-xl text-center'>Trade-off Platform With Shared order book </h1>
                <p className=' text-center pt-6 text-lg'>Our company provides to our clients a crypto trade-off platform with shared order book to trade safely and to keep their transactions confidential and anonymous.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/crypto/crypto-2">SEE MORE</a>
              </button>
            </div>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#F0F0F0] hover:bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 text-[#343434]'>
                <h1 className=' font-bold text-xl text-center'>Purchase Crypto Using FIAT</h1>
                <p className=' text-center pt-6 text-lg'> Clients are allowed to purchase and sell cryptocurrencies using FIAT currencies.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/crypto/crypto-3">SEE MORE</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}

export default page