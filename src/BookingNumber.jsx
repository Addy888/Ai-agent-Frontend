import React, { useEffect, useState } from "react";

const BookingNumber = () => {
  const [bookingNumber, setBookingNumber] = useState("");

  useEffect(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBookingNumber(randomNum);
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Booking Number</h2>
      <p className="text-purple-600 text-lg font-mono">#{bookingNumber}</p>
    </div>
  );
};

export default BookingNumber;
