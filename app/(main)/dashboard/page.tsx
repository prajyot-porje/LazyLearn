import CardList from '@/components/CardList'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white dark:bg-black h-screen w-screen'>

        <div className=" h-screen lg:mx-28 sm:mx-auto pt-28 ">
            <CardList/>
        </div>
        
    </div>
  )
}

export default page