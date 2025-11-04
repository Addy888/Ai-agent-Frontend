import React, { useEffect, useState } from "react";

const BookingTime = () => {
  const [bookingTime, setBookingTime] = useState("");

  useEffect(() => {
    setBookingTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Booking Time</h2>
      <p className="text-green-600 text-lg font-mono">{bookingTime}</p>
    </div>
  );
};

export default BookingTime;
