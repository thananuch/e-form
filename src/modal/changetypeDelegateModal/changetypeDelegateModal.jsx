import React from 'react'
import { Link } from 'react-router-dom'

// 
import { AiFillWarning } from "react-icons/ai";

function changetypeDelegateModal({isVisible , onClose }) {
  if (!isVisible) return null;
  return (
    <>
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
            flex justify-center items-center '> 
            <div className='bg-white w-[40rem] my-4 mx-4 rounded-xl '>
                <div className='flex mt-3 mb-2 mx-5'>
                    <div className='w-full grid grid-cols-2 gap-4 place-content-between'>
                        <div className='items-start justify-start text-left font-bold text-2xl text-[#BF3F3F]'>แจ้งเตือนผู้ใช้งานระบบ</div>
                        <button className='text-black bg-transparent border-none text-xl place-self-end' onClick={() => {onClose();}}>x</button>
                    </div>
                
                </div>
                <hr/>
                <div className='flex px-4 my-4' >
                    <div className='w-full items-center justify-center'>
                        <div className='w-[80%] mx-auto items-start justify-start text-center'> 
                            <AiFillWarning className='text-[#D0A471]' size={70} />
                            <div className='w-full bg-[#F4E1CB] rounded-2xl'>
                                <h4 className='text-[#96642A] py-4 px-1'>ขณะนี้ท่านมีคำขอค้างอยู่ในระบบ <br/>
                                    ให้ท่านดำเนินการทำคำขอให้เสร็จก่อนยกเลิกบัญชีผู้ใช้งาน
                                </h4>
                            </div>
                            <div className='text-left text-[#274082]'>
                                <h3>คำขอที่ค้างอยู่ในระบบ</h3>
                                <h5>
                                    <b className='font-bold'>1. เลขที่อ้างอิงคำขอ : </b>  
                                    <b className='font-normal'> 1008965012400002 </b>  
                                    <b className='font-bold'>ประเภทคำขอ :</b>  
                                    <b className='font-normal'> แก้ไขเพิ่มเติมบริษัท</b>
                                </h5>
                                <h5>
                                    <b className='font-bold'>2. เลขที่อ้างอิงคำขอ : </b>  
                                    <b className='font-normal'> 1008965012400003 </b>  
                                    <b className='font-bold'>ประเภทคำขอ :</b>  
                                    <b className='font-normal'> จัดตั้งห้างหุ้นส่วนจำกัด</b>
                                </h5>
                                <h5>
                                    <b className='font-bold'>3. เลขที่อ้างอิงคำขอ : </b>  
                                    <b className='font-normal'> 1008965012400003 </b>  
                                    <b className='font-bold'>ประเภทคำขอ :</b>  
                                    <b className='font-normal'> แก้ไขเพิ่มเติมบริษัท</b>
                                </h5>
                                
                            </div>
                            <div className="items-center justify-center text-center mx-auto">
                                <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                    text-white text-lg justify-center text-center w-[30%] h-auto rounded-3xl px-10 py-3 '
                                    to='/member/changetypedelegatepage'  >
                                    ดำเนินการต่อ      
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default changetypeDelegateModal