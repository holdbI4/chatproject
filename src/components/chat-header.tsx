import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ChevronLeft, Phone, User} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {chats} from "@/data/data";
import {useParams} from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Separator} from "@/components/ui/separator";

export default function ChatHeader() {
    const params = useParams<{ id: string }>()
    const currentChat = chats.find(chat => chat.id === Number(params.id))
    return (

        <Dialog>
            <DialogTrigger asChild>
                <header className="py-3 px-4 border-b h-fit w-full cursor-pointer">
                    <div className="flex justify-between">
                        <div className="flex gap-x-1 w-full">
                            <Link href={`/`}>
                                <Button className="flex md:hidden">
                                    <ChevronLeft className="h-5 w-5"/>
                                </Button>
                            </Link>
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/01.png" alt="Avatar"/>
                            </Avatar>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{currentChat?.fullName}</p>
                                <p className={`text-sm ${currentChat?.status === "Online" ? "text-green-400" : "text-muted-foreground"}`}>{currentChat?.status}</p>
                            </div>

                        </div>
                        <div className="flex gap-x-2">
                            <Button onClick={(event) => event.preventDefault()}>
                                <Phone className="h-5 w-5"/>
                            </Button>
                        </div>
                    </div>
                </header>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Information</DialogTitle>
                    <DialogDescription>
                        <div className="flex flex-col">
                            <div className="flex gap-x-4 items-center mb-6">
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src="/01.png"/>
                                </Avatar>
                                <div className="flex flex-col h-full">
                                    <div className="flex text-lg font-bold">
                                        Azamjonov
                                    </div>
                                    <div className="flex">
                                        Last Seen recently
                                    </div>
                                </div>

                            </div>
                            <div className="flex rounded-xl p-3 bg-muted flex-col space-y-3">
                                <div className="flex space-x-4 items-center">
                                    <div className="flex">
                                        <Phone className="h-5 w-5"/>
                                    </div>
                                    <div className="flex text-base">
                                        +998908447919
                                    </div>
                                </div>
                                <Separator/>
                                <div className="flex space-x-4 items-center">
                                    <div className="flex">
                                        <User className="h-5 w-5"/>
                                    </div>
                                    <div className="flex text-base">
                                        @mayberlaterbruh
                                    </div>
                                </div>
                            </div>

                        </div>
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>

                </DialogFooter>
            </DialogContent>
        </Dialog>


    )
}
