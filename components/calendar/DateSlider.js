import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function DateSlider({ selectedDate, setSelectedDate }) {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set isClient to true after the component has been mounted on the client
        setIsClient(true);
    }, []);

    const handleSwipe = (delta) => {
        if (!selectedDate) return; // Ensure selectedDate is defined
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + delta);
        setSelectedDate(newDate);
        if (isClient) {
            router.push(`/page/${newDate.toISOString().split('T')[0]}`);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(1),
        onSwipedRight: () => handleSwipe(-1),
    });

    // Prevent rendering until the component is mounted on the client
    if (!isClient) {
        return null;
    }

    return (
        <div {...swipeHandlers} className="flex justify-center items-center p-10 mb-5">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        className="hover:bg-transparent"
                    >
                        <span className="text-green-800 text-[200px] leading-none font-[1000]">
                            {selectedDate ? selectedDate.getDate().toString().padStart(2, '0') : '00'}
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
                                    const newDate = new Date(selectedDate || new Date());
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
    );
}

export default DateSlider;
