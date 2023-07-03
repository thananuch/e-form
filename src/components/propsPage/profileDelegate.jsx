import React from "react";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCalendarMonth } from "react-icons/md";

function ProfileDelegate(props) {
  return (
    <>
      <h2 className="text-xl">ข้อมูลส่วนตัว</h2>
      <hr />
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-8 ">
        <div>
          <div className="text-sm my-1">
            เลขประจำตัวประชาชน 13 หลัก <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-row">
            <input
              placeholder="ระบุ รหัสประจำตัวประชาชน"
              required
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black
                "
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4">
        <div className="relative">
          <div className="text-sm my-1 ">
            วัน-เดือน-ปีเกิด <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-row">
            <input
              dir="ltr"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-l-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black"
              placeholder="วันที่"
            />
            <div
              className="w-16  bg-[#E2E2E2]  text-black
                    rounded-r-xl justify-center flex items-center"
            >
              <MdOutlineCalendarMonth size={30} />
            </div>
          </div>
        </div>
        <div className="lg:grid-cols-2 grid-cols-1 gap-[0.5rem]">
          <div className="text-sm my-1">
            อาชีพ <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-row">
            <select
              placeholder="กรุณาเลือกเพศ"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black text-[14px]"
            >
              <option value={0}>กรุณาเลือกอาชีพ</option>
            </select>
          </div>
        </div>
      </div>
      <h4 className="text-xl">ชื่อ ภาษาไทย</h4>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <div className="text-sm my-1">
            คำนำหน้าชื่อ <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-row">
            <select
              placeholder="เลือกคำนำหน้าชื่อ"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black text-[14px]"
            >
              <option value={0}>เลือกคำนำหน้าชื่อ</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-4">
        <div>
          <div className="text-sm my-1 ">
            ชื่อ <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-row">
            <input
              placeholder="ระบุ ชื่อ"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black"
              type="text"
            />
          </div>
        </div>
        <div>
          <div className="text-sm my-1">ชื่อกลาง </div>
          <div className="flex flex-row">
            <input
              placeholder="ระบุ ชื่อกลาง"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black"
              type="text"
            />
          </div>
        </div>
        <div>
          <div className="text-sm my-1">
            นามสกุุล <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-row">
            <input
              placeholder="ระบุ นามสกุล"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black"
              type="text"
            />
          </div>
        </div>
      </div>

      <h4 className="text-xl">ชื่อ ภาษาอังกฤษ</h4>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-4">
        <div>
          <div className="text-sm my-1">
            Name <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-row">
            <input
              placeholder="ระบุ ชื่อภาษาอังกฤษ"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                    disabled:bg-[#E2E2E2] disabled:text-black"
              type="text"
            />
          </div>
        </div>

        <div>
          <div className="text-sm my-1">Middle name </div>
          <div className="flex flex-row">
            <input
              placeholder="ระบุ ชื่อกลางภาษาอังกฤษ"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                    disabled:bg-[#E2E2E2] disabled:text-black"
              type="text"
            />
          </div>
        </div>
        <div className="lg:grid-cols-2 grid-cols-1 gap-[0.5rem]">
          <div className="text-sm my-1">
            Surname <span className="text-red-500">*</span>
          </div>
          <div className="flex flex-row">
            <input
              placeholder="ระบุ นามสกุลภาษาอังกฤษ"
              disabled
              className="[border:none] outline-none bg-style-1-eef0f6 w-full rounded-xl py-3 px-3
                disabled:bg-[#E2E2E2] disabled:text-black"
              type="text"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default ProfileDelegate;
