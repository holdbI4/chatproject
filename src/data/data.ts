type Status = "Online" | "Offline";

interface Chat {
    id: number;
    fullName: string;
    email: string;
    messageCount: number;
    status: Status;
}

export const chats: Chat[] = [
    {
        id: 1,
        fullName: "Aziz",
        email: "azamjonov@email.com",
        messageCount: 10,
        status: "Online"


    },
    {
        id: 2,
        fullName: "Abduxalil",
        email: "abduxalilov@email.com",
        messageCount: 10,
        status: "Offline"

    },
    {
        id: 3,
        fullName: "Maxsad",
        email: "xalipaev@email.com",
        messageCount: 10,
        status: "Online"

    }
]