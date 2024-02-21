"use client"

import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/chat-header";
import CurrentChat from "@/components/current-chat";
export default function Page() {
    return (
        <div className="flex h-dvh">
            <div className="hidden md:flex md:w-4/12 lg:w-3/12 xl:w-2/12 border-r p-3">
            <Sidebar/>
            </div>
            <div className="flex w-full md:w-8/12 lg:w-9/12 xl:w-10/12 flex-col">
                <ChatHeader/>
                <CurrentChat/>
            </div>
        </div>
    )
}