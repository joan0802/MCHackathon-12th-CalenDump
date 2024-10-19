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
        window.location.href = "https://www.google.com";
    }


    return (
        <div className="h-screen bg-black">
            <Card className="max-w-md mx-auto h-full bg-white relative rounded-2xl">
                <CardContent className="p-0 h-full rounded-2xl">
                    <DateHeader />
                    <Button onClick={test}>
                        hiiii
                    </Button>
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
