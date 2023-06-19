import React from 'react'
import { Link } from 'react-router-dom'


// 
import { AiFillWarning } from "react-icons/ai";

function RenewdelegateModal({isVisible , onClose }) { 

  if (!isVisible) return null;

  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
          flex justify-center items-center '> 
          <div className='bg-white w-[35rem] my-4 mx-4 rounded-xl '>
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
                            <h4 className='text-[#96642A] py-4 px-1 font-light'>
                              ขณะนี้ บัญชีผู้แทนจดทะเบียน <b className='font-bold'> สมาชิกเนติบัณฑิตยสภา  </b> <br/>
                              ของท่านหมดอายุ ท่านจะไม่สามารถทำคำขอจดทะเบียนได้ <br/>
                              โปรดต่ออายุการใช้งานเพื่อเปิดใช้งานบัญชีของท่านอีกครั้ง 
                            </h4>
                        </div>
                        <div className="items-center justify-center text-center mx-auto">
                            <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 '
                                onClick={() => window.location.href = "/member/renewdelegatepage"}  >
                                ต่ออายุผู้แทนจดทะเบียน      
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

export default RenewdelegateModal