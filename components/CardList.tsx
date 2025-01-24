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
    ]
  return (
    <div>
        <div className="flex flex-wrap gap-4 m-5">
            {temp.map((card,idx)=>(
            <Card key={idx} className='w-[320px]'>
                <CardHeader>{card.title}</CardHeader>
                <CardContent>{card.desc}</CardContent>
                <CardFooter className='flex justify-between'>
                <CardDescription>Created on : {card.createdAt}</CardDescription>
                    <Button > Visit</Button>
                </CardFooter>
            </Card>
            ))}
        </div>
    </div>
  )
}

export default CardList