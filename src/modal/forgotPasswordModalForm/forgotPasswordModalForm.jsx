import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillLock,
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMailForward, TbUserExclamation } from "react-icons/tb";
import Swal from "sweetalert2";
import Backbackcard from "../../asseets/images/backbackcard.png";
import close from "../../asseets/images/close.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import styles from "../../components/calendar/Calendar.module.css";
import OTPInput from "react-otp-input";



function ForgotPasswordModalForm({ isVisible, onClose }) {

  //check error
  const [idCardNo , setIdCardNo] = useState("");
  const [laserId, setLaserId] = useState("");
  const [title, setTitle] = useState("");
  const [name_TH, setName_TH] = useState("");
  const [nameMid_TH, setNameMid_TH] = useState("");
  const [name_EN, setName_EN] = useState("");
  const [lastname_TH, setLastName_TH] = useState("");
  const [nameMid_EN, setNameMid_EN] = useState("");
  const [lastname_EN, setLastName_EN] = useState("");
  const [mobile , setMobile] = useState("");
  const [email , setEmail] = useState("");

  const [errorIdCard, setErrorIdCard] = useState(null);
  const [errorLaserId, setErrorLaserId] = useState(null);
  const [errorBirthDate, setErrorBirthDate] = useState(null);
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorName_TH, setErrorName_TH] = useState(null);
  const [errorName_EN, setErrorName_EN] = useState(null);
  const [errorLastName_TH, setErrorLastName_TH] = useState(null);
  const [errorLastName_EN, setErrorLastName_EN] = useState(null);
  const [errorMobile, setErrorMobile] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);

  // show layout
  const [showStep1, setShowStep1] = useState(true);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);
  const [showStep4, setShowStep4] = useState(false);
  const [showStep5, setShowStep5] = useState(false);
  //มี 2 Type 1ไทย/2ต่างชาติ
  const [idCardType, setIdCardType] = useState("");
  //มี 3 Type
  const [typeChannelForgotPass, setTypeChannelForgotPass] = useState("");
  //ระบุรหัสผู้ใช้
  const [userOrIdCard, setUserOrIdCard] = useState("");

  const slelctChannelForgotPass = (event) => {
    setTypeChannelForgotPass(event.target.value);
  };

  function startsWithNumber(str) {
    return /^\d/.test(str);
  }

  const closeShowStep1 = () => {
    setShowStep1(true);
    setShowStep2(false);
    setShowStep3(false);
    setShowStep4(false);
    setShowStep5(false);
  };

  const nextStep1To2 = () => {
    if (userOrIdCard === null || userOrIdCard === "") {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "กรุณา ระบุรหัสผู้ใช้งาน / เลขบัตรประจำตัวประชาชน / Passport",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
      return;
    }
    setShowStep2(true);
    setShowStep3(false);
    setShowStep4(false);
    setShowStep5(false);
    setShowStep1(false);

    //ถ้าเริ่มด้วยตัวเลข
    if (!startsWithNumber(userOrIdCard)) {
      setIdCardType("2");
    } else {
      setIdCardType("1");
    }
  };

  const nextStep2To3 = () => {
    if (typeChannelForgotPass === null || typeChannelForgotPass === "") {
      Swal.fire({
        text: "กรุณาเลือกประเภท",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
      return;
    }
    setShowStep3(true);
    setShowStep1(false);
    setShowStep2(false);
    setShowStep4(false);
    setShowStep5(false);
  };

  const nextStep3To4 = () => {
    if (OTP === null || OTP === "") {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "กรุณากรอกเลขรหัส OTP",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
      return;
    }
    setShowStep1(false);
    setShowStep2(false);
    setShowStep3(false);
    setShowStep4(true);
    setShowStep5(false);
  };

  const nextStep3To4Pass = () => {
    let errors = {};
    setErrorIdCard(null);
    setErrorLaserId(null);
    setErrorBirthDate(null);
    setErrorTitle(null);
    setErrorName_TH(null);
    setErrorName_EN(null);
    setErrorLastName_TH(null);
    setErrorLastName_EN(null);
    setErrorMobile(null);
    setErrorEmail(null);

    if (idCardNo === null || idCardNo.trim() === "") {
      if(idCardType === "2"){
        setErrorIdCard("กรุณากรอกเลขบัตรประจำตัวประชาชน");
      }else{
        setErrorIdCard("กรุณากรอกพาสปอต Passport");
      }
     
    }
    if (laserId === null || laserId.trim() === "") {
      setErrorLaserId("กรุณากรอกรหัสหลังบัตรประชาชน");
    }
    if (dateState === null || dateState.trim() === "") {
      setErrorBirthDate("กรุณากรอกวันเดือนปีเกิด");
    }
    if (title === null || title.trim() === "") {
      setErrorTitle("กรุณากรอกคำนำหน้าชื่อ");
    }
    if (name_TH === null || name_TH.trim() === "") {
      setErrorName_TH("กรุณากรอกชื่อ");
    }
    if (name_EN === null || name_EN.trim() === "") {
      setErrorName_EN("กรุณากรอกชื่อภาษาอังกฤษ");
    }
    if (lastname_TH === null || lastname_TH.trim() === "") {
      setErrorLastName_TH("กรุณากรอกนามสกุล");
    }
    if (lastname_EN === null || lastname_EN.trim() === "") {
      setErrorLastName_EN("กรุณากรอกนามสกุลภาษาอังกฤษ"); 
    }
    if (mobile === null || mobile.trim() === "") {
      setErrorMobile("กรุณากรอกเบอร์โทรศัพท์"); 
    }
    if (email === null || email.trim() === "") {
      setErrorEmail("กรุณากรอกอีเมล");
      return errors;
    }
    setShowStep4(true);
    setShowStep1(false);
    setShowStep2(false);
    setShowStep3(false);
    setShowStep5(false);
  };

  //show text error compare password
  const [formError, setFormError] = useState("");

  const nextStep4To5 = () => {

    if(newPasswordText.length < 8){
      setFormError("รหัสผ่านใหม่ต้องมากกว่า 8 คัว");
      return;
    }

    if(confirmPasswordText.length < 8){
      setFormError("ยืนยันรหัสผ่านต้องมากกว่า 8 คัว");
      return;
    }
    
    //Check compare password
    if (confirmPasswordText !== newPasswordText) {
      setFormError("รหัสผ่านใหม่ กับ ยืนยันรหัสผ่าน ไม่ตรงกัน");
      return;
    }

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;

    let pwLength =newPasswordText.length;

    for(let i = 0 ; i <pwLength ; i++){
      if (!isNaN(newPasswordText.charAt(i) * 1)){
        hasNumber = true ;
      }else{
        if(newPasswordText.charAt(i) === newPasswordText.charAt(i).toLocaleUpperCase()){
          hasUpper = true ;
        }
        if(newPasswordText.charAt(i) === newPasswordText.charAt(i).toLocaleLowerCase()){
          hasLower = true ;
        }
      }
    }

    if(!hasUpper || !hasLower || !hasNumber ){
      setFormError("รูปแบบรหัสผ่านใหม่ไม่ถูกต้อง ควรมีตัวอักษรใหญ่ ตัวอักษรเล็ก และตัวเลข");
      return;
    }

    if (typeChannelForgotPass === "3" && idCardType === "2") {
      setShowStep1(false);
      setShowStep2(false);
      setShowStep3(false);
      setShowStep4(false);
      setShowStep5(true);
    } else {
      Swal.fire({
        icon: "success",
        text: "ทำการเปลี่ยนรหัสผ่านของท่านเสร็จสิ้น",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          closeShowStep1();
          onClose();
          window.location.reload(false);
        }
      });
    }
    return;
  };
  
  //Send OTP
  const [OTP, setOTP] = useState("");
  const OtpHandleChange = (OTP) => {
    setOTP(OTP);
  };

  //refresh state
  const refreshData = () => {
    window.location.reload(false);
  };

  //show password
  const [newPasswordInputText, setNewPasswordInputText] = useState("password");
  const toggleInputNewPassword = () => {
    if (newPasswordInputText === "password") {
      setNewPasswordInputText("text");
      return;
    }
    setNewPasswordInputText("password");
  };

  //New password
  const [newPasswordText, setNewPasswordtext] = useState("");
  const newPasswordHandleChange = (event) => {
    setNewPasswordtext(event.target.value);
  };

  //show password Confirm
  const [confirmPasswordInputText, setConfirmPasswordInputText] =
    useState("password");
  const toggleInputPasswordConfirm = () => {
    if (confirmPasswordInputText === "password") {
      setConfirmPasswordInputText("text");
      return;
    }
    setConfirmPasswordInputText("password");
  };

  //Confirm password
  const [confirmPasswordText, setConfirmPasswordtext] = useState("");
  const confirmPasswordHandleChange = (event) => {
    setConfirmPasswordtext(event.target.value);
  };

  //Date
  const [showCalendar, setshowCalendar] = useState(false);
  const toggleDateCalendar = (e) => {
    e.preventDefault();
    setshowCalendar((prevState) => !prevState);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateState, setDateState] = useState("");

  const handleDateChange = (date) => {
    setDateState(selectedDate.toLocaleDateString("th"));
    setSelectedDate(date);
    setshowCalendar(false);
  };

  if (!isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        sm:flex sm:justify-center sm:items-center overflow-y-scroll z-20"
      >
        <div className="sm:w-[800px] w-full flex flex-col bg-[#EEF0F6] rounded-xl mt-8 my-2">
          <div className="flex justify-between">
            <div className="items-start justify-start text-[#274082] font-bold text-2xl mt-5 ml-7">
              ลืมรหัสผ่าน
            </div>
            <button
              className="text-black bg-transparent border-none text-xl place-self-end mr-7"
              onClick={refreshData}
            >
              <img src={close} alt="close" className="cursor-pointer" />
            </button>
          </div>
          <div className="bg-white  my-4 mx-8 rounded-xl">
            <div className="flex px-4 my-4">
              <div className="w-full">
                {showStep1 === true ? (
                  <div className="items-center flex flex-col">
                    <AiFillLock
                      size={100}
                      className="text-[#274082] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] my-5"
                    />
                    <h3 className="text-[#274082] mt-2 font-bold">
                      ระบุรหัสผู้ใช้งาน / เลขบัตรประจำตัวประชาชน / Passport
                    </h3>
                    <input
                      value={userOrIdCard}
                      onChange={(e) => setUserOrIdCard(e.target.value)}
                      className="mt-3 block bg-[#EEF0F6] w-[95%] rounded-lg py-3 pl-3 focus:outline-blue-400 mx-auto border-none"
                      type="text"
                    />
                    <button
                      className="mt-8 inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none 
                             text-white text-base justify-center text-center w-auto h-10 rounded-3xl px-10 py-1 m-10 cursor-pointer"
                      onClick={() => nextStep1To2()}
                    >
                      ถัดไป
                    </button>
                  </div>
                ) : showStep2 === true ? (
                  <>
                    <div className="flex flex-col gap-10">
                      <input
                        type="radio"
                        id="forgotChannel1"
                        className="hidden"
                        value="1"
                        name="forgotCahannel"
                        onChange={slelctChannelForgotPass}
                      />
                      <label
                        htmlFor="forgotChannel1"
                        className={`w-full bg-white rounded-3xl outline outline-offset-2 outline-2 hover:outline-[#4B68B6] ${
                          typeChannelForgotPass === "1"
                            ? "outline-[#4B68B6]"
                            : "outline-[#DBDBDB]"
                        }`}
                      >
                        <div className="flex flex-row p-1 gap-2 items-center justify-start w-[95%] mx-auto">
                          <div className="basis-[15%] justify-start items-center text-center">
                            <div
                              className={`w-[60%] mx-auto h-14 rounded-[50%] justify-start items-center ${
                                typeChannelForgotPass === "1"
                                  ? "bg-[#E6E9F5]"
                                  : "bg-[#E3E3E3]"
                              }`}
                            >
                              <TbMailForward
                                className={`py-3 ${
                                  typeChannelForgotPass === "1"
                                    ? "text-[#274082]"
                                    : "text-[#565656]"
                                }`}
                                size={30}
                              />
                            </div>
                          </div>
                          <div className="basis-[60%] mx-auto justify-start items-start text-left cursor-pointer">
                            <h3
                              className={`font-bold mb-0  ${
                                typeChannelForgotPass === "1"
                                  ? "text-[#274082]"
                                  : "text-[#565656]"
                              }`}
                            >
                              ยืนยันตัวตนด้วยอีเมล
                            </h3>
                            <h5 className="text-[#9D9D9D] mt-0">
                              Activate Code
                              จะถูกส่งไปที่อีเมลของท่านที่ลงทะเบียนไว้
                            </h5>
                          </div>
                          <div className="basis-[15%]">
                            {typeChannelForgotPass === "1" ? (
                              <AiFillCheckCircle
                                className="text-[#4F61A8]"
                                size={40}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </label>
                      <input
                        type="radio"
                        id="forgotChannel2"
                        value="2"
                        className="hidden"
                        name="forgotCahannel"
                        onChange={slelctChannelForgotPass}
                      />
                      <label
                        htmlFor="forgotChannel2"
                        className={`w-full bg-white rounded-3xl outline outline-offset-2 outline-2 hover:outline-[#4B68B6] ${
                          typeChannelForgotPass === "2"
                            ? "outline-[#4B68B6]"
                            : "outline-[#DBDBDB]"
                        }`}
                      >
                        <div className="flex flex-row p-1 gap-2 items-center justify-start w-[95%] mx-auto">
                          <div className="basis-[15%] justify-start items-center text-center">
                            <div
                              className={`w-[60%] mx-auto h-14 rounded-[50%] justify-start items-center ${
                                typeChannelForgotPass === "2"
                                  ? "bg-[#E6E9F5]"
                                  : "bg-[#E3E3E3]"
                              }`}
                            >
                              <BsFillTelephoneFill
                                className={`py-3 ${
                                  typeChannelForgotPass === "2"
                                    ? "text-[#274082]"
                                    : "text-[#565656]"
                                }`}
                                size={25}
                              />
                            </div>
                          </div>
                          <div className="basis-[60%] mx-auto justify-start items-start text-left cursor-pointer">
                            <h3
                              className={`font-bold mb-0 ${
                                typeChannelForgotPass === "2"
                                  ? "text-[#274082]"
                                  : "text-[#565656]"
                              }`}
                            >
                              ยืนยันตัวตนด้วยเบอร์โทรศัพท์
                            </h3>
                            <h5 className="text-[#9D9D9D] mt-0">
                              รหัส OTP
                              จะถูกส่งไปที่เบอร์โทรศัพท์ของท่านที่ลงทะเบียนไว้
                            </h5>
                          </div>
                          <div className="basis-[15%]">
                            {typeChannelForgotPass === "2" ? (
                              <AiFillCheckCircle
                                className="text-[#4F61A8]"
                                size={40}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </label>
                      <input
                        type="radio"
                        id="forgotChannel3"
                        className="hidden"
                        value="3"
                        name="forgotCahannel"
                        onChange={slelctChannelForgotPass}
                      />
                      <label
                        htmlFor="forgotChannel3"
                        className={`w-full bg-white rounded-3xl outline outline-offset-2 outline-2 hover:outline-[#4B68B6] ${
                          typeChannelForgotPass === "3"
                            ? "outline-[#4B68B6]"
                            : "outline-[#DBDBDB]"
                        }`}
                      >
                        <div className="flex flex-row p-1 gap-2 items-center justify-start w-[95%] mx-auto">
                          <div className="basis-[15%] justify-start items-center text-center">
                            <div
                              className={`w-[60%] mx-auto h-14 rounded-[50%] justify-start items-center ${
                                typeChannelForgotPass === "3"
                                  ? "bg-[#E6E9F5]"
                                  : "bg-[#E3E3E3]"
                              }`}
                            >
                              <TbUserExclamation
                                className={`py-3 ${
                                  typeChannelForgotPass === "3"
                                    ? "text-[#274082]"
                                    : "text-[#565656]"
                                }`}
                                size={30}
                              />
                            </div>
                          </div>
                          <div className="basis-[60%] mx-auto justify-start items-start text-left cursor-pointer">
                            <h3
                              className={`font-bold mb-0 ${
                                typeChannelForgotPass === "3"
                                  ? "text-[#274082]"
                                  : "text-[#565656]"
                              }`}
                            >
                              ลืมทั้งอีเมลและเบอร์โทรศัพท์
                            </h3>
                            <h5 className="text-[#9D9D9D] mt-0">
                              ท่านจะกรอกรายละเอียดเพิ่มเติมเพื่อตรวจสอบข้อมูล
                            </h5>
                          </div>
                          <div className="basis-[15%]">
                            {typeChannelForgotPass === "3" ? (
                              <AiFillCheckCircle
                                className="text-[#4F61A8]"
                                size={40}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="flex justify-center">
                      <Link
                        className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                            text-white text-lg  text-center w-[30%] h-auto rounded-3xl px-10 py-3 "
                        onClick={() => nextStep2To3()}
                      >
                        {typeChannelForgotPass === "1"
                          ? "ส่ง Activate Code"
                          : typeChannelForgotPass === "2"
                          ? "ขอรหัส OTP"
                          : "ดำเนินการต่อ"}
                      </Link>
                    </div>
                  </>
                ) : showStep3 === true ? (
                  typeChannelForgotPass === "1" ? (
                    <div className="items-center flex flex-col">
                      <div className="items-center flex flex-col m-0">
                        <p className="font-bold text-[1.25rem] text-[#000] m-0">
                          ยืนยันบัญชีตัวตน
                        </p>
                        <p className="font-bold text-[1.25rem] text-[#000] m-0">
                          ด้วยรหัสผ่านทาง Email
                        </p>
                      </div>
                      <div className="font-thin m-0">
                        <p className="text-center">รหัสยืนยันส่งไปที่อีเมล</p>
                        <p className="text-[#002B80] font-bold">
                          testxxxx@gmail.com
                        </p>
                      </div>
                      <div className="font-thin m-0 my-1">
                        รหัส Ref : 4fr565
                      </div>
                      <div className="w-full h-12 mx-auto justify-center flex  text-[#000] font-bold mt-3">
                        <OTPInput
                          otp={OTP}
                          onChange={OtpHandleChange}
                          value={OTP}
                          inputStyle="inputStyle"
                          numInputs={6}
                          separator={<span></span>}
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                      <button
                        className="bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                      text-white text-lg  w-full sm:w-[40%] h-auto rounded-3xl px-10 py-2 text-center m-5 cursor-pointer"
                        onClick={() => nextStep3To4()}
                      >
                        ยืนยันรหัสผ่าน
                      </button>
                      <p className="text-[#000] m-0 mt-2">
                        รหัสผ่านจะหมดอายุใน
                      </p>
                      <p className="text-[#002B80] m-1"> 2 : 59 นาที</p>
                    </div>
                  ) : typeChannelForgotPass === "2" ? (
                    <div className="items-center flex flex-col">
                      <div className="items-center flex flex-col m-0">
                        <p className="font-bold text-[1.25rem] text-[#000] m-0">
                          ยืนยันบัญชีตัวตน
                        </p>
                        <p className="font-bold text-[1.25rem] text-[#000] m-0">
                          ด้วย OTP ผ่านทาง SMS
                        </p>
                      </div>
                      <div className="font-thin m-0">
                        <p className="text-center">รหัสยืนยันส่งไปที่อีเมล</p>
                        <p className="text-[#002B80] font-bold">
                          testxxxx@gmail.com
                        </p>
                      </div>
                      <div className="font-thin m-0 my-1">
                        รหัส Ref : 4fr565
                      </div>
                      <div className="w-full h-12 mx-auto justify-center flex  text-[#000] font-bold mt-3">
                        <OTPInput
                          onChange={OtpHandleChange}
                          value={OTP}
                          inputStyle="inputStyle"
                          numInputs={6}
                          separator={<span></span>}
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                      <button
                        className="bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                    text-white text-lg  w-full sm:w-[40%] h-auto rounded-3xl px-10 py-2 text-center m-5"
                        onClick={() => nextStep3To4()}
                      >
                        ยืนยันรหัสผ่าน
                      </button>
                      <p className="text-[#000] m-0 mt-2">
                        รหัสผ่านจะหมดอายุใน
                      </p>
                      <p className="text-[#002B80] m-1"> 2 : 59 นาที</p>
                    </div>
                  ) : idCardType === "1" ? (
                    <>
                      <div className="w-[95%] mx-auto items-start justify-start text-left">
                        <h2 className="text-[#543FBF] mb-0 text-xl">
                          กรอกข้อมูลส่วนตัว {"(สำหรับบุคคลไทย)"}
                        </h2>
                        <hr />
                        <div className="text-[#939393] mt-2 text-[0.875rem]">
                          กรอกข้อมูลเพื่อกำหนดรหัสผ่านใหม่
                        </div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 ">
                          <div className="grid grid-row-2 gap-2  ">
                            <div className="text-sm mt-3  text-[#000]">
                              เลขประจำตัวประชาชน 13 หลัก
                              <span className="text-red-500">*</span>
                            </div>
                            <input value={idCardNo || ""}
                              onChange={(e) => setIdCardNo(e.target.value)}
                              placeholder="ระบุ เลขประจำตัวประชาชน 13 หลัก"
                              className={
                                errorIdCard === null || errorIdCard.trim() === ""
                                  ? "block bg-[#EEF0F6] border-none p-2 rounded-md"
                                  : "block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                              }
                            />
                            <p className="text-xs p-0 m-0 text-red-500">{errorIdCard}</p>
                          </div>

                          <div className="grid grid-row-2 gap-2  relative">
                            <div className="flex flex-1">
                              <div className="text-sm mt-3  text-[#000]">
                                รหัสหลังบัตรประจำตัวประชาชน
                                <span className="text-red-500">*</span>
                              </div>

                              <div className="hidden md:block group relative mt-3 ml-2">
                                <AiOutlineQuestionCircle
                                  className="text-[#222222] rounded"
                                  size="15"
                                />
                                <span
                                  className="absolute top-10 scale-0 transition-all justify-center inherit
                                                    text-center rounded bg-white p-2 text-xs text-black w-[328px]
                                                    group-hover:scale-100 z-10 shadow-xl "
                                >
                                  <h2 className="text-xl">
                                    เลเซอร์ ไอดี คืออะไร ?
                                  </h2>
                                  <h4 className="text-xs">
                                    คือรหัสเพื่อยืนยันถึงสถานะสำหรับบัตรประชาชน
                                  </h4>
                                  <div className="flex justify-center mt-2 mb-2">
                                    <img
                                      alt="backcard"
                                      src={Backbackcard}
                                    ></img>
                                  </div>
                                  <p className="text-xs">
                                    1. รหัสปรากฏอยู่ด้านล่างของบัตร
                                  </p>
                                  <p>2. ใช้รหัสเพื่อยืนยันสถานะบัตรประชน</p>
                                </span>
                              </div>
                            </div>
                            <input value={laserId || ""}
                              onChange={(e) => setLaserId(e.target.value)}
                              placeholder="ระบุ กรอกรหัสหลังบัตรประชาชน"
                              className={
                                errorLaserId === null || errorLaserId.trim() === ""
                                  ? "block bg-[#EEF0F6] border-none p-2 rounded-md"
                                  : "block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                              }
                            />
                            <p className="text-xs p-0 m-0 text-red-500">{errorLaserId}</p>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 ">
                          <div className="grid grid-row-2 gap-2">
                            <div className="text-sm mt-3 text-[#000]">
                              วัน-เดือน-ปีเกิด
                              <span className="text-red-500">*</span>
                            </div>
                            <div>
                              <div className="flex flex-row">
                                {selectedDate && (
                                  <input
                                    dir="ltr"
                                    className={
                                      errorBirthDate === null || errorBirthDate.trim() === ""
                                        ? "block bg-[#EEF0F6] border-none p-2 rounded-md"
                                        : "block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                                    }
                                    value={dateState}
                                    placeholder="ระบุ วันเดือนปีเกิด"
                                    onChange={(e) =>
                                      setDateState(e.target.value)
                                    }
                                  />
                                )}
                                {selectedDate && (
                                  <div
                                    className={
                                      errorBirthDate === null || errorBirthDate.trim() === ""
                                        ? "w-12 bg-[#EEF0F6] text-[#222222]  rounded-r-lg justify-center flex items-center cursor-pointer"
                                        : "w-12 rounded-r-lg justify-center flex items-center cursor-pointer border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                                    }
                                    onClick={toggleDateCalendar}
                                    dir="rtl"
                                  >
                                    <MdOutlineCalendarMonth size={30} />
                                  </div>
                                )} 
                              </div>
                              {showCalendar && (
                                <div className="relative">
                                  <Calendar
                                    className={styles.myCalendar}
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy"
                                    locale="th"
                                  />
                                </div>
                              )}
                              <p className="text-xs p-0 m-0 text-red-500">{errorBirthDate}</p>
                            </div>
                          </div>
                        </div>

                        <div className="text-base mt-6  font-bold  text-[#000]">
                          ชื่อ ภาษาไทย
                        </div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 ">
                          <div className="grid grid-row-2 gap-2  ">
                            <div className="text-sm mt-3  text-[#000]">
                              คำนำหน้าชื่อ
                              <span className="text-red-500">*</span>
                            </div>
                            <select
                              value={title || ""}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder="ระบุ คำนำหน้าชื่อ"
                              className={
                                errorTitle === null || errorTitle.trim() === ""
                                  ? "block bg-[#EEF0F6] border-none p-2 rounded-md"
                                  : "block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                              }
                            >
                              <option value={0}>เลือกคำนำหน้าชื่อ</option>
                              <option value={1}>2</option>
                              <option value={2}>3</option>
                            </select>
                            <p className="text-xs p-0 m-0 text-red-500">{errorTitle}</p>
                          </div>                          
                        </div>
                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mt-4">
                          <div className="grid-flow-row gap-[0.5rem]">
                            <div className="text-sm text-[#000]">
                              ชื่อ <span className="text-red-500">*</span>
                            </div>
                            <input
                              value={name_TH || ""}
                              onChange={(e) => setName_TH(e.target.value)}
                              placeholder="ระบุ ชื่อ"
                              className={
                                errorName_TH === null || errorName_TH.trim() === ""
                                  ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                  : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                              }
                              type="text"
                            />
                            <p className="text-xs p-0 m-0 text-red-500">{errorName_TH}</p>
                          </div>
                          <div className="grid-flow-row gap-[0.5rem]">
                            <div className="text-sm text-[#000]">ชื่อกลาง </div>
                            <input value={nameMid_TH || ""}
                              onChange={(e) => setNameMid_TH(e.target.value)}
                              placeholder="ระบุ ชื่อกลาง"
                              className="w-full block bg-[#EEF0F6] border-none p-2 rounded-md "
                              type="text"
                            />
                          </div>
                          <div className="grid-flow-row gap-[0.5rem]">
                            <div className="text-sm text-[#000]">
                              นามสกุุล <span className="text-red-500">*</span>
                            </div>
                            <input
                              value={lastname_TH || ""}
                              onChange={(e) => setLastName_TH(e.target.value)}
                              placeholder="ระบุ นามสกุล"
                              className={
                                errorLastName_TH === null || errorLastName_TH.trim() === ""
                                  ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                  : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                              }
                              type="text"
                            />
                            <p className="text-xs p-0 m-0 text-red-500">{errorLastName_TH}</p>
                          </div>
                        </div>
                        <h4 className="text-base mt-6  font-bold  text-[#000]">
                          ชื่อ ภาษาอังกฤษ
                        </h4>
                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mt-4">
                          <div className="grid-flow-row gap-[0.5rem]">
                            <div className="text-sm text-[#000]">
                              ชื่อ <span className="text-red-500">*</span>
                            </div>
                            <input
                              value={name_EN || ""}
                              onChange={(e) => setName_EN(e.target.value)}
                              placeholder="ระบุ ชื่อ"
                              className={
                                errorName_EN === null || errorName_EN.trim() === ""
                                  ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                  : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                              }
                              type="text"
                            />
                            <p className="text-xs p-0 m-0 text-red-500">{errorName_EN}</p>
                          </div>
                          <div className="grid-flow-row gap-[0.5rem]">
                            <div className="text-sm text-[#000]">ชื่อกลาง </div>
                            <input value={nameMid_EN || ""}
                              onChange={(e) => setNameMid_EN(e.target.value)}
                              placeholder="ระบุ ชื่อกลาง"
                              className="w-full block bg-[#EEF0F6] border-none p-2 rounded-md "
                              type="text"
                            />
                          </div>
                          <div className="grid-flow-row gap-[0.5rem]">
                            <div className="text-sm text-[#000]">
                              นามสกุุล <span className="text-red-500">*</span>
                            </div>
                            <input
                              value={lastname_EN || ""}
                              onChange={(e) => setLastName_EN(e.target.value)}
                              placeholder="ระบุ นามสกุล"
                              className={
                                errorLastName_EN === null || errorLastName_EN.trim() === ""
                                  ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                  : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                              }
                              type="text"
                            />
                            <p className="text-xs p-0 m-0 text-red-500">{errorLastName_EN}</p>
                          </div>
                        </div>
                        <div className="items-center justify-center text-center mx-auto">
                          <button
                            className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8 cursor-pointer
                                        text-white text-lg justify-center text-center sm:w-[30%] w-full h-auto rounded-3xl px-10 py-3 "
                            onClick={() => nextStep3To4Pass()}
                          >
                            ตรวจสอบ
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-[95%] mx-auto items-start justify-start text-left">
                      <h2 className="text-[#543FBF] mb-0 text-xl">
                        กรอกข้อมูลส่วนตัว {"(สำหรับบุคคลต่างประเทศ)"}
                      </h2>
                      <hr />
                      <h4 className="text-[#939393] mt-2 text-sm">
                        กรอกข้อมูลเพื่อกำหนดรหัสผ่านใหม่
                      </h4>
                      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2  text-[#000]">
                        <div className="grid grid-row-2 gap-2 ">
                          <div className="text-sm text-[#000]">Passport</div>
                          <input value={idCardNo || ""}
                            onChange={(e) => setIdCardNo(e.target.value)}
                            placeholder="ระบุ Passport" 
                            className={
                              errorIdCard === null || errorIdCard.trim() === ""
                                ? "block bg-[#EEF0F6] border-none p-2 rounded-md"
                                : "block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                            }
                          />
                          <p className="text-xs p-0 m-0 text-red-500">{errorIdCard}</p>
                        </div>
                      </div>
                      <div className="text-base mt-6  font-bold  text-[#000]">
                        ชื่อ ภาษาไทย
                      </div>
                      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2  text-[#000] mt-2">
                        <div className="grid grid-row-2 gap-2  ">
                          <div className="text-sm text-[#000]">
                            คำนำหน้าชื่อ
                          </div>
                          <select
                              value={title || ""}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder="ระบุ คำนำหน้าชื่อ"
                              className={
                                errorTitle === null || errorTitle.trim() === ""
                                  ? "block bg-[#EEF0F6] border-none p-2 rounded-md"
                                  : "block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                              }
                            >
                              <option value={0}>เลือกคำนำหน้าชื่อ</option>
                              <option value={1}>2</option>
                              <option value={2}>3</option>
                            </select>
                            <p className="text-xs p-0 m-0 text-red-500">{errorTitle}</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mt-4  text-[#000]">
                        <div className="grid-flow-row gap-[0.5rem]">
                          <div className="text-sm my-1">
                            ชื่อ <span className="text-red-500">*</span>
                          </div>
                          <input value={name_TH || ""}
                            onChange={(e) => setName_TH(e.target.value)}
                            placeholder="ระบุ ชื่อ"
                            type="text"
                            className={
                              errorName_TH === null || errorName_TH.trim() === ""
                                ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                            }
                          />
                          <p className="text-xs p-0 m-0 text-red-500">{errorName_TH}</p>
                        </div>
                        <div className="grid-flow-row gap-[0.5rem]">
                          <div className="text-sm my-1">ชื่อกลาง </div>
                          <input value={nameMid_TH|| ""}
                            onChange={(e) => setNameMid_TH(e.target.value)}
                            placeholder="ระบุ ชื่อกลาง"
                            className="block bg-[#EEF0F6] border-none p-2 rounded-md w-full"
                            type="text"
                          />
                        </div>
                        <div className="grid-flow-row gap-[0.5rem]">
                          <div className="text-sm my-1">
                            นามสกุุล <span className="text-red-500">*</span>
                          </div>
                          <input value={lastname_TH || ""}
                            onChange={(e) => setLastName_TH(e.target.value)}
                            placeholder="ระบุ นามสกุล"
                            className={
                              errorLastName_TH === null || errorLastName_TH.trim() === ""
                                ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                            }
                            type="text"
                          />
                          <p className="text-xs p-0 m-0 text-red-500">{errorLastName_TH}</p>
                        </div>
                      </div>

                      <div className="text-base mt-6 font-bold  text-[#000]">
                        ชื่อ ภาษาอังกฤษ
                      </div>
                      <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mt-4  text-[#000]">
                        <div className="grid-flow-row gap-[0.5rem]">
                          <div className="text-sm my-1 ">
                            Name <span className="text-red-500">*</span>
                          </div>
                          <input value={name_EN || ""}
                            onChange={(e) => setName_EN(e.target.value)}
                            placeholder="ระบุ ชื่อ"
                            className={
                              errorName_EN === null || errorName_EN.trim() === ""
                                ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                            }
                            type="text"
                          />
                          <p className="text-xs p-0 m-0 text-red-500">{errorName_EN}</p>
                        </div>
                        <div className="grid-flow-row gap-[0.5rem]">
                          <div className="text-sm my-1 ">Middle name </div>
                          <input value={nameMid_EN || ""}
                            onChange={(e) => setNameMid_EN(e.target.value)}
                            placeholder="ระบุ ชื่อกลาง"
                            className="w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                            type="text"
                          />
                        </div>
                        <div className="grid-flow-row gap-[0.5rem]">
                          <div className="text-sm my-1 ">
                            Surname <span className="text-red-500">*</span>
                          </div>
                          <input value={lastname_EN || ""}
                            onChange={(e) => setLastName_EN(e.target.value)}
                            placeholder="ระบุ นามสกุล"
                            className={
                              errorLastName_EN === null || errorLastName_EN.trim() === ""
                                ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                            }
                            type="text"
                          />
                          <p className="text-xs p-0 m-0 text-red-500">{errorLastName_EN}</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mt-4 text-[#000]">
                        <div>
                          <div className=" block text-sm my-1 text-[#000]">
                            วัน-เดือน-ปีเกิด
                            <span className="text-red-500">*</span>
                          </div>
                          <div>
                            <div className="flex flex-row">
                              {selectedDate && (
                                <input
                                  dir="ltr"
                                  className={
                                    errorBirthDate === null || errorBirthDate.trim() === ""
                                      ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                      : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                                  }
                                  value={dateState}
                                  placeholder="ระบุ วันเดือนปีเกิด"
                                  onChange={(e) => setDateState(e.target.value)}
                                />
                              )}
                              {selectedDate && (
                                <div
                                className={
                                  errorBirthDate === null || errorBirthDate.trim() === ""
                                    ? "w-12 bg-[#EEF0F6] text-[#222222]  rounded-r-lg justify-center flex items-center cursor-pointer"
                                    : "w-12 rounded-r-lg justify-center flex items-center cursor-pointer border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                                }
                                  onClick={toggleDateCalendar}
                                  dir="rtl"
                                >
                                  <MdOutlineCalendarMonth size={30} />
                                </div>
                              )}
                            </div>
                            {showCalendar && (
                              <div>
                                <Calendar
                                  className={styles.myCalendar}
                                  selected={selectedDate}
                                  onChange={handleDateChange}
                                  dateFormat="dd/MM/yyyy"
                                  locale="th"
                                />
                              </div>
                            )}
                          </div>
                          <p className="text-xs p-0 m-0 text-red-500">{errorBirthDate}</p>
                        </div>
                        <div>
                          <div className="text-sm my-1">
                            เบอร์โทรศัพท์ใหม่
                            <span className="text-red-500">*</span>
                          </div>
                          <input value={mobile || ""}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="ระบุ เบอร์โทรศัพท์ใหม่"
                            className={
                              errorMobile === null || errorMobile.trim() === ""
                                ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                            }
                            type="text"
                          />
                          <p className="text-xs p-0 m-0 text-red-500">{errorMobile}</p>
                        </div>
                        <div>
                          <div className="text-sm my-1 ">
                            อีเมลใหม่ <span className="text-red-500">*</span>
                          </div>
                          <input value={email || ""}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ระบุ อีเมลใหม่"
                            className={
                              errorEmail === null || errorEmail.trim() === ""
                                ? "w-full block bg-[#EEF0F6] border-none p-2 rounded-md"
                                : "w-full block border-none p-2 rounded-md bg-red-500 bg-opacity-10 placeholder-[#D25656] outline-[#D25656]"
                            }
                            type="text"
                          />
                          <p className="text-xs p-0 m-0 text-red-500">{errorEmail}</p>
                        </div>
                      </div>
                      <div className="items-center justify-center text-center mx-auto">
                        <button
                          className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                text-white text-lg justify-center text-center sm:w-[30%] w-full  h-auto rounded-3xl px-10 py-3 cursor-pointer"
                          onClick={() => nextStep3To4Pass()}
                        >
                          บันทึกข้อมูล
                        </button>
                      </div>
                    </div>
                  )
                ) : showStep4 ? (
                  <>
                    <div className="sm:w-3/4 mx-auto items-start justify-start text-left">
                      <div className="text-[#543FBF] mb-0 font-bold text-xl">
                        กรอกรหัสผ่านใหม่
                      </div>
                      <hr />
                      <div className="text-[#939393] m-0 sm:m-2 text-sm">
                        กรอกข้อมูลเพื่อกำหนดรหัสผ่านใหม่
                      </div>
                      <div className="flex flex-col">
                        <div className="grid grid-row-2 gap-[0.5rem] relative p-5">
                          <div className="grid grid-row-2 gap-[0.5rem] relative">
                            <div className="text-[0.875rem] my-1">
                              กำหนดรหัสผ่านใหม่*
                            </div>

                            <input
                              placeholder="ระบุ รหัสผ่าน"
                              className="block bg-[#EEF0F6] border-none text-center p-2 rounded-md text-[0.875rem]"
                              type={newPasswordInputText}
                              value={newPasswordText}
                              onChange={newPasswordHandleChange}
                            />
                            <div className="absolute left-[90%] top-[60%] ">
                              <Link
                                className="[border:none] cursor-pointer"
                                onClick={toggleInputNewPassword}
                              >
                                {newPasswordInputText === "text" ? (
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

                          <div className="grid grid-row-2 gap-[0.5rem] relative text-left mt-4">
                            <div className="text-sm">
                              ยืนยันรหัสผ่าน
                              <span className="text-red-500">*</span>
                            </div>
                            <input
                              placeholder="ระบุ รหัสผ่าน"
                              className="block bg-[#EEF0F6] border-none text-center p-2 rounded-md text-[0.875rem]"
                              type={confirmPasswordInputText}
                              value={confirmPasswordText}
                              onChange={confirmPasswordHandleChange}
                            />
                            <div className="absolute left-[90%] top-[60%] ">
                              <Link
                                className="[border:none] cursor-pointer"
                                onClick={toggleInputPasswordConfirm}
                              >
                                {confirmPasswordInputText === "text" ? (
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
                          <p className="text-[0.875rem] m-0 p-0 text-[#EE4B2B]">
                            {formError}
                          </p>
                          <div className="flex justify-center mt-3">
                            <div className="w-full bg-[#E5EBFB] rounded-xl text-[#274082] ">
                              <div className="px-2 py-6">
                                <div className="flex">
                                  <AiFillInfoCircle
                                    className="text-[#543FBF]"
                                    size={20}
                                  />
                                  <div className="ml-2">คำแนะนำ</div>
                                </div>

                                <div className="text-sm m-3">
                                  1. มีความยาวตัวอักษรไม่ต่ำกว่า 8 ตัว <br />
                                  2.
                                  รหัสผ่านต้องประกอบไปด้วยตัวอักษรภาษาอังกฤษพิมพ์ใหญ่
                                  อย่างน้อย 1 ตัวตัวอักษรภาษาอังกฤษและตัวเลข
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="items-center justify-center text-center">
                        <button
                          className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                text-white text-lg justify-center text-center w-full sm:w-[35%] h-auto rounded-3xl px-5 py-3 cursor-pointer"
                          onClick={() => nextStep4To5()}
                        >
                          บันทึกข้อมูล
                        </button>
                      </div>
                    </div>
                  </>
                ) : showStep5 ? (
                  <>
                    <div className="w-3/4 mx-auto items-start justify-start text-center">
                      <h1 className="font-bold text-3xl">บันทึกข้อมูลสำเร็จ</h1>
                      <h3 className="font-light text-lg">
                        โปรดยืนยันตัวตนผ่าน e-Kyc หรือมายืนยันตัวตนด้วยตนเอง
                        <br />
                        ที่กรมพัฒนาธุรกิจการค้าทั่วประเทศ
                      </h3>
                      <div className="items-center justify-center text-center mx-auto">
                        <Link
                          className="inline-block bg-gradient-to-b from-[#543FBF] to-[#576EBA] border-none mt-8
                                  text-white text-lg justify-center text-center w-[40%] h-auto rounded-3xl px-10 py-3 "
                          to="/member/home"
                        >
                          ดำเนินการยืนยันตัวตน
                        </Link>
                      </div>
                      <div className="items-center justify-center text-center mx-auto">
                        <Link
                          className="inline-block bg-[#E6E9F5] border-none mt-4 text-[#543FBF]
                                  text-lg justify-center text-center w-[40%] h-auto rounded-3xl px-10 py-3 "
                          onClick={() => window.location.reload(false)}
                        >
                          กลับหน้าหลัก
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordModalForm;
