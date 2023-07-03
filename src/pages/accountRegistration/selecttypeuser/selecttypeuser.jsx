import React,{useState} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Content from "../../../components/layout/Content";
import { TbGavel } from "react-icons/tb";
import { RiFileUserFill } from "react-icons/ri";
import { MdBallot } from "react-icons/md";
import { AiFillSave, AiOutlineCheck } from "react-icons/ai";
import NormalPerson from "../../../asseets/images/normalPerson.png";
import DelegatePerson from "../../../asseets/images/delegatePerson.png";

function Selecttypeuser() {

  const [typeAccountRegist, setTypeAccountRegist] = useState("");

  const selectChannelRegist = (event) => {
    setTypeAccountRegist(event.target.value);
  };

  const validateSelectTypeAccountRegist = () => {
    if (typeAccountRegist == null || typeAccountRegist === "") {
      Swal.fire({
        icon: "warning",
        title: "แจ้งเตือน",
        text: "โปรดเลือกประเภทการลงทะเบียน",
        confirmButtonText: "ตกลง",
      });
      return;
    }
    window.location.href = `/informationperson/${typeAccountRegist}`;
  };

  return (
    <>
      <Content />
      <div className="bg-gradient-to-b from-EEF0F6 to-EFEAE1 w-full">
        <div className="max-w-[90rem] mx-auto px-4 p-10 flex">
          <div className="w-[20rem]  rounded-l-xl bg-gradient-to-b from-977EBB to-6482C2 py-12 px-10 flex flex-row gap-[2rem] ">
            <div className="bg-[#BABFDF] py-12 px-[0.5rem] items-center justify-start rounded-full flex flex-col gap-[3.38rem] h-[70%]">
              <div className="rounded-3xl bg-white shadow-[0px_2px_4px_rgba(40,_82,_121,_0.1)] overflow-hidden flex flex-row p-[0.5rem] items-start justify-start">
                <TbGavel className=" text-[#343F9E]" size={30} />
              </div>
              <div className="rounded-3xl  bg-[#343F9E] shadow-[0px_2px_4px_rgba(40,_82,_121,_0.1)] overflow-hidden flex flex-row p-[0.5rem] items-start justify-start">
                <RiFileUserFill className="text-white" size={30} />
              </div>
              <div
                className="rounded-3xl bg-[#CFD2E9] flex flex-col py-[1rem] px-[0.25rem] 
                        items-center justify-center gap-[1.5rem] "
              >
                <div className="rounded-3xl bg-white flex flex-row p-[0.5rem] items-start justify-start">
                  <MdBallot className="text-[#343F9E]" size={30} />
                </div>
                <div className="flex flex-col items-center justify-center gap-[2rem]">
                  <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center">
                    <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
                  </div>
                  <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center">
                    <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
                  </div>
                  <div className="rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem] box-border items-center justify-center">
                    <div className="relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]" />
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
                    Step 2
                  </div>
                </div>
                <div className="self-stretch relative text-lg leading-[150%] text-white">
                  เลือกประเภทการลงทะเบียน
                </div>
              </div>
              <div className="h-[14.5rem] flex flex-col pt-[1.58rem] px-[0rem] pb-[0rem] box-border items-start justify-start gap-[1.13rem]">
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
                    <div className="relative leading-[150%]">ข้อมูลส่วนตัว</div>
                  </div>
                  <div className="h-[1.5rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative leading-[150%]">
                      ข้อมูลการติดต่อ และ ที่อยู่
                    </div>
                  </div>
                  <div className="h-[1.5rem] flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative leading-[150%]">
                      ข้อมูลบัญชีผู้ใช้งาน
                    </div>
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
              <div className="text-white w-[90%]  mx-auto">
                <div className="flex flex-wrap gap-4">
                  <div className="w-[49%]">
                    <div className="grid h-full relative">
                      <img
                        className="w-full rounded-3xl"
                        alt="NormalPerson"
                        src={NormalPerson}
                      />
                      <div className="absolute bottom-[13%] px-4">
                        <h3>ลงทะเบียนเป็นผู้ใช้งานทั่วไป</h3>
                        <p className="text-sm m-0">
                          เหมาะสำหรับบุคคลทั่วไป บริษัทจำกัด ห้างหุ้นส่วน
                        </p>
                        <p className="text-sm m-0">และกรรมการผู้ร่วมก่อตั้ง</p>
                      </div>
                      <div className="absolute bottom-[5%] right-3 ">
                        <div className="w-[8rem] h-auto rounded-3xl [background:linear-gradient(180deg,_rgba(91,_45,_144,_0.6),_rgba(0,_54,_163,_0.6))] items-center pl-4 border-none ">
                          <input
                            id="bordered-radio-1"
                            type="radio"
                            value="N"
                            name="bordered-radio"
                            className="w-5 h-5 my-4 border-white outline-blue-50 bg-gray-100 focus:bg-blue-500 focus:outline-none ring-blue-500 "
                            onChange={selectChannelRegist}
                          />
                          <label
                            htmlFor="bordered-radio-1"
                            className="w-full my-4 ml-2 text-2xl text-white  "
                          >
                            เลือก
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[49%] ">
                    <div className="grid h-full relative">
                      <img
                        className="w-full rounded-3xl"
                        alt="DelegatePerson"
                        src={DelegatePerson}
                      />
                      <div className="absolute bottom-[13%] px-4">
                        <h3>ลงทะเบียนเป็นผู้แทน</h3>
                        <p className="text-sm m-0">
                          เหมาะสำหรับ นิติบุคคล และผู้ที่ต้องทำ
                        </p>
                        <p className="text-sm m-0">ธุรกรรมทางกฏหมาย</p>
                      </div>
                      <div className="absolute bottom-[5%] right-3 ">
                        <div className="w-[8rem] h-auto rounded-3xl [background:linear-gradient(180deg,_rgba(91,_45,_144,_0.6),_rgba(0,_54,_163,_0.6))] items-center pl-4 border-none ">
                          <input
                            id="bordered-radio-2"
                            type="radio"
                            value="D"
                            name="bordered-radio"
                            className="w-5 h-5 my-4 border-white outline-blue-50 bg-gray-100 focus:bg-blue-500 focus:outline-none ring-blue-500 "
                            onChange={selectChannelRegist}
                          />
                          <label
                            htmlFor="bordered-radio-2"
                            className="w-full my-4 ml-2 text-2xl text-white  "
                          >
                            เลือก
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4 flex justify-end mt-8">
                  <Link
                    className="inline-block bg-[#E6E9F5] text-[#543FBF] justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 mr-4 text-lg "
                    to="/termsconditions"
                  >
                    ย้อนกลับ
                  </Link>
                  <Link
                    className="inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA]
                          text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3"
                    onClick={() => validateSelectTypeAccountRegist()} >
                    ดำเนินการต่อ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selecttypeuser;
