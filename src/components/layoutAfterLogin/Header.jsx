import React,{useState} from 'react'
import { Link } from "react-router-dom";

import Logo2 from "../../asseets/images/logo2.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Menu } from '@headlessui/react'

import { AiOutlineMessage } from "react-icons/ai";

import ChangePasswordModal from '../../modal/changePasswordModal/changePasswordModal';


function Header() {
  const [showMoadlChangePassword, setShowMoadlChangePassword]  = useState(false)
  return (
    <>  
        <div className='w-full shadow-[0px_4px_4px_rgba(0,0,0,0.05)] bg-white'>
            <div className='max-w-[100rem] mx-auto'>
                <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0 '>
                    <div className='relative flex items-center'>
                        <img className='py-2' alt='logo2' src={Logo2} ></img>
                        <div className='relative hidden lg:flex items-center ml-auto'> 
                            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                                <ul className="flex space-x-8 list-none">
                                    <li className='pt-3'>
                                        <Link className="text-lg text-gray-800 hover:text-sky-500 dark:hover:text-sky-400" >หน้าหลัก</Link>
                                    </li>
                                    <li className='pt-3'>
                                        <Link className="text-lg text-gray-800  hover:text-sky-500 dark:hover:text-sky-400" > ติดต่อเรา</Link>
                                    </li>
                                    <li className='pt-3' >
                                        <Menu as="div" className="relative inline-block text-left">
                                            <Menu.Button className="border-none bg-transparent z-10 origin-top-right divide-y text-lg font-bold text-gray-800 hover:text-sky-500 dark:hover:text-sky-400">
                                                แนะนำการใช้งาน <MdOutlineKeyboardArrowDown  />
                                            </Menu.Button >
                                            <Menu.Items className="absolute mt-2 w-56 py-4 bg-white text-gray-800 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] font-light ">
                                                <Menu.Item>
                                                    <Link className='text-lg text-gray-800 group flex px-4 hover:text-sky-500' >
                                                    ลงทะเบียน 
                                                    </Link>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Menu>
                                    </li>
                                    <li className='pt-3' >
                                        <AiOutlineMessage size={30} />
                                    </li>
                                    <li>
                                        <Menu Menu as="div" className="relative inline-block text-left">
                                            <Menu.Button className="border-none bg-[#E6E9F5] py-3 px-5 rounded-full text-[#543FBF]">
                                                นายทดสอบ ระบบ <MdOutlineKeyboardArrowDown  />
                                            </Menu.Button >
                                            <Menu.Items className="absolute mt-2 w-56 py-4 bg-white text-gray-800 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] font-light ">
                                                <Menu.Item>
                                                    <Link className='text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500' >
                                                        ยืนยันตัวตน 
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link className='text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500' >
                                                        เปลี่ยนประเภทผู้ใช้งาน 
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link className='text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500' 
                                                        onClick={() => setShowMoadlChangePassword(true)} >
                                                        เปลี่ยนรหัสผ่าน 
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link className='text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500' >
                                                        แก้ไขข้อมูลส่วนบุคคล 
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link className='text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500' >
                                                        เปลี่ยนกลุ่มผู้แทนจดทะเบียน 
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link className='text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500' >
                                                        ยกเลิกบัญชีผู้ใช้งาน 
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link className='text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500' >
                                                        ออกจากระบบ 
                                                    </Link>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Menu>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ChangePasswordModal isVisible={showMoadlChangePassword} onClose={() => setShowMoadlChangePassword(false)} />
    </>
  )
}

export default Header