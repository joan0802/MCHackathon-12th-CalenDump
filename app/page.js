"use client";

import Image from "next/image";
import { useEffect } from "react";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DateHeader from '@/components/calendar/DateHeader';
import TimeSlots from '@/components/calendar/TimeSlots';
import LunarInfo from "@/components/calendar/LunarInfo";
import { Button } from "@/components/ui/button";
// import GoogleCalendarButton from '@/components/calendar/GoogleCalendarButton';



export default function Home() {
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
    }, []);
    
    const test = () => {
        window.location.href = "https://ef91-140-113-136-220.ngrok-free.app/login";
    }


    return (
        <div className="h-screen">
            <Card className="max-w-md mx-auto h-full bg-white relative rounded-2xl">
                <CardContent className="p-0 h-full rounded-2xl ">
                    <Button onClick={test}>
                        hiiiiii
                    </Button>
                    <DateHeader />
                    <div className="w-full bg-[#13492f] h-[0.7rem] mb-2">
                    </div>
                    <div className="border border-[0.75rem] border-[#13492f] h-[32rem]">
                        <LunarInfo />
                        <TimeSlots />
                    </div>
                    <div className="bg-[#13492f] flex justify-end px-4 py-2">
                        <Button className="rounded-2xl text-white bg-white bg-opacity-20 font-serif py-2 px-3 text-[1rem] font-bold">
                            Your Weekly Dump
                        </Button>
                    </div>
                    {/* <GoogleCalendarButton /> */}
                </CardContent>
            </Card>
        </div>
    );
}
