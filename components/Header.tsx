'use client'
import React, { useState } from "react"
import Logo from "./ui/Logo"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { ModeToggle } from "./ui/Switch"
import { FaRegFilePdf, FaYoutube } from "react-icons/fa"
import { FaNoteSticky } from "react-icons/fa6"
import { MdOutlineDashboard, MdOutlineMenu } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"
import { Button } from "./ui/button"

const Header = () => {
  const tabs = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard className="text-gray-600 dark:text-gray-400" />,
      link: "/",
    },
    {
      name: "Notes Generator",
      icon: <FaNoteSticky className="text-blue-500" />,
      link: "/",
    },
    {
      name: "PDF Analysis",
      icon: <FaRegFilePdf className="text-red-500" />,
      link: "/",
    },
    {
      name: "Video Analysis",
      icon: <FaYoutube className="text-red-600" size={22} />,
      link: "/",
    },
  ]
  const [OpenMenu , setOpenMenu] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
        <div className="md:hidden" >
          <Button variant="ghost" className="h-fit w-fit" onClick={() => OpenMenu === true ? setOpenMenu(false):setOpenMenu(true)}>
            {OpenMenu &&<MdOutlineMenu size={30}/>}
            {!OpenMenu && <RxCross2 size={30}/>}
          </Button>
        </div>
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <nav className="hidden md:flex space-x-10">
            {tabs.map((tab, idx) => (
              <Link
                href={tab.link}
                key={idx}
                className="group relative flex items-center space-x-3 text-base font-medium text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out"
              >
                <span className="transition-all duration-300 ease-in-out group-hover:scale-110">{tab.icon}</span>
                <span className="hidden lg:inline relative overflow-hidden">
                  {tab.name}
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
            
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      {OpenMenu &&<div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {tabs.map((tab, idx) => (
            <Link
              href={tab.link}
              key={idx}
              className="flex items-center space-x-3 text-base font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md transition duration-300 ease-in-out"
            >
              {tab.icon}
              <span>{tab.name}</span>
            </Link>
          ))}
        </div>
      </div>}
    </header>
  )
}

export default Header

