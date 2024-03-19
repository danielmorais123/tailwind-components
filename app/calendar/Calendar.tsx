"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const numDays = (y: number, m: number) => new Date(y, m, 0).getDate();
const months = {
  0: "Janeiro",
  1: "Fevereiro",
  2: "Março",
  3: "Abril",
  4: "Maio",
  5: "Junho",
  6: "Julho",
  7: "Agosto",
  8: "Setembro",
  9: "Outubro",
  10: "Novembro",
  11: "Dezembro",
};
function setCalendar(date: Date) {
  let calendar = [];
  let c = [];

  const now = date;

  const dayOne = new Date(now.getFullYear(), now.getMonth(), 1);

  now.setMonth(now.getMonth() - 1);

  const daysMonthBefore = numDays(now.getFullYear(), now.getMonth() + 1);

  for (
    var i = daysMonthBefore - dayOne.getDay() + 1;
    i <= daysMonthBefore;
    i++
  ) {
    calendar.push(new Date(now.getFullYear(), now.getMonth(), i));
  }
  now.setMonth(now.getMonth() + 1);

  const daysMonth = numDays(now.getFullYear(), now.getMonth() + 1);

  for (var i = 1; i <= daysMonth; i++) {
    calendar.push(new Date(now.getFullYear(), now.getMonth(), i));
  }
  now.setMonth(now.getMonth() + 1);

  const remainingDays =
    42 -
    (daysMonth + (daysMonthBefore - (daysMonthBefore - dayOne.getDay() + 1)));

  for (var i = 1; i < remainingDays; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), i);

    calendar.push(d);
  }

  c.push(
    calendar.slice(0, 7),
    calendar.slice(7, 14),
    calendar.slice(14, 21),
    calendar.slice(21, 28),
    calendar.slice(28, 35),
    calendar.slice(35, 42)
  );

  return c;
}

function setStyles(idx: number, idxTwo: number) {
  if (idxTwo === 0) {
    if (idx === 0) return "rounded-tl-lg";
    if (idx === 6) return "rounded-tr-lg";
  } else if (idxTwo === 5) {
    if (idx === 0) return "rounded-bl-lg";
    if (idx === 6) return "rounded-br-lg";
  }

  return "";
}

function setOtherStyles(idx: number, i: number) {
  if (i === 0) {
    if (idx === 0) return "rounded-tl-lg  border border-borderColor";
    if (idx === 6) return "rounded-tr-lg  border-t border-borderColor";
    else return " border-t border-borderColor";
  } else {
    if (idx === 0) return "border-l border-borderColor";
    else return "";
  }
}
export default function Calendar() {
  const now = new Date();
  const [date, setDate] = useState({
    month: now.getMonth(),
    day: now.getDate(),
    year: now.getFullYear(),
  });
  const calendar = setCalendar(new Date(date.year, date.month, date.day));
  console.log(Object.keys(months));
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lg:max-w-[348px] max-w-[448px] flex flex-col w-full gap-6">
        <div className="flex justify-between items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#9ca3af"
            aria-hidden="true"
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              if (date.month === 0) {
                setDate({ year: date.year - 1, month: 11, day: 1 });
                return;
              }
              setDate({ ...date, month: date.month - 1 });
            }}
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="text-sm font-semibold">{months[date.month]}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#9ca3af"
            aria-hidden="true"
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              if (date.month === 11) {
                setDate({ year: date.year + 1, month: 0, day: 1 });
                return;
              }
              setDate({ ...date, month: date.month + 1 });
            }}
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-center text-subtitle text-xs mb-3">
            <div className="w-full flex justify-center">M</div>
            <div className="w-full flex justify-center">T</div>
            <div className="w-full flex justify-center">W</div>
            <div className="w-full flex justify-center">T</div>
            <div className="w-full flex justify-center">F</div>
            <div className="w-full flex justify-center">S</div>
            <div className="w-full flex justify-center">S</div>

          </div>
          {calendar.map((item, idx) => {
            return (
              <div key={idx} className="">
                <div className="flex items-center border-borderColor w-full">
                  {item.map((v, i) => {
                    let s = setStyles(i, idx);
                    let o = setOtherStyles(i, idx);

                    return (
                      <div key={i} className="w-full">
                        <button
                          className={twMerge(
                            "border-r border-b border-borderColor w-full h-10 flex justify-center items-center text-sm hover:bg-greybg transition ",
                            s,
                            o,
                            date.month === v.getMonth()
                              ? ""
                              : "bg-grey text-lowgrey",
                            date.day === v.getDate() &&
                              v.getMonth() === date.month
                              ? "text-purple font-semibold"
                              : ""
                          )}
                        >
                          {v.getDate()}
                        </button>
                      </div>
                    );
                  })}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
