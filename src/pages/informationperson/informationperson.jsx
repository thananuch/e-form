import React, { useState ,useEffect} from 'react';

import { Link } from 'react-router-dom'

import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import th from 'date-fns/locale/th';
import { format } from 'date-fns';



import Content from '../../components/layout/Content';

import { TbGavel } from "react-icons/tb";
import { RiFileUserFill } from "react-icons/ri";
import { MdBallot } from "react-icons/md";
import { AiFillSave ,AiOutlineCheck,AiOutlineQuestionCircle} from "react-icons/ai";

import Backbackcard from "../../asseets/images/backbackcard.png";


function Informationperson () {

    const [selectedBirthDate, setSelectedBirthDate] = useState(null);
   
    const handleBirthDateChange = (date) => {
        if (date) {
            const thaiYear = parseInt(format(date, 'yyyy', { useAdditionalWeekYearTokens: true })) + 543;
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${thaiYear}`;
            console.log("date:", formattedDate); 
            setSelectedBirthDate(date);
        }
    };
    
    
    return (
    <>
        <Content />
        <div className='bg-gradient-to-b from-EEF0F6 to-EFEAE1 w-full'>
            <div className='max-w-[90rem] mx-auto px-4 p-20 flex'>
                <div className='w-[20rem]  rounded-l-xl bg-gradient-to-b from-977EBB to-6482C2 py-12 px-10 flex flex-row gap-[2rem] '>
                    <div className='bg-[#BABFDF] py-12 px-[0.5rem] items-center justify-start rounded-3xl flex flex-col gap-[3.38rem]'>
                        <div className="rounded-3xl bg-white shadow-[0px_2px_4px_rgba(40,_82,_121,_0.1)] overflow-hidden flex flex-row p-[0.5rem] items-start justify-start">
                            <TbGavel className=' text-[#343F9E]' size={30}/>
                        </div>
                        <div className="rounded-3xl  bg-white shadow-[0px_2px_4px_rgba(40,_82,_121,_0.1)] overflow-hidden flex flex-row p-[0.5rem] items-start justify-start">
                            <RiFileUserFill className='text-[#343F9E]' size={30} />
                        </div>
                        <div className="rounded-3xl bg-[#CFD2E9] flex flex-col py-[1rem] px-[0.25rem] 
                            items-center justify-center gap-[1.5rem] ">
                            <div className="rounded-3xl bg-[#343F9E] flex flex-row p-[0.5rem] items-start justify-start">
                            <MdBallot className='text-white' size={30} />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-[2rem]">
                            <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center bg-white ">
                                <div className="relative rounded-[50%] bg-[#343F9E] w-[0.5rem] h-[0.5rem]" />
                            </div>
                            <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center">
                                <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
                            </div>
                            <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center">
                                <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
                            </div>
                            </div>
                        </div>
                        <div className="rounded-3xl bg-white flex flex-row p-[0.5rem] items-start justify-start">
                            <AiFillSave className='text-[#343F9E]' size={30}  />
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col py-12 px-[0rem] box-border items-start justify-start gap-[2rem]'>
                        <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                            <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF]">
                             <AiOutlineCheck></AiOutlineCheck> Step 1
                            </div>
                        </div>
                        <div className="self-stretch relative text-lg leading-[150%] text-white">
                            ข้อตกลงและเงื่อนไข
                        </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start pt-[1.38rem]">
                        <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                            <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF]">
                            <AiOutlineCheck></AiOutlineCheck> Step 2
                            </div>
                        </div>
                        <div className="self-stretch relative text-lg leading-[150%] text-white">
                            เลือกประเภทการลงทะเบียน
                        </div>
                        </div>  
                        <div className="h-[14.5rem] flex flex-col pt-[1rem] px-[0rem] pb-[0rem] box-border items-start justify-start gap-[1.13rem]">
                            <div className="w-[11.44rem] flex flex-col items-start justify-start">
                            <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                                <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF]">
                                Step 3
                                </div>
                            </div>
                            <div className="self-stretch relative text-[1rem] leading-[150%] text-white">
                                ระบุข้อมูลการลงทะเบียน
                            </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[2rem] text-[0.88rem] text-white">
                            <div className="h-[1.5rem] grid-flow-row gap-[0.5rem]">
                                <div className="text-sm my-1 ">ข้อมูลส่วนตัว</div>
                            </div>
                            <div className="h-[1.5rem] grid-flow-row gap-[0.5rem]">
                                <div className="text-sm my-1 ">ข้อมูลการติดต่อ และ ที่อยู่</div>
                            </div>
                            <div className="h-[1.5rem] grid-flow-row gap-[0.5rem]">
                                <div className="text-sm my-1 ">ข้อมูลบัญชีผู้ใช้งาน</div>
                            </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start pt-[2rem]">
                        <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                            <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF]">
                            Step 4
                            </div>
                        </div>
                        <div className="self-stretch relative text-lg leading-[150%] text-white">
                            ยืนยันการส่งข้อมูล
                        </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className='w-[70rem] bg-[#fffffa80] rounded-r-xl px-20 py-5'>
                    <form >
                    <h1 className='text-[#1A3160] text-2xl'>ลงทะเบียนบัญชีผู้ใช้งาน</h1>
                        <div className='w-full bg-white p-4 rounded-3xl drop-shadow-[0_2px_10px_rgba(36,36,36,0.1)]'>
                            <div className="w-[90%] mx-auto">

                                <div className='w-full mt-4'>
                                    <h2 className='text-2xl'>ข้อมูลส่วนตัว</h2>
                                    <hr/> 
                                </div>
                                
                                <div className='grid grid-cols-2 gap-8 '>
                                    <div className="grid-flow-row gap-[0.5rem] relative">
                                        <div className="text-sm my-1 ">
                                            เลขประจำตัวประชาชน 13 หลัก  <span className= 'text-red-500'>*</span>
                                        </div>
                                        <input placeholder='ระบุ รหัสประจำตัวประชาชน' required
                                            className="[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3
                                            "
                                            type='text'
                                        />
                                        <div className='absolute right-0 top-[55%]'>
                                            <Link className="outline outline-offset-1 outline-1 outline-[#543FBF] 
                                                justify-center text-center bg-style-1-eef0f6
                                                w-auto h-auto rounded-3xl px-5 py-1 text-lg " 
                                                to="/termsconditions" >
                                                ตรวจสอบ
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="grid-flow-row gap-[0.5rem] relative">
                                        <div className='grid grid-cols-2'>
                                            <div className="text-sm my-1 ">
                                                รหัสหลังบัตรประจำตัวประชาชน <span className='text-red-500'>*</span>
                                            </div>
                                            <div className="group relative ">
                                                <AiOutlineQuestionCircle className='text-[#222222] rounded' size='15' />
                                                <span className="absolute top-10 scale-0 transition-all justify-center inherit
                                                    text-center rounded bg-white p-2 text-xs text-black w-[328px]
                                                    group-hover:scale-100">
                                                    <h2 className='text-xl'>เลเซอร์ ไอดี คืออะไร ?</h2>
                                                    <h4 className='text-xs' >คือรหัสเพื่อยืนยันถึงสถานะสำหรับบัตรประชาชน</h4>
                                                    <img alt='backcard' src={Backbackcard} ></img>
                                                    <h4 className='text-xs'> 1. รหัสปรากฏอยู่ด้านล่างของบัตร </h4>
                                                    <h4 >2. ใช้รหัสเพื่อยืนยันสถานะบัตรประชน</h4>
                                                </span>
                                            </div>
                                        </div>
                                        <input placeholder="ระบุ เลเซอร์ไอดี หลังบัตรประชาชนของท่าน" 
                                            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
                                            type="text"
                                        />
                                    </div>
                                    
                                </div>

                                <div className='grid grid-cols-2 gap-8 mt-4'>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">เพศ</div>
                                        <select  placeholder="กรุณาเลือกเพศ" 
                                            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 ">
                                            <option value={0} >กรุณาเลือกเพศ</option>
                                            <option value={1}>ชาย</option>
                                            <option value={2}>หญิง</option>
                                        </select>
                                    </div>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">วัน-เดือน-ปีเกิด <span className='text-red-500'>*</span></div>
                                        <Datepicker className='[border:none] bg-style-1-eef0f6  w-full rounded-xl py-3 px-3 ' 
                                            dateFormat="dd/MM/yyyy" locale={th} 
                                            showMonthDropdown showPopperArrow={false} 
                                            useShortMonthInDropdown showYearDropdown
                                            onChange={handleBirthDateChange} 
                                            selected={selectedBirthDate}
                                            placeholderText='ระบุ วันเดือนปีเกิด'
                                        /> 
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 gap-8 mt-4'>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">อาชีพ</div>
                                        <select  placeholder="กรุณาเลือกเพศ" 
                                            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 ">
                                            <option value={0} >กรุณาเลืออาชีพ</option>
                                        </select>
                                    </div>
                                </div>

                                <h4 className='text-xl'>ชื่อ ภาษาไทย</h4>

                                <div className='grid grid-cols-2 gap-8'>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">คำนำหน้าชื่อ <span className='text-red-500'>*</span></div>
                                    
                                        <select  placeholder="กรุณาเลือกเพศ" 
                                            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 ">
                                            <option value={0} >เลือกคำนำหน้าชื่อ</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 gap-8 mt-4'>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">ชื่อ <span className='text-red-500'>*</span></div>
                                    
                                        <input placeholder="ระบุ ชื่อ" 
                                            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
                                            type="text"
                                        />
                                    </div>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">ชื่อกลาง </div>
                                        <input placeholder="ระบุ ชื่อกลาง" 
                                            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
                                            type="text"
                                        />
                                    </div>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">นามสกุุล  <span className='text-red-500'>*</span></div>
                                        <input placeholder="ระบุ นามสกุล" 
                                            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <h4 className='text-xl'>ชื่อ ภาษาอังกฤษ</h4>
                                <div className='grid grid-cols-3 gap-8 mt-4'>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">Name <span className='text-red-500'>*</span></div>
                                        <input placeholder="ระบุ ชื่อภาษาอังกฤษ" 
                                        className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
                                        type="text"
                                    />
                                    </div>

                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">Middle name </div>
                                        <input placeholder="ระบุ ชื่อกลางภาษาอังกฤษ" 
                                        className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
                                        type="text"
                                    />
                                    </div>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">Surname  <span className='text-red-500'>*</span></div>
                                        <input placeholder="ระบุ นามสกุลภาษาอังกฤษ" 
                                            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
                                            type="text"
                                        />
                                    </div>
                                    
                                </div>


                            </div>
                            <div className='my-4 flex justify-end mt-8'>
                                <Link className="inline-block bg-[#E6E9F5] text-[#543FBF] justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 mr-4 text-lg " 
                                    to="/selecttypeuser" >
                                    ย้อนกลับ
                                </Link>
                                <Link className='inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA] border-none 
                                text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3'to="/informationaddress" >
                                    ดำเนินการต่อ
                                </Link>
                            </div>

                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </>
        
    )
}

export default Informationperson