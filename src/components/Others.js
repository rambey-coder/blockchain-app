import React, { useState } from 'react'

const Others = () => {
    const [click, setClick] = useState('')
    const handleClick = (i) => {
        setClick(i)
    }

  return (
    <div className='w-[90%] mx-auto'>
        <div id='wallet' className='bg-walletbg  p-10 rounded-3xl'>
            <div className='flex items-center bg-walletcard w-1/5 py-4 px-3 rounded-xl'>
                <i className="fa-solid fa-wallet text-walletcolor mr-3 text-2xl"></i>
                <h3 className='text-walletcolor font-medium'>Wallet</h3>
            </div>

            <h1 className='text-walletcolor font-semibold text-3xl my-5'>The Easiest and Most Powerful Crypto Wallet</h1>

            <div className='flex flex-col gap-8'>
                <div className='bg-transparent border-2 border-walletcard p-4 rounded-xl w-2/5 cursor-pointer' onClick={ () => {handleClick(0)}}>
                    <h6 className='text-walletcolor font-semibold'>Buy and Sell Crypto in Minutes</h6>
                    <p className={click === 0 ? 'text-walletcolor mt-1 block' : 'text-walletcolor mt-1 hidden transition ease-linear'}>Instantly buy Bitcoin with credit card, debit card, or by linking your bank.</p>
                </div>

                <div className='bg-transparent border-2 border-walletcard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(1)}}>
                    <h6 className='text-walletcolor font-semibold opacity-100' >Earn up to 13.5% in rewards</h6>
                    <p className={click === 1 ? 'text-walletcolor mt-1 block' : 'text-walletcolor mt-1 hidden transition ease-linear'}>Fund a Rewards Account with crypto and watch it grow.</p>
                </div>

                <div className='bg-transparent border-2 border-walletcard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(2)}}>
                    <h6 className='text-walletcolor font-semibold opacity-100' >Control your funds with Private Key Wallet</h6>
                    <p className={click === 2 ? 'text-walletcolor mt-1 block' : 'text-walletcolor mt-1 hidden transition ease-linear'}>No one but you can access Private Key Wallets. Not even us.</p>
                </div>

                <div className='bg-transparent border-2 border-walletcard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(3)}}>
                    <h6 className='text-walletcolor font-semibold opacity-100' >At home or on the go</h6>
                    <p className={click === 3 ? 'text-walletcolor mt-1 block' : 'text-walletcolor mt-1 hidden transition ease-linear'}>Manage your Wallet from a desktop, mobile, or both.</p>
                </div>

                <div className='bg-transparent border-2 border-walletcard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(4)}}>
                    <h6 className='text-walletcolor font-semibold opacity-100' >All your crypto in one place</h6>
                    <p className={click === 4 ? 'text-walletcolor mt-1 block' : 'text-walletcolor mt-1 hidden transition ease-linear'}>View and manage your balance across the Wallet, the Exchange, and your hardware, all in your wallet dashboard.</p>
                </div>

                <div>
                    <button className='bg-walletcolor py-3 px-5 rounded-xl text-walletcard font-semibold'>Get Started</button>
                </div>
            </div>
        </div>
        <div id='exchange'></div>
        <div id='explore'></div>
        <div id='institution'></div>
    </div>
  )
}

export default Others