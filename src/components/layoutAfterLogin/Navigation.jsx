import React,{ useState } from 'react'
import { Link } from "react-router-dom";

//icon
import { AiOutlineArrowRight } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { IoStorefrontSharp } from "react-icons/io5";
import { RiBallPenFill } from "react-icons/ri";



function Navigation() {
    const [open, setOpen] = useState(false);
    
  return (
    <>  
        <div className="mt-10 shadow-[6px_4px_24px_rgba(0,0,0,0.05)]">
            <div
                className={` ${
                open ? "w-35" : "w-10 "
                } bg-white h-[90vh] p-5 pt-8 relative rounded-3xl`}
            >
                <Link className={`absolute cursor-pointer -right-3 top-5 w-7 border-dark-purple duration-500
                border-2 rounded-full px-2 py-4 bg-gradient-to-l from-[#543FBF] to-[#576EBA] ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)} >
                    <AiOutlineArrowRight className='text-white' size={30} />
                </Link>
            
                <ul className="pt-10 pl-0">
                    <li className='flex rounded-xl p-2 cursor-pointer hover:bg-[#E6E9F5] 
                        active:bg-[#E6E9F5] text-black text-lg justify-center items-center gap-x-4 mt-2 '>
                        <Link className='flex flex-row gap-2'>
                            <TiDocumentText size={50} className='text-[#543FBF]'></TiDocumentText>
                            <span className={`${!open && "hidden"} origin-left duration-200 py-3`}>
                            รายการคำขอจดทะเบียน
                            </span>
                        </Link>
                    </li>
                    <li className='flex rounded-xl p-2 cursor-pointer hover:bg-[#E6E9F5] 
                        active:bg-[#E6E9F5] text-black text-lg justify-center items-center gap-x-4 mt-2 '>
                        <Link className='flex flex-row gap-2'>
                            <IoStorefrontSharp size={50} className='text-[#543FBF]'></IoStorefrontSharp>
                            <span className={`${!open && "hidden"} origin-left duration-200 py-3`}>
                            สร้างคำขอจดทะเบียน
                            </span>
                        </Link>
                    </li>
                    <li className='flex rounded-xl p-2 cursor-pointer hover:bg-[#E6E9F5]
                         active:bg-[#E6E9F5] text-black text-lg justify-center items-center gap-x-4 mt-2'>
                        <Link className='flex flex-row gap-2'>
                            <RiBallPenFill size={50} className='text-[#543FBF]'></RiBallPenFill>
                            <span className={`${!open && "hidden"} origin-left duration-200 py-3`}>
                            ลงรายชื่ออิเล็กทรอนิกส์
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
    
  )
}

export default Navigation