import React from 'react'

import { Link } from 'react-router-dom'

import Content from '../../components/layoutAfterLogin/Content';
import Navigation from '../../components/layoutAfterLogin/Navigation';
import InformationpersonForm from '../../components/propsPage/informationpersonForm';

import { MdBallot } from "react-icons/md";
import { AiFillSave } from "react-icons/ai";

function Editinformationperson() {
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

                                    <div className='rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem]
                                            box-border items-center justify-center '>
                                        <div className='relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]' />
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
                                <div className='font-light text-sm text-[#F5F8FF] pt-8'>
                                    ข้อมูลการติดต่อ และ ที่อยู่
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
                        <h1 className='text-2xl font-semibold text-[#1A3160] '>แก้ไขข้อมูลส่วนบุคคล</h1>
                        <div className='w-full mb-8 rounded-3xl shadow-[0px_2px_10px_rgba(36,36,36,0.1)] '>
                            <div className='w-[90%] mx-auto'>
                                <div className='w-full my-4 py-4'>
                                    <InformationpersonForm />
                                    <div className='my-4 flex justify-end mt-8'>
                                        <Link className='inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA] border-none 
                                        text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3'
                                           to='/member/editinformationaddress'  >
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

export default Editinformationperson