"use client";
import React, { FormEvent, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_KEY!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Email Sent");
      formRef.current?.reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-1/2 self-end mt-[10vh] h-[35vh]">
      <div className="w-full flex flex-col gap-8 px-6 py-8 bg-[#e0e0e0] rounded-lg">
        <form ref={formRef} onSubmit={onSubmit} className="w-full flex flex-col gap-8">
          <div className="w-full flex gap-8">
            <div className="w-1/2 flex flex-col">
              <p className="text-2xl font-semibold">Full Name</p>
              <input
                name="fullName"
                type="text"
                required
                className="w-full px-2 py-2 outline-none text-xl font-medium"
              />
            </div>
            <div className="w-1/2 flex flex-col">
              <p className="text-2xl font-semibold">Email</p>
              <input
                name="email"
                type="email"
                required
                className="w-full px-2 py-2 outline-none text-xl font-medium"
              />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <p className="text-2xl font-semibold">Message</p>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-2 py-2 outline-none resize-none text-xl font-medium"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-white text-black px-4 py-2 w-fit text-2xl font-medium hover:bg-black hover:text-white duration-150"
          >
            Submit
          </button>
        </form>
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

export default ContactForm;
