import Image from 'next/image'


//import
import Immediate from '../../components/immediate';

export default function Home() {
  return (
    <>
      <div className=' w-full h-full bg-cover bg-no-repeat my-32'>
        <div className=' flex flex-col container mx-auto justify-center items-center text-black'>
           <div className=' flex justify-center items-center my-10'>
              <h1 className=' font-bold text-5xl'>Price List</h1>
           </div>
           <div className=' w-full flex md:flex-row flex-col gap-x-5 gap-y-10 px-5'>
              <div className=' md:w-1/2 w-full border rounded-lg p-8 flex flex-col gap-y-5'>
                <div className=' flex flex-col'>
                  <h1 className=' font-bold text-xl'>Title</h1>
                  <div className=' flex flex-row justify-between'>
                    <h1 className=' text-lg'>For individuals that need advanced recording & editing.</h1>
                    <h1 className=' font-bold text-2xl'>$150</h1>
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <h1 className=' font-bold text-xl'>Title</h1>
                  <div className=' flex flex-row justify-between'>
                    <h1 className=' text-lg'>For individuals that need advanced recording & editing.</h1>
                    <h1 className=' font-bold text-2xl'>$150</h1>
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <h1 className=' font-bold text-xl'>Title</h1>
                  <div className=' flex flex-row justify-between'>
                    <h1 className=' text-lg'>For individuals that need advanced recording & editing.</h1>
                    <h1 className=' font-bold text-2xl'>$150</h1>
                  </div>
                </div>
                <div className=' flex self-end'>
                  <h1 className=' font-bold text-3xl text-[#1F562B]'>$450</h1>
                </div>
                <div className=' flex self-end'>
                  <button className=' w-full px-5 py-2 bg-[#1F562B] text-white rounded-md'>
                    <a href="">Contact us</a>
                  </button>
                </div>
              </div>
              <div className=' md:w-1/2 w-full border rounded-lg p-8 flex flex-col gap-y-5'>
                <div className=' flex flex-col'>
                  <h1 className=' font-bold text-xl'>Title</h1>
                  <div className=' flex flex-row justify-between'>
                    <h1 className=' text-lg'>For individuals that need advanced recording & editing.</h1>
                    <h1 className=' font-bold text-2xl'>$150</h1>
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <h1 className=' font-bold text-xl'>Title</h1>
                  <div className=' flex flex-row justify-between'>
                    <h1 className=' text-lg'>For individuals that need advanced recording & editing.</h1>
                    <h1 className=' font-bold text-2xl'>$150</h1>
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <h1 className=' font-bold text-xl'>Title</h1>
                  <div className=' flex flex-row justify-between'>
                    <h1 className=' text-lg'>For individuals that need advanced recording & editing.</h1>
                    <h1 className=' font-bold text-2xl'>$150</h1>
                  </div>
                </div>
                <div className=' flex self-end'>
                  <h1 className=' font-bold text-3xl text-[#1F562B]'>$450</h1>
                </div>
                <div className=' flex self-end'>
                  <button className=' w-full px-5 py-2 bg-[#1F562B] text-white rounded-md'>
                    <a href="">Contact us</a>
                  </button>
                </div>
              </div>
           </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}
