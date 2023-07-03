import React from "react";
import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import close from "../../asseets/images/close.png";
import pointcircle from "../../asseets/images/pointcircle.png";

function CancelUsernameModal({ isVisible, onClose }) {
  if (!isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
                flex justify-center items-center z-40"
      >
        <div className="bg-white w-[34.75rem] h-[34.75rem] rounded-xl">
          <div className="flex justify-between m-4">
            <div className="items-start justify-start font-bold text-[1.25rem] text-[#BF3F3F] ml-10 mt-2">
              แจ้งเตือนผู้ใช้งานระบบ
            </div>
            <button
              className="text-black bg-transparent border-none text-xl cursor-pointer"
              onClick={() => {
                onClose();
              }}
            >
              <img src={close} alt="close" />
            </button>
          </div>
          <hr className="w-[80%]" />
          <div className="flex px-4 my-4">
            <div className="w-full items-center justify-center">
              <div className="w-[90%] mx-auto items-start justify-start text-center">
                <AiFillWarning className="text-[#D0A471] w-[3.5625rem] h-[3.5625rem]" />

                <div className="bg-[#F4E1CB] rounded-2xl w-[29.875rem] h-[5.875rem]">
                  <div className="flex justify-center">
                    <div className="text-[#96642A] text-[1rem] p-6">
                      ขณะนี้ท่านมีคำขอค้างอยู่ในระบบ <br />
                      ให้ท่านดำเนินการทำคำขอให้เสร็จก่อนยกเลิกบัญชีผู้ใช้งาน
                    </div>
                  </div>
                </div>

                <div className="text-left text-[#274082]">
                  <p className="text-[0.875rem] font-bold mt-4">
                    <img src={pointcircle} alt="pointcircle" />{" "}
                    คำขอที่ค้างอยู่ในระบบ
                  </p>
                  <div className="pl-8">
                    <div className="text-[0.75rem]">
                      <b className="font-bold">1. เลขที่อ้างอิงคำขอ : </b>
                      <b className="font-normal"> 1008965012400002 </b>
                      <b className="font-bold">ประเภทคำขอ :</b>
                      <b className="font-normal"> แก้ไขเพิ่มเติมบริษัท</b>
                    </div>
                    <div className="text-[0.75rem] mt-2">
                      <b className="font-bold">2. เลขที่อ้างอิงคำขอ : </b>
                      <b className="font-normal"> 1008965012400003 </b>
                      <b className="font-bold">ประเภทคำขอ :</b>
                      <b className="font-normal"> จัดตั้งห้างหุ้นส่วนจำกัด</b>
                    </div>
                    <div className="text-[0.75rem]  mt-2">
                      <b className="font-bold">3. เลขที่อ้างอิงคำขอ : </b>
                      <b className="font-normal"> 1008965012400003 </b>
                      <b className="font-bold">ประเภทคำขอ :</b>
                      <b className="font-normal"> แก้ไขเพิ่มเติมบริษัท</b>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center text-center">
                  <Link
                    className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-28
                                        text-white text-lg w-[9.0625rem] rounded-3xl px-[0.5rem] py-[0.5rem]"
                    to="/member/viewprofileforcancel"
                  >
                    รับทราบ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CancelUsernameModal;
