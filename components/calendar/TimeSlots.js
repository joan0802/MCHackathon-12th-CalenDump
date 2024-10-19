'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
// import { CameraIcon } from '@/camera.png'

export default function TimeSlots() {
    const fileInputRef = useRef(null);

    const timeSlots = [
        { time: "10:00-12:00", title: "微積分期中考" },
        { time: "13:00-15:00", title: "演算法上課" },
        { time: "15:30-16:30", title: "讀書會" },
        { time: "17:00-18:00", title: "吃晚餐" },
    ];

    // 當按下按鈕或圖片時，觸發 <input> 的點擊事件
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

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
                    <DialogContent className="w-[25rem]">
                        <DialogHeader className="">
                            <DialogTitle>
                                <div className="w-full items-center">
                                    <div className="font-[1000] text-[1.4rem] text-green-800">{slot.title}</div>
                                    <div className="pt-2 text-right font-semibold text-sm text-green-800">{slot.time}</div>
                                </div>
                            </DialogTitle>
                        </DialogHeader>
                        <div className="w-auto pb-4 h-[15rem]">
                            <textarea
                                id="feeling"
                                className="border h-[10rem] border-green-800 border-[1px] w-full font-sans rounded-2xl p-4 bg-gray-50 placeholder:text-center outline-none"
                                placeholder="Write down your feeling"
                            ></textarea>
                            <div className="flex items-center justify-between pt-4">
                                <Button variant="ghost" className="p-0 m-0" onClick={handleButtonClick}>
                                    <img
                                        src="/camera.png"
                                        alt="Camera Icon"
                                        className="w-fit p-0 h-[3.5rem]"
                                    />
                                    <input
                                        type="file"
                                        id="image"
                                        ref={fileInputRef}  // 將 useRef 連結到這裡
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </Button>
                                <Button className="bg-gray-600">
                                    <div className="font-serif text-lg">
                                        SAVE
                                    </div>
                                </Button>

                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}