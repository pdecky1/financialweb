import React from 'react'
import Image from 'next/image'

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
              <div className=' max-w-[390px] h-[360px]  bg-[#228C60] rounded-xl flex flex-col items-center py-10 px-10 '>
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
      <div className=' w-full h-full bg-[#F6F6F6] '>
        <div className=' container mx-auto flex flex-col justify-center items-center py-10 gap-y-4 '>
          <h1 className=' text-[#505050] font-semibold text-4xl italic mx-5 text-center'>Trade-off Platform With Shared Order book</h1>
          <p className=' text-[#505050] text-center mx-5'>From our online banking clients have access to our trade off platform with a shared order book combined with a single collection and payment gateway where clients will be able to trade with all users of the order book.</p>
        </div>
      </div>
      <div className=' w-full h-full text-[#505050]'>
        <div className=' container mx-auto flex md:flex-row flex-col justify-center items-center py-20 gap-5'>
          <div className='md:w-1/2 w-full flex justify-center'>
            <Image src="/pic-6.png" alt="" />
          </div>
          <div className='md:w-1/2 w-full flex flex-col gap-y-10 mx-5 px-5'>
              <div className=' w-full p-5 flex flex-col shadow-shadow-inner-2'>
                <h1 className=' font-bold text-xl'>Security and privacy protection</h1>
                <p className=' text-lg'>Our trade-off platform is distributed, decentralized and completely anonymous, is a safe place where cryptocurrencies buyers and sellers meet. The use of the trade-off platform doesn’t require any personal document. The platform has no transmission obligation to any tax office of any country and has no transparency obligation with any government.</p>
              </div>
              <div className=' w-full p-5 flex flex-col shadow-shadow-inner-2'>
                <h1 className=' font-bold text-xl'>How to to trade on a trade-off plaform </h1>
                <p className=' text-lg'>On a trade-off platform, the ‘’buy’’ and ‘’sell’’ orders are just limit orders. A buy limit order will be executed only at the limit price or a lower price; and a sell limit order will be executed only at the limit price or a higher one.The price is guaranteed, but the filling of the order is not. Limit orders will be executed only if the price meets the order qualifications.</p>
              </div>
          </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}

export default page