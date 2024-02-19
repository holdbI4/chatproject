"use client"

import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/chat-header";
import CurrentChat from "@/components/current-chat";
export default function Page() {
    return (
        <div className="flex h-dvh">
            <Sidebar/>
            <div className="flex w-full md:w-8/12 lg:w-9/12 xl:w-10/12 flex-col">
                <ChatHeader/>
                <CurrentChat/>
            </div>
        </div>
    )
}