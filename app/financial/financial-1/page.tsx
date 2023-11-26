import React from 'react'

import Immediate from '../../../components/immediate';



export const Data =
[
  {
    desc: 'Fast-track your formation process'
  },
  {
    desc: 'Be in control of all compliance related matters'
  },
  {
    desc: 'Stay on top of any law changes'
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
              <div className=' max-w-[390px] h-[360px] bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10'>
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
          <h1 className=' text-[#505050] font-semibold text-4xl italic mx-5 text-center'>Incorporation Of Offhore Companies</h1>
          <p className=' text-[#505050] text-center mx-5'>The strongest privacy laws and offshore banking jurisdictions allow for financial privacy as well as asset protection from divorce, creditors, judgments and lawsuits.</p>
        </div>
      </div>
      <div className=' w-full h-full text-[#505050]'>
        <div className=' container mx-auto flex md:flex-row flex-col justify-center items-center py-20 gap-5'>
          <div className='md:w-1/2 w-full flex justify-center'>
            <img src="/pic-8.png" alt="" />
          </div>
          <div className='md:w-1/2 w-full flex flex-col gap-y-10 mx-5 px-5'>
              <div className=' w-full p-5 flex shadow-shadow-inner-2'>
                <p className=' text-lg'>To establish an offshore company and/or relocate your corporate structure to an overseas jurisdiction can be an essential step in protecting your assets from lawsuits, In addition, you may be able to take advantage of international tax breaks and grow your investments overseas and your earnings.</p>
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