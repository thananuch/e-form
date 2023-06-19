import React from 'react'

import Content from '../../components/layoutAfterLogin/Content'; 
import Navigation from '../../components/layoutAfterLogin/Navigation';

function Home() {
  return (
    <>
      <Content/>
      <div className="flex bg-gradient-to-b from-EEF0F6 to-EFEAE1">
        <Navigation/>
        <div className='flex-1 h-screen mt-10'>
          <div className="w-[90rem] ml-[5%] flex px-20 py-7 bg-[#FDFDFD] rounded-2xl ">
            <h1 className="text-2xl font-semibold ">Home Page</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home