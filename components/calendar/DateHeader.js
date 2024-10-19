// components/calendar/DateHeader.js
'use client';
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import DateSlider from '@/components/calendar/DateSlider';

export default function DateHeader() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isYearDialogOpen, setIsYearDialogOpen] = useState(false);

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

    // Function to handle month change confirmation
    const handleChangeMonth = () => {
        const newDate = new Date(selectedDate);
        newDate.setMonth(selectedMonth);
        setSelectedDate(newDate);
        setIsDialogOpen(false); // Close the month dialog
    };

    // Function to handle year change confirmation
    const handleChangeYear = () => {
        const newDate = new Date(selectedDate);
        newDate.setFullYear(selectedYear);
        setSelectedDate(newDate);
        setIsYearDialogOpen(false); // Close the year dialog
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center text-green-800 mb-10">
                <div className="flex items-center justify-between space-x-2 w-full">
                    <Dialog open={isYearDialogOpen} onOpenChange={setIsYearDialogOpen}>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                className="text-green-800 hover:text-green-700 text-[1.3rem] font-large p-0 font-serif"
                            >
                                {selectedDate.getFullYear()}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[20rem] rounded-lg">
                            <DialogHeader>
                                <DialogTitle className="flex items-center justify-center">Year</DialogTitle>
                            </DialogHeader>
                            <div className="flex items-center justify-center gap-2">
                                <select
                                    className="text-green-800 hover:text-green-700 text-[1.3rem] font-large p-2 font-serif border rounded-md"
                                    value={selectedYear}
                                    onChange={(e) => {
                                        setSelectedYear(parseInt(e.target.value, 10));
                                    }}
                                >
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <Button
                                    onClick={handleChangeYear}
                                >
                                    <div className="font-serif">
                                        Confirm
                                    </div>
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex justify-between text-green-800 hover:text-green-700 text-[1.3rem] mt-1 font-large p-0 font-serif"
                            >
                                {currentMonth.en}
                            </Button>
                        </DialogTrigger>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex justify-between text-green-800 hover:text-green-700 text-[1.3rem] font-large p-0 font-serif"
                            >
                                {currentMonth.zh}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[20rem] rounded-lg">
                            <DialogHeader>
                                <DialogTitle className="flex items-center justify-center">Month</DialogTitle>
                            </DialogHeader>
                            <div className="flex items-center justify-center grid grid-cols-3 gap-2">
                                {Object.keys(months).map((monthIndex) => (
                                    <Button
                                        key={monthIndex}
                                        variant="outline"
                                        className={selectedMonth === parseInt(monthIndex, 10) ? "bg-gray-100 text-black" : ""}
                                        onClick={() => {
                                            setSelectedMonth(parseInt(monthIndex, 10));
                                        }}
                                    >
                                        <div className="font-serif">
                                            {months[monthIndex].en}
                                        </div>
                                    </Button>
                                ))}
                            </div>

                            <div className="flex items-center justify-center mt-4">
                                <Button
                                    onClick={handleChangeMonth}
                                >
                                    <div className="font-serif">
                                        Confirm
                                    </div>
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div>
                <DateSlider selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
        </div>
    );
}
