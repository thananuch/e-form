import React, { useState } from "react";
import { Link } from "react-router-dom";
import Content from "../../components/layoutAfterLogin/Content";
import Navigation from "../../components/layoutAfterLogin/Navigation";
import ConfirmCancelUserModal from "../../modal/confirmCancelUserModal/confirmCancelUserModal";

function ViewProfileForCancel() {
  const [showMoadlConfirmCancelUser, setShowMoadlConfirmCancelUser] =
    useState(false);
  return (
    <>
      <Content />
      <div className="flex bg-gradient-to-b from-EEF0F6 to-EFEAE1">
        <Navigation />
        <div className="flex-1 my-10">
          <div className="w-auto ml-8 mr-4 pl-[3.625rem] pr-[3.5rem] py-[3.5rem] pt-[1.5rem] bg-[#FDFDFD] rounded-2xl">
            <h1 className="text-[1.875rem] font-semibold text-[#1A3160] ">
              ยกเลิกบัญชีผู้ใช้งาน
            </h1>
            <div className="w-full mb-8 rounded-3xl border-4 border-[#E8A4A4] border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.05)] ">
              <div className="py-4 px-8">
                <div className="text-[1.5rem]">
                  ยืนยันการยกเลิกบัญชีผู้ใช้งาน
                </div>
                <h4 className="text-[1.25rem]">ข้อมูลทั่วไป</h4>
                <hr />
                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="grid-rows-2 gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">
                      เลขประจำตัวประชาชน 13 หลัก
                    </div>
                    <div>xxxxxxxxxxxxx</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">เพศ</div>
                    <div>ชาย</div>
                  </div>
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">
                      วัน-เดือน-ปีเกิด
                    </div>
                    <div>24/ตุลาคม/2532</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">ชื่อภาษาไทย</div>
                    <div>นายทดสอบ ระบบ</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">
                      ชื่อ ภาษาอังกฤษ
                    </div>
                    <div>Mr. Test System</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">อาชีพ</div>
                    <div>อื่นๆ</div>
                  </div>
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">ระบุอาชีพ</div>
                    <div>โปรแกรมเมอร์</div>
                  </div>
                </div>

                <h4 className="text-xl">ข้อมูลการติดต่อ และ ที่อยู่</h4>
                <hr />
                <h5 className="text-lg">ข้อมูลการติดต่อ</h5>
                <div className="grid grid-cols-2 gap-8 ">
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">โทรศัพท์</div>
                    <div>-</div>
                  </div>
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">
                      โทรศัพท์มือถือ
                    </div>
                    <div>0900933333</div>
                  </div>
                </div>
                <h5 className="text-lg">ที่อยู่</h5>
                <div className="grid grid-cols-1 gap-8 ">
                  <div className="grid-flow-row gap-[0.5rem] ">
                    <div className="text-sm font-bold my-1 ">
                      รายละเอียดที่อยู่
                    </div>
                    <div>
                      เลขที่ 98 ห้องเลขที่ 96/98, ชั้นที่ 6 ,ซอย รัชดาภิเษก 19,
                      ถนน รัชดาภิเษก อำเภอ/เขต ดินแดง , ตำบล/แขวง ดินแดง
                      รหัสไปรษณีย์ 10400
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
                    className="inline-block bg-gradient-to-r from-[#BF3F3F] to-[#BA5757]
                        text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3"
                    onClick={() => setShowMoadlConfirmCancelUser(true)}
                  >
                    ยกเลิกบัญชีผู้ใช้งาน
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmCancelUserModal
        isVisible={showMoadlConfirmCancelUser}
        onClose={() => setShowMoadlConfirmCancelUser(false)}
      />
    </>
  );
}

export default ViewProfileForCancel;
