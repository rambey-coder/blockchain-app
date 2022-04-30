import React, { useState } from 'react'

const Others = () => {
    const [click, setClick] = useState('')
    const handleClick = (i) => {
        setClick(i)
    }

  return (
    <div className='w-[90%] mx-auto flex flex-col gap-40'>
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

        <div id='exchange' className='bg-exchangebg  p-10 rounded-3xl'>
            <div className='flex items-center bg-exchangecard w-1/5 py-4 px-3 rounded-xl'>
                <i className="fa-solid fa-chart-line text-exchangecolor mr-3 text-2xl"></i>
                <h3 className='text-exchangecolor font-medium'>Exchange</h3>
            </div>

            <h1 className='text-exchangecolor font-semibold text-3xl my-5'>Lightning-Fast Crypto Trading</h1>

            <div className='flex flex-col gap-8'>
                <div className='bg-transparent border-2 border-exchangecard p-4 rounded-xl w-2/5 cursor-pointer' onClick={ () => {handleClick(5)}}>
                    <h6 className='text-exchangecolor font-semibold'>Trade in 3 fiat currencies</h6>
                    <p className={click === 5 ? 'text-exchangecolor mt-1 block' : 'text-exchangecolor mt-1 hidden transition ease-linear'}>The Exchange supports USD, EUR, and GBP.</p>
                </div>

                <div className='bg-transparent border-2 border-exchangecard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(6)}}>
                    <h6 className='text-exchangecolor font-semibold opacity-100' >A matching engine that can keep up with you</h6>
                    <p className={click === 6 ? 'text-exchangecolor mt-1 block' : 'text-exchangecolor mt-1 hidden transition ease-linear'}>The world’s fastest crypto matching engine, built by and for traders.</p>
                </div>

                <div className='bg-transparent border-2 border-exchangecard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(7)}}>
                    <h6 className='text-exchangecolor font-semibold opacity-100' >24/7 live chat support</h6>
                    <p className={click === 7 ? 'text-exchangecolor mt-1 block' : 'text-exchangecolor mt-1 hidden transition ease-linear'}>Chat with customer support directly in the Exchange, anytime.</p>
                </div>

                <div className='bg-transparent border-2 border-exchangecard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(8)}}>
                    <h6 className='text-exchangecolor font-semibold opacity-100' >Margin Trading</h6>
                    <p className={click === 8 ? 'text-exchangecolor mt-1 block' : 'text-exchangecolor mt-1 hidden transition ease-linear'}>More buying power means up to 5x the profit.</p>
                </div>
                <div>
                    <button className='bg-exchangecolor py-3 px-5 rounded-xl text-exchangecard font-semibold'>Trade Now</button>
                </div>
            </div>
        </div>

        <div id='explore' className='bg-explorebg  p-10 rounded-3xl'>
            <div className='flex items-center bg-explorecard w-1/5 py-4 px-3 rounded-xl'>
                <i className="fa-regular fa-compass text-explorecolor mr-3 text-2xl"></i>
                <h3 className='text-explorecolor font-medium'>Explore</h3>
            </div>

            <h1 className='text-explorecolor font-semibold text-3xl my-5'>Blockchain Data is in Our DNA</h1>

            <div className='flex flex-col gap-8'>
                <div className='bg-transparent border-2 border-explorecard p-4 rounded-xl w-2/5 cursor-pointer' onClick={ () => {handleClick(9)}}>
                    <h6 className='text-explorecolor font-semibold'>Explore the top blockchains</h6>
                    <p className={click === 9 ? 'text-explorecolor mt-1 block' : 'text-explorecolor mt-1 hidden transition ease-linear'}>Confirm transactions, analyze the market, or simply learn more about crypto.</p>
                </div>

                <div className='bg-transparent border-2 border-explorecard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(10)}}>
                    <h6 className='text-explorecolor font-semibold opacity-100' >Powerful Blockchain Data API</h6>
                    <p className={click === 10 ? 'text-explorecolor mt-1 block' : 'text-explorecolor mt-1 hidden transition ease-linear'}>We’ve powered exchanges, data analysts, enthusiasts, and more.</p>
                </div>

                <div className='bg-transparent border-2 border-explorecard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(11)}}>
                    <h6 className='text-explorecolor font-semibold opacity-100' >Industry-leading charts</h6>
                    <p className={click === 11 ? 'text-explorecolor mt-1 block' : 'text-explorecolor mt-1 hidden transition ease-linear'}>From hashrate, to block details, to mining information, and more.</p>
                </div>

                <div className='bg-transparent border-2 border-explorecard p-4 rounded-xl w-2/5 cursor-pointer' onClick={() => {handleClick(8)}}>
                    <h6 className='text-explorecolor font-semibold opacity-100' >Real-time crypto prices</h6>
                    <p className={click === 8 ? 'text-explorecolor mt-1 block' : 'text-explorecolor mt-1 hidden transition ease-linear'}>Real-time crypto prices</p>
                </div>
                <div>
                    <button className='bg-explorecolor py-3 px-5 rounded-xl text-explorecard font-semibold'>Explore Now</button>
                </div>
            </div>
        </div>
        <div id='institution' className='bg-instbg  p-10 rounded-3xl'>
            <div className='flex items-center bg-instcard w-1/5 py-4 px-3 rounded-xl'>
                    <i className="fa-solid fa-house-chimney text-instcolor mr-3 text-2xl"></i>
                    <h3 className='text-instcolor font-medium'>Institutional</h3>
                </div>

            <h1 className='text-bld font-bold text-3xl my-5 w-3/6'>Bespoke crypto lending, trading, and custody for institutions</h1>

            <p className='text-bld w-3/6 font-medium mb-4'>Blockchain.com Institutional Markets is a full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending, trading, and custody solutions tailored to your needs.</p>

            <button className='bg-instcolor py-3 px-5 rounded-xl text-instcard font-semibold'>Become a Client</button>
        </div>
        
    </div>
  )
}

export default Others