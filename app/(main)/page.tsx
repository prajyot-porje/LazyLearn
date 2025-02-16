'use client'
import React from "react";
import CardList from "@/components/CardList";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const {user} = useUser();
  const name = user ? user.fullName : "Guest";
  return (
    <div className="bg-white dark:bg-[#292929] min-h-screen w-screen">
      <div className="h-screen flex justify-center  lg:mx-28  pt-28">
        <div className="flex items-center flex-col flex-wrap">
          <div
            className="relative h-52 hidden md:block  lg:w-[1000px]  rounded-xl"
            style={{
              backgroundImage: `url('/images/new.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 flex items-center  pl-16">
              <div className="flex flex-col gap-2"> 
              <div className="text-5xl font-semibold text-black">Hello {name}</div>
              <div className="text-2xl font-semibold text-black">Welcome back to Lazy Learn</div>
              </div>
            </div>
          </div>
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Page;
