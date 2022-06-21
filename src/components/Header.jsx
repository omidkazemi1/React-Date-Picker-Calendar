import React from "react";
import { ReactComponent as LeftArrow } from "./../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "./../assets/icons/arrow-right.svg";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const Header = ({ currentDate, onNextMonth, onPrevMonth }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="px-2">
                <span className="font-semibold">
                    {months[currentDate.getMonth()]}
                </span>
                &nbsp;
                <span className="font-light">{currentDate.getFullYear()}</span>
            </div>

            <div className="flex">
                <button className="grid place-items-center w-8 h-8 hover:bg-green-200 transition-all duration-300 rounded-full">
                    <LeftArrow onClick={onPrevMonth} />
                </button>

                <button
                    className="grid place-items-center w-8 h-8 hover:bg-green-200 transition-all duration-300 rounded-full"
                    onClick={onNextMonth}>
                    <RightArrow />
                </button>
            </div>
        </div>
    );
};

export default Header;
