import React, { useState,useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Backbackcard from "../../asseets/images/backbackcard.png";
import styles from "../calendar/Calendar.module.css";
import Swal from "sweetalert2";

function InformationpersonForm() {
  const { typeAccountRegist } = useParams();
  const [typeDelegate, setTypeDelegate] = useState("");

  //Calendar
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
  const [nationality ,setNationality ] = useState("TH");
  const [idCard, setIdCard] = useState("");
  const [laserId, setLaserId] = useState("");
  const [title, setTitle] = useState("");
  const [name_TH, setName_TH] = useState("");
  const [name_EN, setName_EN] = useState("");
  const [lastname_TH, setLastName_TH] = useState("");
  const [lastname_EN, setLastName_EN] = useState("");
  //errors filed
  const [errors, setErrors] = useState({});
  //validate
  const validateInformationperson = () => {
    const errors = {};
    if (idCard === null || idCard.trim() === "") {
      let errorText = "กรุณากรอกเลขบัตรประจำตัวประชาชน";
      if(nationality != 'TH'){
        errorText = "กรุณากรอกหมายเลขหนังสือเดินทาง";
      }
      errors.idCard = errorText;
    }
    if (laserId === null || laserId.trim() === "") {
      errors.laserId = "กรุณากรอกรหัสหลังบัตรประชาชน";
    }
    if (dateState === null || dateState.trim() === "") {
      errors.dateState = "กรุณากรอกวันเดือนปีเกิด";
    }
    if (title === null || title.trim() === "") {
      errors.title = "กรุณากรอกคำนำหน้าชื่อ";
    }
    if (name_TH === null || name_TH.trim() === "") {
      errors.name_TH = "กรุณากรอกชื่อ";
    }
    if (lastname_TH === null || lastname_TH.trim() === "") {
      errors.lastname_TH = "กรุณากรอกนามสกุล";
    }
    if (name_EN === null || name_EN.trim() === "") {
      errors.name_EN = "กรุณากรอกชื่อภาษาอังกฤษ";
    }
    if (lastname_EN === null || lastname_EN.trim() === "") {
      errors.lastname_EN = "กรุณากรอกนามสกุลภาษาอังกฤษ";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (typeAccountRegist === "D") {
      if (typeDelegate === "" || typeDelegate === "0") {
        Swal.fire({
          icon: "warning",
          title: "แจ้งเตือน",
          text: "โปรดเลือกประเภทผู้แทน",
          confirmButtonText: "ตกลง",
        });
        return;
      }
    }

    const isValid = validateInformationperson();
    if (isValid) {
      window.location.href = `/informationaddress/${typeAccountRegist}`;
    }
  };

  //ref File upload
  const delegateFile = useRef(null);

  const handleClickFile = () => {
    delegateFile.current.click();
  };

  return (
    <>
      <div className="w-full mt-4">
        <h2 className="text-xl font-bold">ข้อมูลส่วนตัว</h2>
        <hr />
      </div>
      {typeAccountRegist === "P" ? (
        <>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4">
            <div>
              <div className="text-sm my-1 ">
                สัญชาติ
                <span className="text-red-500">*</span>
              </div>
              <div className="flex flex-row">
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  placeholder="เลือกสัญชาติ"
                  className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3 "
                >
                  <option value={'TH'}>ไทย</option>
                  <option value={'EN'}>อังกฤษ</option>
                </select>
              </div>
            </div>
          </div>

          
        </>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-3">
        <div>
          <div className="text-sm my-1">
          {nationality === 'TH' ? " เลขประจำตัวประชาชน 13 หลัก" : " หมายเลขหนังสือเดินทาง (Passport)"}
            <span className="text-red-500">*</span>
          </div>
          <div className="flex">
            <input
              placeholder={nationality === 'TH' ? " ระบุ รหัสประจำตัวประชาชน" : "ระบุ หมายเลขหนังสือเดินทาง (Passport)"}
              required
              value={idCard || ""}
              onChange={(e) => setIdCard(e.target.value)}
              className={
                errors.idCard
                  ? "[border:none] outline-none block w-full rounded-l-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                  : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
              }
              type="text"
              maxLength="13"
            />
            <div
              className={`w-40  flex justify-center items-center cursor-pointer text-[#222222] rounded-r-lg ${
                errors.idCard ? "bg-red-500 bg-opacity-10" : "bg-[#EEF0F6]"
              }`}
            >
              {nationality === 'TH' ? 
                <Link
                  className="outline outline-offset-1 outline-1 outline-[#576EBA] justify-center text-center 
                  bg-style-1-eef0f6 rounded-2xl text-base text-[#543FBF] p-1"
                >
                  ตรวจสอบ
                </Link> 
              : ""}
            </div>
          </div>
          <p className="text-xs p-0 m-0 text-red-500">{errors.idCard}</p>
        </div>
        
        {nationality === 'TH' ? 
          <div>
            <div className="flex">
              <div className="text-sm my-1">รหัสหลังบัตรประจำตัวประชาชน</div>
              <div className="hidden md:block group relative mt-1 ml-2">
                <AiOutlineQuestionCircle
                  className="text-[#222222] rounded"
                  size="15"
                />
                <span
                  className="absolute top-10 scale-0 transition-all justify-center inherit text-center 
                  rounded bg-white p-2 text-xs text-black w-[300px] group-hover:scale-100 z-10 shadow-xl"
                >
                  <h2 className="text-xl">เลเซอร์ ไอดี คืออะไร ?</h2>
                  <h4 className="text-xs">
                    คือรหัสเพื่อยืนยันถึงสถานะสำหรับบัตรประชาชน
                  </h4>
                  <div className="flex justify-center mt-2 mb-2">
                    <img alt="backcard" src={Backbackcard}></img>
                  </div>
                  <p className="text-xs">1. รหัสปรากฏอยู่ด้านล่างของบัตร</p>
                  <p>2. ใช้รหัสเพื่อยืนยันสถานะบัตรประชน</p>
                </span>
              </div>
            </div>
            <div className="flex">
              <input
                dir="ltr"
                placeholder="ระบุ เลเซอร์ไอดี หลังบัตรประชาชนของท่าน"
                className={
                  errors.laserId
                    ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                    : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
                }
                value={laserId || ""}
                onChange={(e) => setLaserId(e.target.value)}
              />
            </div>
            <p className="text-xs p-0 m-0 text-red-500">{errors.laserId}</p>
          </div> 
          :''
        }
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        <div>
          <div className="text-sm my-1">เพศ</div>
          <select
            placeholder="กรุณาเลือกเพศ"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 text-[14px]"
          >
            <option value={0}>กรุณาเลือกเพศ</option>
            <option value={1}>ชาย</option>
            <option value={2}>หญิง</option>
          </select>
        </div>
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1">
            วัน-เดือน-ปีเกิด <span className="text-red-500">*</span>
          </div>
          <div>
            <div className="flex flex-row">
              {selectedDate && (
                <input
                  dir="ltr"
                  className={
                    errors.dateState
                      ? "[border:none] outline-none block w-full rounded-l-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                      : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
                  }
                  value={dateState || ""}
                  placeholder="ระบุ วันเดือนปีเกิด"
                  onChange={(e) => setDateState(e.target.value)}
                />
              )}
              {selectedDate && (
                <div
                  className={`w-12 text-[#222222] rounded-r-lg justify-center flex items-center cursor-pointer ${
                    errors.dateState
                      ? "bg-red-500 bg-opacity-10"
                      : "bg-[#EEF0F6]"
                  }`}
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
          </div>
          <p className="text-xs p-0 m-0 text-red-500">{errors.dateState}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        <div>
          <div className="text-sm my-1 ">อาชีพ</div>
          <select
            placeholder="กรุณาเลือกเพศ"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 text-[14px]"
          >
            <option value={0}>กรุณาเลือกอาชีพ</option>
          </select>
        </div>
      </div>

      <h4 className="text-base mt-6  font-bold  text-[#000]">ชื่อ ภาษาไทย</h4>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div>
          <div className="text-sm my-1">
            คำนำหน้าชื่อ <span className="text-red-500">*</span>
          </div>

          <select
            placeholder="กรุณาเลือกคำนำหน้าชื่อ"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
            className={
              errors.title
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm text-[#D25656] placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3 text-sm"
            }
          >
            <option value={0}>เลือกคำนำหน้าชื่อ</option>
            <option value={1}>2</option>
            <option value={2}>3</option>
          </select>
          <p className="text-xs p-0 m-0 text-red-500">{errors.title}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div>
          <div className="text-sm my-1">
            ชื่อ <span className="text-red-500">*</span>
          </div>

          <input
            placeholder="ระบุ ชื่อ"
            value={name_TH || ""}
            onChange={(e) => setName_TH(e.target.value)}
            className={
              errors.name_TH
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.name_TH}</p>
        </div>
        <div>
          <div className="text-sm my-1 ">ชื่อกลาง </div>
          <input
            placeholder="ระบุ ชื่อกลาง"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3"
            type="text"
          />
        </div>
        <div>
          <div className="text-sm my-1 ">
            นามสกุุล <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ นามสกุล"
            value={lastname_TH || ""}
            onChange={(e) => setLastName_TH(e.target.value)}
            className={
              errors.lastname_TH
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.lastname_TH}</p>
        </div>
      </div>

      <h4 className="text-base mt-6  font-bold  text-[#000]">
        ชื่อ ภาษาอังกฤษ
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div>
          <div className="text-sm my-1 ">
            Name <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ ชื่อภาษาอังกฤษ"
            value={name_EN || ""}
            onChange={(e) => setName_EN(e.target.value)}
            className={
              errors.name_EN
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.name_EN}</p>
        </div>

        <div>
          <div className="text-sm my-1 ">Middle name</div>
          <input
            placeholder="ระบุ ชื่อกลางภาษาอังกฤษ"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
            type="text"
          />
        </div>
        <div>
          <div className="text-sm my-1 ">
            Surname <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ นามสกุลภาษาอังกฤษ"
            value={lastname_EN || ""}
            onChange={(e) => setLastName_EN(e.target.value)}
            className={
              errors.lastname_EN
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.lastname_EN}</p>
        </div>
      </div>
      {typeAccountRegist === "D" ? (
        <>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4">
            <div>
              <div className="text-sm my-1 ">
                ประเภทผู้แทน
                <span className="text-red-500">*</span>
              </div>
              <div className="flex flex-row">
                <select
                  value={typeDelegate}
                  onChange={(e) => setTypeDelegate(e.target.value)}
                  placeholder="เลือกประเภทผู้แทน"
                  className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3 "
                >
                  <option value={0}>เลือกประเภทผู้แทน</option>
                  <option value={1}>ผู้ทำบัญชี</option>
                  <option value={2}>ผู้สอบบัญชี</option>
                  <option value={3}>ผู้บังคับหลักประกัน</option>
                  <option value={4}>หัวหน้าสำนักงานบัญชีคุณภาพ</option>
                  <option value={5}>ผู้รับรองลายมือชื่อบริษัทมหาชน</option>
                  <option value={6}>สมาชิกเนติบัณฑิตยสภา</option>
                </select>
              </div>
            </div>
          </div>

          {typeDelegate === "6" ? (
            <div className="grid grid-cols-1 gap-8 mt-4">
              <label
                htmlFor="delegateFile"
                className="flex flex-col items-center justify-center w-full border-2 border-dashed border-[#ABABAB] rounded-lg bg-[#fbfbfb] "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6"> 
                  <div>
                    <span className="font-medium text-xl mr-2">วางไฟล์ที่นี้</span> 
                    <span className="font-bold text-lg"> หรือ </span> 
                    <button 
                      onClick={handleClickFile}
                      className="ml-2 bg-white border-[#543FBF] border-1 rounded-2xl font-light text-lg cursor-pointer py-1 px-4 text-[#543FBF]" 
                      htmlFor="delegate-file" type="button" >เลือกไฟล์</button> 
                  </div>
                  <div className="font-thin text-sm mt-4" >
                    (นามสกุลไฟล์ .pdf ขนาดไม่เกิน 2 mb)
                  </div>
                </div>
                <input ref={delegateFile} id="delegateFile" type="file" className="hidden" accept='application/pdf' />
              </label>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      <div className="my-4 flex justify-end mt-8">
        <Link
          className="inline-block bg-[#E6E9F5] text-[#543FBF] justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 mr-4 text-lg "
          to="/selecttypeuser"
        >
          ย้อนกลับ
        </Link>
        <Link
          className="inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA] border-none 
                                text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3"
          onClick={() => handleSubmit()}
        >
          ดำเนินการต่อ
        </Link>
      </div>
    </>
  );
}

export default InformationpersonForm;
