"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { database } from "@/config";
import { usersTable } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

const Provider = ({children}: { children: React.ReactNode }) => {
  const { user } = useUser();

  useEffect(()=>{
    user&&IsNewUser();
  },[user])
  const IsNewUser = async()=>{
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    if (!userEmail) return;

    const Table = await database.select().from(usersTable)
    .where(eq(usersTable.email, userEmail))
    console.log(Table)
    if(Table.length == 0){
      const response = await database.insert(usersTable).values({
        userName: user?.fullName ??'',
        email: user?.primaryEmailAddress?.emailAddress ?? '',
      }).returning( {id: usersTable?.id})
      console.log(response)
    }
  }
  return (
    <div >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
      {children}
      </ThemeProvider>
    </div>
  );
};

export default Provider;
