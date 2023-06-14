import React from 'react'

function CancelUsernameModal({isVisible , onClose }) {
    if (!isVisible) return null;
    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
            flex justify-center items-center '> 
                <div className='bg-white  my-4 mx-4 rounded-xl '>
                    <div className='flex mt-3 mb-2 mx-5'>
                        <div className='w-full grid grid-cols-2 gap-4 place-content-between'>
                            <div className='items-start justify-start text-left font-bold text-2xl'>แจ้งเตือนผู้ใช้งานระบบ</div>
                            <button className='text-black bg-transparent border-none text-xl place-self-end' onClick={() => {onClose();}}>x</button>
                        </div>
                        <hr/>
                    </div>
                    <div className='flex px-4 my-4' >
                        <div className='w-full items-center justify-center'>
                            <div className='w-3/4 mx-auto items-start justify-start text-left'> 
                                <h2 className='text-[#543FBF] mb-0'>กรอกรหัสผ่านใหม่</h2>
                                <hr/>
                                <h4 className='text-[#939393] mt-0' >กรอกข้อมูลเพื่อกำหนดรหัสผ่านใหม่</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default CancelUsernameModal