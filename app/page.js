"use client";

import { useEffect } from "react";
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DateHeader from '@/components/calendar/DateHeader';
import TimeSlots from '@/components/calendar/TimeSlots';
import LunarInfo from "@/components/calendar/LunarInfo";
import { Button } from "@/components/ui/button";
// import GoogleCalendarButton from '@/components/calendar/GoogleCalendarButton';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [token, setToken] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());


    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        console.log('Service Worker registered with scope:', registration.scope);
                    })
                    .catch((error) => {
                        console.log('Service Worker registration failed:', error);
                    });
            });
        }
        const tokenParam = searchParams.get('token');
        if (tokenParam) {
            setToken(tokenParam);
            localStorage.setItem('userToken', tokenParam);
        }
        else {
            const storedToken = localStorage.getItem('userToken');
            if (storedToken) {
                setToken(storedToken);
            } else {
                alert('登入以使用所有功能！');
                window.location.href = '/login';
            }

        }
    }, [searchParams, router]);


    const test = () => {
        window.location.href = "https://ef91-140-113-136-220.ngrok-free.app/login";
    }

    const handleShowDump = () => {
        
    }


    if (localStorage.getItem('userToken')) {
        return (
            <div className="h-screen">
                <Card className="max-w-md mx-auto h-full bg-white relative rounded-2xl">
                    <CardContent className="p-0 h-full rounded-2xl">
                        {/* <Button onClick={test}>
                            hiiiiii
                        </Button> */}
                        <DateHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                        <div className="w-full bg-[#13492f] h-[0.7rem] mb-2">
                        </div>
                        <div className="border border-[0.75rem] border-[#13492f] h-[32rem]">
                            <LunarInfo />
                            <TimeSlots dateString={selectedDate} />
                        </div>
                        <div className="bg-[#13492f] flex justify-end px-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-white bg-opacity-20 flex justify-end rounded-2xl mb-4 font-serif">
                                        Your Weekly Dump
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle className="font-serif">2024.10.14-2024.10.20 Weekly Dump</DialogTitle>
                                        
                                    </DialogHeader>
                                    {/* Add your weekly dump content here */}
                                </DialogContent>
                            </Dialog>
                        </div>
                        {/* <GoogleCalendarButton /> */}
                    </CardContent>
                </Card>
            </div>
        );
    }
}
