import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Content from "../../../components/layout/Content";
import { TbGavel } from "react-icons/tb";
import { RiFileUserFill } from "react-icons/ri";
import { MdBallot } from "react-icons/md";
import {
  AiFillSave,
  AiOutlineCheck,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import Swal from "sweetalert2";

function Informationaccount() {
  const { typeAccountRegist } = useParams();
  //password
  const [password, setPassword] = useState("");
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  //show password
  const [showpassword, setShowPassword] = useState("password");
  const toggleInputPassword = () => {
    if (showpassword === "password") {
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
  const togglePasswordConfirm = () => {
    if (showConfirmPassword === "password") {
      setShowConfirmPassword("text");
      return;
    }
    setShowConfirmPassword("password");
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  //errors filed
  const [errors, setErrors] = useState({});

  const validateInformationaccount = () => {
    let errors = {};
    if (userName === null || userName.trim() === "") {
      errors.userName = "กรุณากรอกชื่อผู้ใช้งาน";
    }
    if (email === null || email.trim() === "") {
      errors.email = "กรุณากรอกอีเมล";
    }
    if (password === null || password.trim() === "") {
      errors.password = "กรุณากรอกรหัสผ่าน";
    }
    if (confirmPassword === null || confirmPassword.trim() === "") {
      errors.confirmPassword = "กรุณากรอกยืนยันรหัสผ่าน";
    }
    if (password !== confirmPassword) {
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

  const nextStep = () => {
    const isValid = validateInformationaccount();
    if (isValid) {
      window.location.href = `/confirmsenddata/${typeAccountRegist}`;
    }
  };

  return (
    <>
      <Content />
      <div className="bg-gradient-to-b from-EEF0F6 to-EFEAE1 w-full">
        <div className="max-w-[90rem] mx-auto px-4 p-10 flex">
          <div className="w-[20rem]  rounded-l-xl bg-gradient-to-b from-977EBB to-6482C2 py-12 px-10 flex flex-row gap-[2rem] ">
            <div className="bg-[#BABFDF] py-12 px-[0.5rem] items-center justify-start rounded-full flex flex-col gap-[3.38rem]">
              <div className="rounded-3xl bg-white shadow-[0px_2px_4px_rgba(40,_82,_121,_0.1)] overflow-hidden flex flex-row p-[0.5rem] items-start justify-start">
                <TbGavel className=" text-[#343F9E]" size={30} />
              </div>
              <div className="rounded-3xl  bg-white shadow-[0px_2px_4px_rgba(40,_82,_121,_0.1)] overflow-hidden flex flex-row p-[0.5rem] items-start justify-start">
                <RiFileUserFill className="text-[#343F9E]" size={30} />
              </div>
              <div
                className="rounded-3xl bg-[#CFD2E9] flex flex-col py-[1rem] px-[0.25rem] 
                            items-center justify-center gap-[1.5rem] "
              >
                <div className="rounded-3xl bg-[#343F9E] flex flex-row p-[0.5rem] items-start justify-start">
                  <MdBallot className="text-white" size={30} />
                </div>
                <div className="flex flex-col items-center justify-center gap-[2rem]">
                  <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center  ">
                    <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
                  </div>
                  <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center ">
                    <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
                  </div>
                  <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center bg-white">
                    <div className="relative rounded-[50%] bg-[#343F9E] w-[0.5rem] h-[0.5rem]" />
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white flex flex-row p-[0.5rem] items-start justify-start">
                <AiFillSave className="text-[#343F9E]" size={30} />
              </div>
            </div>
            <div className="flex-1 flex flex-col py-12 px-[0rem] box-border items-start justify-start gap-[2rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF]">
                    <AiOutlineCheck></AiOutlineCheck> Step 1
                  </div>
                </div>
                <div className="self-stretch relative text-lg leading-[150%] text-white">
                  ข้อตกลงและเงื่อนไข
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[1.38rem]">
                <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF]">
                    <AiOutlineCheck></AiOutlineCheck> Step 2
                  </div>
                </div>
                <div className="self-stretch relative text-lg leading-[150%] text-white">
                  เลือกประเภทการลงทะเบียน
                </div>
              </div>
              <div className="h-[14.5rem] flex flex-col pt-[1rem] px-[0rem] pb-[0rem] box-border items-start justify-start gap-[1.13rem]">
                <div className="w-[11.44rem] flex flex-col items-start justify-start">
                  <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF]">
                      Step 3
                    </div>
                  </div>
                  <div className="self-stretch relative text-[1rem] leading-[150%] text-white">
                    ระบุข้อมูลการลงทะเบียน
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2rem] text-[0.88rem] text-white">
                  <div className="h-[1.5rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="text-sm my-1 ">
                      <AiOutlineCheck></AiOutlineCheck> ข้อมูลส่วนตัว
                    </div>
                  </div>
                  <div className="h-[1.5rem] flex flex-row items-center justify-start gap-[0.25rem] ">
                    <div className="text-sm my-1 ">
                      <AiOutlineCheck></AiOutlineCheck> ข้อมูลการติดต่อ และ
                      ที่อยู่
                    </div>
                  </div>
                  <div className="h-[1.5rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="text-sm my-1 ">ข้อมูลบัญชีผู้ใช้งาน</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[2rem]">
                <div className="self-stretch h-[2rem] flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[150%] text-xl text-[#F5F8FF]">
                    Step 4
                  </div>
                </div>
                <div className="self-stretch relative text-lg leading-[150%] text-white">
                  ยืนยันการส่งข้อมูล
                </div>
              </div>
            </div>
          </div>

          <div className="w-[70rem] bg-[#fffffa80] rounded-r-xl px-20 py-5">
            <h1 className="text-[#1A3160] text-2xl">ลงทะเบียนบัญชีผู้ใช้งาน</h1>
            <div className="w-full bg-white p-4 rounded-3xl drop-shadow-[0_2px_10px_rgba(36,36,36,0.1)]">
              <div className="w-[90%] mx-auto">
                <div className="w-full mt-4">
                  <h2 className="text-2xl">ข้อมูลบัญชี</h2>
                  <hr />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                    <div>
                      <div className="text-sm my-1 ">
                        ชื่อผู้ใช้งาน <span className="text-red-500">*</span>
                      </div>
                      <input
                        placeholder="ระบุ ผู้ใช้งาน"
                        value={userName || ""}
                        onChange={(e) => setUserName(e.target.value)}
                        className={
                          errors.userName
                            ? "[border:none] outline-none block w-full rounded-l-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                            : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
                        }
                        type="text"
                      />
                      <p className="text-xs p-0 m-0 text-red-500">
                        {errors.userName}
                      </p>
                    </div>

                    <div>
                      <div className="text-sm my-1">
                        อีเมล <span className="text-red-500">*</span>
                      </div>
                      <input
                        placeholder="ระบุ อีเมล"
                        value={email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                        className={
                          errors.email
                            ? "[border:none] outline-none block w-full rounded-l-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                            : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
                        }
                        type="text"
                      />
                      <p className="text-xs p-0 m-0 text-red-500">
                        {errors.email}
                      </p>
                    </div>
                  </div>

                  <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                    <div className="grid-flow-row gap-[0.5rem] relative">
                      <div className="text-sm my-1 ">
                        รหัสผ่าน <span className="text-red-500">*</span>
                      </div>
                      <input
                        placeholder="ระบุ รหัสผ่าน"
                        type={showpassword}
                        value={password || ""}
                        onChange={passwordHandleChange}
                        className={
                          errors.password
                            ? "[border:none] outline-none block w-full rounded-l-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                            : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
                        }
                      />
                      <div className="absolute left-[95%] top-[50%] ">
                        <Link
                          className="[border:none] cursor-pointer"
                          onClick={toggleInputPassword}
                        >
                          {showpassword === "text" ? (
                            <AiOutlineEye
                              size={20}
                              className="align-middle text-black"
                            />
                          ) : (
                            <AiOutlineEyeInvisible
                              size={20}
                              className="align-middle text-black"
                            />
                          )}
                        </Link>
                      </div>
                      <p className="text-xs p-0 m-0 text-red-500">
                        {errors.password}
                      </p>
                    </div>

                    <div className="grid-flow-row gap-[0.5rem] relative">
                      <div className="text-sm my-1 ">
                        ยืนยันรหัสผ่าน <span className="text-red-500">*</span>
                      </div>
                      <input
                        placeholder="ระบุ ยืนยันรหัสผ่าน"
                        type={showConfirmPassword}
                        value={confirmPassword || ""}
                        onChange={confirmPasswordHandleChange}
                        className={
                          errors.confirmPassword
                            ? "[border:none] outline-none block w-full rounded-l-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                            : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
                        }
                      />
                      <div className="absolute left-[95%] top-[50%] ">
                        <Link
                          className="[border:none] cursor-pointer"
                          onClick={togglePasswordConfirm}
                        >
                          {showConfirmPassword === "text" ? (
                            <AiOutlineEye
                              size={20}
                              className="align-middle text-black"
                            />
                          ) : (
                            <AiOutlineEyeInvisible
                              size={20}
                              className="align-middle text-black"
                            />
                          )}
                        </Link>
                      </div>
                      <p className="text-xs p-0 m-0 text-red-500">
                        {errors.confirmPassword}
                      </p>
                    </div>
                  </div>

                  <div className="my-4 flex justify-end mt-8">
                    <Link
                      className="inline-block bg-[#E6E9F5] text-[#543FBF] justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 mr-4 text-lg "
                      to={`/informationaddress/${typeAccountRegist}`}
                    >
                      ย้อนกลับ
                    </Link>
                    <Link
                      className="inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA]
                                    text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3"
                      onClick={() => nextStep()}
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

export default Informationaccount;
