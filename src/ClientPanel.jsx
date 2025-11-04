import React from "react";
import TokenNumber from "./TokenNumber";
import AppointmentTime from "./AppointmentTime";
import BookingType from "./BookingType";
import BookingTime from "./BookingTime";
import BookingNumber from "./BookingNumber";

const ClientPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 drop-shadow-sm">
        🧾 Client Panel — Features for Tomorrow
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <TokenNumber />
        <AppointmentTime />
        <BookingType />
        <BookingTime />
        <BookingNumber />
      </div>

      <p className="mt-8 text-gray-600 text-sm">
        Auto refresh every 12AM | Prototype version 1.0 🚀
      </p>
    </div>
  );
};

export default ClientPanel;
