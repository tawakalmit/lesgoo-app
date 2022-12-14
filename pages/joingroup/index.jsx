import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'

export default function JoinGroup() {
  return (
    <>
    <div className='w-full h-12 bg-[#1abc9c] flex items-center'>
        <Link href='/'><MdArrowBack id='back-to-home' className='absolute left-5' size={25} color='white' /></Link>
        <h1 className='text-white text-xl mx-auto'>Join Group</h1>
    </div>
    <form className='w-10/12 mx-auto mt-5'>
      <input id='input-groupid' type="text" placeholder=' Enter Group ID' className='w-full bg-[#D9D9D9] h-14 rounded-xl' />
      <div className='flex justify-end'>
      <button id='btn-join' className='w-16 h-7 bg-[#1abc9c] rounded-full text-white mt-3'>Join</button>
      </div>
    </form>
    </>
  )
}
