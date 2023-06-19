import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import Content from '../../components/layoutAfterLogin/Content'; 
import Navigation from '../../components/layoutAfterLogin/Navigation';

import Profile from '../../components/propsPage/profile';

import ConfirmCancelUserModal from '../../modal/confirmCancelUserModal/confirmCancelUserModal';

function ViewProfileForCancel() {
  const [showMoadlConfirmCancelUser, setShowMoadlConfirmCancelUser] = useState(false);
  return (
    <>
      <Content/>
      <div className="flex bg-gradient-to-b from-EEF0F6 to-EFEAE1">
        <Navigation/>
        <div className='flex-1 my-10'>
          <div className="w-[90rem] ml-[5%] px-20 py-7 bg-[#FDFDFD] rounded-2xl ">
            <h1 className="text-2xl font-semibold text-[#1A3160] ">ยกเลิกบัญชีผู้ใช้งาน</h1>
            <div className='w-full mb-8 rounded-3xl border-4 border-[#E8A4A4] border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.05)] '>
                <div className='py-4 px-8'> 
                    <h2>ยืนยันการยกเลิกบัญชีผู้ใช้งาน</h2>

                    <Profile />
                    <div className='my-4 flex justify-end mt-8'>
                        <Link className="inline-block bg-[#E6E9F5] text-[#543FBF] justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 mr-4 text-lg " 
                            to="/informationaccount" >
                            ย้อนกลับ
                        </Link>
                        <Link className='inline-block bg-gradient-to-r from-[#BF3F3F] to-[#BA5757]
                        text-white text-lg justify-center text-center w-auto h-auto rounded-3xl px-10 py-3' onClick={() => setShowMoadlConfirmCancelUser(true)} >
                            ยกเลิกบัญชีผู้ใช้งาน
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmCancelUserModal isVisible={showMoadlConfirmCancelUser} onClose={() => setShowMoadlConfirmCancelUser(false)} />
    </>
  )
}

export default ViewProfileForCancel