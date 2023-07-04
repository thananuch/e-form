import React from "react";
import { Link } from "react-router-dom";
import Content from "../../components/layoutAfterLogin/Content";
import Navigation from "../../components/layoutAfterLogin/Navigation";
import { AiFillSave } from "react-icons/ai";
import { MdBallot } from "react-icons/md";
import Swal from "sweetalert2";
import ProfileDelegate from "../../components/propsPage/profileDelegate";

function ChangetypeDelegatePage() {
  const changeComplete = () => {
    Swal.fire({
      icon: "success",
      title: "อัพเดทข้อมูลเรียบร้อยแล้ว",
      confirmButtonText: "กลับหน้าหลัก",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "home";
      }
    });
  };

  return (
    <>
      <Content />
      <div className="flex bg-gradient-to-b from-EEF0F6 to-EFEAE1">
        <Navigation />
        <div className="flex-1 my-10">
          <div className="w-auto ml-8 mr-4 bg-[#FDFDFD] rounded-2xl flex flex-row">
            <div className="w-[21.4375rem] py-4 rounded-l-xl bg-gradient-to-b from-977EBB to-6482C2 px-8 flex flex-row gap-[2rem]">
              <div className="bg-[#BABFDF]  py-12 px-[0.5rem]  h-[16rem] items-center justify-start rounded-full flex flex-col gap-[2rem]">
                <div
                  className="rounded-full bg-[#CFD2E9] py-[1rem] px-[0.25rem] 
                                items-center justify-center gap-[2rem] "
                >
                  <div className="flex flex-col items-center justify-center gap-[2rem] ">
                    <div className="rounded-3xl bg-[#343F9E] flex flex-row p-[0.5rem] items-start justify-start">
                      <MdBallot className="text-white" size={30} />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[2rem] pt-8">
                    <div
                      className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem]
                                            box-border items-center justify-center bg-white "
                    >
                      <div className="relative rounded-[50%] bg-[#343F9E] w-[0.5rem] h-[0.5rem]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[2rem] ">
                  <div className="rounded-3xl bg-white flex flex-row p-[0.5rem] items-start justify-start">
                    <AiFillSave className="text-[#343F9E]" size={30} />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col py-12 px-[0rem] box-border items-start justify-start gap-[2rem]">
                <div className="flex flex-col ">
                  <div className="font-bold text-xl text-[#F5F8FF] pt-3">
                    Step 1
                  </div>
                  <div className="font-light text-lg text-[#F5F8FF]">
                    ระบุข้อมูลการลงทะเบียน
                  </div>

                  <div className="font-light text-sm text-[#F5F8FF]  pt-8">
                    ข้อมูลส่วนตัว
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-xl text-[#F5F8FF] pt-3">
                    Step 2
                  </div>
                  <div className="font-light text-lg text-[#F5F8FF]">
                    ยืนยันการส่งข้อมูล
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-3/4 px-12 py-7 rounded-r-xl">
              <h1 className="text-[1.875rem] font-semibold text-[#1A3160]">
                เปลี่ยนกลุ่มผู้แทนจดทะเบียน
              </h1>
              <div className="w-full mb-8 rounded-3xl shadow-[0px_2px_10px_rgba(36,36,36,0.1)]">
                <div className="w-[90%] mx-auto">
                  <div className="w-full my-4 py-4">
                    <ProfileDelegate />
                    <h4 className="text-xl">เลือกประเภทผู้แทน</h4>
                    <div className="grid lg:grid-cols-2 grid-cols-1  gap-8">
                      <div>
                        <div className="text-sm my-1 ">
                          ประเภทผู้แทนเดิม
                          <span className="text-red-500">*</span>
                        </div>
                        <div className="flex flex-row">
                          <select
                            placeholder="เลือกประเภทผู้แทนเดิม"
                            disabled
                            className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                                                    disabled:bg-[#E2E2E2] disabled:text-black text-[14px]"
                          >
                            <option value={0}>เลือกประเภทผู้แทน</option>
                          </select>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-sm my-1">
                          ประเภทผู้แทนที่ต้องการเปลี่ยน
                          <span className="text-red-500">*</span>
                        </div>
                        <div className="flex flex-row">
                          <select
                            placeholder="เลือกประเภทผู้แทนเดิม"
                            className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3 disabled:bg-[#E2E2E2] disabled:text-black text-[14px] cursor-pointer"
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

                    <div className="my-4 flex justify-end mt-8">
                      <Link
                        className="inline-block bg-[#E6E9F5] text-[#543FBF] justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 mr-4 text-lg"
                        to="/member/home"
                      >
                        ย้อนกลับ
                      </Link>
                      <Link
                        className="inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA] border-none 
                                        text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3"
                        onClick={() => changeComplete()}
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

export default ChangetypeDelegatePage;
