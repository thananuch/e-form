import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asseets/images/logo.png";
import slide1Img from "../../asseets/images/photo-girl.png";
import slide2Img from "../../asseets/images/smart-glasses.png";
import slide3Img from "../../asseets/images/elderly-senior.png";
import ndidImg from "../../asseets/images/ndid.png";
import BgBody from "../../asseets/images/bg-login.png";
import thaiId from "../../asseets/images/ThaiId.png";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import ForgotPasswordModalForm from "../../modal/forgotPasswordModalForm/forgotPasswordModalForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Swal from "sweetalert2";

function Loginpage() {
  const images = [slide1Img, slide2Img, slide3Img];

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-blue/20 text-blue-950 cursor-pointer hover:scale-125 ease-in-out duration-150 z-10"
      >
        <GoChevronRight size={30} />
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-blue/20 text-blue-950 cursor-pointer hover:scale-125 ease-in-out duration-150 z-10"
      >
        <GoChevronLeft size={30} />
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "0px",
          zIndex: "20",
        }}
      >
        <ul
          style={{
            marginLeft: "30px",
            padding: 0,
            position: "absolute",
            bottom: "10px",
            zIndex: "20",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: i === sliderSettings.currentSlide ? "#000" : "#F9B343",
        }}
      />
    ),
  };

  // username and password
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmitLogin = () => {
    if (username == null || username === "") {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "กรุณากรอกรหัสผู้ใช้งาน (Username)",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    if (password == null || password === "") {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "กรุณากรอกรหัสผ่าน (Password)",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
      return;
    }
    window.location.href = "/member/home";
  };

  //modal Forgot Password
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgBody})` }}
        className="w-full h-screen bg-cover bg-center"
      >
        <div className="hidden md:block p-2 absolute m-2">
          <img className="relative object-cover" src={Logo} alt="logo"></img>
        </div>

        <div className="flex  min-h-screen justify-center items-center">
          <div className="relative w-[30.69rem] h-[39.5rem] max-md:hidden">
            <div className="absolute w-full h-full bg-center rounded-l-2xl">
              <Slider {...sliderSettings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <div>
                      <div className="relative w-[30.69rem] h-[39.5rem] max-md:hidden">
                        <img src={image} alt="img" className="rounded-l-lg" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div
              className="absolute w-[30.69rem] h-[39.5rem] flex flex-col items-start justify-start text-left text-ffffff rounded-l-2xl"
              style={{
                background: `linear-gradient(359.29deg, #343F9E 2.38%, rgba(104, 52, 158, 0) 41.7%)`,
              }}
            >
              <div className="relative top-[80%] leading-[150%] inline-block w-[26.69rem] left-8 ">
                <p className="m-0">ยินดีต้อนรับเข้าสู่ระบบจดทะเบียนนิติบุคคล</p>
                <p className="m-0">ทางอิเล็กทรอนิกส์ (e-Registration)</p>
                <p className="m-0">กรุณาเข้าสู่ระบบหรือสมัครสมาชิก</p>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-[30.69rem] h-[39.5rem]  rounded-r-2xl
                bg-ffffff [backdrop-filter:blur(6px) overflow-hidden shrink-0 
                flex flex-col box-border items-center 
                gap-[2rem] p-[2.5rem] py-8 px-5 md:px-16 z-0"
          >
            <div className="w-full flex flex-col gap-[2rem] text-[1.88rem]">
              <div className="self-stretch flex flex-col">
                <div className="leading-[150%] font-semibold">เข้าสู่ระบบ</div>
                <div className="text-[1rem] leading-[150%]">
                  จดทะเบียนนิติบุคคลดิจิทัล (e-Form)
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[0.88rem]">
                <div className="self-stretch flex flex-col gap-[0.5rem]">
                  <div className="flex flex-row gap-[0.25rem]">
                    <div className="leading-[150%]">{`รหัสผู้ใช้งาน / เลขบัตรประจำตัวประชาชน `}</div>
                  </div>
                  <div className="self-stretch rounded-lg bg-style-1-eef0f6 overflow-hidden flex flex-row text-[1rem]">
                    <input
                      placeholder="กรุณากรอกรหัสผู้ใช้งาน"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className="[border:none] bg-style-1-eef0f6 block w-full rounded-lg py-3 pl-3 focus:outline-blue-400"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col gap-[0.5rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                    <div className="relative leading-[150%]">รหัสผ่าน</div>
                  </div>
                  <div className="self-stretch rounded-lg bg-style-1-eef0f6 overflow-hidden flex flex-row text-[1rem]">
                    <input
                      placeholder="กรุณากรอกรหัสผ่าน"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="[border:none] bg-style-1-eef0f6 block w-full rounded-lg py-3 pl-3 focus:outline-blue-400"
                      type={passwordType}
                    />
                    <Link
                      className="relative py-3 px-3 [border:none] cursor-pointer"
                      onClick={togglePassword}
                    >
                      {passwordType === "password" ? (
                        <AiOutlineEyeInvisible
                          size={20}
                          className="align-middle text-black"
                        />
                      ) : (
                        <AiOutlineEye
                          size={20}
                          className="align-middle text-black"
                        />
                      )}
                    </Link>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between text-black">
                  <div className="flex flex-row gap-[1rem]">
                    <div className="relative leading-[150%]">ไม่มีบัญชี?</div>
                    <div className="rounded-lg gap-[0.5rem] ">
                      <Link
                        className="relative leading-[150%] decoration-0 text-[#343F9E]"
                        to="/termsconditions"
                      >
                        สมัครสมาชิก
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-lg flex flex-row gap-[0.5rem]">
                    <Link
                      className="relative leading-[150%] decoration-0 text-[#343F9E]"
                      onClick={() => setShowForgotPassword(true)}
                    >
                      ลืมรหัสผ่าน
                    </Link>
                  </div>
                </div>
                <Link
                  className="self-stretch rounded-980xl [background:linear-gradient(90deg,_#543fbf,_#576eba)]
                      flex flex-row py-[0.5rem] px-[2rem] items-center justify-center gap-[0.5rem] text-center text-[1rem] text-ffffff"
                  onClick={handleSubmitLogin}
                >
                  เข้าสู่ระบบ
                </Link>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start text-left">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.1px] border-solid border-style-2-ccd4e5" />
                <div className="relative leading-[150%]">
                  เข้าสู่ระบบด้วย Digital ID
                </div>
                <AiOutlineQuestionCircle size={15} className="text-blue-500" />
                <div className="flex-1 relative box-border border-t-[0.1px] border-solid border-style-2-ccd4e5" />
              </div>
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-[1rem] text-style-1-343f9e">
              <Link
                className="self-stretch rounded-980xl bg-purple-bg flex flex-row py-[0.5rem] px-[2rem] items-center justify-center gap-[0.5rem]"
                to="/loginbythaid"
              >
                <img
                  className="relative w-[3.06rem] h-[1.5rem] object-cover"
                  alt="ndid"
                  src={ndidImg}
                />
                <div className="relative leading-[150%] text-[#343F9E]">
                  NDID
                </div>
              </Link>
              <Link className="self-stretch rounded-980xl bg-purple-bg flex flex-row py-[0.5rem] px-[2rem] items-center justify-center gap-[0.5rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem] object-cover"
                  alt="thaiId"
                  src={thaiId}
                />
                <div className="relative leading-[150%] text-[#343F9E]">
                  ThaID
                </div>
              </Link>
            </div>
          </div>
        </div>
        <ForgotPasswordModalForm
          isVisible={showForgotPassword}
          onClose={() => setShowForgotPassword(false)}
        />
      </div>
    </>
  );
}

export default Loginpage;
