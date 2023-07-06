import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import Content from '../../components/layoutAfterLogin/Content'; 
import Navigation from '../../components/layoutAfterLogin/Navigation';

import { AiFillSave } from 'react-icons/ai';
import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import { MdBallot,MdOutlineCalendarMonth } from 'react-icons/md';

import Swal from 'sweetalert2';
import ProfileDelegate from '../../components/propsPage/profileDelegate';


function RenewDelegatePage() {

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

    const renewComplete = () => {
        Swal.fire({
            icon: 'success',
            title: 'ต่ออายุผู้แทนเรียบร้อยแล้ว',
            text: 'โปรดรอผลการพิจารณาจากเจ้าหน้าที่',
            confirmButtonText: 'ตกลง',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = 'home';
            }
          })
    }

  return (
    <>
        <Content/>
        <div className='flex bg-gradient-to-b from-EEF0F6 to-EFEAE1'>
            <Navigation/>
            <div className='flex-1 my-10'>
                <div className='w-[95rem] ml-[5%] bg-[#FDFDFD] rounded-2xl flex flex-row'>
                    <div className='basis-1/4 py-4 rounded-l-xl bg-gradient-to-b from-977EBB to-6482C2 px-10 flex flex-row gap-[2rem]'>
                        <div className='bg-[#BABFDF]  py-12 px-[0.5rem] items-center justify-start rounded-3xl flex flex-col gap-[2rem]'>
                            <div className='rounded-3xl bg-[#CFD2E9] py-[1rem] px-[0.25rem] 
                                items-center justify-center gap-[2rem] '>
                                <div className='flex flex-col items-center justify-center gap-[2rem] '>
                                    <div className='rounded-3xl bg-[#343F9E] flex flex-row p-[0.5rem] items-start justify-start'>
                                        <MdBallot className='text-white' size={30} />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-[2rem] pt-8'>
                                    <div className='rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem]
                                         box-border items-center justify-center bg-white '>
                                        <div className='relative rounded-[50%] bg-[#343F9E] w-[0.5rem] h-[0.5rem]' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-[2rem] '>
                                <div className='rounded-3xl bg-white flex flex-row p-[0.5rem] items-start justify-start'>
                                <AiFillSave className='text-[#343F9E]' size={30}  />
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col py-12 px-[0rem] box-border items-start justify-start gap-[2rem]'>
                           <div className='flex flex-col mt-3'>
                                <div className='font-bold text-xl text-[#F5F8FF]'>
                                    Step 1
                                </div>
                                <div className='font-light text-lg text-[#F5F8FF]'>
                                    ระบุข้อมูลการลงทะเบียน
                                </div>

                                <div className='font-light text-sm text-[#F5F8FF] pt-8'>
                                    ข้อมูลส่วนตัว
                                </div>
                           </div>
                           <div className='flex flex-col pt-4'>
                                <div className='font-bold text-xl text-[#F5F8FF]'>
                                    Step 2
                                </div>
                                <div className='font-light text-lg text-[#F5F8FF]'>
                                    ยืนยันการส่งข้อมูล
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className='basis-3/4 px-12 py-7 rounded-r-xl '>
                        <h1 className='text-2xl font-semibold text-[#1A3160] '>ต่ออายุผู้แทนจดทะเบียน</h1>
                        <div className='w-full mb-8 rounded-3xl shadow-[0px_2px_10px_rgba(36,36,36,0.1)] '>
                            <div className='w-[90%] mx-auto'>
                                <div className='w-full my-4 py-4'>
                                    <ProfileDelegate />
                                    <h4 className='text-xl'>ผู้แทน</h4>
                                    <div className='grid grid-cols-2 gap-8'>
                                        <div className='grid-flow-row gap-[0.5rem]'>
                                            <div className='text-sm my-1 '>ประเภทผู้แทนเดิม <span className='text-red-500'>*</span></div>
                                            <div className='flex flex-row'>  
                                                <select  placeholder='เลือกประเภทผู้แทนเดิม' disabled
                                                    className='[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                                                    disabled:bg-[#E2E2E2] disabled:text-black'>
                                                    <option value={0} >เลือกประเภทผู้แทน</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='grid-flow-row gap-[0.5rem] relative'>
                                            <div className='text-sm my-1 '>
                                                วันที่หมดอายุผู้แทนจดทะเบียน  <span className= 'text-red-500'>*</span>
                                            </div>
                                            <div className='flex flex-row'>
                                                <input
                                                dir='ltr' disabled
                                                className='[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-l-xl py-3 px-3
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
                                    </div>
                                    <h3>อัพโหลดไฟล์หลักฐาน</h3>
                                    <div className='grid grid-cols-2 gap-8'>
                                        <label for='delegate-file' className='flex flex-col items-center justify-center w-full h-52 border-none rounded-lg cursor-pointer bg-gradient-to-bl from-[#D5D7EE] to-[#E6E4F5] '>
                                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                                <BsFillCloudArrowUpFill className='text-[#343D6B]' size={80} />
                                                <p className='my-0 text-xl text-[#343D6B] '><span className='font-semibold'>ลากไฟล์และวางที่นี่</span> </p>
                                                <p className='text-lg text-[#343D6B] '>หรือคลิกเพื่ออัพโหลดไฟล์</p>
                                            </div>
                                            <input id='delegate-file' type='file' className='hidden' />
                                        </label>
                                    </div> 
                                    <div className='my-4 flex justify-end mt-8'>
                                        <Link className='inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA] border-none 
                                        text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3' onClick={() => renewComplete()} >
                                            ดำเนินการต่อ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RenewDelegatePage