'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useAuth } from "@/contexts/AuthContext";
// import { CameraIcon } from '@/camera.png'

export default function TimeSlots(dateString) {
    const [currentDate, setCurrentDate] = useState(() => {
      if (dateString === "") {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      }
      return dateString;
    });
    
    const fileInputRef = useRef(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);
    //const {user} = useAuth();

    useEffect(() => {
      async function fetchData(token) {
        try {
            console.log("calling api");
          const data = await fetchEvent(currentDate, token);
          setTimeSlots((prevTimeSlots) => {
            // Only update state if data has changed
            if (JSON.stringify(prevTimeSlots) !== JSON.stringify(data)) {
              return data;
            }
            return prevTimeSlots;
          });
        } catch (error) {
          console.log(error);
          alert(error);
        //   window.location.href = '/login';
        }
      }
  
    let token = localStorage.getItem('userToken');
    if(token) {
      fetchData(token);
    } else {
      alert('請先登入');
      window.location.href = '/login';
    }
  }, []);
    // const timeSlots = [
    //     { time: "10:00-12:00", title: "微積分期中考" },
    //     { time: "13:00-15:00", title: "演算法上課" },
    //     { time: "15:30-16:30", title: "讀書會" },
    //     { time: "17:00-18:00", title: "吃晚餐" },
    // ];

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
                    <div className="w-24 pt-5 text-right font-semibold text-sm text-[#13492f]">{slot.start_time+' - '+slot.end_time}</div>
                    
            
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

let eventNote = new Map();
let eventImg = new Map();
async function fetchEvent(dateString, token) {
  const responsePromise = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/api/event/' + '2024-10-13', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "ngrok-skip-browser-warning": "true",
    }
  });

    if (!responsePromise.ok) {
    throw new Error('Failed to fetch events');
  }
  const response = await responsePromise.json();

//   const response = [
//     {event_id: 1, start_time: '2024-10-19T08:00:00.000Z', end_time: '2024-10-19T09:00:00.000Z', title: '微積分小考', note: "今天考得好難QQ"},
//     {event_id: 2, start_time: '2024-10-19T09:00:00.000Z', end_time: '2024-10-19T10:00:00.000Z', title: '演算法', img: 'some url'},
//     {event_id: 3, start_time: '2024-10-19T10:00:00.000Z', end_time: '2024-10-19T11:00:00.000Z', title: '讀書會'},
//     {event_id: 4, start_time: '2024-10-19T11:00:00.000Z', end_time: '2024-10-19T12:00:00.000Z', title: '吃晚餐'},
//   ]

  for (let i = 0; i < response.length; i++) {
    // hh:mm
    response[i].start_time = formatTime(response[i].start_time);
    response[i].end_time = formatTime(response[i].end_time);
    if (response[i].note != null) {
      eventNote[response[i].event_id] = response[i].note;
    }
    if (response[i].img != null) {
      eventImg[response[i].event_id] = response[i].img;
    }
  }

  return response;
}

function formatTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function formatDate(dateTimeString){
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}