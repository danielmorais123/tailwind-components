"use client";

import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const items = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        ></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
        ></path>
      </svg>
    ),
    title: "Analytics",
    desc: "Get a better understanding of your traffic",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
        ></path>
      </svg>
    ),
    title: "Integrations",
    desc: "Connect with third-party tools and find out expectations",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
        ></path>
      </svg>
    ),
    title: "Engagement",
    desc: "Speak directly to your customers with our engagement tool",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        ></path>
      </svg>
    ),
    title: "Automations",
    desc: "Build strategic funnels that will convert",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
        ></path>
      </svg>
    ),
    title: "Security",
    desc: "Your customers' data will be safe and secure",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        ></path>
      </svg>
    ),
    title: "Reports",
    desc: "Edit, manage and create newly informed decisions",
  },
];
export default function FlyoutMenu() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center items-start">
      <div className="relative">
        <button
          onClick={() => setShow(!show)}
          className="flex items-center gap-1 font-semibold text-sm leading-6"
        >
          Solutions{" "}
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <Transition
          as={Fragment}
          show={show}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <div className="absolute left-1/2 !z-[100] mt-5 flex flex-col w-[450px] -translate-x-1/2 bg-white border border-borderColor shadow-lg rounded-2xl">
            <div className="flex flex-col gap-3  w-full p-4">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-5 group hover:bg-[#f9fafb] p-4 rounded-md cursor-pointer transition"
                >
                  <div className="p-2 bg-[#f9fafb] group-hover:bg-white transition group-hover:text-purple rounded-md">
                    {item.svg}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-title font-semibold text-sm">
                      {item.title}
                    </p>
                    <p className="text-normal text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#f9fafb] rounded-b-2xl px-8 py-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <p className="text-title font-semibold text-sm">Enterprise</p>
                  <span className="cursor-pointer text-[#4e46e5] border border-[#e5e7eb] bg-[#4e46e5]/10 text-xs font-semibold px-3 py-1 rounded-full">
                  New
                </span>
                </div>

                <p className="text-normal text-sm">
                  Empower your entire team with even more advanced tools.
                </p>
              </div>
            </div>
          </div>
        </Transition>{" "}
      </div>
    </div>
  );
}
