import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {Input} from "@/components/ui/input";
import {chats} from "@/data/data";
import Link from "next/link";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";

import Profile from "@/components/profile";
import ProfileActions from "@/components/profile-actions";

export default function Sidebar() {

    return (
        <div className="flex w-full md:w-4/12 lg:w-3/12 xl:w-2/12  border-r h-dvh">

            <div className="space-y-2 w-full">
                <div className="flex justify-between mb-4">
                    <Sheet>
                        <SheetTrigger>
                            <Button variant="ghost" className="mt-2">
                                <Menu className="h-4 w-4"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex w-full md:w-4/12 lg:w-3/12 xl:w-2/12  border-r h-dvh">
                            <SheetHeader>
                                <Profile/>
                                <ProfileActions/>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <Input placeholder="Search" className="m-2 rounded-2xl"/>
                </div>
                {chats.map((chat, index) => (
                    <Link key={index} href={`/chat/${chat.id}`}>
                        <div className="flex items-center py-4 hover:bg-muted transition-all rounded-xl cursor-pointer">

                            <div className="flex">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/01.png" alt="Avatar"/>
                                </Avatar>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">{chat.fullName}</p>
                                    <p className="text-sm text-muted-foreground">{chat.email}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
