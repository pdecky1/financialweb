import Image from 'next/image'


//import
import Immediate from '../../../components/immediate';

export default function Home() {
  return (
    <>
      <div className=' w-full h-screen bg-heroBank-pattern bg-cover bg-no-repeat'>
        <div className=' container mx-auto w-full h-screen flex flex-col  justify-center items-center'>
            <h1 className='text-4xl md:text-6xl font-bold mx-5 text-center'>The Banking That Breaks Down Barriers.</h1>
            <div className=' container mx-auto flex flex-row items-center my-10'>
              <div className=' w-3 h-10 bg-green-700 md:mr-5 mx-5'></div>
              <h1 className=' font-semibold text-2xl'>Banking Services</h1>
            </div>
        </div>
      </div>
      <div className=' w-full h-full '>
        <div className=' container mx-auto relative md:bottom-48 bottom-36 pt-5'>
          <div className=' flex md:flex-row flex-col justify-between gap-x-10 mx-5'>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10'>
                <h1 className=' font-bold text-xl text-center'>Encrypted Bank Account To Bearer</h1>
                <p className=' text-center pt-6 text-lg'>Encrypted bank account are designed for those who are looking for security and confidenciality in the financial sector.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/bank/bank-1">SEE MORE</a>
              </button>
            </div>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#F0F0F0] hover:bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 text-[#343434] '>
                <h1 className=' font-bold text-xl text-center'>Visa<br/>Debit Cards</h1>
                <p className=' text-center pt-6 text-lg'>Our Visa debit card allows clients to pay, simply and securely, in person or online.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/bank/bank-2">SEE MORE</a>
              </button>
            </div>
            <div className=' flex flex-col items-center'>
              <div className=' max-w-[390px] h-[360px] bg-[#F0F0F0] hover:bg-[#06633C] rounded-xl flex flex-col items-center py-10 px-10 text-[#343434]'>
                <h1 className=' font-bold text-xl text-center'>FIAT<br/>Currencies Exchange</h1>
                <p className=' text-center pt-6 text-lg'>Convert currencies  at the real exchange rate without any fee directly from you online banking.</p>
              </div>
              <button className='w-[170px] h-[70px] bg-[#012912] rounded-xl text-lg font-medium relative bottom-10'>
                <a href="/bank/bank-3">SEE MORE</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full h-full bg-[#F6F6F6] '>
        <div className=' container mx-auto flex flex-col justify-center items-center py-10 gap-y-4 '>
          <h1 className=' text-[#505050] font-semibold text-4xl italic mx-5 text-center'>Encrypted Bank account</h1>
          <p className=' text-[#505050] text-center mx-5'>Cayman remain one of few country in where still possible open an encrypted bank account to bearer, it mean that our company is able to provide to his clients anonymous multi currencies bank account, as we are  exempt from the KYC procedure.</p>
        </div>
      </div>
      <div className=' w-full h-full text-[#505050]'>
        <div className=' container mx-auto flex md:flex-row flex-col justify-center items-center py-20 gap-5'>
          <div className='md:w-1/2 w-full flex justify-center'>
            <img src="/pic-1.png" alt="" />
          </div>
          <div className='md:w-1/2 w-full flex flex-col gap-y-10 mx-5 px-5'>
              <div className=' w-full p-5 flex flex-col shadow-shadow-inner-2'>
                <h1 className=' font-bold text-xl'>Short code provided to protect your anonimity</h1>
                <p className=' text-lg'>The short code  is the equivalent of an European IBAN or a account number. The ownership of the short code and the ownership of the asset are identify thanks to the email and password entered at account opening request.</p>
              </div>
              <div className=' w-full p-5 flex flex-col shadow-shadow-inner-2'>
                <h1 className=' font-bold text-xl'>Short code provided to protect your anonimity</h1>
                <p className=' text-lg'>The short code  is the equivalent of an European IBAN or a account number. The ownership of the short code and the ownership of the asset are identify thanks to the email and password entered at account opening request.</p>
              </div>
              <div className=' w-full p-5 flex flex-col shadow-shadow-inner-2'>
                <h1 className=' font-bold text-xl'>Short code provided to protect your anonimity</h1>
                <p className=' text-lg'>The short code  is the equivalent of an European IBAN or a account number. The ownership of the short code and the ownership of the asset are identify thanks to the email and password entered at account opening request.</p>
              </div>
          </div>
        </div>
      </div>
      <Immediate/>
    </>
  )
}
