import React from "react";
import { Link } from "react-router-dom";
import Content from "../../../components/layoutAfterLogin/Content";
import Navigation from "../../../components/layoutAfterLogin/Navigation";
import ProfileDelegate from "../../../components/propsPage/profileDelegate";
import { TbGavel } from "react-icons/tb";
import { MdBallot } from "react-icons/md";
import { AiFillSave, AiOutlineCheck } from "react-icons/ai";

function InformationpersonForDelegate() {
  return (
    <>
      <Content />
      <div className="flex bg-gradient-to-b from-EEF0F6 to-EFEAE1">
        <Navigation />
        <div className="flex-1 my-10">
          <div className="w-auto ml-8 mr-4 mx-auto rounded-2xl flex flex-row">
            <div className="w-auto py-4 rounded-l-xl bg-gradient-to-b from-977EBB to-6482C2  px-10 flex flex-row gap-[2rem]">
              <div className="bg-[#BABFDF] py-12 px-[0.5rem] items-center justify-start rounded-full flex flex-col gap-[3.38rem] h-[45%]">
                <div className="rounded-3xl bg-[#343F9E] shadow-[0px_2px_4px_rgba(40,_82,_121,_0.1)] overflow-hidden flex flex-row p-[0.5rem] ">
                  <TbGavel className="text-white" size={30} />
                </div>
                <div
                  className="rounded-3xl bg-[#CFD2E9] flex flex-col py-[1rem] px-[0.25rem] 
                    items-center justify-center gap-[1.5rem] "
                >
                  <div className="rounded-3xl bg-white flex flex-row p-[0.5rem] ">
                    <MdBallot className="text-[#343F9E]" size={30} />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[2rem]">
                    <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center">
                      <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
                    </div>
                    <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center">
                      <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-white shadow-[0px_2px_4px_rgba(40,_82,_121,_0.1)] overflow-hidden flex flex-row p-[0.5rem] ">
                  <AiFillSave className="text-[#343F9E]" size={30} />
                </div>
              </div>
              <div className="flex-1 flex flex-col  py-10  px-[0rem] box-border  gap-[2rem]">
                <div className="self-stretch flex flex-col ">
                  <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                    <div className="flex relative leading-[150%] text-xl text-[#F5F8FF] font-bold">
                      <AiOutlineCheck /> Step 1
                    </div>
                  </div>
                  <div className="self-stretch relative text-[1rem] leading-[150%] text-white">
                    ข้อตกลงและเงื่อนไข
                  </div>
                </div>
                <div className="h-[14.5rem] flex flex-col pt-[1.58rem] px-[0rem] pb-[0rem] box-border  gap-[1.13rem]">
                  <div className="w-[11.44rem] flex flex-col ">
                    <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF] font-bold">
                        Step 2
                      </div>
                    </div>
                    <div className="self-stretch relative text-[1rem] leading-[150%] text-white">
                      ระบุข้อมูลการลงทะเบียน
                    </div>
                  </div>
                  <div className="flex flex-col  gap-[2rem] text-[0.88rem] text-white">
                    <div className="h-[1.5rem] flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative leading-[150%]">
                        ข้อมูลส่วนตัว
                      </div>
                    </div>
                    <div className="h-[1.5rem] flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative leading-[150%]">
                        ข้อมูลการติดต่อ และ ที่อยู่
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col ">
                  <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF] font-bold">
                      Step 3
                    </div>
                  </div>
                  <div className="self-stretch relative text-[1rem] leading-[150%] text-white">
                    เลือกประเภทการลงทะเบียน
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[90%] bg-[#fffffa80] rounded-r-xl lg:px-20 sm:px-10  py-5">
              <h1 className="text-2xl font-semibold text-[#1A3160] ">
                เปลียนประเภทผู้แทน
              </h1>
              <div className="w-full mb-8 rounded-3xl shadow-[0px_2px_10px_rgba(36,36,36,0.1)] ">
                <div className="w-[90%] mx-auto">
                  <div className="w-full my-4 py-4">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                      <div className="grid-flow-row gap-[0.5rem] relative">
                        <div className="text-sm my-1 ">
                          ประเภทผู้แทน <span className="text-red-500">*</span>
                        </div>
                        <div className="flex flex-row">
                          <select
                            placeholder="เลือกประเภทผู้แทนเดิม"
                            className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3 cursor-pointer"
                          >
                            <option value={0}>เลือกประเภทผู้แทน</option>
                            <option value={1}>ผู้ทำบัญชี</option>
                            <option value={2}>ผู้สอบบัญชี</option>
                            <option value={3}>ผู้บังคับหลักประกัน</option>
                            <option value={4}>
                              หัวหน้าสำนักงานบัญชีคุณภาพ
                            </option>
                            <option value={5}>
                              ผู้รับรองลายมือชื่อบริษัทมหาชน
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <ProfileDelegate />
                    <div className="my-4 flex justify-end mt-8">
                      <Link
                        className="inline-block bg-[#E6E9F5] text-[#543FBF] justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 mr-4 text-lg "
                        to="/member/termsconditionsDelegate"
                      >
                        ย้อนกลับ
                      </Link>
                      <Link
                        className="inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA] border-none 
                                        text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3"
                        to="/member/informationaddressfordelegate"
                      >
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
  );
}

export default InformationpersonForDelegate;
