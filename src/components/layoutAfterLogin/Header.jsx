import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../asseets/images/logo2.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Menu } from "@headlessui/react";
import ChangePasswordModal from "../../modal/changePasswordModal/changePasswordModal";
import CancelUsernameModal from "../../modal/cancelUsernameModal/cancelUsernameModal";
import RenewdelegateModal from "../../modal/renewdelegateModal/renewdelegateModal";
import ChangetypeDelegateModal from "../../modal/changetypeDelegateModal/changetypeDelegateModal";
import Vector from "../../asseets/images/Vector.png";

function Header() {
  const [showMoadlChangePassword, setShowMoadlChangePassword] = useState(false);
  const [showCancelUsernameModal, setshowCancelUsernameModal] = useState(false);
  const [showRenewdelegateModal, setShowRenewdelegateModal] = useState(false);
  const [showChangetypeDelegateModal, setShowChangetypeDelegateModal] =
    useState(false);

  return (
    <>
      <div className="w-full shadow-[0px_4px_4px_rgba(0,0,0,0.05)] bg-white z-40">
        <div className="max-w-[100rem] mx-auto h-[80%] px-8 mx-4 lg:mx-0 border-b border-slate-900/10 lg:border-0 dark:border-slate-300/10">
          <div className="relative flex items-center">
            <img className="py-2" alt="logo2" src={Logo2}></img>
            <div className="relative hidden items-center lg:flex  ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8 list-none">
                  <li className="pt-3">
                    <Link
                      className="text-lg text-gray-800 hover:text-sky-500 dark:hover:text-sky-400 font-thin"
                      to="/member/home"
                    >
                      หน้าหลัก
                    </Link>
                  </li>
                  <li className="pt-3">
                    <Link className="text-lg text-gray-800  hover:text-sky-500 dark:hover:text-sky-400 font-thin">
                      ติดต่อเรา
                    </Link>
                  </li>
                  <li className="pt-3">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="z-10 cursor-pointer border-none bg-transparent origin-top-right divide-y text-lg font-bold text-gray-800 hover:text-sky-500 dark:hover:text-sky-400 font-thin">
                        คู่มือการใช้งาน <MdOutlineKeyboardArrowDown />
                      </Menu.Button>
                      <Menu.Items className="absolute mt-2 w-[8rem] py-4 bg-white text-gray-800 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] font-light ">
                        <Menu.Item>
                          <Link className="text-lg text-gray-800 group flex px-4 hover:text-sky-500">
                            ลงทะเบียน
                          </Link>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </li>
                  <li>
                    <div className="relative flex justify-center mt-1">
                      <span className="bg-[#F5D88B] w-[1.5rem]  absolute rounded-full flex justify-center content-center ml-5 text-xs font-bold text-[#BB940C]">
                        2
                      </span>
                      <img
                        src={Vector}
                        alt="vector"
                        className="mt-2"
                        size={25}
                      />
                    </div>
                  </li>
                  <li>
                    <Menu
                      Menu
                      as="div"
                      className="z-40 relative inline-block text-left"
                    >
                      <Menu.Button className="cursor-pointer border-none bg-[#E6E9F5] py-3 px-5 rounded-full text-[#543FBF]">
                        นายทดสอบ ระบบ <MdOutlineKeyboardArrowDown />
                      </Menu.Button>
                      <Menu.Items className="absolute mt-2 w-[12rem] py-4 bg-white text-gray-800 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] font-light ">
                        <Menu.Item>
                          <Link
                            className="text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500 "
                            to="/member/verificationchannel"
                          >
                            ยืนยันตัวตน
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500"
                            to="/member/termsconditionsdelegate"
                          >
                            เปลี่ยนประเภทผู้ใช้งาน
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500"
                            onClick={() => setShowMoadlChangePassword(true)}
                          >
                            เปลี่ยนรหัสผ่าน
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500"
                            to="/member/editinformationperson"
                          >
                            แก้ไขข้อมูลส่วนบุคคล
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500"
                            onClick={() => setShowChangetypeDelegateModal(true)}
                          >
                            เปลี่ยนกลุ่มผู้แทนจดทะเบียน
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500"
                            onClick={() => setshowCancelUsernameModal(true)}
                          >
                            ยกเลิกบัญชีผู้ใช้งาน
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            className="text-lg px-4 py-3 text-gray-800 group flex hover:text-sky-500"
                            to="/login"
                          >
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
      <ChangePasswordModal
        isVisible={showMoadlChangePassword}
        onClose={() => setShowMoadlChangePassword(false)}
      />
      <CancelUsernameModal
        isVisible={showCancelUsernameModal}
        onClose={() => setshowCancelUsernameModal(false)}
      />
      <RenewdelegateModal
        isVisible={showRenewdelegateModal}
        onClose={() => setShowRenewdelegateModal(false)}
      />
      <ChangetypeDelegateModal
        isVisible={showChangetypeDelegateModal}
        onClose={() => setShowChangetypeDelegateModal(false)}
      />
    </>
  );
}

export default Header;
