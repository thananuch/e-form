import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Backbackcard from "../../asseets/images/backbackcard.png";
import styles from "../calendar/Calendar.module.css";

function InformationpersonForm() {
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

  return (
    <>
      <div className="w-full mt-4">
        <h2 className="text-xl font-bold">ข้อมูลส่วนตัว</h2>
        <hr />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-3">
        <div>
          <div className="text-sm my-1">
            เลขประจำตัวประชาชน 13 หลัก
            <span className="text-red-500">*</span>
          </div>
          <div className="flex">
            <input
              placeholder="ระบุ รหัสประจำตัวประชาชน"
              required
              className="[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-l-lg py-3 px-3"
              type="text"
            />
            <div className="w-40  flex justify-center items-center cursor-pointer bg-[#EEF0F6] text-[#222222] rounded-r-lg">
              <Link
                className="outline outline-offset-1 outline-1 outline-[#576EBA] justify-center text-center 
                bg-style-1-eef0f6 rounded-2xl text-base text-[#543FBF] p-1"
              >
                ตรวจสอบ
              </Link>
            </div>
          </div>
        </div>

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
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3"
              placeholder="ระบุ รหัสหลังบัตรประจำตัวประชาชน"
            />
          </div>
        </div>
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
                  className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-l-lg py-3 px-3"
                  value={dateState}
                  placeholder="ระบุ วันเดือนปีเกิด"
                  onChange={(e) => setDateState(e.target.value)}
                />
              )}
              {selectedDate && (
                <div
                  className="w-12 bg-[#EEF0F6] text-[#222222]  rounded-r-lg justify-center flex items-center cursor-pointer"
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
            placeholder="กรุณาเลือกเพศ"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3  text-[14px]"
          >
            <option value={0}>เลือกคำนำหน้าชื่อ</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div>
          <div className="text-sm my-1">
            ชื่อ <span className="text-red-500">*</span>
          </div>

          <input
            placeholder="ระบุ ชื่อ"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3"
            type="text"
          />
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
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3"
            type="text"
          />
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
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
            type="text"
          />
        </div>

        <div>
          <div className="text-sm my-1 ">Middle name </div>
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
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
            type="text"
          />
        </div>
      </div>
    </>
  );
}

export default InformationpersonForm;
