import {  SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default  function Page() {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
        <SignIn 
        />
        <div className='w-80 h-14 text-center flex justify-center items-center  bg-black text-white dark:text-black z-50 dark:bg-white rounded-xl'>
          Create a new account 
        <Link href='/sign-up' className='text-blue-500 '>Sign Up</Link>
        </div>
    </div>
  )
}