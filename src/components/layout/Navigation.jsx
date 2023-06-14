import React,{ Fragment } from 'react'
import { Link } from "react-router-dom";

//images
import Logo2 from "../../asseets/images/logo2.png";

//page 

function Navigation() {
  return (
    <>  
        <div className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10
         dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'>
            <div className='max-w-[90rem] mx-auto'>
                <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
                    <div className='relative flex items-center'>
                        <img className='py-2' alt='logo2' src={Logo2} ></img>
                    
                        <div className='relative hidden lg:flex items-center ml-auto'> 
                            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                                <ul className="flex space-x-8 list-none">
                                    <li>
                                        <Link className="text-lg text-gray-800 hover:text-sky-500 dark:hover:text-sky-400" to='/login' >หน้าหลัก</Link>
                                    </li>
                                    <li>
                                        <Link className="text-lg text-gray-800 hover:text-sky-500 dark:hover:text-sky-400" to='/termsconditions' >ลงทะเบียน</Link>
                                    </li>
                                    <li>
                                        <Link className="text-lg text-gray-800 hover:text-sky-500 dark:hover:text-sky-400" > ติดต่อเรา</Link>
                                    </li>
                                    <li>
                                        <Link className="text-lg text-gray-800 hover:text-sky-500 dark:hover:text-sky-400" >แนะนำการใช้งาน</Link>
                                    </li>
                                    <li>
                                        <Link className="text-lg text-gray-800 hover:text-sky-500 dark:hover:text-sky-400" to="/login">เข้าสู่ระบบ</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </>
    
  )
}

export default Navigation