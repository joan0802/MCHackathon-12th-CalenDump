"use client";

import { useEffect } from "react";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DateHeader from '@/components/calendar/DateHeader';
import TimeSlots from '@/components/calendar/TimeSlots';
import LunarInfo from "@/components/calendar/LunarInfo";
import { Button } from "@/components/ui/button";
// import GoogleCalendarButton from '@/components/calendar/GoogleCalendarButton';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login, user } = useAuth();

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
        const token = searchParams.get('token');
        if (token) {
        login(token);
        // Remove the token from the URL
        router.replace('/');
        }
        else {
            alert('登入以使用所有功能！');
            window.location.href = '/login';
        }
    }, [searchParams, login, router]);  
    
    
    const test = () => {
        window.location.href = "https://ef91-140-113-136-220.ngrok-free.app/login";
    }


    if(user){
        return (
            <div className="h-screen">
                <Card className="max-w-md mx-auto h-full bg-white relative rounded-2xl">
                    <CardContent className="p-0 h-full rounded-2xl">
                        <Button onClick={test}>
                            hiiiiii
                        </Button>
                        <DateHeader />
                        <div className="w-full bg-[#13492f] h-[0.7rem] mb-2">
                        </div>
                        <div className="border border-[0.75rem] border-[#13492f] h-[35rem]">
                            <LunarInfo />
                            <TimeSlots />
                        </div>
                        <div className="w-full bg-[#13492f] h-[0.7rem] mt-2">
                        </div>
                        {/* <GoogleCalendarButton /> */}
                    </CardContent>
                </Card>
            </div>
        );
    }
    return null;
}
