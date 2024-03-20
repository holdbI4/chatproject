import React, {useState} from 'react'
import {Bookmark, Moon, Settings, Users} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";
import {Separator} from "@/components/ui/separator";
import {useTheme} from "next-themes";
import Link from "next/link";

export default function ProfileActions() {
    const [checked, setChecked] = useState(true)
    const {theme, setTheme} = useTheme()

    return (
        <div>
            <div className="flex w-full justify-between p-3 rounded-xl hover:bg-muted transition-al">
                <div className="flex space-x-1 items-center">
                    <Moon className="w-5 h-5"/>
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                </div>
                <Switch id="dark-mode" checked={theme === "dark"} className="transition-all"
                        onCheckedChange={() => theme === "light" ? setTheme('dark') : setTheme('light')}/>
            </div>
            <Separator/>

            <Link href="/settings">
            <div className="flex w-full space-x-1 items-center p-3 rounded-xl hover:bg-muted transition-all">

                    <Settings className="w-5 h-5"/>
                    <Label htmlFor="settings">Settings</Label>

            </div>
            </Link>

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
