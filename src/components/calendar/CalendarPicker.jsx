import React, { useState, useContext } from "react";
import { AppContext } from "../../modal/forgotPasswordModalForm/forgotPasswordModalForm";
import { LuCalendarDays } from "react-icons/lu";
import Calendar from "react-calendar";
import styles from "./Calendar.module.css";
import "react-calendar/dist/Calendar.css";

function CalendarPicker() {
  const [showCalendar, setshowCalendar] = useState(false);
  const toggleDateCalendar = (e) => {
    e.preventDefault();
    setshowCalendar((prevState) => !prevState);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateState, setDateState] = useContext(AppContext);

  const handleDateChange = (date) => {
    setDateState(selectedDate.toLocaleDateString("th"));
    setSelectedDate(date);
    setshowCalendar(false);
  };

  return (
    <div>
      <div className="flex flex-row">
        {selectedDate && (
          <input
            dir="ltr"
            className="w-full bg-[#EEF0F6] border-none p-2 rounded-l-lg"
            value={dateState}
            placeholder="ระบุ วันเดือนปีเกิด"
            onChange={(e) => setDateState(e.target.value)}
          />
        )}
        {selectedDate && (
          <div
            className="w-12 bg-[#EEF0F6] text-[#222222]  rounded-r-lg justify-center flex items-center cursor-pointer"
            onClick={toggleDateCalendar}
            dir="rtl"
          >
            <LuCalendarDays size={20} />
          </div>
        )}
      </div>
      {showCalendar && (
        <div>
          <Calendar
            className={styles.myCalendar}
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            locale="th"
          />
        </div>
      )}
    </div>
  );
}

export default CalendarPicker;
