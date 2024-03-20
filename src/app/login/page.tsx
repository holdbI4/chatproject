"use client"
import {FC} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import LoginForm from "@/components/login-form";
import SignUpForm from "@/components/sign-up-form";


const Page: FC = () => {


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
                            <LoginForm/>
                        </CardContent>
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
                            <SignUpForm/>
                        </CardContent>

                    </Card>
                </TabsContent>
            </Tabs>
        </div>

    );
};

export default Page;
