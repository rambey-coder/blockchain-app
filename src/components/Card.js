import React from 'react'

const Card = ({ name, image, symbol, price, priceChange }) => {
  return (
    <div className='md:w-[30%] shadow-lg bg-white shadow-indigo-500/40 px-4 py-4 rounded w-[100%]'>
        <div>
            <div className='flex items-center justify-between'>
                <img src={image} alt="crypto" className='w-9'/>
                <div className='flex items-center justify-between'>
                    <button className='bg-buycolor text-buytext font-medium text-sm py-1 px-2 mr-1 rounded-sm'>Buy</button>
                    <button className='bg-tradecolor text-tradetext font-medium text-sm p-1 rounded-sm'>Trade</button>
                </div>
            </div>
            
            <div className='mt-3'>
                <h1 className='font-semibold text-black inline mr-2'>{name}</h1>
                <p className="inline uppercase text-xs font-medium text-gray-600">{symbol}</p>
            </div>
        </div>

        <div className="flex items-center justify-start">
                <p className="mr-5 text-gray-900 font-bold">${price}</p>
                    <div className='font-medium'>
                        {
                            priceChange < 0 ? (
                                <p className='text-rose-500'>
                                    {priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className='text-tradetext'>
                                    {priceChange.toFixed(2)}%</p>
                            )}
                    </div>
            </div>
    </div>
  )
}

export default Card