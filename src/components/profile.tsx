import React from 'react'
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Separator} from "@/components/ui/separator";
import {PlusCircle} from "lucide-react";

export default function Profile() {
    return (
        <div className="flex flex-col sm:w-full">
            <div className="flex flex-col space-y-2">
                <Avatar className="w-12 h-12">
                    <AvatarImage src="/01.png" alt="Avatar"/>
                </Avatar>
                <p className="text-lg">Abduxalil Abduxalilov</p>
            </div>
            <div className="flex">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <p className="text-sm text-muted-foreground">proudtobegay@email.com</p>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col">
                            <div
                                className="flex rounded-xl hover:bg-muted flex-row space-x-2 items-center w-full transition-all p-3 cursor-pointer my-1">
                                <Avatar className="w-4 h-4">
                                    <AvatarImage src="/01.png"/>
                                </Avatar>
                                <p className="text-sm">Abduxalil Abduxalilov</p>
                            </div>
                            <Separator/>
                            <div
                                className="flex rounded-xl hover:bg-muted flex-row space-x-2 items-center w-full transition-all p-3 cursor-pointer my-1">
                                <Avatar className="w-4 h-4">
                                    <AvatarImage src="/01.png"/>
                                </Avatar>
                                <p className="text-sm">Abduxalil Abduxalilov</p>
                            </div>
                            <Separator/>
                            <div
                                className="flex rounded-xl hover:bg-muted flex-row space-x-2 items-center w-full transition-all p-3 cursor-pointer my-1">
                                <PlusCircle className="w-4 h-4"/>
                                <p className="text-sm">Add An Account</p>
                            </div>
                        </AccordionContent>

                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
