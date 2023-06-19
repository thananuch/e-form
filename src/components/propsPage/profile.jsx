import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
  return (
    <>
        <h4 className='text-xl' >ข้อมูลทั่วไป</h4>
        <hr/> 
        <div className='grid grid-cols-2 gap-8 mt-4'>
            <div className="grid-rows-2 gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    เลขประจำตัวประชาชน 13 หลัก
                </div>
                <div>xxxxxxxxxxxxx</div>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-8 mt-4'>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    เพศ
                </div>
                <div>ชาย</div>
            </div>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    วัน-เดือน-ปีเกิด
                </div>
                <div>24/ตุลาคม/2532</div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-4'>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    ชื่อภาษาไทย
                </div>
                <div>นายทดสอบ ระบบ</div>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-8 mt-4'>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    ชื่อ ภาษาอังกฤษ
                </div>
                <div>Mr. Test System</div>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-8 mt-4'>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    อาชีพ
                </div>
                <div>อื่นๆ</div>
            </div>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    ระบุอาชีพ
                </div>
                <div>โปรแกรมเมอร์</div>
            </div>
        </div>

        <h4 className='text-xl' >ข้อมูลการติดต่อ และ ที่อยู่</h4>
        <hr/>
        <h5 className='text-lg'>ข้อมูลการติดต่อ</h5>
        <div className='grid grid-cols-2 gap-8 '>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    โทรศัพท์
                </div>
                <div>-</div>
            </div>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    โทรศัพท์มือถือ
                </div>
                <div>0900933333</div>
            </div>
        </div>
        <h5 className='text-lg'>ที่อยู่</h5>
        <div className='grid grid-cols-1 gap-8 '>
            <div className="grid-flow-row gap-[0.5rem] ">
                <div className="text-sm font-bold my-1 ">
                    รายละเอียดที่อยู่
                </div>
                <div>
                    เลขที่ 98 ห้องเลขที่ 96/98, ชั้นที่ 6 ,ซอย รัชดาภิเษก 19, ถนน รัชดาภิเษก อำเภอ/เขต ดินแดง , ตำบล/แขวง ดินแดง 
                    รหัสไปรษณีย์ 10400
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile
