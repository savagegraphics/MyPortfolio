import React from 'react'

type Props = {}

const SingleCard = (props: Props) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-2xl lg:max-w-5xl mx-auto">

    <div className="mt-2 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">

         <div className='flex whitespace-nowrap'><h1 className='text-xl pr-4'>Website:</h1> <p className='text-lg'> www.taufiq.ng</p></div>    
         <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4">Phone: </h1> <p className='text-lg'>+2349048102856</p></div>
         <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4">Location:</h1> <p className='text-lg'> Kaduna, Nigeria</p></div>
       </div>
     <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">

        <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4"> Age: </h1><p className='text-lg'>  25</p></div>  
        <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4">Education: </h1> <p className='text-lg'>UnderGrad ND Holder</p></div>   
        <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4">Work Status:</h1>  <p className='text-lg'> Open to work</p></div> 
      </div>

    </div>
  </div>
  </div>
  )
}

export default SingleCard



