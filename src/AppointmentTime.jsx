import React, { useEffect, useState } from "react";

const AppointmentTime = () => {
  const [appointmentTime, setAppointmentTime] = useState("");
  const [booked, setBooked] = useState([]);

  // Function: Round to next 10 minutes
  const getNextSlot = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const remainder = 10 - (minutes % 10);
    now.setMinutes(minutes + remainder);
    now.setSeconds(0);
    now.setMilliseconds(0);

    const hours = now.getHours();
    const mins = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHour = hours % 12 || 12;
    return `${displayHour}:${mins} ${ampm}`;
  };

  useEffect(() => {
    const nextSlot = getNextSlot();
    // prevent duplicate time slot same day
    if (!booked.includes(nextSlot)) {
      setAppointmentTime(nextSlot);
      setBooked([...booked, nextSlot]);
    }
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Appointment Time (Auto)</h2>
      <p className="text-blue-600 text-lg font-mono">{appointmentTime || "Generating..."}</p>
    </div>
  );
};

export default AppointmentTime;
