'use client';
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function TimeSlots() {
    const timeSlots = [
        { time: "10:00-12:00", title: "微積分期中考" },
        { time: "13:00-15:00", title: "演算法上課" },
        { time: "15:30-16:30", title: "讀書會" },
        { time: "17:00-18:00", title: "吃晚餐" },
    ];

    return (
        <div className="p-4">
            {timeSlots.map((slot, index) => (
                <Dialog key={index}>
                    <DialogTrigger asChild>
                        <div
                            className="flex items-center py-2 px-4 mb-2 bg-gray-50 border border-green-800 rounded-lg hover:bg-gray-100 cursor-pointer"
                        >
                            <div className="flex-1 font-[1000] text-[1.4rem] text-green-800">{slot.title}</div>
                            <div className="w-24 pt-5 text-right font-semibold text-sm text-green-800">{slot.time}</div>

                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] h-[32rem]">
                        <DialogHeader className="flex items-center justify-center h-[25%]">
                            <DialogTitle>{slot.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4 h-[60%]">
                            <div className="flex gap-4">
                                <label htmlFor="feeling" className="text-left">
                                    Today's feeling:
                                </label>
                                <input
                                    id="feeling"
                                    className="h-[20rem] w-full"
                                    placeholder="How do you feel?"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="image" className="text-left">
                                    Upload image:
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    className="col-span-3"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-[20%]">
                            <Button>
                                Confirm
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}