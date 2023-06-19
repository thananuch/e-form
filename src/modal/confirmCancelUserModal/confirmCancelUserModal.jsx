import React from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineTrash } from "react-icons/hi";

import Swal from 'sweetalert2';

function ConfirmCancelUserModal({isVisible , onClose }) {
  if (!isVisible) return null;
  const cancelUserComSucceed = () => {
    Swal.fire({
        icon: 'success',
        title: 'แจ้งเตือน',
        text: 'ทำการยกเลิกบัญชีผู้ใช้งานของท่านเสร็จสิ้น',
        confirmButtonText: 'ตกลง',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      })
  }
  return (
    <>
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
            flex justify-center items-center '> 
            <div className='bg-white w-[30rem] my-4 mx-4 rounded-xl '>
                <div className='flex mb-2 '>
                    <div className='w-full text-right bg-[#F65656] rounded-t-xl'>
                        <button className='text-white bg-transparent border-none text-xl place-self-end' onClick={() => {onClose();}}>x</button>
                        <div className='items-center justify-center text-center font-bold text-2xl text-[#BF3F3F]'>
                            <HiOutlineTrash className='text-white font-normal' size={100} />
                        </div>
                    </div>
                </div>
                <div className='flex px-4 my-4' >
                    <div className='w-full items-center justify-center'>
                        <div className='items-center justify-center text-center'>
                            <h2>ยืนยันการยกเลิกบัญชีผู้ใช้งาน</h2>
                            <h3 className='text-[#767676] font-normal text-lg'>
                                เมื่อยกเลิกบัญชีผู้ใช้งานแล้ว ท่านจะไม่สามารถกู้คืนบัญชีได้ <br/>
                                โปรดแน่ใจว่าต้องการยกเลิกบัญชีผู้ใช้งาน
                            </h3>
                        </div>
                    </div>
                    
                </div>
                <div className="items-center justify-center text-center mx-auto mb-12">
                    <Link className='inline-block bg-[#F55555] border-none 
                        text-white text-lg justify-center text-center w-[30%] h-auto rounded-3xl px-10 py-3 ' onClick={() => cancelUserComSucceed()} >
                        ยืนยันการยกเลิก    
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ConfirmCancelUserModal