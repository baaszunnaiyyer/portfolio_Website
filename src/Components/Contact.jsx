import React from 'react'

const ContactMe = () => {
  return (
    <div class="h-screen w-screen flex flex-col justify-center sm:pl-16 pl-8 overflow-hidden">
  
  
      <div class="h-1/2 w-screen pt-16 sm:pt-32  font-bold sm:text-4xl">
       Keen to Collaborate?
      </div>

      <div class="h-1/2 w-screen flex flex-col overflow-hidden">
        <div className='font-bold py-8 sm:text-2xl text-2xl'>
          Just Say
        </div>
        <div className='flex sm:flex-row sm:text-6xl text-l font-semibold'>
          <div>
            hello@
          </div>
          <div className='truncate text-gray-300 hover:text-gray-600 duration-300'>
            KasraZunnaiyyer@outlook.com
          </div>
        </div>
      </div>

  </div>
  )
}

export default ContactMe