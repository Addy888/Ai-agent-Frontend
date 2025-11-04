import React, { useState } from "react";

const BookingType = () => {
  const [type, setType] = useState("Online");

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Booking Type</h2>
      <select
        className="border p-2 rounded-md w-full"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Online</option>
        <option>In-person</option>
        <option>Follow-up</option>
        <option>Emergency</option>
      </select>
      <p className="text-gray-700 mt-2">Selected: <strong>{type}</strong></p>
    </div>
  );
};

export default BookingType;
