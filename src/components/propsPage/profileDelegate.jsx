import React,{useState} from 'react'
import PropTypes from 'prop-types'

import 'react-calendar/dist/Calendar.css';

import { MdOutlineCalendarMonth } from 'react-icons/md';

function ProfileDelegate(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [dateState, setDateState] = useState('');
    console.log(dateState);

    const handleDateChange = (date) => {
        setDateState(selectedDate.toLocaleDateString('th'));
        setSelectedDate(date);
        setshowCalendar(false);
    };

    const [showCalendar, setshowCalendar] = useState(false);

    const toggleDateCalendar = (e) => {
        e.preventDefault();
        setshowCalendar((prevState) => !prevState);
    };

  return (
    <>
     <h2 className='text-xl'>ข้อมูลส่วนตัว</h2>
    <hr/> 
    <div className='grid grid-cols-2 gap-8 '>
    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>
            เลขประจำตัวประชาชน 13 หลัก  <span className= 'text-red-500'>*</span>
        </div>
        <div className='flex flex-row'>
            <input placeholder='ระบุ รหัสประจำตัวประชาชน' required disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black
                '
                type='text'
            />
        </div>
    </div>
    </div>
    <div className='grid grid-cols-2 gap-8 mt-4'>
    <div className='grid-rows-2 gap-[0.5rem] relative'>
        <div className='text-sm my-1 '>
            วัน-เดือน-ปีเกิด  <span className= 'text-red-500'>*</span>
        </div>
        <div className='flex flex-row'>
            <input
            dir='ltr' disabled
            className='[border:none] outline-none bg-style-1-eef0f6  w-full rounded-l-xl py-3 px-3
            disabled:bg-[#E2E2E2] disabled:text-black'
            value={dateState}
            placeholder='วันที่'
            onChange={(e) => setDateState(e.target.value)}
            />

            {selectedDate && (
            <div
                className='w-16  bg-[#E2E2E2]  text-black
                    rounded-r-xl justify-center flex items-center cursor-pointer '
                onClick={toggleDateCalendar}
                dir='rtl'
            >
                <MdOutlineCalendarMonth size={30} />
            </div>
            )}
        </div>
    </div>
    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>
            อาชีพ <span className= 'text-red-500'>*</span>
        </div>
        <div className='flex flex-row'>
            <select  placeholder='กรุณาเลือกเพศ' disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black
                '>
                <option value={0} >กรุณาเลืออาชีพ</option>
            </select>
        </div>
    </div>
    </div>
    <h4 className='text-xl'>ชื่อ ภาษาไทย</h4>
    <div className='grid grid-cols-2 gap-8'>
    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>คำนำหน้าชื่อ <span className='text-red-500'>*</span></div>
        <div className='flex flex-row'>  
            <select  placeholder='เลือกคำนำหน้าชื่อ' disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black'>
                <option value={0} >เลือกคำนำหน้าชื่อ</option>
            </select>
        </div>    
    </div>
    </div>

    <div className='grid grid-cols-3 gap-8 mt-4'>
    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>ชื่อ <span className='text-red-500'>*</span></div>
        <div className='flex flex-row'>  
            <input placeholder='ระบุ ชื่อ'  disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black'
                type='text'
            />
        </div>
    </div>
    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>ชื่อกลาง </div>
        <div className='flex flex-row'>  
            <input placeholder='ระบุ ชื่อกลาง'  disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black'
                type='text'
            />
        </div>
    </div>
    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>นามสกุุล  <span className='text-red-500'>*</span></div>
        <div className='flex flex-row'>  
            <input placeholder='ระบุ นามสกุล'  disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black'
                type='text'
            />
        </div>
    </div>
    </div>

    <h4 className='text-xl'>ชื่อ ภาษาอังกฤษ</h4>
    <div className='grid grid-cols-3 gap-8 mt-4'>
    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>Name <span className='text-red-500'>*</span></div>
        <div className='flex flex-row'>  
            <input placeholder='ระบุ ชื่อภาษาอังกฤษ' disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                    disabled:bg-[#E2E2E2] disabled:text-black'
                type='text'
        />
        </div>
    </div>

    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>Middle name </div>
        <div className='flex flex-row'>  
            <input placeholder='ระบุ ชื่อกลางภาษาอังกฤษ' disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                    disabled:bg-[#E2E2E2] disabled:text-black'
                type='text'
            />
        </div>
    </div>
    <div className='grid-rows-2 gap-[0.5rem]'>
        <div className='text-sm my-1 '>Surname  <span className='text-red-500'>*</span></div>
        <div className='flex flex-row'>  
            <input placeholder='ระบุ นามสกุลภาษาอังกฤษ' disabled
                className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black'
                type='text'
            />
        </div>
    </div>
    </div>
    <hr/>
    </>
  )
}


export default ProfileDelegate
