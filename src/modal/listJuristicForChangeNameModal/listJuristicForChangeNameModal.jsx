import React from "react";
import { Link } from "react-router-dom";
import { BsHandIndex } from "react-icons/bs";
import Swal from "sweetalert2";
import close from "../../asseets/images/close.png";

function ListJuristicForChangeNameModal({ isVisible, onClose }) {
  const saveEditInformation = () => {
    Swal.fire({
      icon: "success",
      title: "แจ้งเตือน",
      text: "บันทึกข้อมูลเสร็จสิ้น",
      confirmButtonText: "กลับหน้าหลัก",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/member/home";
      }
    });
  };

  if (!isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
                flex justify-center items-center "
      >
        <div className="bg-white w-[40rem] my-4 mx-4 rounded-xl ">
          <div className="flex mt-5 mb-2 mx-5">
            <div className="w-full flex basis-[100%] place-content-between">
              <div className="items-start justify-start text-left font-bold text-[1.25rem] text-[#543FBF]">
                ต้องการอัพเดทข้อมูลในนิติบุคคลที่ท่านเป็นกรรมการ/หุ้นส่วนหรือไม่
              </div>
              <button
                className="text-black justify-end items-end bg-transparent border-none text-xl place-self-end"
                onClick={() => {
                  onClose();
                }}
              >
                <img src={close} alt="close"></img>
              </button>
            </div>
          </div>
          <hr />
          <div className="flex px-4 my-4">
            <div className="w-full items-start justify-start">
              <h5 className="text-lg text-[#939393] font-light my-0 ">
                <BsHandIndex /> เลือกนิติบุคคลที่ต้องการอัพเดทข้อมูล
              </h5>
              <div className="w-[90%] mx-auto items-start justify-start text-left">
                <div className="w-full my-4 text-[#222222]">
                  <input id="all" type="checkbox" />
                  <label htmlFor="all"> เลือกทั้งหมด </label>
                  <div className="mx-5 mt-4">
                    <div className="flex flex-row my-2">
                      <input
                        id="juristic-1"
                        className="basis-[5%]"
                        type="checkbox"
                      />
                      <label
                        htmlFor="juristic-1"
                        className="basis-[95%] flex flex-row"
                      >
                        <div className="basis-[50%]">
                          บริษัททดสอบระบบ01 จำกัด
                        </div>
                        <div className="basis-[50%]"> TODSOB01 CO., LTD. </div>
                      </label>
                    </div>
                    <div className="flex flex-row my-2">
                      <input
                        id="juristic-2"
                        className="basis-[5%]"
                        type="checkbox"
                      />
                      <label
                        htmlFor="juristic-2"
                        className="basis-[95%] flex flex-row"
                      >
                        <div className="basis-[50%]">
                          บริษัททดสอบระบบ02 จำกัด{" "}
                        </div>
                        <div className="basis-[50%]"> TODSOB02 CO., LTD. </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="items-center justify-center text-center mx-auto">
                  <Link
                    className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                        text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 "
                    onClick={() => saveEditInformation()}
                  >
                    บันทึกข้อมูล
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

export default ListJuristicForChangeNameModal;
