import Image from 'next/image'


//import
import Immediate from '../components/immediate'

export default function Home() {
  return (
    <>
      <div className=' w-full h-full bg-hero-pattern bg-cover bg-no-repeat'>
        <div className=' container mx-auto w-full h-[700px] flex  justify-center items-center'>
            <div className=' container mx-auto flex flex-row items-center my-10 pt-56'>
              <div className=' w-3 h-10 bg-green-700 md:mr-5 mx-5'></div>
              <h1 className=' font-semibold text-4xl'>Trust Always Matters</h1>
            </div>
        </div>
      </div>
      <div className=' w-full h-full '>
        <div className=' container mx-auto flex items-center justify-center py-32'>
          <h1 className=' text-black md:text-6xl text-4xl font-bold text-center italic mx-5'>“ We provide financial solutions in an international scenario, we are the financial advisors that you can trust ’’</h1>
        </div>
      </div>
      <div className=' w-full h-full bg-[#EEEEEE]'>
        <div className=' container flex flex-col mx-auto items-center py-20'>
          <h1 className=' text-black font-medium text-xl text-center'>We offer trustworthy solutions for the protection of your wealth</h1>
          <div className=' pt-10 w-full flex md:flex-row flex-col items-center justify-between'>

            <div className=' flex flex-col items-center'>
              <div className='relative top-10 border-4 border-[#4F4F4F] w-[92px] h-[92px] bg-white rounded-full flex justify-center items-center'>
                <Image src="/bank-icon.png" alt="" />
              </div>
              <div className='max-w-[390px] h-[270px] bg-[#06633C] rounded-xl flex justify-center items-center py-10 px-20'>
                  <h1 className=' text-black text-3xl font-bold text-center'>Banking <br/><span className=' font-semibold'>Services</span></h1>
              </div>
              <a href="/bank/bank">
                <div className=' flex flex-row items-center gap-x-5 pt-5'>
                  <div className=' w-5 h-5 flex items-center'>
                    <Image src="/next-icon.png" alt=""  className=' max-h-fit max-w-fit' />
                  </div>
                  <h1 className=' text-[#1F572B] text-xl font-semibold'>See more</h1>
                </div>
              </a>
            </div>

            <div className=' flex flex-col items-center'>
              <div className='relative top-10 border-4 border-[#4F4F4F] w-[92px] h-[92px] bg-white rounded-full flex justify-center items-center'>
                <Image src="/crypto-icon.png" alt="" />
              </div>
              <div className='max-w-[390px] h-[270px] bg-[#69C25B] rounded-xl flex justify-center items-center py-10 px-20'>
                  <h1 className=' text-black text-3xl font-bold text-center'>Crypto<br/><span className=' font-semibold'>Services</span></h1>
              </div>
              <a href="/crypto/crypto">
                <div className=' flex flex-row items-center gap-x-5 pt-5'>
                  <div className=' w-5 h-5 flex items-center'>
                    <Image src="/next-icon.png" alt=""  className=' max-h-fit max-w-fit' />
                  </div>
                  <h1 className=' text-[#1F572B] text-xl font-semibold'>See more</h1>
                </div>
              </a>
            </div>

            <div className=' flex flex-col items-center'>
              <div className='relative top-10 border-4 border-[#4F4F4F] w-[92px] h-[92px] bg-white rounded-full flex justify-center items-center'>
                <Image src="/financial-icon.png" alt="" />
              </div>
              <div className='max-w-[390px] h-[270px] bg-[#9AE094] rounded-xl flex justify-center items-center py-10 px-20'>
                  <h1 className=' text-black text-3xl font-bold text-center'>Financial<br/><span className=' font-semibold'>Services</span></h1>
              </div>
              <a href="/financial/financial">
                <div className=' flex flex-row items-center gap-x-5 pt-5'>
                  <div className=' w-5 h-5 flex items-center'>
                    <Image src="/next-icon.png" alt=""  className=' max-h-fit max-w-fit' />
                  </div>
                  <h1 className=' text-[#1F572B] text-xl font-semibold'>See more</h1>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className=' w-full h-full text-[#505050]'>
        <div className=' container mx-auto flex md:flex-row flex-col justify-center items-center py-32 gap-5'>
          <div className='md:w-1/2 w-full flex flex-col gap-y-10 mx-5 px-5'>
            <div className=' flex flex-col gap-y-5'>
              <h1 className=' font-bold text-5xl text-black'>Debit card on VISA circuit</h1>
              <h1 className=' font-semibold text-3xl text-black'>manage confidentially your purchases </h1>
            </div>
              <div className=' w-full py-5 pl-5 md:pr-20 pr-5 flex shadow-shadow-inner-2'>
                <p className=' text-lg'>Cayman Financial Institute provides debit cards, VIRTUAL AND PHYSICAL, to the clients in order to protect the privacy of their worldwide purchases.</p>
              </div>
              <a href="">
                <div className=' flex flex-row items-center gap-x-5 pt-5'>
                  <div className=' w-5 h-5 flex items-center'>
                    <Image src="/next-icon.png" alt=""  className=' max-h-fit max-w-fit' />
                  </div>
                  <h1 className=' text-[#1F572B] text-xl font-semibold'>See more</h1>
                </div>
              </a>
          </div>
          <div className='md:w-1/2 w-full flex justify-center'>
            <Image src="/pic.png" alt="" />
          </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}
