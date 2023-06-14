import React, { useState} from 'react';
import { Link } from 'react-router-dom'

import { AiFillEye ,AiFillEyeInvisible ,AiFillInfoCircle} from "react-icons/ai";

function ChangePasswordModal({isVisible , onClose }) {
  
  const [passwordOldInputText , setPasswordOldInputText] = useState('password');
  const [passwordInputText , setPasswordInputText] = useState('password');
  const [passwordInputConfirmText , setPasswordInputConfirmText] = useState('password');

  const toggleInputPasswordOld =()=>{
    if(passwordOldInputText=="password") {
        setPasswordOldInputText("text")
        return;
    }
    setPasswordOldInputText("password")
  }

  const toggleInputPassword =()=>{
      if(passwordInputText=="password") {
          setPasswordInputText("text")
          return;
      }
      setPasswordInputText("password")
  }

  const toggleInputPasswordConfirm =()=>{
      if(passwordInputConfirmText=="password") {
          setPasswordInputConfirmText("text")
          return;
      }
      setPasswordInputConfirmText("password")
  }
  if (!isVisible) return null;

  return (
    <>
       <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center '> 
            <div className='bg-white  my-4 mx-4 rounded-xl '>
                <div className='flex mt-3 mb-2 mx-5'>
                    <div className='w-full grid grid-cols-2 gap-4 place-content-between'>
                        <div className='items-start justify-start text-left font-bold text-2xl'>เปลี่ยนรหัสผ่าน</div>
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

                            <div className="grid grid-row-2 gap-[0.5rem] relative ">
                                <div className="text-lg my-1 ">
                                    รหัสผ่านปัจจุบัน <span className='text-red-500'>*</span>
                                </div>
                                <input placeholder="ระบุ รหัสผ่าน" 
                                    className="block bg-[#EEF0F6] border-none text-center p-2 rounded-md"
                                    type={passwordOldInputText}
                                />
                                <div className='absolute left-[95%] top-[60%] '>
                                    <Link className="[border:none] cursor-pointer" onClick={toggleInputPasswordOld} > 
                                        { passwordOldInputText=="text" ? <AiFillEye size={20} className='align-middle' />  : <AiFillEyeInvisible size={20} className='align-middle' />  }
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-row-2 gap-[0.5rem] relative ">
                                <div className="text-lg my-1 ">
                                  กำหนดรหัสผ่านใหม่ <span className='text-red-500'>*</span>
                                </div>
                                <input placeholder="ระบุ รหัสผ่าน" 
                                    className="block bg-[#EEF0F6] border-none text-center p-2 rounded-md"
                                    type={passwordInputText}
                                />
                                <div className='absolute left-[95%] top-[60%] '>
                                    <Link className="[border:none] cursor-pointer" onClick={toggleInputPassword} > 
                                        { passwordInputText=="text" ? <AiFillEye size={20} className='align-middle' />  : <AiFillEyeInvisible size={20} className='align-middle' />  }
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-row-2 gap-[0.5rem] relative text-left mt-4">
                                <div className="text-lg my-1 ">
                                    ยืนยันรหัสผ่าน* <span className='text-red-500'>*</span>
                                </div>
                                <input placeholder="ระบุ ยืนยันรหัสผ่าน" 
                                    className=" block bg-[#EEF0F6] border-none text-center p-2 rounded-md" 
                                    type={passwordInputConfirmText}
                                />
                                <div className='absolute left-[95%] top-[60%] '>
                                    <Link className="[border:none] cursor-pointer" onClick={toggleInputPasswordConfirm} > 
                                        { passwordInputConfirmText=="text" ? <AiFillEye size={20} className='align-middle' />  : <AiFillEyeInvisible size={20} className='align-middle' />  }
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full bg-[#E5EBFB] rounded-xl mt-5 text-[#274082] ">
                                <div className='px-2 py-6'>
                                  <h3 className='my-0' ><AiFillInfoCircle className='text-[#543FBF]' size={20} /> <span className='py-2'>คำแนะนำ</span> </h3> 
                                  <h4 className='text-lg mt-0'>
                                  1. มีความยาวตัวอักษรไม่ต่ำกว่า 8 ตัว <br/>
                                  2. รหัสผ่านต้องประกอบไปด้วยตัวอักษรภาษาอังกฤษพิมพ์ใหญ่
                                    อย่างน้อย 1 ตัวตัวอักษรภาษาอังกฤษและตัวเลข
                                  </h4>
                                </div>
                            </div>
                            <div className="items-center justify-center text-center mx-auto">
                              <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                text-white text-lg justify-center text-center w-[30%] h-auto rounded-3xl px-10 py-3 '
                               >
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

export default ChangePasswordModal