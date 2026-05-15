import React from 'react'
import profile from "./../assets/profile.jpg"
import { MdEmail, MdMailOutline, MdOutlineCalendarMonth, MdOutlineCall, MdOutlineLocationOn } from "react-icons/md";
import { BsFacebook, BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
function Sidebar() {
    return (
        <>
            <div className='flex-0 xl:flex-2 b i bg-background text-text  p-3 rounded-2xl border border-border'>
                <div className='flex justify-center my-5'>

                    <div className='rounded-3xl bg-card w-32 h-32 flex justify-center items-center'><img src={profile} className='w-28 h-28 rounded-3xl' alt="" /></div>
                </div>
                <h1 className='text-3xl text-center my-3'>
                    Md. Rafiz Uddin
                </h1>

                <div className='flex justify-center py-3'>
                    <div className='bg-card text-white py-1 px-4 rounded-md text-sm'>Web Developer</div>
                </div>
                <div className='my-3 px-5'>
                    <hr className=' text-border' />
                </div>
                <div className='flex '>
                    <div className='flex flex-col gap-8'>
                        <div className='flex '>
                            <div className='bg-card w-12 h-12 rounded-md flex justify-center items-center shadow-[4px_4px_4px_0_rgba(0,0,0,0.25),-1px_-1px_1px_0_rgba(255,255,255,0.3)]'> <MdMailOutline className='w-6 h-6 text-primary' /></div>
                            <div className='ml-2'>

                                <div className='text-title'>Email</div>
                                <a target='_blank' href='mailto:rafiz.t33pk5@gmail.com'>rafiz.t33pk5@gmail.com</a>

                            </div>
                        </div>
                        <div className='flex '>
                            <div className='bg-card w-12 h-12 rounded-md flex justify-center items-center shadow-[4px_4px_4px_0_rgba(0,0,0,0.25),-1px_-1px_1px_0_rgba(255,255,255,0.3)]'> <MdOutlineCall className='w-6 h-6 text-primary' /></div>
                            <div className='ml-2'>
                                <div className='text-title'>Phone</div>
                                <a target='_blank' href='phone:+8801724065716'>+8801724065716</a>
                            </div>

                        </div>
                        <div className='flex '>
                            <div className='bg-card w-12 h-12 rounded-md flex justify-center items-center shadow-[4px_4px_4px_0_rgba(0,0,0,0.25),-1px_-1px_1px_0_rgba(255,255,255,0.3)]'> <MdOutlineCalendarMonth className='w-6 h-6 text-primary' /></div>
                            <div className='ml-2'>
                                <div className='text-title'>Birth Day</div>
                                <a target='_blank' href={`https://www.calculator.net/age-calculator.html?today=09%2F06%2F2002&ageat=${(new Date()).getMonth()+1}%2F${(new Date()).getDate()}%2F${(new Date()).getFullYear()}&x=Calculate`}>6 September, 2002</a>
                            </div>

                        </div>
                        <div className='flex '>
                            <div className='bg-card w-12 h-12 rounded-md flex justify-center items-center shadow-[4px_4px_4px_0_rgba(0,0,0,0.25),-1px_-1px_1px_0_rgba(255,255,255,0.3)]'> <MdOutlineLocationOn className='w-6 h-6 text-primary' /></div>
                            <div className='ml-2'>
                                <div className='text-title'>Location</div>
                                <a target='_blank' href='https://maps.app.goo.gl/9wiNFMpodfNJr4Mi9' className='truncate'>Chotobongram, Sopura-6203,<br /> Rajshahi, Bangladesh</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-5'>
                    <div className='flex gap-4'>
                        <a target='_blank' href='https://github.com/rafiz001'><BsGithub className='text-title' /></a>
                        <a target='_blank' href='https://facebook.com/rafizuddin'><BsFacebook className='text-title' /></a>
                        <a target='_blank' href='https://linkedin.com/in/rafiz001/'><BsLinkedin className='text-title' /></a>
                        <a target='_blank' href='https://t.me/rafiz001'><BsTelegram className='text-title' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar