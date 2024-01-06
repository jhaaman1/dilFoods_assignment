import React from 'react'

const Card = () => {
  return (
    <div className='w-3/4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100     dark:border-gray-700 dark:hover:bg-gray-700' 
    // style={{border: '2px solid red'}}
    >
        <div>
            <img src='https://images.meesho.com/images/products/113427752/egnaa_400.webp' alt='' className='h-3/4 w-3/4 relative items-center ms-10'  />
        </div>
        <div className='text-center text-slate-700	text-xl'>
            <p>Gorgeous Men Caps</p>
        </div>
        <div className='flex gap-4 items-center pl-5 pt-2'>
            <p className='text-xl font-medium'>Rs 400</p>
            <p className='line-through'>Rs 300</p>
            <p className='text-md font-medium decoration-green-700'>3% off</p>
        </div>
        <div className='pl-4 mt-3'>4*</div>
    </div>
  )
}

export default Card