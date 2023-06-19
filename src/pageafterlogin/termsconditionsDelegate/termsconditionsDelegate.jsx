import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import Content from '../../components/layoutAfterLogin/Content';
import Navigation from '../../components/layoutAfterLogin/Navigation';

import { TbGavel } from "react-icons/tb";
import { MdBallot } from "react-icons/md";
import { AiFillSave  } from "react-icons/ai";

function TermsconditionsDelegate() {
  
    const [checkTerm, setCheckTerm] = useState(false);

  return (
    <>
    <Content/>
    <div className='flex bg-gradient-to-b from-EEF0F6 to-EFEAE1'>
        <Navigation/>
        <div className='flex-1 my-10'>
            <div className='w-[95rem] ml-[5%] bg-[#FDFDFD] rounded-2xl flex flex-row'>
                <div className='basis-1/4 py-4 rounded-l-xl bg-gradient-to-b from-977EBB to-6482C2 px-10 flex flex-row gap-[2rem]'>
                    <div className='bg-[#BABFDF]  py-12 px-[0.5rem] items-center justify-start rounded-3xl flex flex-col gap-[2rem]'>
                        <div className='flex flex-col items-center justify-center gap-[2rem] '>
                            <div className='rounded-3xl bg-[#343F9E] flex flex-row p-[0.5rem] items-start justify-start'>
                                <TbGavel className='text-white' size={30}/>
                            </div>
                        </div>
                        <div className='rounded-3xl bg-[#CFD2E9] py-[1rem] px-[0.25rem] 
                            items-center justify-center gap-[2rem] '>
                            <div className='flex flex-col items-center justify-center gap-[2rem] '>
                                <div className='rounded-3xl bg-white flex flex-row p-[0.5rem] items-start justify-start'>
                                    <MdBallot className='text-[#343F9E]' size={30} />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-[2rem] pt-8'>
                                <div className='rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem]
                                        box-border items-center justify-center bg-white '>
                                    <div className='relative rounded-[50%] bg-[#343F9E] w-[0.5rem] h-[0.5rem]' />
                                </div>

                                <div className='rounded-3xl w-[1.5rem] h-[1.5rem] flex flex-row p-[0.25rem]
                                        box-border items-center justify-center '>
                                    <div className='relative rounded-[50%] bg-white w-[0.5rem] h-[0.5rem]' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-[2rem] '>
                            <div className='rounded-3xl bg-white flex flex-row p-[0.5rem] items-start justify-start'>
                            <AiFillSave className='text-[#343F9E]' size={30}  />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col py-12 px-[0rem] box-border items-start justify-start gap-[2rem]'>
                        
                        <div className='flex flex-col'>
                            <div className='font-bold text-xl text-[#F5F8FF]'>
                                Step 1
                            </div>
                            <div className='font-light text-lg text-[#F5F8FF]'>
                                ข้อตกลงและเงื่อนไข
                            </div>
                        </div>
                        <div className='flex flex-col mt-3'>
                            <div className='font-bold text-xl text-[#F5F8FF]'>
                                Step 2
                            </div>
                            <div className='font-light text-lg text-[#F5F8FF]'>
                                ระบุข้อมูลการลงทะเบียน
                            </div>

                            <div className='font-light text-sm text-[#F5F8FF] pt-8'>
                                ข้อมูลส่วนตัว
                            </div>
                            <div className='font-light text-sm text-[#F5F8FF] pt-8'>
                                ข้อมูลการติดต่อ และ ที่อยู่
                            </div>
                        </div>
                        <div className='flex flex-col pt-3'>
                            <div className='font-bold text-xl text-[#F5F8FF]'>
                                Step 3
                            </div>
                            <div className='font-light text-lg text-[#F5F8FF]'>
                                ยืนยันการส่งข้อมูล
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-3/4 px-12 py-7 rounded-r-xl '>
                    <h1 className='text-2xl font-semibold text-[#1A3160] '>เปลียนประเภทผู้แทน</h1>
                    <div className='w-full bg-white p-4 rounded-3xl drop-shadow-[0_2px_10px_rgba(36,36,36,0.1)]'>
                    <h2 className='text-[#1A3160] text-2xl'>ข้อตกลงและเงื่อนไข</h2>
                    <div className='w-[95%] mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 h-[25rem] flex flex-col'>
                        <h3 className='text-[#002B80] text-xl w-4/5'>
                        หนังสือข้อตกลงและเงื่อนไขในการขอรับชื่อผู้ใช้และรหัสผ่าน (Username & Password)
                        และการใช้บริการระบบจดทะเบียนนิติบุคคลทางอิเล็กทรอนิกส์ (e‐Registration) <br/>
                        ของกรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์
                        </h3>
                        <p>ข้อตกลงและเงื่อนไขนี้มีผลใช้บังคับระหว่าง กรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์ ซึ่งต่อไปนี้จะเรียกว่า “ผู้ให้บริการ” กับผู้ลงทะเบียน เพื่อใช้บริการระบบออนไลน์ต่างๆ ของ กรมพัฒนาธุรกิจการค้า ซึ่งต่อไปนี้จะเรียกว่า “ผู้ใช้บริการ” โดยผู้ใช้บริการตกลงยินยอมผูกพันและปฏิบัติตามข้อตกลงและเงื่อนไข  ดังต่อไปนี้</p>
                        <p>1. การลงทะเบียนเพื่อใช้บริการระบบออนไลน์ต่างๆ ของกรมพัฒนาธุรกิจการค้านั้น ไม่มีค่าใช้จ่าย</p>
                        <p>2. ผู้ใช้บริการ จะต้องกรอกข้อมูลรายละเอียดต่าง ๆ ตามจริงให้ครบถ้วน ทั้งนี้เพื่อประโยชน์ของผู้ใช้บริการ กรณีตรวจพบว่าข้อมูลดังกล่าวไม่เป็นความจริง ผู้ให้บริการจะระงับการใช้งานของผู้ใช้บริการโดยไม่ต้องแจ้งให้ทราบล่วงหน้า   ทั้งนี้ผู้ใช้บริการจะต้องรับผิดชอบในความเสียหายที่เกิดขึ้นจากการกรอกข้อมูลอันเป็นเท็จดังกล่าว</p>
                        <p>3. เพื่อประโยชน์ของทางราชการ ผู้ใช้บริการ ตกลงยินยอมให้ ผู้ให้บริการตรวจสอบความถูกต้องและเปิดเผยข้อมูลที่ระบุไว้ในการสมัครขอรับ ชื่อผู้ใช้และรหัสผ่าน (Username &amp; Password) ทั้งนี้กรณีที่ผู้ให้บริการตรวจสอบพบว่าข้อมูลที่ผู้ใช้บริการระบุไว้ไม่ชัดเจนหรือเป็นเท็จ  ผู้ให้บริการมีสิทธิที่ปฏิเสธการรับลงทะเบียนหรือยกเลิกชื่อผู้ใช้และรหัสผ่านของผู้ใช้บริการได้ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า</p>
                        <p>4. ผู้ใช้บริการต้องไม่นำชื่อผู้ใช้และรหัสผ่าน (Username &amp;Password) ไปใช้ในทางที่ขัดต่อกฎหมายความสงบเรียบร้อย หรือศีลธรรมอันดีของประชาชน</p>
                        <p>5. ในกรณีที่เหตุอันควรสงสัยว่าผู้อื่นล่วงรู้รหัสผ่าน (Password) ของผู้ใช้บริการผู้ใช้บริการมีหน้าที่ตั้งรหัสผ่านใหม่ โดยทันทีผ่านทางหน้าจอระบบของกรมพัฒนาธุรกิจการค้า  ทั้งนี้ในกรณีที่มีผู้อื่นนำรหัสผ่าน (Password) ไปใช้ ผู้ใช้บริการต้องรับผิดชอบต่อการกระทำและความเสียหายดังกล่าวด้วย </p>
                        <p>6. เพื่อประโยชน์ในการพัฒนาหรือปรับปรุงการให้บริการ หรือเพื่อให้เป็นไปตามบทบัญญัติของกฎหมายที่เกี่ยวข้อง ทั้งที่ใช้บังคับอยู่ และที่จะมีผลบังคับใช้ในอนาคต ผู้ใช้บริการยินยอมให้ผู้ให้บริการแก้ไข เปลี่ยนแปลง หรือยกเลิกข้อตกลงและเงื่อนไขการสมัครขอรับชื่อผู้ใช้และรหัสผ่าน (Username &amp;Password) ได้ ตามที่ผู้ให้บริการได้พิจารณาแล้วเห็นสมควร
                                ทั้งนี้ในการแก้ไขเปลี่ยนแปลงดังกล่าวผู้ให้บริการจะแจ้งให้ผู้ใช้บริการทราบล่วงหน้าไม่น้อยกว่า 30  วันก่อนวันที่การแก้ไข เปลี่ยนแปลง หรือยกเลิกข้อตกลงและเงื่อนไขจะมีผลบังคับใช้ โดยวิธีการทางอิเล็กทรอนิกส์ที่ผู้ให้บริการกำหนด</p>
                        <p>7. ผู้ใช้บริการต้องปฏิบัติตามข้อตกลงและเงื่อนไขการสมัครและการใช้บริการของผู้ให้บริการอย่างเคร่งครัดเพื่อความปลอดภัย ในข้อมูลส่วนบุคคลของผู้ใช้บริการ ในกรณีที่ข้อมูลดังกล่าวถูกโจรกรรม สูญหาย  หรือเสียหายอันเนื่องจากเหตุสุดวิสัย หรือไม่ใช่เกิดจากความประมาทเลินเล่อ ผู้ให้บริการมีสิทธิปฏิเสธความรับผิดชอบในความเสียหายดังกล่าว</p>
                        <p>8. ผู้ใดแอบอ้างหรือกระทำการใด ๆ อันเป็นการละเมิดสิทธิส่วนบุคคลโดยใช้ข้อมูลของผู้อื่นมาแอบอ้างในการสมัครขอรับชื่อผู้ใช้และรหัสผ่าน (Username &amp; Password) ถือเป็นความผิดตามประมวลกฎหมายอาญา</p>
                        <p>9. ผู้ให้บริการอาจส่งข้อมูลหรือแจ้งข่าวประชาสัมพันธ์ผ่านช่องทางอิเล็กทรอนิกส์ เช่น e-mail, SMS ให้แก่ผู้ใช้บริการได้ตามที่ผู้ให้บริการเห็นสมควร ทั้งนี้ผู้ให้บริการมีระบบการตรวจจับ Virus ก่อนส่งข่าวสารใด ๆ ให้แก่ผู้ใช้บริการทุกครั้ง ดังนั้น หากเครื่องคอมพิวเตอร์ของผู้ใช้บริการเกิดความผิดปกติอันเนื่องมาจากการติด Virus หรือ Spam mail ผู้ใช้บริการไม่สามารถเรียกร้องให้ผู้ให้บริการรับผิดชอบใดๆทั้งสิ้น</p>
                        <p>10. ผู้ให้บริการมีสิทธิระงับหรือยกเลิกการให้บริการกับผู้ใช้บริการทันที  หากปรากฏว่าผู้ใช้บริการไม่ปฏิบัติตามข้อตกลง และเงื่อนไขนี้แม้เพียงข้อใดข้อหนึ่ง </p>
                        <p>11. ผู้ให้บริการจะใช้หรือเปิดเผยข้อมูลส่วนบุคคลเท่าที่จำเป็นเพื่อป้องกันหรือระงับอันตรายต่อ ชีวิต ร่างกาย หรือสุขภาพอนามัยของผู้ใช้บริการ ทั้งนี้ การใช้หรือเปิดเผยข้อมูลดังกล่าว  เป็นไปตามกฎหมายว่าด้วยข้อมูลข่าวสารของราชการ  </p>
                        <p>12. ผู้ให้บริการจะเก็บรวบรวมรักษา และใช้ข้อมูลของผู้ใช้บริการ เพื่อประโยชน์ในการให้บริการ หรือเพื่อให้เป็นไปตามกฎหมาย และกฎเกณฑ์ต่างๆ ที่เกี่ยวข้อง หรือเพื่อพัฒนา และปรับปรุงการบริการของผู้ให้บริการ   ให้เป็นที่พอใจแก่ผู้ใช้บริการ </p>
                        <p>13. ผู้ให้บริการไม่อนุญาตให้ มีการเปิดเผยข้อมูลเกี่ยวกับบัญชีของผู้ใช้บริการต่อบุคคลภายนอก ตลอดจนจะป้องกันมิให้มีการนำข้อมูลผู้ใช้ยริการไปใช้โดยมิได้รับอนุญาตจากผู้ใช้บริการก่อน  เว้นแต่เป็นการเปิดเผยต่อเข้าหน้าที่ผู้มีอำนาจตามกฎหมายของผู้ให้บริการ   หรือบุคคลที่ได้รับอนุญาตจากผู้ใช้บริการให้เข้าถึงข้อมูลของผู้ให้บริการ
                            หรือเป็นการเปิดเผยข้อมูลผู้ใช้บริการตามกฎหมาย เพื่อประโยชน์ในการสอบสวนหรือการพิจารณาคดี ทั้งนี้ การเปิดเผยข้อมูลดังกล่าว จะเป็นไปตามกฎหมายว่าด้วยข้อมูลข่าวสารของราชการ  หรือตามคำสั่งของหน่วยงานของรัฐที่เกี่ยวข้อง
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className="flex items-center mb-4">
                            <input id="termcheckbox" type="checkbox" value={checkTerm} defaultChecked={false} onChange={(e) =>  setCheckTerm(e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                            focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="termcheckbox" 
                            className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">ข้าพเจ้ายอมรับ และได้อ่านข้อความในข้อตกลงและเงื่อนไขนี้เข้าใจโดยละเอียดแล้ว</label>
                        </div>
                    </div>
                    <div className='my-4 flex item justify-end'>
                        <Link disabled={!checkTerm} className={(checkTerm ? 'inline-block bg-gradient-to-r from-[#543FBF] to-[#576EBA] text-white text-lg'
                        : 'bg-[#E0E0E0] text-[#ABABAB] pointer-events-none' ) + ' justify-center text-center w-auto h-auto rounded-3xl px-10 py-3 '}
                        to="/member/informationpersonfordelegate" >
                        ดำเนินการต่อ
                        </Link>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TermsconditionsDelegate