import React from 'react'
import {Bookmark, Settings, Users} from "lucide-react";
import {Label} from "@/components/ui/label";

export default function Page() {
    return (
        <div>
            <div className="flex w-full space-x-1 items-center p-3 rounded-xl hover:bg-muted transition-all">
                <div className="flex space-x-1 w-full items-center">
                    <Settings className="w-5 h-5"/>
                    <Label htmlFor="settings">Settings</Label>
                </div>

            </div>


            <div className="flex w-full space-x-1 items-center p-3 rounded-xl hover:bg-muted transition-all">
                <Users className="w-5 h-5"/>
                <Label htmlFor="users">Users</Label>
            </div>

            <div className="flex w-full space-x-1 items-center p-3 rounded-xl hover:bg-muted transition-all">
                <Bookmark className="w-5 h-5"/>
                <Label htmlFor="saved-messages">Saved Messages</Label>
            </div>

        </div>
    )
}
