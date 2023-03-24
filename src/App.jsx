export default function App() {
   return (
      <div className='h-screen w-screen bg-lightGray lg:px-[28%] px-[5%] lg:py-[8%] py-[1%]  '>
         <div className='flex flex-col shadow-2xl rounded-xl overflow-hidden'>
            <div className='bg-white lg:p-10 p-5 basis-1/2'>
               <h1 className='font-bold font-karla text-cyan lg:text-2xl text-xl lg:pb-5 pb-3'>
                  Join our community
               </h1>
               <h1 className='font-karla font-bold text-brightYellow lg:text-xl text-lg lg:pb-3 pb-2'>
                  30-day, hassle-free money back guarantee
               </h1>
               <p className='font-normal font-karla lg:text-[16px] text-[12px] text-grayishBlue'>
                  Gain access to our full library of tutorials along with expert code reviews.
                  Perfect for any developers who are serious about honing their skills.
               </p>
            </div>
            <div className='basis-1/2 flex lg:flex-row flex-col'>
               <div className='basis-1/2 flex flex-col justify-between bg-cyan lg:p-8 p-6'>
                  <h1 className='font-karla font-bold text-white lg:text-xl text-lg'>
                     Monthly Subscription
                  </h1>
                  <div>
                     <h1 className='font-karla font-normal text-gray-300 lg:text-lg text-sm pb-1'>
                        <span className='lg:text-3xl text-xl text-white font-bold'> $29</span> per
                        month
                     </h1>
                     <h1 className='font-karla font-normal text-white lg:text-[16px] text-[12px] pb-1 '>
                        Full acess for less than $1 a day
                     </h1>
                  </div>
                  <div className='bg-brightYellow w-full py-2 rounded-lg cursor-pointer'>
                     <h1 className='text-center text-white lg:text-xl text-lg font-karla font-bold'>
                        Sign up
                     </h1>
                  </div>
               </div>
               <div className='basis-1/2 bg-lightCyan  lg:p-8 p-6'>
                  <h1 className='font-karla font-bold text-white lg:text-xl text-lg  lg:pb-4 pb-2'>
                     Why us
                  </h1>
                  <ul className='font-karla font-normal text-gray-300 lg:text-[16px] text-[12px] leading-5'>
                     <li>Tutorial by industry expert</li>
                     <li>Peer and expert code review</li>
                     <li>Coding exercise</li>
                     <li>Acess to our Github rep</li>
                     <li>Community form</li>
                     <li>Flashcard decks</li>
                     <li>New video every week</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
