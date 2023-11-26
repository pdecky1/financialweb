import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <div className=' w-full h-full bg-[#E2E2E2] text-black py-10'>
        <div className='container mx-auto flex md:flex-row flex-col px-10 gap-y-10'>
            <div className='md:w-1/3'>
                <div className='flex flex-col gap-y-5'>
                    <div className='flex flex-row gap-x-3'>
                        <div className=' w-1/12 flex items-center'> 
                            <img src="/location-icon.png" alt="" className=''/>
                        </div>
                        <div className='w-5/6'>
                            <p>Registered Office of Incorporation, 16192 Coastal Highway Lewes, Delaware 19958-9776</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-3'>
                        <div className=' w-1/12 flex items-center'> 
                            <img src="/location-icon.png" alt="" className=''/>
                        </div>
                        <div className='w-5/6'>
                            <p>Business Location: 109 Bismarckia Way - George Town Cayman Islands</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-3'>
                        <div className=' w-1/12 flex items-center'> 
                            <img src="/location-icon.png" alt="" className=''/>
                        </div>
                        <div className='w-5/6'>
                            <p>Operational Headquarter: 12 Collyer Quay, Ocean Financial Centre, Singapore 049319</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/3'>
                <div className='flex justify-center items-center'>
                    <h1 className='font-bold text-3xl'>Logo</h1>
                </div>
            </div>
            <div className='md:w-1/3'>
                <div className='flex flex-col items-center gap-y-5'>
                    <Link href=''>
                        <h1 className='font-semibold text-lg underline hover:text-[#142618]'>About us</h1>
                    </Link>
                    <Link href=''>
                        <h1 className='font-semibold text-lg underline hover:text-[#142618]'>Our mission</h1>
                    </Link>
                    <Link href=''>
                        <h1 className='font-semibold text-lg underline hover:text-[#142618]'>Our team</h1>
                    </Link>
                    <Link href=''>
                        <h1 className='font-semibold text-lg underline hover:text-[#142618]'>Privacy policy</h1>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer