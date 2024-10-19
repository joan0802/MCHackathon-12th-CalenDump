export default function TimeSlots() {
    const timeSlots = [
      { time: "10:00-12:00", title: "Morning Meeting" },
      { time: "13:00-15:00", title: "Project Review" },
      { time: "15:30-16:30", title: "Team Sync" },
      { time: "17:00-18:00", title: "Planning" },
      { time: "19:00-21:00", title: "Evening Tasks" }
    ];
  
    return (
      <div className="p-4">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className="flex items-center p-3 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <div className="w-24 text-sm text-gray-600">{slot.time}</div>
            <div className="flex-1 text-gray-800">{slot.title}</div>
          </div>
        ))}
      </div>
    );
  }