import React from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import Alert from "@/Components/Alert";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [alert, setAlert] = React.useState(false)
  return (
    <main
      className={`grid grid-cols-4 h-screen relative w-screen items-center p-24 ${inter.className}`}
    >
      <Link href='/slider'>Go to Slider Component</Link>
      <div><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>setAlert(!alert)} >Create Alert</button>
        {alert ? <Alert type="info" message="This is info" /> : null}</div>
    </main>
  )
}
