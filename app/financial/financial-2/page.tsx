import React from 'react'

import Immediate from '../../../components/immediate';
import Image from 'next/image'



const page = () => {
  return (
    <>
      <div className=' w-full h-screen bg-heroFinance-pattern bg-cover bg-no-repeat'>
        <div className=' container mx-auto w-full h-screen flex flex-col  justify-center items-center'>
            <h1 className='text-4xl md:text-6xl font-bold mx-5 text-center'>Your guide to the financial freedom</h1>
            <div className=' container mx-auto flex flex-row items-center my-10'>
              <div className=' w-3 h-10 bg-green-700 md:mr-5 mx-5'></div>
              <h1 className=' font-semibold text-2xl'>Financial Services</h1>
            </div>
        </div>
      </div>
      <div className=' w-full h-full '>
        <div className=' container mx-auto relative md:bottom-48 bottom-36 pt-5'>
          <div className=' flex md:flex-row flex-col justify-between gap-x-10 mx-5'>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px]  bg-[#F0F0F0] hover:bg-[#06633C]  rounded-xl flex flex-col items-center py-10 px-10 text-[#343434]'>
                <h1 className=' font-bold text-xl text-center'>Incorporation of Offshore Companies</h1>
                <p className=' text-center pt-6 text-lg'>Remote business openings in non-blacklisted countries that have regulation and tax relief.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/crypto/crypto-1">SEE MORE</a>
              </button>
            </div>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 '>
                <h1 className=' font-bold text-xl text-center'>Financial Legal Solution</h1>
                <p className=' text-center pt-6 text-lg'>Our financial consultants and advisors will conduct an audit of your current financial situation and strategize a plan to help you reach your future goals.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/crypto/crypto-2">SEE MORE</a>
              </button>
            </div>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#F0F0F0] hover:bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 text-[#343434]'>
                <h1 className=' font-bold text-xl text-center'>Funds Relocation Service</h1>
                <p className=' text-center pt-6 text-lg'>With high protection our financial team make easy the funds relocation, avoiding international transfers.</p>
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
          <h1 className=' text-[#505050] font-semibold text-4xl italic mx-5 text-center'>Financial Legal Solutions</h1>
          <p className=' text-[#505050] text-center mx-5'>Our Finance Consulting professionals have finance, accounting and legal knowledge, plus a knowledge of enabling technologies to help you capitalize on opportunities that will help grow, improve and protect your business now and in the future. </p>
        </div>
      </div>
      <div className=' w-full h-full text-[#505050]'>
        <div className=' container mx-auto flex md:flex-row flex-col justify-center items-center py-20 gap-5'>
          <div className='md:w-1/2 w-full flex justify-center'>
            <img src="/pic-9.png" alt="" />
          </div>
          <div className='md:w-1/2 w-full flex flex-col gap-y-16 mx-5 md:px-5 px-16'>
              <div className=' relative pt-5'>
                  <div className=' absolute -top-6 -left-10 bg-white rounded-full shadow-shadow-inner-2 w-fit p-2'>
                      <img src="/checkbox-icon-2.png" alt="" />
                  </div>
                  <div className=' w-full p-5 flex shadow-shadow-inner-2'>
                    <p className=' text-lg'>Our expert in law and economics, are highly qualified professionals: they knows how to deal with economic and legal matters and manage affairs in their complexity. Our lawyers have in-depth knowledge of the business world and possesses technical-legal knowledge in the field of corporate and commercial law.</p>
                  </div>
              </div>
              <div className=' relative'>
                  <div className=' absolute -top-6 -left-10 bg-white rounded-full shadow-shadow-inner-2 w-fit p-2'>
                      <img src="/checkbox-icon-2.png" alt="" />
                  </div>
                  <div className=' w-full p-5 flex shadow-shadow-inner-2'>
                    <p className=' text-lg'>If your organization is looking to drive value, manage costs and mitigate risk our company can help you design and implement the effective means of operating a business tax function.</p>
                  </div>
              </div>
              <div className=' relative'>
                  <div className=' absolute -top-6 -left-10 bg-white rounded-full shadow-shadow-inner-2 w-fit p-2'>
                      <img src="/checkbox-icon-2.png" alt="" />
                  </div>
                  <div className=' w-full p-5 flex shadow-shadow-inner-2'>
                    <p className=' text-lg'>Our team can help you realize your ambitions by offering a radically different approach to connecting strategy, transactions, transformation and technology.</p>
                  </div>
              </div>
              
          </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}

export default page