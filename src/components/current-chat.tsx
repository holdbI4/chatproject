import React, {useState} from 'react'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SendHorizonal} from "lucide-react";

export default function CurrentChat() {
    const [message, setMessage] = useState("")

    const onSendButtonClick = () => {
        console.log(message)
    }
    return (
        <main className="flex h-full p-3 text-center">
            <div className="flex items-end w-full gap-x-2">


                <Input
                    value={message}
                    className="flex w-11/12"
                    placeholder="Enter Message"
                    onKeyDown={(event) => {
                        if (event.key === "Enter") onSendButtonClick()
                    }}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <Button className="w-1/12" onClick={onSendButtonClick}>
                    <SendHorizonal className="w-4 h-4"/>
                </Button>
            </div>
        </main>
    )
}
