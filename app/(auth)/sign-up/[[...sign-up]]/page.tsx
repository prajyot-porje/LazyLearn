import { Button } from '@/components/ui/button'
import { SignUp } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default  function Page() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <SignUp />
        <div className='w-[400px] h-14 text-center flex justify-center items-center gap-2 bg-black text-white dark:text-black z-50 dark:bg-white rounded-b-xl'>
          If you already have account 
        <Link href='/sign-in' className='text-blue-500 '>Sign In</Link>
        </div>
    </div>
  )
}