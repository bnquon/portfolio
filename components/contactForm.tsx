"use client";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {

    const showToastMessage = () => {
        toast.success("Success Notification!");
      };
  return (
    <div className="w-1/2 self-end mt-[10vh]">
      <div className="w-full flex flex-col gap-8 px-6 py-8 bg-[#e0e0e0] rounded-lg">
        <div className="w-full flex flex-col">
          <p className="text-2xl font-semibold">Full Name</p>
          <input
            type="text"
            required
            className="w-full px-2 py-2 outline-none text-xl font-medium"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-2xl font-semibold">Email</p>
          <input
            type="email"
            required
            className="w-full px-2 py-2 outline-none text-xl font-medium"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-2xl font-semibold">Message</p>
          <textarea
            required
            rows={5}
            className="w-full px-2 py-2 outline-none resize-none text-xl font-medium"
          />
        </div>
        <button
          onClick={showToastMessage}
          className="rounded-lg bg-white text-black px-4 py-2 w-fit text-2xl font-medium hover:bg-black hover:text-white duration-150"
        >
          Submit
        </button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  );
};
