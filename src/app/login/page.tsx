import {FC} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {PasswordInput} from "@/components/ui/password-input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Separator} from "@/components/ui/separator";

const Page:FC = () => {
    return (
        <div className="flex items-center justify-center h-lvh">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login into your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="example@email.com" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="password" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button className="flex w-full">Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>

                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="fullName">Enter Your Name</Label>
                                <Input id="fullName"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="example@email.com" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="password" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col flex">
                            <Button className="flex w-full">Sign Up</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

    );
};

export default Page;
