import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom'

import { AiFillLock,AiFillCheckCircle,AiFillEye ,AiFillEyeInvisible ,AiFillInfoCircle,AiOutlineQuestionCircle} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMailForward,TbUserExclamation } from "react-icons/tb";

import Swal from 'sweetalert2';
import Backbackcard from "../../asseets/images/backbackcard.png";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import th from 'date-fns/locale/th';
import { format } from 'date-fns';

function ForgotPasswordModalForm ({isVisible , onClose }) {

  const [showStep1 , setShowStep1] = useState(true);
  const [showStep2 , setShowStep2] = useState(false);
  const [showStep3 , setShowStep3] = useState(false);
  const [showStep4 , setShowStep4] = useState(false);
  const [showStep5 , setShowStep5] = useState(false);
  const [idCardType , setIdCardType ] = useState('');

  const [userOrIdCard , setUserOrIdCard] = useState('');

  const [typeChannelForgotPass, setTypeChannelForgotPass] = useState('');

  const slelctChannelForgotPass = (event) =>{
    setTypeChannelForgotPass(event.target.value);
  }

  function startsWithNumber(str) {
    return /^\d/.test(str);
  }

  const closeShowStep1  = () => {
    setShowStep1(true);
    setShowStep2(false);
    setShowStep3(false);
    setShowStep4(false);
    setShowStep5(false);
  }

  const nextStep1To2  = () => {
    
    setShowStep1(false);
    setShowStep2(true);
    setShowStep3(false);
    setShowStep4(false);
    setShowStep5(false);
    console.log('userOrIdCard '+userOrIdCard);
    if(!startsWithNumber(userOrIdCard)){
      setIdCardType('2');
    }else{
      setIdCardType('1');
    }
    
  }

  const nextStep2To3  = () => {
    
    setShowStep1(false);
    setShowStep2(false);
    setShowStep3(true);
    setShowStep4(false);
    setShowStep5(false);
  }

  const nextStep3To4  = () => {
    
    setShowStep1(false);
    setShowStep2(false);
    setShowStep3(false);
    setShowStep4(true);
    setShowStep5(false);
  }

  const nextStep4To5 = () => {
    if(typeChannelForgotPass == '3' && idCardType == '2'){
      setShowStep1(false);
      setShowStep2(false);
      setShowStep3(false);
      setShowStep4(false);
      setShowStep5(true);
    }else{
      Swal.fire({
        icon: 'success',
        title: 'แจ้งเตือน',
        text: 'ทำการเปลี่ยนรหัสผ่านของท่านเสร็จสิ้น',
        confirmButtonText: 'ตกลง',
      }).then((result) => {
        if (result.isConfirmed) {
          closeShowStep1(); 
          onClose();
          window.location.reload(false);
        }
      })
    }
  }

  

  const [passwordInputText , setPasswordInputText] = useState('password');
  const [passwordInputConfirmText , setPasswordInputConfirmText] = useState('password');

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

  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
   
    const handleBirthDateChange = (date) => {
        if (date) {
            const thaiYear = parseInt(format(date, 'yyyy', { useAdditionalWeekYearTokens: true })) + 543;
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${thaiYear}`;
            console.log("date:", formattedDate); 
            setSelectedBirthDate(date);
        }
    };
  if (!isVisible) return null;
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center '> 

          <div className='w-[800px] flex flex-col bg-gradient-to-r from-EEF0F6 to-EFEAE1 rounded-xl'>
            
            
            <div className='bg-white  my-4 mx-4 rounded-xl '>
                  <div className='flex mt-3 mb-2 mx-5'>
                    <div className='w-full grid grid-cols-2 gap-4 place-content-between'>
                    <div className='items-start justify-start text-left font-bold text-2xl'>ลืมรหัสผ่าน</div>
                    <button className='text-black bg-transparent border-none text-xl place-self-end' onClick={() => {closeShowStep1(); onClose();}}>x</button>
                  </div>
                  <hr/>
                  </div>
                  <div className='flex px-4 my-4' >
                    <div className='w-full items-center justify-center'>
                      {showStep1 == true? 
                      <>
                        <AiFillLock size={100} className='text-[#274082] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]'/>
                        <h3 className='text-[#274082]'>ระบุรหัสผู้ใช้งาน / เลขบัตรประจำตัวประชาชน / Passport</h3>
                        <input value={userOrIdCard} onChange={(e) => setUserOrIdCard(e.target.value)}
                          className=" block bg-[#EEF0F6] w-[95%] rounded-lg py-3 pl-3 focus:outline-blue-400 mx-auto"
                          type="text"
                        />
                        <Link className='mt-8 inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none 
                        text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 '
                          onClick={() => nextStep1To2()}
                          >
                          ถัดไป            
                        </Link>
                      </> 
                      : showStep2 == true?  
                        <>
                          <div className='flex flex-col gap-10'>
                            
                            <input type='radio' id='forgotChannel1' className='hidden'  value='1' name='forgotCahannel' onChange={slelctChannelForgotPass}/>
                            <label htmlFor='forgotChannel1' className= {`w-full bg-white rounded-3xl outline outline-offset-2 outline-2 hover:outline-[#4B68B6] ${typeChannelForgotPass == '1' ? "outline-[#4B68B6]" :  "outline-[#DBDBDB]"}`} >
                                <div className='flex flex-row p-1 gap-2 items-center justify-start w-[95%] mx-auto' >
                                    <div className='basis-[15%] justify-start items-center text-center'>
                                      <div className={`w-[60%] mx-auto h-14 rounded-[50%] justify-start items-center ${typeChannelForgotPass == '1' ? "bg-[#E6E9F5]" :  "bg-[#E3E3E3]"}`}>
                                        <TbMailForward className={`py-3 ${typeChannelForgotPass == '1' ? "text-[#274082]" :  "text-[#565656]"}`} size={30} />
                                        </div>
                                    </div>
                                    <div className='basis-[60%] mx-auto justify-start items-start text-left '>
                                    <h3 className={`font-bold mb-0 ${typeChannelForgotPass == '1' ? "text-[#274082]" :  "text-[#565656]"}`}  >ยืนยันตัวตนด้วยอีเมล</h3>
                                      <h5 className='text-[#9D9D9D] mt-0'>Activate Code จะถูกส่งไปที่อีเมลของท่านที่ลงทะเบียนไว้</h5>
                                    </div>
                                    <div className='basis-[15%]'>
                                      {
                                      (
                                        typeChannelForgotPass == '1' ? 
                                        <AiFillCheckCircle className='text-[#4F61A8]' size={40} />
                                        :
                                        '' 
                                      )
                                      }
                                      
                                    </div>
                                </div>
                            </label>
                            <input type='radio' id='forgotChannel2' value='2' className='hidden' name='forgotCahannel'  onChange={slelctChannelForgotPass} />
                            <label htmlFor='forgotChannel2' className= {`w-full bg-white rounded-3xl outline outline-offset-2 outline-2 hover:outline-[#4B68B6] ${typeChannelForgotPass == '2' ? "outline-[#4B68B6]" :  "outline-[#DBDBDB]"}`} >
                                <div className='flex flex-row p-1 gap-2 items-center justify-start w-[95%] mx-auto' >
                                    <div className='basis-[15%] justify-start items-center text-center'>
                                      <div className={`w-[60%] mx-auto h-14 rounded-[50%] justify-start items-center ${typeChannelForgotPass == '2' ? "bg-[#E6E9F5]" :  "bg-[#E3E3E3]"}`}>
                                        <BsFillTelephoneFill className={`py-3 ${typeChannelForgotPass == '2' ? "text-[#274082]" :  "text-[#565656]"}`} size={25} />
                                        </div>
                                    </div>
                                    <div className='basis-[60%] mx-auto justify-start items-start text-left '>
                                      <h3 className={`font-bold mb-0 ${typeChannelForgotPass == '2' ? "text-[#274082]" :  "text-[#565656]"}`}  >ยืนยันตัวตนด้วยเบอร์โทรศัพท์</h3>
                                      <h5 className='text-[#9D9D9D] mt-0'>รหัส OTP  จะถูกส่งไปที่เบอร์โทรศัพท์ของท่านที่ลงทะเบียนไว้</h5>
                                    </div>
                                    <div className='basis-[15%]'>
                                    {
                                      (
                                        typeChannelForgotPass == '2' ? 
                                        <AiFillCheckCircle className='text-[#4F61A8]' size={40} />
                                        :
                                        '' 
                                      )
                                    }
                                    </div>
                                </div>
                            </label>
                            <input type='radio' id='forgotChannel3' className='hidden' value='3' name='forgotCahannel' onChange={slelctChannelForgotPass} />
                            <label htmlFor='forgotChannel3' className= {`w-full bg-white rounded-3xl outline outline-offset-2 outline-2 hover:outline-[#4B68B6] ${typeChannelForgotPass == '3' ? "outline-[#4B68B6]" :  "outline-[#DBDBDB]"}`} > 
                                <div className='flex flex-row p-1 gap-2 items-center justify-start w-[95%] mx-auto' >
                                    <div className='basis-[15%] justify-start items-center text-center'>
                                      <div className={`w-[60%] mx-auto h-14 rounded-[50%] justify-start items-center ${typeChannelForgotPass == '3' ? "bg-[#E6E9F5]" :  "bg-[#E3E3E3]"}`}>
                                        <TbUserExclamation className={`py-3 ${typeChannelForgotPass == '3' ? "text-[#274082]" :  "text-[#565656]"}`} size={30}  />
                                      </div>
                                    </div>
                                    <div className='basis-[60%] mx-auto justify-start items-start text-left '>
                                      <h3 className={`font-bold mb-0 ${typeChannelForgotPass == '3' ? "text-[#274082]" :  "text-[#565656]"}`}  >
                                          ลืมทั้งอีเมลและเบอร์โทรศัพท์
                                      </h3>
                                      <h5 className='text-[#9D9D9D] mt-0'>ท่านจะกรอกรายละเอียดเพิ่มเติมเพื่อตรวจสอบข้อมูล</h5>
                                    </div>
                                    <div className='basis-[15%]'>
                                      {
                                        (
                                          typeChannelForgotPass == '3' ? 
                                          <AiFillCheckCircle className='text-[#4F61A8]' size={40} />
                                          :
                                          '' 
                                        )
                                      }
                                    </div>
                                </div>
                            </label>
                          </div>
                          <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                            text-white text-lg justify-center text-center w-[30%] h-auto rounded-3xl px-10 py-3 '
                              onClick={() => nextStep2To3()}
                              >
                              {
                                (
                                  typeChannelForgotPass == '1' ? 
                                  'ส่ง Activate Code' : typeChannelForgotPass == '2' ? 
                                  'ขอรหัส OTP' :
                                  'ดำเนินการต่อ'
                                )
                              }            
                            </Link>
                        </>
                      : showStep3 == true? 
                        
                          typeChannelForgotPass == '1' ? 
                          <>
                              <h2> ยืนยันบัญชีตัวตน <br/>ด้วยรหัสผ่านทาง Email </h2>
                              <h4>รหัสยืนยันส่งไปที่อีเมล <br/> 
                                <span className='text-[#002B80]'> testxxxx@gmail.com </span>
                              </h4>
                              <h5>รหัส Ref : 4fr565</h5>
                              <div className='w-[45%] h-12 mx-auto grid grid-cols-6 gap-6'>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                              </div>
                              <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                              text-white text-lg justify-center text-center w-[30%] h-auto rounded-3xl px-10 py-3 '
                              onClick={() => nextStep3To4()}
                              >
                               ยืนยันรหัสผ่าน      
                              </Link>
                              <h4>รหัสผ่านจะหมดอายุใน <br/> 
                                <span className='text-[#002B80]'> 2 : 59 นาที</span>
                              </h4>
                          </>
                          : typeChannelForgotPass == '2' ? 
                          <>
                              <h2> ยืนยันบัญชีตัวตน <br/>ด้วยรหัส OTP ผ่านทาง SMS</h2>
                              <h4>รหัสยืนยันส่งไปที่เบอร์โทรศัพท์ <br/>   
                                <span className='text-[#002B80]'> XX-XXXX-1234 </span>
                              </h4>
                              <h5>รหัส Ref : 4fr565</h5>
                              <div className='w-[45%] h-12 mx-auto grid grid-cols-6 gap-6'>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                                <input className='w-full bg-[#EEF0F6] border-none text-center'></input>
                              </div>
                              <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                text-white text-lg justify-center text-center w-[30%] h-auto rounded-3xl px-10 py-3 '
                                onClick={() => nextStep3To4()}
                                >
                                ยืนยันรหัสผ่าน      
                              </Link>
                              <h4>รหัสผ่านจะหมดอายุใน <br/> 
                                <span className='text-[#002B80]'> 2 : 59 นาที</span>
                              </h4>
                          </>
                          : 
                            idCardType == "1" ?  
                              <>
                                <div className='w-[95%] mx-auto items-start justify-start text-left'> 
                                  <h2 className='text-[#543FBF] mb-0'>กรอกข้อมูลส่วนตัว {'(สำหรับบุคคลไทย)'}</h2>
                                  <hr/>
                                  <h4 className='text-[#939393] mt-0' >กรอกข้อมูลเพื่อกำหนดรหัสผ่านใหม่</h4>
                                      <div className='grid grid-cols-2 gap-2 '>
                                        <div className="grid grid-row-2 gap-2  ">
                                          <div className="text-lg my-1 ">
                                            เลขประจำตัวประชาชน 13 หลัก<span className='text-red-500'>*</span>
                                          </div>
                                          <input placeholder="ระบุ เลขประจำตัวประชาชน 13 หลัก" 
                                              className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                              type={passwordInputText}
                                          />
                                        </div>

                                        <div className="grid grid-row-2 gap-2  relative">
                                          <div className='flex flex-1'>
                                            <div className="text-lg my-1 ">
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
                                            
                                          <input placeholder="ระบุ เลขประจำตัว4ประชาชน 13 หลัก" 
                                              className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                              type={passwordInputText}
                                          />
                                        </div>
                                      </div>

                                    <div className='grid grid-cols-2 gap-2 '>
                                      <div className="grid grid-row-2 gap-2  ">
                                        <div className="text-lg my-1 ">
                                            วัน-เดือน-ปีเกิด <span className='text-red-500'>*</span>
                                        </div>
                                        <Datepicker className='block w-full bg-[#EEF0F6] border-none p-2 rounded-md' 
                                              dateFormat="dd/MM/yyyy" locale={th} 
                                              showMonthDropdown showPopperArrow={false} 
                                              useShortMonthInDropdown showYearDropdown
                                              onChange={handleBirthDateChange} 
                                              selected={selectedBirthDate}
                                              placeholderText='ระบุ วันเดือนปีเกิด'
                                        /> 
                                      </div>
                                    </div>

                                    <h4 className='text-xl my-1 '>ชื่อ ภาษาไทย</h4>
                                    <div className='grid grid-cols-3 gap-8 mt-4'>
                                        <div className="grid-flow-row gap-[0.5rem]">
                                            <div className="text-sm my-1 ">ชื่อ <span className='text-red-500'>*</span></div>
                                            <input placeholder="ระบุ ชื่อ" 
                                                className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                                type="text"
                                            />
                                        </div>
                                        <div className="grid-flow-row gap-[0.5rem]">
                                            <div className="text-sm my-1 ">ชื่อกลาง </div>
                                            <input placeholder="ระบุ ชื่อกลาง" 
                                                className="block bg-[#EEF0F6] border-none p-2 rounded-md "
                                                type="text"
                                            />
                                        </div>
                                        <div className="grid-flow-row gap-[0.5rem]">
                                            <div className="text-sm my-1 ">นามสกุุล  <span className='text-red-500'>*</span></div>
                                            <input placeholder="ระบุ นามสกุล" 
                                                className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="items-center justify-center text-center mx-auto">
                                      <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                        text-white text-lg justify-center text-center w-[20%] h-auto rounded-3xl px-10 py-3 '
                                        onClick={() => nextStep3To4()}
                                        >
                                        ตรวจสอบ      
                                      </Link>
                                    </div>
                                </div>
                              </>
                            : 
                             <div className='w-[95%] mx-auto items-start justify-start text-left'> 
                                <h2 className='text-[#543FBF] mb-0'>กรอกข้อมูลส่วนตัว {'(สำหรับบุคคลต่างประเทศ)'}</h2>
                                <hr/>
                                <h4 className='text-[#939393] mt-0' >กรอกข้อมูลเพื่อกำหนดรหัสผ่านใหม่</h4>
                                <div className='grid grid-cols-2 gap-2 '>
                                  <div className="grid grid-row-2 gap-2  ">
                                    <div className="text-lg my-1 ">
                                      Passport<span className='text-red-500'>*</span>
                                    </div>
                                    <input placeholder="ระบุ Passport" 
                                        className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                        type={passwordInputText}
                                    />
                                  </div>
                                </div>
                                <h4 className='text-xl my-1 '>ชื่อ ภาษาไทย</h4>
                                <div className='grid grid-cols-3 gap-8 mt-4'>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">ชื่อ <span className='text-red-500'>*</span></div>
                                        <input placeholder="ระบุ ชื่อ" 
                                            className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">ชื่อกลาง </div>
                                        <input placeholder="ระบุ ชื่อกลาง" 
                                            className="block bg-[#EEF0F6] border-none p-2 rounded-md "
                                            type="text"
                                        />
                                    </div>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">นามสกุุล  <span className='text-red-500'>*</span></div>
                                        <input placeholder="ระบุ นามสกุล" 
                                            className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <h4 className='text-xl my-1 '>ชื่อ ภาษาอังกฤษ</h4>
                                <div className='grid grid-cols-3 gap-8 mt-4'>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">Name <span className='text-red-500'>*</span></div>
                                        <input placeholder="ระบุ ชื่อ" 
                                            className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">Middle name </div>
                                        <input placeholder="ระบุ ชื่อกลาง" 
                                            className="block bg-[#EEF0F6] border-none p-2 rounded-md "
                                            type="text"
                                        />
                                    </div>
                                    <div className="grid-flow-row gap-[0.5rem]">
                                        <div className="text-sm my-1 ">Surname  <span className='text-red-500'>*</span></div>
                                        <input placeholder="ระบุ นามสกุล" 
                                            className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-3 gap-8 mt-4'>
                                  <div className="grid-flow-row gap-[0.5rem]">
                                      <div className="text-sm my-1 ">วันเดือนปีเกิด <span className='text-red-500'>*</span></div>
                                      <Datepicker className='block w-full bg-[#EEF0F6] border-none p-2 rounded-md' 
                                              dateFormat="dd/MM/yyyy" locale={th} 
                                            showMonthDropdown showPopperArrow={false} 
                                            useShortMonthInDropdown showYearDropdown
                                            onChange={handleBirthDateChange} 
                                            selected={selectedBirthDate}
                                            placeholderText='ระบุ วันเดือนปีเกิด'
                                      /> 
                                  </div>
                                  <div className="grid-flow-row gap-[0.5rem]">
                                      <div className="text-sm my-1 ">อีเมลใหม่ <span className='text-red-500'>*</span></div>
                                      <input placeholder="ระบุ ชื่อกลาง" 
                                          className="block bg-[#EEF0F6] border-none p-2 rounded-md "
                                          type="text"
                                      />
                                  </div>
                                  <div className="grid-flow-row gap-[0.5rem]">
                                      <div className="text-sm my-1 ">เบอร์โทรศัพท์ใหม่  <span className='text-red-500'>*</span></div>
                                      <input placeholder="ระบุ นามสกุล" 
                                          className="block bg-[#EEF0F6] border-none p-2 rounded-md"
                                          type="text"
                                      />
                                  </div>
                              </div>
                              <div className="items-center justify-center text-center mx-auto">
                                <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                  text-white text-lg justify-center text-center w-[20%] h-auto rounded-3xl px-10 py-3 '
                                  onClick={() => nextStep3To4()}
                                  >
                                  บันทึกข้อมูล      
                                </Link>
                              </div>
                            </div>
                          

                       
                      : showStep4 ?
                        <>
                          <div className='w-3/4 mx-auto items-start justify-start text-left'> 
                            <h2 className='text-[#543FBF] mb-0'>กรอกรหัสผ่านใหม่</h2>
                            <hr/>
                            <h4 className='text-[#939393] mt-0' >กรอกข้อมูลเพื่อกำหนดรหัสผ่านใหม่</h4>
                        
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
                                onClick={() => nextStep4To5()}
                                >
                                ดำเนินการต่อ      
                              </Link>
                            </div>
                        </div>
                            
                        </>
                      : showStep5 ?
                         <>
                            <div className='w-3/4 mx-auto items-start justify-start text-center'> 
                              <h1 className='font-bold text-3xl'>บันทึกข้อมูลสำเร็จ</h1>
                              <h3 className='font-light text-lg' >
                                  โปรดยืนยันตัวตนผ่าน e-Kyc หรือมายืนยันตัวตนด้วยตนเอง<br/>
                                  ที่กรมพัฒนาธุรกิจการค้าทั่วประเทศ
                              </h3>
                              <div className="items-center justify-center text-center mx-auto">
                                <Link className='inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                  text-white text-lg justify-center text-center w-[30%] h-auto rounded-3xl px-10 py-3 '
                                  onClick={() => window.location.reload(false)}
                                  >
                                  ดำเนินการยืนยันตัวตน  
                                </Link>
                              </div>
                              <div className="items-center justify-center text-center mx-auto">
                                <Link className='inline-block bg-[#E6E9F5] border-none mt-8 text-[#543FBF]
                                  text-lg justify-center text-center w-[30%] h-auto rounded-3xl px-10 py-3 '
                                  onClick={() => window.location.reload(false)}
                                  >
                                  กลับหน้าหลัก      
                                </Link>
                              </div>
                            </div>
                         </>     
                      : ''
                        
                      }
                      
                    </div>
                  </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ForgotPasswordModalForm