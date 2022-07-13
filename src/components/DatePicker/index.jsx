import React, { useRef, useState } from "react";
import Calendar from "../Calendar";
import Input from "../Input";

const DatePicker = ({ placeholder, label, pickedDate, onPickDate }) => {
    const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
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

    const closeCalendarHandler = () => {
        setIsOpenDatePicker(false);
    };

    return (
        <div className="relative">
            <Input
                ref={inputRef}
                label={label}
                placeholder={placeholder}
                value={inputValue}
                onFocus={focusHandler}
                onChange={event => event.preventDefault()}
            />

            <Calendar
                ref={datePickerRef}
                open={isOpenDatePicker}
                pickedDate={pickedDate}
                onChangePickedDate={onPickDate}
                onClose={closeCalendarHandler}
            />
        </div>
    );
};

export default DatePicker;
