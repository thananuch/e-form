import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function InformationaddressForm() {
  const { typeAccountRegist } = useParams();

  const [tel, setTel] = useState("");
  const [tumbon, setTumbon] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [moo, setMoo] = useState("");
  const [alley, setAlley] = useState("");
  const [soi, setSoi] = useState("");
  const [road, setRoad] = useState("");

  //errors filed
  const [errors, setErrors] = useState({});

  //validate here
  const validateInfomationaddress = () => {
    let errors = {};

    if (tel === null || tel.trim() === "") {
      errors.tel = "กรุณากรอกโทรศัพท์มือถือ";
    }

    if (
      moo.trim() === "" &&
      alley.trim() === "" &&
      soi.trim() === "" &&
      road.trim() === ""
    ) {
      errors.general = "กรุณาระบุข้อมูลอย่างน้อย 1 ช่อง";
    }

    if (tumbon === null || tumbon.trim() === "0" || tumbon.trim() === "") {
      errors.tumbon = "กรุณากรอกตำบล/แขวง";
    }
    if (
      district === null ||
      district.trim() === "0" ||
      district.trim() === ""
    ) {
      errors.district = "กรุณากรอกอำเภอ/เขต";
    }
    if (
      province === null ||
      province.trim() === "0" ||
      province.trim() === ""
    ) {
      errors.province = "กรุณากรอกจังหวัด";
    }
    if (zipcode === null || zipcode.trim() === "0" || zipcode.trim() === "") {
      errors.zipcode = "กรุณากรอกรหัสไปรษณีย์";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    const isValid = validateInfomationaddress();
    if (isValid) {
      window.location.href = `/informationaccount/${typeAccountRegist}`;
    }
  };

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
            value={tel || ""}
            onChange={(e) => setTel(e.target.value)}
            maxLength="10"
            className={
              errors.tel
                ? "[border:none] outline-none block w-full rounded-l-lg py-3 px-3 bg-red-500 bg-opacity-10 placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.tel}</p>
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
            value={moo || ""}
            onChange={(e) => setMoo(e.target.value)}
            className={
              errors.general
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.general}</p>
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            ตรอก <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ ตรอก"
            value={alley || ""}
            onChange={(e) => setAlley(e.target.value)}
            className={
              errors.general
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.general}</p>
        </div>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            ซอย <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ ซอย"
            value={soi || ""}
            onChange={(e) => setSoi(e.target.value)}
            className={
              errors.general
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.general}</p>
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            ถนน <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="ระบุ ถนน"
            value={road || ""}
            onChange={(e) => setRoad(e.target.value)}
            className={
              errors.general
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          />
          <p className="text-xs p-0 m-0 text-red-500">{errors.general}</p>
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3  gap-8 mt-4">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            ตําบล/แขวง <span className="text-red-500">*</span>
          </div>
          <select
            placeholder="เลือก ตําบล/แขวง"
            value={tumbon || ""}
            onChange={(e) => setTumbon(e.target.value)}
            className={
              errors.tumbon
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm text-[#D25656] placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
          >
            <option value={0}>เลือก ตําบล/แขวง</option>
            <option value={1}>1</option>
          </select>
          <p className="text-xs p-0 m-0 text-red-500">{errors.tumbon}</p>
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            อําเภอ/เขต <span className="text-red-500">*</span>
          </div>
          <select
            placeholder="เลือก อําเภอ/เขต"
            value={district || ""}
            onChange={(e) => setDistrict(e.target.value)}
            className={
              errors.district
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm text-[#D25656] placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          >
            <option value={0}>เลือก อําเภอ/เขต</option>
            <option value={1}>1</option>
          </select>
          <p className="text-xs p-0 m-0 text-red-500">{errors.district}</p>
        </div>

        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            จังหวัด <span className="text-red-500">*</span>
          </div>
          <select
            placeholder="เลือก จังหวัด"
            value={province || ""}
            onChange={(e) => setProvince(e.target.value)}
            className={
              errors.province
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm text-[#D25656] placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
            type="text"
          >
            <option value={0}>เลือก จังหวัด</option>
            <option value={1}>1</option>
          </select>
          <p className="text-xs p-0 m-0 text-red-500">{errors.province}</p>
        </div>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-3  gap-8 mt-4">
        <div className="grid-flow-row gap-[0.5rem]">
          <div className="text-sm my-1 ">
            รหัสไปรษณีย์ <span className="text-red-500">*</span>
          </div>
          <select
            placeholder="กรุณาเลือก รหัสไปรษณีย์"
            value={zipcode || ""}
            onChange={(e) => setZipcode(e.target.value)}
            className={
              errors.zipcode
                ? "[border:none] outline-none block w-full rounded-lg py-3 px-3 bg-red-500 bg-opacity-10 text-sm text-[#D25656] placeholder-[#D25656]"
                : "[border:none] outline-none bg-style-1-eef0f6 block w-full rounded-lg py-3 px-3"
            }
          >
            <option value={0}>เลือก รหัสไปรษณีย์</option>
            <option value={1}>1</option>
          </select>
          <p className="text-xs p-0 m-0 text-red-500">{errors.zipcode}</p>
        </div>
      </div>
      <div className="my-4 flex justify-end mt-8">
        <Link
          className="inline-block bg-[#E6E9F5] text-[#543FBF] justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 mr-4 text-lg "
          to={`/informationperson/${typeAccountRegist}`}
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
    </>
  );
}

export default InformationaddressForm;
