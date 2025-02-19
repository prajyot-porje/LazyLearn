import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const { user } = await req.json();
        if(!user){
            throw new Error("User Not Provided : Currently at /create-user/route.ts")
        }
        const result = await inngest.send({
            name:"create.user",
            data:{
                user:user
            }
        })
        return NextResponse.json({result:result})    
    } catch (error) {
        console.log(error)        
    }
}