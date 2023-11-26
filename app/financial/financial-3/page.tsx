import React from 'react'

import Immediate from '../../../components/immediate';



export const Data =
[
  {
    desc: 'Protection of personal and business financial data'
  },
  {
    desc: 'Legal protection '
  },
  {
    desc: 'Procedure 100% legal'
  },
  {
    desc: 'Fast & 100% safe'
  },
  {
    desc: 'Total absence of international transfers'
  },
]

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
              <div className=' max-w-[390px] h-[360px] bg-[#F0F0F0] hover:bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 text-[#343434]'>
                <h1 className=' font-bold text-xl text-center'>Incorporation of Offshore Companies</h1>
                <p className=' text-center pt-6 text-lg'>Remote business openings in non-blacklisted countries that have regulation and tax relief.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/crypto/crypto-1">SEE MORE</a>
              </button>
            </div>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#F0F0F0] hover:bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 text-[#343434]'>
                <h1 className=' font-bold text-xl text-center'>Financial Legal Solution</h1>
                <p className=' text-center pt-6 text-lg'>Our financial consultants and advisors will conduct an audit of your current financial situation and strategize a plan to help you reach your future goals.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/crypto/crypto-2">SEE MORE</a>
              </button>
            </div>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#06633C]  rounded-xl flex flex-col items-center py-10 px-10 '>
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
          <h1 className=' text-[#505050] font-semibold text-4xl italic mx-5 text-center'>Funds Relocation Service</h1>
          <p className=' text-[#505050] text-center mx-5'>Cayman Financial Institute is able to relocate funds thanks to the laws and regulations in force at Cayman island for businesses and offshore banks.</p>
        </div>
      </div>
      <div className=' w-full h-full text-[#505050]'>
        <div className=' container mx-auto flex md:flex-row flex-col justify-center items-center py-20 gap-5'>
          <div className='md:w-1/2 w-full flex justify-center'>
            <img src="/pic-10.png" alt="" />
          </div>
          <div className='md:w-1/2 w-full flex flex-col gap-y-10 mx-5 px-5'>
              <div className=' w-full p-5 flex shadow-shadow-inner-2'>
                <p className=' text-lg'>Thanks to the international agreements stipulated between Cayman Financial Institute and multiple banking institutions, we are able to relocate funds and capitals from one country to another without making international transfers but simply by communicating to our banking institution partner, of the country of the destination of the funds, to issue a credit and to send the amount to the bank account requested by the client and only then will a internal compensation be made between banks via MT103 202 protocol. <br/>This procedure allow to protect the financial anonymity of our clients.</p>
              </div>
              <div className=' w-full flex flex-col gap-y-5 '>
                {Data.map (( isi ) => {
                return <div className=' flex flex-row items-center '>
                <div className=' w-5 h-5 flex items-center'>
                  <img src="/checkbox-icon.png" alt=""  className=' max-h-fit max-w-fit' />
                </div>
                  <p className=' pl-4 font-medium text-lg '>{isi.desc}</p>
                </div>
              })}
              </div>
          </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}

export default page