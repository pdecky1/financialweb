import React from 'react'

import Immediate from '../../../components/immediate';
import Image from 'next/image'

export const Data =
[
  {
    desc: 'Sole control of privates keys '
  },
  {
    desc: 'Eliminates a third-party for the crypto custody  '
  },
  {
    desc: 'Protection from crypto exchanges default'
  },
  {
    desc: 'Protection of clients anonymity '
  },
  {
    desc: 'Full access of the crypto funds'
  },
]

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
              <div className=' max-w-[390px] h-[360px] bg-[#228C60] rounded-xl flex flex-col items-center py-10 px-10'>
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
      <div className=' w-full h-full bg-[#F6F6F6] '>
        <div className=' container mx-auto flex flex-col justify-center items-center py-10 gap-y-4 '>
          <h1 className=' text-[#505050] font-semibold text-4xl italic mx-5 text-center'>Non Custodial Wallet</h1>
          <p className=' text-[#505050] text-center mx-5'>With a non custodial wallet we give to our clients the full control of their crypto funds and crypto owners are fully responsible for managing their own funds. The user has full control of their crypto holdings, manages their own private key, and handles transactions themselves.</p>
        </div>
      </div>
      <div className=' w-full h-full text-[#505050]'>
        <div className=' container mx-auto flex md:flex-row flex-col justify-center items-center py-20 gap-5'>
          <div className='md:w-1/2 w-full flex justify-center'>
            <Image src="/pic-5.png" alt="" />
          </div>
          <div className='md:w-1/2 w-full flex flex-col gap-y-5 mx-5 px-5'>
            {Data.map (( isi ) => {
              return <div className=' flex flex-row items-center'>
              <div className=' w-5 h-5 flex items-center'>
                <Image src="/checkbox-icon.png" alt=""  className=' max-h-fit max-w-fit' />
              </div>
              <p className=' pl-4 font-medium text-lg '>{isi.desc}</p>
            </div>
            })}
          </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}

export default page