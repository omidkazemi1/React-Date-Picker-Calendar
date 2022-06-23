import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import Calendar from "../Calendar";
import Input from "../Input";

const DatePicker = ({ placeholder }) => {
    const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
    const [pickedDate, setPickedDate] = useState(null);
    const datePickerRef = useRef(null);
    const inputRef = useRef(null);
    let inputValue = pickedDate
        ? pickedDate.toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
          })
        : "";

    const focusHandler = () => {
        setIsOpenDatePicker(true);
        document.addEventListener("click", clickedOutside);
    };

    const clickedOutside = event => {
        if (
            datePickerRef.current &&
            !datePickerRef.current.contains(event.target) &&
            !inputRef.current.contains(event.target)
        ) {
            setIsOpenDatePicker(false);
            document.removeEventListener("click", clickedOutside);
        }
    };

    return (
        <div className="relative">
            <Input
                ref={inputRef}
                placeholder={placeholder}
                value={inputValue}
                onFocus={focusHandler}
                onChange={event => event.preventDefault()}
                className="w-64 py-1 px-2 rounded-md outline-none border-2 transition-all duration-75 border-green-500 focus:bg-green-50 dark:bg-slate-900 dark:border-cyan-700 dark:text-cyan-50 dark:focus:bg-slate-700"
            />

            <Calendar
                ref={datePickerRef}
                open={isOpenDatePicker}
                pickedDate={pickedDate}
                onChangePickedDate={setPickedDate}
            />
        </div>
    );
};

export default DatePicker;
