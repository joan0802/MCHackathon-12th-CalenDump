// components/calendar/DateHeader.js
'use client';
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function DateHeader() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Update date every minute to ensure it stays current
    useEffect(() => {
        const timer = setInterval(() => {
            setSelectedDate(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    // Get current month in English and Chinese
    const months = {
        0: { en: 'JANUARY', zh: '一月' },
        1: { en: 'FEBRUARY', zh: '二月' },
        2: { en: 'MARCH', zh: '三月' },
        3: { en: 'APRIL', zh: '四月' },
        4: { en: 'MAY', zh: '五月' },
        5: { en: 'JUNE', zh: '六月' },
        6: { en: 'JULY', zh: '七月' },
        7: { en: 'AUGUST', zh: '八月' },
        8: { en: 'SEPTEMBER', zh: '九月' },
        9: { en: 'OCTOBER', zh: '十月' },
        10: { en: 'NOVEMBER', zh: '十一月' },
        11: { en: 'DECEMBER', zh: '十二月' }
    };

    const currentMonth = months[selectedDate.getMonth()];

    // Years array for year picker
    const years = Array.from(
        { length: 10 },
        (_, i) => new Date().getFullYear() - 5 + i
    );

    return (
        <div className="p-4">
            <div className="flex justify-between items-center text-green-800 mb-10">
                <div className="flex items-center justify-between space-x-2 w-full">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                className="text-green-800 hover:text-green-700 text-2xl font-large"
                            >
                                {selectedDate.getFullYear()}
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Select Year</DialogTitle>
                            </DialogHeader>
                            <div className="grid grid-cols-3 gap-2">
                                {years.map(year => (
                                    <Button
                                        key={year}
                                        variant="outline"
                                        onClick={() => {
                                            const newDate = new Date(selectedDate);
                                            newDate.setFullYear(year);
                                            setSelectedDate(newDate);
                                        }}
                                    >
                                        {year}
                                    </Button>
                                ))}
                            </div>
                        </DialogContent>
                    </Dialog>
                    <span className="text-lg font-medium">{currentMonth.en}</span>
                    <span className="text-lg font-medium">{currentMonth.zh}</span>
                </div>
            </div>

            <div className="flex justify-center mt-10 mb-10">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="ghost"
                            className="hover:bg-transparent"
                        >
                            <span className="text-green-800 text-[120px] leading-none font-bold">
                                {selectedDate.getDate().toString().padStart(2, '0')}
                            </span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Select Date</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-7 gap-2">
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                <Button
                                    key={day}
                                    variant="outline"
                                    className="w-10 h-10"
                                    onClick={() => {
                                        const newDate = new Date(selectedDate);
                                        newDate.setDate(day);
                                        setSelectedDate(newDate);
                                    }}
                                >
                                    {day}
                                </Button>
                            ))}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}