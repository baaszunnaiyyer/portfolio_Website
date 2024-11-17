import React from 'react'

const ContactMe = () => {
  return (
    <div class="h-screen flex flex-col justify-center">
  
  
      <div class="h-1/2 w-screen pt-32 pl-16 font-bold text-4xl">
       Keen to Collaborate?
      </div>

      <div class="h-1/2 w-screen flex flex-col ">
        <div className='font-bold pl-16 text-2xl'>
          Just Say
        </div>
        <div className='flex flex-row text-6xl pl-16 font-semibold'>
          <div>
            hello@
          </div>
          <div className='text-gray-300'>
            YourMail@outlook.com
          </div>
        </div>
      </div>



    {/* <div className='pt-16 font-bold text-4xl block'>Keen to Collaborate?</div>

    <div className='h-fit bg-black text-center items-left flex flex-col'>

      <div className='flex flex-row items-start'>
        <div className='text-2xl font-bold'>Just Say</div>
     </div>
      <div className='flex text-left text-7xl font-semibold'>
        <div>hello@</div>
        <div className='text-neutral-400'>Kasrazunnaiyyer@outlook.com</div>
      </div>

    </div> */}
  </div>
  )
}

export default ContactMe