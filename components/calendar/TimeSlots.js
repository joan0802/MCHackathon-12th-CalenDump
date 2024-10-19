'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
// import { CameraIcon } from '@/camera.png'
export default function TimeSlots() {
    const fileInputRef = useRef(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null); // 用來存儲選中的時間段

    const timeSlots = [
        { time: "10:00-12:00", title: "微積分期中考" },
        { time: "13:00-15:00", title: "演算法上課" },
        { time: "15:30-16:30", title: "讀書會" },
        { time: "17:00-18:00", title: "吃晚餐" },
    ];

    const handleOpenDialog = (slot) => {
        setSelectedSlot(slot); // 設置選中的時間段
        setIsDialogOpen(true);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveFile = () => {
        // 存儲文件到後端
        
        setUploadedImage(null)
        setIsDialogOpen(false);
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="p-4">
            {timeSlots.map((slot, index) => (
                <div
                    key={index}
                    onClick={() => handleOpenDialog(slot)}
                    className="flex items-center py-2 px-4 mb-2 bg-gray-50 border border-[#13492f] rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                    <div className="flex-1 font-[1000] text-[1.4rem] text-[#13492f]">{slot.title}</div>
                    <div className="w-24 pt-5 text-right font-semibold text-sm text-[#13492f]">{slot.time}</div>
                </div>
            ))}

            {/* 單一的 Dialog，用於顯示選中的時間段 */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-[23rem] rounded-lg" tabIndex="-1">
                    <DialogHeader>
                        <DialogTitle>
                            <div className="w-full items-center">
                                <div className="font-[1000] text-[1.4rem] text-[#13492f]">
                                    {selectedSlot?.title}
                                </div>
                                <div className="pt-2 text-right font-semibold text-sm text-[#13492f]">
                                    {selectedSlot?.time}
                                </div>
                            </div>
                        </DialogTitle>
                    </DialogHeader>
                    <div className="w-auto pb-4 h-[15rem]">
                        <div className="flex justify-between gap-2">
                            <textarea
                                id="feeling"
                                className="border h-[10rem] border-[#13492f] border-[1px] w-[50%] font-sans rounded-2xl p-4 bg-gray-50 placeholder:text-center outline-none"
                                placeholder="Write down your feeling"
                            ></textarea>
                            <div className="border h-[10rem] border-[#13492f] border-[1px] w-[50%] rounded-2xl bg-gray-50">
                                {uploadedImage ? (
                                    <img src={uploadedImage} alt="Uploaded" className="h-full w-full object-cover rounded-2xl" />
                                ) : (
                                    <span className="p-4 items-center flex justify-center text-gray-400">Upload Photo</span>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-4">
                            <Button variant="ghost" className="p-0 m-0" onClick={handleButtonClick}>
                                <img
                                    src="/camera.png"
                                    alt="Camera Icon"
                                    className="h-[4rem] p-0 "
                                />
                                <input
                                    type="file"
                                    id="image"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Button>
                            <Button className="bg-gray-600" onClick={handleSaveFile}>
                                <div className="font-serif text-lg">
                                    SAVE
                                </div>
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
