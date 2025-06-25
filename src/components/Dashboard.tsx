import React from 'react'
import Cards from './Cards'


const Dashboard:React.FC = () => {
  return (
    <div className='xl:w-[85%] w-full flex flex-col xl:py-7 xl:pl-7 xl:pr-5 p-5'>
      <div className="flex flex-col gap-1">
        <div className="text-3xl font-bold text-primary">Hey There Fuad!</div>
        <span className='text-sm text-primary'>We're here to help you manage</span>
      </div>
      <div className="font-semibold text-primary mt-10">Your cards</div>
      <Cards/>
      <span className="font-semibold tex-primary mt-10 mb-2">Recent transactions</span>
    </div>
  )
}

export default Dashboard
