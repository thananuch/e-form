import React, { useState } from "react";
import { Link } from "react-router-dom";
import stylusnote from "../../asseets/images/stylus_note.png";
import busimark from "../../asseets/images/busimark.png";
import articledocu from "../../asseets/images/articledocu.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-10 bg-white rounded-tr-lg">
        <div
          className={` ${
            open ? "w-[14rem] h-[50.1875rem]" : "w-[3rem] h-[50.1875rem]"
          } bg-white h-auto p-4 relative rounded-3xl rounded-tl-lg`}
        >
          <ul className="pl-0">
            <li
              className="flex rounded-xl p-2 cursor-pointer hover:bg-[#E6E9F5] 
                        active:bg-[#E6E9F5] text-black text-lg  gap-x-4"
            >
              <Link
                className={`cursor-pointer  border-dark-purple duration-500 p-2 
                border-2 rounded-lg bg-gradient-to-l from-[#543FBF] to-[#576EBA] ${
                  !open && "rotate-180"
                }`}
                onClick={() => setOpen(!open)}
              >
                <GiHamburgerMenu
                  className="text-white flex justify-center"
                  size={24}
                />
              </Link>
            </li>
            <li
              className="flex rounded-xl p-2 cursor-pointer hover:bg-[#E6E9F5] 
                        active:bg-[#E6E9F5] text-black text-lg  gap-x-4"
            >
              <Link className="flex flex-row gap-2 p-2">
                <img
                  src={articledocu}
                  className="text-[#543FBF]"
                  alt="articledocu"
                />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200  text-[1rem]`}
                >
                  รายการคำขอจดทะเบียน
                </span>
              </Link>
            </li>

            <li
              className="flex rounded-xl p-2 cursor-pointer hover:bg-[#E6E9F5] 
                        active:bg-[#E6E9F5] text-black text-lg gap-x-4"
            >
              <Link className="flex flex-row gap-2 p-2">
                <img src={busimark} className="text-[#543FBF]" alt="busimark" />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200  text-[1rem]`}
                >
                  สร้างคำขอจดทะเบียน
                </span>
              </Link>
            </li>
            <li
              className="flex rounded-xl p-2 cursor-pointer hover:bg-[#E6E9F5]
                         active:bg-[#E6E9F5] text-black text-lg gap-x-4"
            >
              <Link className="flex flex-row gap-2 p-2">
                <img
                  src={stylusnote}
                  className="text-[#543FBF]"
                  alt="stylusnote"
                />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-[1rem]`}
                >
                  ลงรายชื่ออิเล็กทรอนิกส์
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
