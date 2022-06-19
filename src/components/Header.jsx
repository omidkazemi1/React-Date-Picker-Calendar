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
        <div className="flex justify-between items-center mb-5">
            <button>
                <LeftArrow onClick={onPrevMonth} />
            </button>

            <div>
                <span className="font-semibold">
                    {months[currentDate.getMonth()]}
                </span>
                &nbsp;
                <span className="font-light">{currentDate.getFullYear()}</span>
            </div>

            <button onClick={onNextMonth}>
                <RightArrow />
            </button>
        </div>
    );
};

export default Header;
