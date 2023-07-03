import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../asseets/images/logo.png";
import BgBody from "../../asseets/images/bg-login.png";
import ThaidImg from "../../asseets/images/qrThaId.png";
import appleStore from "../../asseets/images/apple_store.png";
import playStore from "../../asseets/images/google_play.png";

const LoginThaiId = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BgBody})` }}
      className="relative w-screen h-screen overflow-hidden text-[1rem] text-color bg-cover bg-center"
    >
      <div className="hidden md:block p-2 absolute m-2">
        <img className="relative object-cover" src={Logo} alt="logo"></img>
      </div>

      <div className="absolute top-[15%] left-[15%] w-[70%] flex ">
        <div className="flex-auto w-[50%] bg-gray-50 py-5 px-10 rounded-l-2xl">
          <h1 className="text-2xl">การเข้าสู่ระบบด้วยแอปพลิเคชัน ThaID</h1>
          <h2 className="text-xl">ขั้นตอนการเข้าสู่ระบบ</h2>
          <h2 className="text-sm font-normal">
            1. เข้าเว็บไซต์กรม DBD เลือกเข้าสู่ระบบด้วย ThaID
          </h2>
          <h2 className="text-sm font-normal">
            2. ยืนยันตัวตนโดยใช้แอปพลิเคชัน ThaID สแกน QR Code ที่แสดงบนเว็บไซต์
          </h2>
          <h1 className="text-xl">หากยังไม่มีแอปพลิเคชัน ThaID ให้ทำดังนี้</h1>
          <h2 className="text-sm font-normal">
            1. ดาวน์โหลดแอปพลิเคชั่น ThaID จาก
          </h2>
          <img className="w-1/4" src={appleStore} alt="appleStore" />{" "}
          <img className="w-1/4" src={playStore} alt="playStore" />
          <h2 className="text-sm font-normal">
            2. ลงทะเบียนการใช้งาน ThaID ด้วยตนเองผ่านแอปพลิเคชัน หรือ
            ลงทะเบียนผ่าน เจ้าหน้าที่ ณ สำนักทะเบียนทั่วประเทศ
          </h2>
          <Link
            className="inline-block [background:linear-gradient(90deg,_#543fbf,_#576eba)] text-white text-center w-24 h-6 rounded-full px-2 py-3 mt-20"
            to="/login"
          >
            ย้อนกลับ
          </Link>
        </div>

        <div className="flex-auto w-[50%] items-center text-center bg-white p-5 rounded-r-2xl">
          <h1 className="text-xl">เข้าสู่ระบบ</h1>
          <h2 className="text-xl">ด้วย </h2>
          <h2 className="text-xl"> ระบบยื่นแบบผ่านอินเทอร์เน็ต </h2>
          <img className="w-1/2" src={ThaidImg} alt="thaid" />
          <p className="text-lg">
            คิวอาร์โค้ดนี้เป็นสิ่งยืนยันตนทางดิจิทัล ออกให้โดย
          </p>
          <p className="text-lg">กรมการปกครอง กระทรวงมหาดไทย</p>
          <p className="text-sm text-purple-700">1 : 59 วินาที</p>
        </div>
      </div>
    </div>
  );
};

export default LoginThaiId;
