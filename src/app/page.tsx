"use client"
import Sidebar from "@/components/Sidebar";


export default function Page() {


    return (
        <div className="flex h-dvh">
            <div className="flex w-full md:w-4/12 lg:w-3/12 xl:w-2/12 border-r h-dvh p-3">
            <Sidebar/>
            </div>

            <div className="hidden md:flex md:w-8/12 lg:w-9/12 xl:w-10/12 flex-col">


            </div>

        </div>
    )
}
