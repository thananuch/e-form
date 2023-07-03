import React from "react";

function InformationaddressForm(props) {
  //Test
  const user = props.user;
  return (
    <>
      <h2 className="text-xl font-bold">ข้อมูลการติดต่อ และ ที่อยู่</h2>
      <hr />
      <h4 className="text-base mt-4 my-2 font-bold  text-[#000]">
        ข้อมูลการติดต่อ
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">โทรศัพท์</div>
          <input
            placeholder="ระบุ โทรศัพท์"
            className="[border:none] bg-style-1-eef0f6 block w-full  rounded-xl py-3 px-3 "
            type="text"
          />
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            โทรศัพท์มือถือ <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ โทรศัพท์มือถือ"
            maxLength="10"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
            type="text"
            value={user.name}
          />
        </div>
      </div>

      <h4 className="ttext-base mt-5 my-2 font-bold  text-[#000]">
        ข้อมูลที่อยู่
      </h4>
      <div className="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">เลขที่</div>
          <input
            placeholder="ระบุ เลขที่"
            className="[border:none] bg-style-1-eef0f6 block w-full  rounded-xl py-3 px-3 "
            type="text"
          />
        </div>

        <div className="grid-flow-row gap-[0.5rem] col-span-2">
          <div className="text-sm my-1 ">รายละเอียดที่อยู่ (ถ้ามี)</div>
          <input
            placeholder="ห้องเลขที่, ชั้น, อาคาร, หมู่บ้าน"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
            type="text"
          />
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            หมู่ที่ <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ หมู่"
            className="[border:none] bg-style-1-eef0f6 block w-full  rounded-xl py-3 px-3 "
            type="text"
          />
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            ตรอก <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ ตรอก"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
            type="text"
          />
        </div>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            ซอย <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ ซอย"
            className="[border:none] bg-style-1-eef0f6 block w-full  rounded-xl py-3 px-3 "
            type="text"
          />
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            ถนน <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ ถนน"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 "
            type="text"
          />
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3  gap-8 mt-4">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            ตําบล/แขวง <span className="text-red-500">*</span>
          </div>
          <select
            placeholder="เลือก ตําบล/แขวง"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 text-[14px] cursor-pointer"
          >
            <option value={0}>เลือก ตําบล/แขวง</option>
          </select>
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            อําเภอ/เขต <span className="text-red-500">*</span>
          </div>
          <select
            placeholder="เลือก อําเภอ/เขต"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 text-[14px] cursor-pointer"
            type="text"
          >
            <option value={0}>เลือก ตําบล/แขวง</option>
          </select>
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            จังหวัด <span className="text-red-500">*</span>
          </div>
          <select
            placeholder="เลือก จังหวัด"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3 text-[14px] cursor-pointer"
            type="text"
          >
            <option value={0}>เลือก จังหวัด</option>
          </select>
        </div>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-3  gap-8 mt-4">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            รหัสไปรษณีย์ <span className="text-red-500">*</span>
          </div>
          <select
            placeholder="กรุณาเลือก รหัสไปรษณีย์"
            className="[border:none] bg-style-1-eef0f6 block w-full rounded-xl py-3 px-3  text-[14px] cursor-pointer"
          >
            <option value={0}>เลือก รหัสไปรษณีย์</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default InformationaddressForm;
