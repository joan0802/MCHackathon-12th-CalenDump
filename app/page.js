"use client";

import Image from "next/image";
import { useEffect } from "react";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DateHeader from '@/components/calendar/DateHeader';
import TimeSlots from '@/components/calendar/TimeSlots';
import LunarInfo from "@/components/calendar/LunarInfo";
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


    return (
        <div className="h-screen bg-black">
            <Card className="max-w-md mx-auto h-full bg-white relative rounded-2xl">
                <CardContent className="p-0 h-full rounded-2xl">
                    <DateHeader/>
                    <div className="bg-green-800">
                    <LunarInfo/>
                    </div>
                    <TimeSlots />
                    {/* <GoogleCalendarButton /> */}
                </CardContent>
            </Card>
        </div>
    );
}
