import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {Input} from "@/components/ui/input";
import {chats} from "@/data/data";
import Link from "next/link";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";

import Profile from "@/components/profile";
import ProfileActions from "@/components/profile-actions";
import {useState} from "react";
import sidebarStore from "@/store/sidebar";
import {observer} from "mobx-react-lite";

const Sidebar = observer(() => {

    return (
        <div className="space-y-2 w-full">
            <div className="flex justify-between mb-4">
                <Sheet open={sidebarStore.isOpen} onOpenChange={sidebarStore.setOpen}>
                    <SheetTrigger>
                        <Button variant="ghost" onClick={() => sidebarStore.setOpen(true)}>
                            <Menu className="h-4 w-4 text-primary"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex w-full md:w-4/12 lg:w-3/12 xl:w-2/12 border-r h-dvh">
                        <SheetHeader>
                            <Profile/>
                            <ProfileActions/>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <Input placeholder="Search" className="m-2 rounded-2xl border-primary placeholder-white"/>
            </div>
            {chats.map((chat, index) => (
                <Link key={index} href={`/chat/${chat.id}`}>
                    <div className="flex items-center justify-between p-4 hover:bg-muted transition-all rounded-xl cursor-pointer">

                        <div className="flex">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/01.png" alt="Avatar"/>
                            </Avatar>
                            <div className="ml-4 space-y-1 items-center flex">
                                <p className="text-sm font-medium leading-none text-primary">{chat.fullName}</p>

                            </div>
                        </div>
                        <div className="flex justify-center items-center text-center rounded-full bg-primary w-6 h-6 text-xs dark:text-black text-white">
                            {chat.messageCount}
                        </div>

                    </div>
                </Link>
            ))}
        </div>

    )
})

export default Sidebar
