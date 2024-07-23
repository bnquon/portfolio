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
    <div className="sm:w-1/2 w-full self-end mt-[10vh]">
      <div className="w-full flex flex-col gap-8 px-6 py-8 bg-[#e0e0e0] rounded-lg">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-8"
        >
          <div className="w-full flex xl:flex-row flex-col gap-8">
            <div className="xl:w-1/2 w-full flex flex-col">
              <p className="text-xl xl:text-2xl font-semibold">Full Name</p>
              <input
                placeholder="John Doe"
                name="fullName"
                type="text"
                required
                className="w-full xl:px-2 xl:py-2 px-2 py-1 outline-none text-lg xl:text-xl font-medium"
              />
            </div>
            <div className="xl:w-1/2 w-full flex flex-col">
              <p className="text-xl xl:text-2xl font-semibold">Email</p>
              <input
                placeholder="JohnDoe@example.com"
                name="email"
                type="email"
                required
                className="w-full xl:px-2 xl:py-2 px-2 py-1 outline-none text-lg xl:text-xl font-medium"
              />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <p className="xl:text-2xl text-xl font-semibold">Message</p>
            <textarea
              placeholder="Enter your message here"
              name="message"
              required
              rows={4}
              className="w-full sm:px-2 sm:py-2 px-2 py-1 outline-none resize-none text-lg xl:text-xl font-medium"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-white text-black sm:px-4 sm:py-2 px-3 py-2 w-fit text-xl xl:text-2xl font-medium hover:bg-black hover:text-white duration-150"
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
