import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../asseets/images/logo.png'
import BgBody from'../../asseets/images/bg-login.png'
import slide1Img from'../../asseets/images/slide1.jpg'
import slide2Img from'../../asseets/images/slide2.jpg'
import slide3Img from'../../asseets/images/slide3.jpg'
import ndidImg from '../../asseets/images/ndid.png'
import thaiId from '../../asseets/images/ThaiId.png'

import { GoChevronLeft ,GoChevronRight } from "react-icons/go";
import { AiFillEye,AiFillEyeInvisible , AiOutlineQuestionCircle } from "react-icons/ai";
import {RxDotFilled} from 'react-icons/rx'


import ForgotPasswordModalForm from '../../modal/forgotPasswordModalForm/forgotPasswordModalForm'

import Swal from 'sweetalert2';

function Loginpage() {

    // Start Slide
    const slideList = [
      slide1Img,slide2Img,slide3Img
    ];
    let countSilde = 0;
    
    const [currentIndex , setCurrentIndex] = useState(0);
    useEffect( ()=>{
      startSlider();
    });

    const startSlider = () => {
      setInterval(() => {
         nextSlide();
      }, 5000);
    }
    const prevSlide =() =>{
      const slideLength = slideList.length;
      countSilde = (currentIndex + slideLength -1 ) % slideLength;
      setCurrentIndex(countSilde);
    }
    const nextSlide =() =>{
      countSilde = (countSilde +1 ) % slideList.length;
      setCurrentIndex(countSilde);
    }

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    // End Slide

    // username and password
    let [username,setUsername]= useState('');
    let [password,setPassword]= useState('');

    let [passwordType , setPasswordType] = useState('password');

    const togglePassword =()=>{
      if(passwordType == "password") {
        setPasswordType("text")
        return;
      }
      setPasswordType("password")
    }
    // end suername and password

    const handleSubmitLogin =() =>{
        if(username == null || username == ''){
            Swal.fire({
                title: 'แจ้งเตือน',
                text: 'กรุณากรอกรหัสผู้ใช้งาน (Username)',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'ตกลง'
            });
            return;
        }

        if(password == null || password ==''){
            Swal.fire({
                title: 'แจ้งเตือน',
                text: 'กรุณากรอกรหัสผ่าน (Password)',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'ตกลง'
            });
            return;
        }

        window.location.href = "/member/home";
    }


    //modal Forgot Password
    const [showForgotPassword, setShowForgotPassword]  = useState(false)
    //end Forgot Password


    return (
      <>
          <div style={{backgroundImage: `url(${BgBody})`}}
            className="w-full h-screen text-center text-[1rem] text-color bg-cover bg-center">
            
            <div className="absolute top-[3.75rem] left-[3.75rem] flex flex-col items-start justify-start max-lg:hidden">
              <img src={Logo} className="relative w-[9.09rem] h-[3.56rem] object-cover " alt="logo" ></img>
            </div>
            <div className="absolute top-[calc(50%_-_316.5px)] left-[calc(50%_-_510px)] flex flex-row items-center justify-start max-md:left-4">
              
              <div className="relative w-[30.69rem] h-[39.5rem] max-md:hidden">
                  <div style={{backgroundImage: `url(${slideList[currentIndex]})`}}
                    className="absolute w-full h-full bg-center rounded-l-2xl  bg-cover duration-500 "
                  ></div>
                  <div className="absolute w-[30.69rem] h-[39.5rem] flex flex-col items-start justify-start text-left text-ffffff rounded-l-2xl" 
                    style={{ background: `linear-gradient(359.29deg, #343F9E 2.38%, rgba(104, 52, 158, 0) 41.7%)`  }}>
                    <div className="relative top-[80%] leading-[150%] inline-block w-[26.69rem] left-8 ">
                      <p className="m-0">ยินดีต้อนรับเข้าสู่ระบบจดทะเบียนนิติบุคคล</p>
                      <p className="m-0">ทางอิเล็กทรอนิกส์ (e-Registration)</p>
                      <p className="m-0">กรุณาเข้าสู่ระบบหรือสมัครสมาชิก</p>
                      <div className='flex justify-start py-2 '>
                        {slideList.map((slide,slideIndex) => (
                          <div key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'>
                            <RxDotFilled />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-blue/20 text-blue-950 cursor-pointer hover:scale-125 ease-in-out duration-150'>
                    <GoChevronLeft size={30} onClick={prevSlide} />
                  </div>
                  <div className='absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-blue/20 text-blue-950 cursor-pointer hover:scale-125 ease-in-out duration-150'>
                    <GoChevronRight size={30} onClick={nextSlide} />
                  </div>
              </div>
              <div className="rounded-r-2xl
                bg-ffffff [backdrop-filter:blur(6px)] w-[33.13rem] h-[39.5rem] overflow-hidden shrink-0 
                flex flex-col p-[2rem] box-border items-center 
                justify-start gap-[2rem]  ">
                <div className="w-[23.88rem] flex flex-col items-start justify-start gap-[2rem] text-[1.88rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] font-semibold">
                      เข้าสู่ระบบ
                    </div>
                    <div className="relative text-[1rem] leading-[150%]">
                    จดทะเบียนนิติบุคคลดิจิทัล (e-Form)
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[0.88rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative leading-[150%]">{`รหัสผู้ใช้งาน / เลขบัตรประจำตัวประชาชน `}</div>
                      </div>
                      <input placeholder="กรุณากรอกรหัสผู้ใช้งาน" onChange={(e) => setUsername(e.target.value)} value={username}
                        className="[border:none] bg-style-1-eef0f6 block w-full rounded-lg py-3 pl-3 focus:outline-blue-400"
                        type="text"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative leading-[150%]">รหัสผ่าน</div>
                        
                      </div>
                      <div className="self-stretch rounded-lg bg-style-1-eef0f6 overflow-hidden flex flex-row items-start justify-start text-[1rem]">
                        <input placeholder="กรุณากรอกรหัสผ่าน" onChange={(e) => setPassword(e.target.value)} value={password}
                          className="[border:none] bg-style-1-eef0f6 block w-full rounded-lg py-3 pl-3 focus:outline-blue-400"
                          type={passwordType}
                        />
                        <Link className="relative py-3 px-3 [border:none] cursor-pointer" onClick={togglePassword} > 
                            { passwordType=="password" ? <AiFillEyeInvisible size={20} className='align-middle' />  : <AiFillEye size={20} className='align-middle' />  }
                        </Link>
                      </div>
                      
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between text-black">
                      <div className="flex flex-row items-center justify-start gap-[1rem]">
                        <div className="relative leading-[150%]">ไม่มีบัญชี?</div>
                        <div className="rounded-lg flex flex-row items-center justify-center gap-[0.5rem] text-center">
                          <Link className="relative leading-[150%] decoration-0 " to="/termsconditions" >
                            สมัครสมาชิก
                          </Link>
                        </div>
                      </div>
                      <div className="rounded-lg flex flex-row items-center justify-center gap-[0.5rem] text-center">
                          <Link className="relative leading-[150%] decoration-0 " onClick={() => setShowForgotPassword(true)}>
                            ลืมรหัสผ่าน
                          </Link>
                      </div>
                    </div>
                    <Link className="self-stretch rounded-980xl [background:linear-gradient(90deg,_#543fbf,_#576eba)]
                      flex flex-row py-[0.5rem] px-[2rem] items-center justify-center gap-[0.5rem] text-center text-[1rem] text-ffffff" onClick={handleSubmitLogin} >
                        เข้าสู่ระบบ
                    </Link>
                  </div>
                </div>
                <div className="w-[23.88rem] flex flex-col items-center justify-start text-left">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                    <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.5px] border-solid border-style-2-ccd4e5" />
                    <div className="relative leading-[150%]">
                      เข้าสู่ระบบด้วย Digital ID
                    </div>
                    <AiOutlineQuestionCircle size={20} className='text-blue-500' />
                    <div className="flex-1 relative box-border h-[0.03rem] border-t-[0.5px] border-solid border-style-2-ccd4e5" />
                  </div>
                </div>
                <div className="w-[23.88rem] flex flex-col items-start justify-start gap-[1rem] text-style-1-343f9e">
                  <Link className="self-stretch rounded-980xl bg-purple-bg flex flex-row py-[0.5rem] px-[2rem] items-center justify-center gap-[0.5rem]"
                    to="/loginbythaid"
                    >
                    <img
                      className="relative w-[3.06rem] h-[1.5rem] object-cover"
                      alt="ndid"
                      src={ndidImg}
                    />
                    <div className="relative leading-[150%]">NDID</div>
                  </Link>
                  <Link className="self-stretch rounded-980xl bg-purple-bg flex flex-row py-[0.5rem] px-[2rem] items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] object-cover"
                      alt=""
                      src={thaiId}
                    />
                    <div className="relative leading-[150%]">ThaID</div>
                  </Link>
                </div>
              </div>
            </div>
            <ForgotPasswordModalForm isVisible={showForgotPassword} onClose={() => setShowForgotPassword(false)} />
          </div>
      </>

      
    );
  };
  
  export default Loginpage;
  