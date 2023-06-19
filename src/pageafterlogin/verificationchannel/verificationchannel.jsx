import React ,{useState}from 'react'
import { Link } from 'react-router-dom'

import Content from '../../components/layoutAfterLogin/Content'; 
import Navigation from '../../components/layoutAfterLogin/Navigation';
import dbdsmartImg from '../../asseets/images/dbdsmartImg.png';
import ndidimg from '../../asseets/images/ndidimg.png';
import officerimg from '../../asseets/images/officerimg.png';
import thaidImg from '../../asseets/images/thaidImg.png';
import appleStore from '../../asseets/images/apple_store.png'
import playStore from '../../asseets/images/google_play.png'

import { RxGear } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown,MdOutlineHail } from "react-icons/md";

function Verificationchannel() {
    const [openStepThaid, setOpenStepThaid] = useState(false);
    const [openAppThaid, setOpenAppThaid] = useState(false);

    const [openStepDBDSmart, setStepOpenDBDSmart] = useState(false);
    const [openAppDBDSmart, setOpenAppDBDSmart] = useState(false);

    const [openStepNdid, setOpenStepNdid] = useState(false);
    const [openAppNdid, setOpenAppNdid] = useState(false);

    const [openStepOfficer, setOpenStepOfficer] = useState(false);
    const [openAppOfficer, setOpenAppOfficer] = useState(false);

  return (
    <>
        <Content/>
        <div className="flex bg-gradient-to-b from-EEF0F6 to-EFEAE1">
            <Navigation/>
            <div className='flex-1 h-screen mt-10'>
            <div className="w-[90rem] ml-[5%] px-20 py-7 bg-gradient-to-b from-[#D4DFFD] to-[#EADCC8] rounded-2xl ">
                <div class="flex flex-col w-full">
                    <h2 className="text-2xl font-semibold ">ยืนยันตัวตน</h2>
                    <h3 className="text-lg font-thin mt-0">เลือกวิธีการยืนยันตัวตน</h3>
                </div>

                <div class="flex flex-wrap w-full gap-8">
                    <div className='basis-1/5 rounded-xl bg-white p-4'>
                        <img alt='thaidImg' src={thaidImg}  />
                        <h3 className='text-[#5B2D90]'>ยืนยันตัวตนด้วย ThaID </h3>
                        <div className='flex'>
                            <div className='flex-none'>
                                <div className='rounded-3xl bg-[#D4DFFD] flex flex-row p-[0.5rem] items-start justify-start'>
                                    <RxGear className='text-[#5B2D90]' size={25} />
                                </div>
                            </div>
                            <div className='flex-auto ml-4'>
                                <h4 className='justify-center items-center my-2 text-[#543FBF]'>ขั้นตอนยืนยันตัวตน</h4>
                                <h6 className={`${!openStepThaid && "hidden"} text-sm my-0`}>
                                    1. เลือกยืนยันตัวตนด้วย ThaID <br/>
                                    2. ยืนยันตัวตนโดยใช้แอปพลิเคชัน 
                                    ThaID สแกน QR Code ท่ี่แสดง
                                    บนเว็บไซต์
                                </h6>
                            </div>
                            <div className='flex-none '>
                                <Link className='flex flex-row p-[0.25rem] items-center justify-center' onClick={() => setOpenStepThaid(!openStepThaid)} >
                                    <MdOutlineKeyboardArrowDown className='text-[#543FBF]' size={30} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex my-4'>
                            <div className='flex-none'>
                                <div className='items-center justify-center my-1'>
                                    <img alt='thaidImg' src={thaidImg} className='w-12' />
                                </div>
                            </div>
                            <div className='flex-auto ml-4'>
                                <h4 className='justify-center items-center my-2 text-[#543FBF]'>แอปพลิเคชั่น ThaID</h4>
                                <h6 className={`${!openAppThaid && "hidden"} text-sm my-0`}>
                                    1. ดาวน์โหลดแอปพลิเคชั่น ThaID จาก <img className='w-1/4' src={appleStore} alt='appleStore' /> &#160;
                                     <img className='w-1/4' src={playStore} alt='playStore' /> 
                                    <br/>
                                    2.ลงทะเบียนการใช้งาน ThaID ด้วยตนเองผ่านแอปพลิเคชัน หรือ ลงทะเบียนผ่าน เจ้าหน้าที่ ณ สำนักทะเบียนทั่วประเทศ
                                </h6>
                            </div>
                            <div className='flex-none '>
                                <Link className='flex flex-row p-[0.25rem] items-center justify-center' onClick={() => setOpenAppThaid(!openAppThaid)} >
                                    <MdOutlineKeyboardArrowDown className='text-[#543FBF]' size={30} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                            <Link className='inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA]
                            text-white text-lg justify-center text-center w-full h-auto rounded-3xl px-10 py-3'to="/informationperson" >
                                เลือก
                            </Link>
                        </div>
                    </div>
                    <div className='basis-1/5 rounded-xl bg-white p-4' >
                        <img alt='dbdsmartImg' src={dbdsmartImg}  />
                        <h3 className='text-[#5B2D90]'>ยืนยันตัวตนด้วย e-KYC </h3>
                        <div className='flex'>
                            <div className='flex-none'>
                                <div className='rounded-3xl bg-[#D4DFFD] flex flex-row p-[0.5rem] items-start justify-start'>
                                    <RxGear className='text-[#5B2D90]' size={25} />
                                </div>
                            </div>
                            <div className='flex-auto ml-4'>
                                <h4 className='justify-center items-center my-2 text-[#543FBF]'>ขั้นตอนยืนยันตัวตน</h4>
                                <h6 className={`${!openStepDBDSmart && "hidden"} text-sm my-0`}>
                                    1. เลือกยืนยันตัวตนด้วย e-KYC <br/>
                                    2. ยืนยันตัวตนโดยใช้แอปพลิเคชัน 
                                    DBD e-Service สแกน QR Code 
                                    ที่แสดงบนเว็บไซต์
                                </h6>
                            </div>
                            <div className='flex-none '>
                                <Link className='flex flex-row p-[0.25rem] items-center justify-center' onClick={() => setStepOpenDBDSmart(!openStepDBDSmart)} >
                                    <MdOutlineKeyboardArrowDown className='text-[#543FBF]' size={30} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex my-4'>
                            <div className='flex-none'>
                                <div className='items-center justify-center my-1'>
                                    <img alt='dbdsmartImg' src={dbdsmartImg}  className='w-12' />
                                </div>
                            </div>
                            <div className='flex-auto ml-4'>
                                <h4 className='justify-center items-center my-2 text-[#543FBF]'>แอปพลิเคชั่น <br/>DBD e-Service</h4>
                                <h6 className={`${!openAppDBDSmart && "hidden"} text-sm my-0`}>
                                    1. ดาวน์โหลดแอปพลิเคชั่น DBD e-Serviceจาก <img className='w-1/4' src={appleStore} alt='appleStore' /> &#160;
                                     <img className='w-1/4' src={playStore} alt='playStore' /> 
                                    <br/>
                                    2.ลงทะเบียนการใช้งาน DBD e-Service ด้วยตนเองผ่านแอปพลิเคชัน 
                                </h6>
                            </div>
                            <div className='flex-none '>
                                <Link className='flex flex-row p-[0.25rem] items-center justify-center' onClick={() => setOpenAppDBDSmart(!openAppDBDSmart)} >
                                    <MdOutlineKeyboardArrowDown className='text-[#543FBF]' size={30} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <Link className='inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA]
                            text-white text-lg justify-center text-center w-full h-auto rounded-3xl px-10 py-3'to="/informationperson" >
                                เลือก
                            </Link>
                          </div>
                    </div>
                    <div className='basis-1/5 rounded-xl bg-white p-4' >
                        <img alt='ndidimg' src={ndidimg} />
                        <h3 className='text-[#5B2D90]'>ยืนยันตัวตนด้วย NDID </h3>
                        <div className='flex'>
                            <div className='flex-none'>
                                <div className='rounded-3xl bg-[#D4DFFD] flex flex-row p-[0.5rem] items-start justify-start'>
                                    <RxGear className='text-[#5B2D90]' size={25} />
                                </div>
                            </div>
                            <div className='flex-auto ml-4'>
                                <h4 className='justify-center items-center my-2 text-[#543FBF]'>ขั้นตอนยืนยันตัวตน</h4>
                                <h6 className={`${!openStepNdid && "hidden"} text-sm my-0`}>
                                    1. เลือกยืนยันตัวตนด้วย NDID <br/>
                                    2. ยืนยันตัวตนโดยใช้แอปพลิเคชัน 
                                    ของธนาคารที่เคยยืนยันตัวตนด้วย 
                                    NDID 
                                </h6>
                            </div>
                            <div className='flex-none '>
                                <Link className='flex flex-row p-[0.25rem] items-center justify-center' onClick={() => setOpenStepNdid(!openStepNdid)} >
                                    <MdOutlineKeyboardArrowDown className='text-[#543FBF]' size={30} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex my-4'>
                            <div className='flex-none'>
                                <div className='flex flex-row p-[0.5rem] items-start justify-start'>
                                    <img alt='ndidimg' src={ndidimg} className='w-12' />
                                </div>
                            </div>
                            <div className='flex-auto ml-4'>
                                <h4 className='justify-center items-center my-2 text-[#543FBF]'>แอปพลิเคชั่น NDID</h4>
                                <h6 className={`${!openAppNdid && "hidden"} text-sm my-0`}>
                                    ยืนยันตัวตนโดยใช้แอปพลิเคชัน 
                                    ของธนาคารที่เคยยืนยันตัวตนด้วย 
                                    NDID 
                                </h6>
                            </div>
                            <div className='flex-none '>
                                <Link className='flex flex-row p-[0.25rem] items-center justify-center' onClick={() => setOpenAppNdid(!openAppNdid)} >
                                    <MdOutlineKeyboardArrowDown className='text-[#543FBF]' size={30} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                            <Link className='inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA]
                            text-white text-lg justify-center text-center w-full h-auto rounded-3xl px-10 py-3'to="/informationperson" >
                                เลือก
                            </Link>
                          </div>
                    </div>
                    <div className='basis-1/5 rounded-xl bg-white p-4 items-center justify-center text-center' >
                        <img alt='officerimg' src={officerimg} className='w-[89%]' />
                        <h3 className='text-[#5B2D90] text-left'>ยืนยันตัวตนต่อหน้าเจ้าหน้าที่ </h3>
                        <div className='flex'>
                            <div className='flex-none'>
                                <div className='rounded-3xl bg-[#D4DFFD] flex flex-row p-[0.5rem] items-start justify-start'>
                                    <RxGear className='text-[#5B2D90]' size={25} />
                                </div>
                            </div>
                            <div className='flex-auto ml-4 justify-start items-start text-left'>
                                <h4 className='my-2 text-[#543FBF]'>ขั้นตอนยืนยันตัวตน</h4>
                                <h6 className={`${!openStepOfficer && "hidden"} text-sm my-0`}>
                                    1. เตรียมบัตรประชาชน/พาสปอร์ต <br/>
                                    2. มายืนยันตัวตนที่กรมพัฒนาธุรกิจ
                                    การค้าทั่วประเทศ
                                </h6>
                            </div>
                            <div className='flex-none '>
                                <Link className='flex flex-row p-[0.25rem] items-center justify-center' onClick={() => setOpenStepOfficer(!openStepOfficer)} >
                                    <MdOutlineKeyboardArrowDown className='text-[#543FBF]' size={30} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex my-4'>
                            <div className='flex-none'>
                                <div className='rounded-3xl bg-[#D4DFFD] flex flex-row p-[0.5rem] items-start justify-start'>
                                    <MdOutlineHail className='text-[#5B2D90]' size={25} />
                                </div>
                            </div>
                            <div className='flex-auto ml-4 justify-start items-start text-left'>
                                <h4 className='my-2 text-[#543FBF]'>สิ่งที่ต้องเตรียม</h4>
                                <h6 className={`${!openAppOfficer && "hidden"} text-sm my-0`}>
                                    1. กรณีที่เป็นคนไทย   ให้เตรียมบัตรประชาชน<br/>
                                    2.กรณีที่เป็นชาวต่างชาติ  ให้เตรียมพาสปอร์ต
                                </h6>
                            </div>
                            <div className='flex-none '>
                                <Link className='flex flex-row p-[0.25rem] items-center justify-center' onClick={() => setOpenAppOfficer(!openAppOfficer)} >
                                    <MdOutlineKeyboardArrowDown className='text-[#543FBF]' size={30} />
                                </Link>
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

export default Verificationchannel