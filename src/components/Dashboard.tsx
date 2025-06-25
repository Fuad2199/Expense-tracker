import React from 'react'

const Dashboard:React.FC = () => {
  return (
    <div className='xl:w-[70%] w-full flex flex-col xl:py-7 xl:pl-7 xl:pr-5 p-5'>
      <div className="flex flex-col gap-1">
        <div className="text-3xl font-bold text-primary">Hey There Fuad!</div>
        <span className='text-sm text-primary'>We're here to help you manage</span>
      </div>
      <div className="font-semibold text-primary mt-10">Your cards</div>
    </div>
  )
}

export default Dashboard
