import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'

const CardList = () => {
    const temp = [
        {
            title: 'hello',
            desc:'dsnovn',
            createdAt: '17-04-2024'
        },
        {
            title: 'hello',
            desc:'dsnovn',
            createdAt: '17-04-2024'
        },
        {
            title: 'hello',
            desc:'dsnovn',
            createdAt: '17-04-2024'
        },
        {
            title: 'hello',
            desc:'dsnovn',
            createdAt: '17-04-2024'
        },
    ]
  return (
    <div className=''>
        <div className="flex flex-wrap max-w-[1000px] justify-center md:justify-start mx-10 mt-2 md:mt-5 gap-4">
            {temp.map((card,idx)=>(
            <Card key={idx} className='w-full md:w-[320px] dark:bg-[#121212]'>
                <CardHeader>{card.title}</CardHeader>
                <CardContent>{card.desc}</CardContent>
                <CardFooter className='flex justify-between'>
                <CardDescription>Created on : {card.createdAt}</CardDescription>
                    <Button className='bg-blue-500 text-white hover:bg-blue-400 dark:text-white' > Visit</Button>
                </CardFooter>
            </Card>
            ))}
        </div>
    </div>
  )
}

export default CardList