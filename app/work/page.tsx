import React from 'react'
import Image from 'next/image'
import Immediate from '../../components/immediate';



const page = () => {
  return (
    <>
      <div className=' w-full h-screen bg-heroWork-pattern bg-cover bg-no-repeat'>
        <div className=' container mx-auto w-full h-screen flex flex-col  justify-center items-center'>
            <h1 className='text-4xl md:text-6xl font-bold mx-5 text-center'>The best way to predict the future is to create it</h1>
            <div className=' container mx-auto flex flex-row items-center my-20 pt-32'>
              <div className=' w-3 h-10 bg-green-700 md:mr-5 mx-5'></div>
              <h1 className=' font-semibold text-2xl'>Work With Us</h1>
            </div>
        </div>
      </div>
      <div className=' w-full h-full bg-[#F6F6F6] '>
        <div className=' container mx-auto flex flex-col justify-center items-center py-10 gap-y-4 '>
          <h1 className=' text-[#505050] font-semibold text-4xl italic mx-5 text-center'>Become an Owner of Our Online Branch</h1>
          <p className=' text-[#505050] text-center mx-5'>Cayman financial service help enterpreneur to get inside the bank and crypto exchange fields by allowing them to open our online branch</p>
        </div>
      </div>
      <div className=' w-full h-full'>
        <div className=' container mx-auto flex flex-col justify-center items-center py-20 gap-y-8 '>
          <div className=' flex md:flex-row flex-col text-black items-center gap-y-5'>
              <div className='md:w-1/2 w-full px-5'>
                <p className='font-medium text-lg'>According to research by Insider Intelligence, 18% of the US population (48 million people) will start banking exclusively with digital banks by 2024. Data from Research and Markets shows that the global neo-banking CAGR will increase by 45% in 2025. <br/><br/>In the global neobanking market, enterprise applications account for over 52% of the global revenue, which is about 47.4 billion USD. This signifies a lot of promise for digital banking.</p>
              </div>
              <div className=' md:w-1/2 w-full flex justify-center'>
                  <Image src="/pic-11.png" alt="" />
              </div>
          </div>
          <div className='text-black px-5'>
            <p className='font-medium md:text-center text-left text-lg'>Building a digital bank requires proper planning, execution, and attention to the minutest details. But first, who want to open a neo bank need to develop a concept, obtain the required licences, and get funding. They also need to choose the technology stack and monetization models to make the app profitable, but with Cayman financial institue future bank owner avoid all this complicated and expensives steps.</p>
          </div>
        </div>
      </div>
      <div className=' w-full h-full bg-[#F6F6F6] '>
        <div className=' container mx-auto flex flex-col justify-center items-center py-10 gap-y-4 '>
          <h1 className=' text-[#505050] font-semibold text-4xl italic mx-5 text-center'>‘’As long as you’re going to be thinking anyway, think big’’</h1>
          <p className=' text-[#505050] text-center mx-5'>-Donald Trump-</p>
        </div>
      </div>
      <div className=' w-full h-full text-black'>
        <div className=' container mx-auto flex flex-col justify-center items-center py-20 gap-y-8 '>
          <div className='text-black px-5'>
            <p className='font-medium text-lg'>Cayman Financial Institute allows enterpreneur that want to get in the bank and crypto exchange filelds to open an online branch with a crypto exchange integrated.<br/>Our future affiliateS don’t have to worries about find funds, buy licences, develop and update softwers, support clients etc.. <br/><br/>Future bank owner  just have to  : </p>
          </div>
          <div className=' lg:w-2/3 w-full grid md:grid-rows-2 md:grid-cols-2 gap-5 px-5'>
            <div className=' flex flex-row p-5 items-center  border rounded-lg gap-x-8'>
              <Image src="/target-icon.png" alt="" />
              <h1 className=' font-medium text-lg'>Identify the target audience</h1>
            </div>
            <div className=' flex flex-row p-5 items-center  border rounded-lg gap-x-8'>
              <Image src="/namebank-icon.png" alt="" />
              <h1 className=' font-medium text-lg'>Choose the name of the bank</h1>
            </div>
            <div className=' flex flex-row p-5 items-center border rounded-lg gap-x-8'>
              <Image src="/exchange-icon.png" alt="" />
              <h1 className=' font-medium text-lg'>Enter the bank and crypto exchange price commission that want for their clients from where get the profit</h1>
            </div>
            <div className=' flex flex-row p-5 items-center border rounded-lg gap-x-8'>
              <Image src="/adver-icon.png" alt="" />
              <h1 className=' font-medium text-lg'>Take care about marketing and advertising</h1>
            </div>
          </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}

export default page