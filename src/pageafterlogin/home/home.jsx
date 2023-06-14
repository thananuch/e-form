import React from 'react'

import Content from '../../components/layoutAfterLogin/Content'; 

function Home() {
  return (
    <>
      <Content/>
      
      <div className='bg-gradient-to-b from-EEF0F6 to-EFEAE1 w-full h-screen '>
        <div className="w-[95rem] mx-auto flex p-7">
          <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div>
      </div>
    </>
  )
}

export default Home