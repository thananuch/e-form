import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../asseets/images/close.png";
import pointcircle from "../../asseets/images/pointcircle.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function ChangePasswordModal({ isVisible, onClose }) {
  const [passwordOldInputText, setPasswordOldInputText] = useState("password");
  const [passwordInputText, setPasswordInputText] = useState("password");
  const [passwordInputConfirmText, setPasswordInputConfirmText] =
    useState("password");

  const toggleInputPasswordOld = () => {
    if (passwordOldInputText === "password") {
      setPasswordOldInputText("text");
      return;
    }
    setPasswordOldInputText("password");
  };

  const toggleInputPassword = () => {
    if (passwordInputText === "password") {
      setPasswordInputText("text");
      return;
    }
    setPasswordInputText("password");
  };

  const toggleInputPasswordConfirm = () => {
    if (passwordInputConfirmText === "password") {
      setPasswordInputConfirmText("text");
      return;
    }
    setPasswordInputConfirmText("password");
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center z-40"
      >
        <div className="bg-white rounded-xl w-[34.75rem] h-[40.125rem]">
          <div className="flex mt-3 mb-2 mx-5">
            <div className="w-full grid grid-cols-2 gap-4 place-content-between">
              <div className="items-start justify-start text-left font-bold text-2xl" />
              <button
                className="text-black bg-transparent border-none text-xl place-self-end cursor-pointer"
                onClick={() => {
                  onClose();
                }}
              >
                <img src={close} alt="close" />
              </button>
            </div>
            <hr />
          </div>
          <div className="flex px-4">
            <div className="w-full items-center justify-center">
              <div className="w-3/4 mx-auto items-start justify-start text-left">
                <div className="text-[#543FBF] mb-0 text-[1.25rem] mt-0">
                  เปลี่ยนรหัสผ่าน
                </div>
                <hr />
                <div className="text-[#939393] mt-0 text-[0.875rem]">
                  กรอกข้อมูลเพื่อกำหนดรหัสผ่านใหม่
                </div>

                <div className="p-3">
                  <div className="grid grid-row-2 gap-[0.5rem] relative">
                    <div className="text-[0.875rem] my-1">
                      รหัสผ่านปัจจุบัน*
                    </div>

                    <input
                      placeholder="ระบุ รหัสผ่าน"
                      className="block bg-[#EEF0F6] border-none text-center p-2 rounded-md text-[0.875rem]"
                      type={passwordOldInputText}
                    />
                    <div className="absolute left-[90%] top-[60%] ">
                      <Link
                        className="[border:none] cursor-pointer"
                        onClick={toggleInputPasswordOld}
                      >
                        {passwordOldInputText === "text" ? (
                          <AiOutlineEye
                            size={20}
                            className="align-middle w-[1.5rem] text-black"
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            size={20}
                            className="align-middle  w-[1.5rem] text-black"
                          />
                        )}
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-row-2 gap-[0.5rem] relative mt-2">
                    <div className="text-[0.875rem] my-1 ">
                      กำหนดรหัสผ่านใหม่*
                    </div>
                    <input
                      placeholder="ระบุ รหัสผ่าน"
                      className="block bg-[#EEF0F6] border-none text-center p-2 rounded-md text-[0.875rem]"
                      type={passwordInputText}
                    />
                    <div className="absolute left-[90%] top-[60%] ">
                      <Link
                        className="[border:none] cursor-pointer"
                        onClick={toggleInputPassword}
                      >
                        {passwordInputText === "text" ? (
                          <AiOutlineEye
                            size={20}
                            className="align-middle  w-[1.5rem] text-black"
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            size={20}
                            className="align-middle  w-[1.5rem] text-black"
                          />
                        )}
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-row-2 gap-[0.5rem] relative text-left mt-2">
                    <div className="text-[0.875rem] my-1">ยืนยันรหัสผ่าน*</div>
                    <input
                      placeholder="ระบุ ยืนยันรหัสผ่าน"
                      className=" block bg-[#EEF0F6] border-none text-center p-2 rounded-md text-[0.875rem]"
                      type={passwordInputConfirmText}
                    />
                    <div className="absolute left-[90%] top-[60%] ">
                      <Link
                        className="[border:none] cursor-pointer"
                        onClick={toggleInputPasswordConfirm}
                      >
                        {passwordInputConfirmText === "text" ? (
                          <AiOutlineEye
                            size={20}
                            className="align-middle  w-[1.5rem] text-black"
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            size={20}
                            className="align-middle  w-[1.5rem] text-black"
                          />
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="w-[23.8125rem] h-[6.6875rem] bg-[#E5EBFB] rounded-xl mt-0 text-[#274082] ">
                    <div className="px-2 pt-1">
                      <div className="text-[0.875rem] mt-2">
                        <img src={pointcircle} alt="pointcircle" /> คำแนะนำ
                      </div>
                      <div className="text-[0.75rem] m-3">
                        1. มีความยาวตัวอักษรไม่ต่ำกว่า 8 ตัว <br />
                        2. รหัสผ่านต้องประกอบไปด้วยตัวอักษรภาษาอังกฤษพิมพ์ใหญ่
                        อย่างน้อย 1 ตัวตัวอักษรภาษาอังกฤษและตัวเลข
                      </div>
                    </div>
                  </div>

                  <div className="items-center justify-center text-center mx-auto">
                    <Link
                      className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                text-white text-lg justify-center text-center  w-[9.0625rem] h-auto rounded-3xl px-2 py-2"
                    >
                      บันทึกข้อมูล
                    </Link>
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

export default ChangePasswordModal;
