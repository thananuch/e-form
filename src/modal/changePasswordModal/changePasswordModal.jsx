import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../asseets/images/close.png";
import pointcircle from "../../asseets/images/pointcircle.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
function ChangePasswordModal({ isVisible, onClose }) {
  //password current
  const [currentPassword, setCurrentPassword] = useState("");
  const currentPasswordHandleChange = (event) => {
    setCurrentPassword(event.target.value);
  };
  //show password current
  const [showCurrentPassword, setShowCurrentPassword] = useState("password");
  const toggleCurrentPassword = () => {
    if (showCurrentPassword === "password") {
      setShowCurrentPassword("text");
      return;
    }
    setShowPassword("password");
  };
  //new password
  const [newPassword, setNewPassword] = useState("");
  const newPasswordHandleChange = (event) => {
    setNewPassword(event.target.value);
  };
  //show new password
  const [showNewPassword, setShowPassword] = useState("password");
  const toggleNewPassword = () => {
    if (showNewPassword === "password") {
      setShowPassword("text");
      return;
    }
    setShowPassword("password");
  };

  //Confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPasswordHandleChange = (event) => {
    setConfirmPassword(event.target.value);
    console.log(confirmPassword);
  };

  //show password Confirm
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const toggleInputPasswordConfirm = () => {
    if (showConfirmPassword === "password") {
      setShowConfirmPassword("text");
      return;
    }
    setShowConfirmPassword("password");
  };

  //errors filed
  const [errors, setErrors] = useState({});

  const validateFormInput = () => {
    let errors = {};
    if (currentPassword === null || currentPassword.trim() === "") {
      errors.currentPassword = "กรุณากรอกรหัสผ่านปัจจุบัน";
    }
    if (newPassword === null || newPassword.trim() === "") {
      errors.newPassword = "กรุณากรอกยืนยันรหัสผ่าน";
    }
    if (confirmPassword === null || confirmPassword.trim() === "") {
      errors.confirmPassword = "กรุณากรอกยืนยันรหัสผ่าน";
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        text: "รหัสผ่าน กับ ยืนยันรหัสผ่าน ไม่ตรงกัน",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
      return;
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    validateFormInput();
  };

  if (!isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center z-40"
      >
        <div className="bg-white rounded-xl w-[34.75rem] h-auto">
          <div className="flex mt-3 mb-2 mx-5">
            <div className="w-full grid grid-cols-2 gap-4 place-content-between">
              <div className="items-start justify-start text-left font-bold text-2xl" />
              <button
                className="text-black bg-transparent border-none text-xl place-self-end cursor-pointer"
                onClick={onClose}
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
                      type={showCurrentPassword}
                      value={currentPassword || ""}
                      onChange={currentPasswordHandleChange}
                    />
                    <div className="absolute left-[90%] top-[60%] ">
                      <Link
                        className="[border:none] cursor-pointer"
                        onClick={toggleCurrentPassword}
                      >
                        {showCurrentPassword === "text" ? (
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
                  <p className="text-xs p-0 m-0 text-red-500">
                    {errors.currentPassword}
                  </p>

                  <div className="grid grid-row-2 gap-[0.5rem] relative mt-2">
                    <div className="text-[0.875rem] my-1 ">
                      กำหนดรหัสผ่านใหม่*
                    </div>
                    <input
                      placeholder="ระบุ รหัสผ่าน"
                      className="block bg-[#EEF0F6] border-none text-center p-2 rounded-md text-[0.875rem]"
                      type={showNewPassword}
                      value={newPassword || ""}
                      onChange={newPasswordHandleChange}
                    />
                    <div className="absolute left-[90%] top-[60%] ">
                      <Link
                        className="[border:none] cursor-pointer"
                        onClick={toggleNewPassword}
                      >
                        {showNewPassword === "text" ? (
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
                  <p className="text-xs p-0 m-0 text-red-500">
                    {errors.newPassword}
                  </p>

                  <div className="grid grid-row-2 gap-[0.5rem] relative text-left mt-2">
                    <div className="text-[0.875rem] my-1">ยืนยันรหัสผ่าน*</div>
                    <input
                      placeholder="ระบุ ยืนยันรหัสผ่าน"
                      className=" block bg-[#EEF0F6] border-none text-center p-2 rounded-md text-[0.875rem]"
                      type={showConfirmPassword}
                      value={confirmPassword || ""}
                      onChange={confirmPasswordHandleChange}
                    />
                    <div className="absolute left-[90%] top-[60%] ">
                      <Link
                        className="[border:none] cursor-pointer"
                        onClick={toggleInputPasswordConfirm}
                      >
                        {showConfirmPassword === "text" ? (
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
                  <p className="text-xs p-0 m-0 text-red-500">
                    {errors.confirmPassword}
                  </p>
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

                  <div className="items-center justify-center text-center mx-auto my-1">
                    <Link
                      className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                         text-white text-lg justify-center text-center  w-[9.0625rem] h-auto rounded-3xl px-2 py-2 cursor-pointer"
                      onClick={() => handleSubmit()}
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
    </>
  );
}

export default ChangePasswordModal;
