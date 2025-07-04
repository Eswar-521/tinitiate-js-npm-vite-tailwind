import React from "react";
import { BsCalendar3 } from "react-icons/bs";

const Calendar = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">📅 Calendar</h2>
      <div className="bg-indigo-50 p-4 rounded shadow text-center">
        <BsCalendar3 size={48} className="mx-auto mb-2 text-indigo-700" />
        <p>Schedule your events here.</p>
      </div>
    </div>
  );
};

export default Calendar;
