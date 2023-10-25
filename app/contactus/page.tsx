"use client";
import React from 'react';
import { useState } from "react";
import { z } from "zod";
import { Toaster, toast } from "sonner";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const formSchema = z.object({
    name: z.string().min(1, "Name field can not empty"),
    number: z
      .string()
      .optional()
      .refine(
        (value) => {
          return !value || value!.length >= 10;
        },
        {
          message: "The number is not 10 characters long",
        }
      ),
    email: z.string().email("Email is not of correct format!"),
    message: z.string().min(10, "Your Message is too short!"),
  });

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validation = formSchema.safeParse(formData);
    if (validation.success) {
      toast.success("Your Message is delivered", {
        description: "We will get back to you soon!",
        duration: 2000
      });
      // Submit form data
      setFormData({
        name: "",
        number: "",
        email: "",
        message: "",
      })
    } else {
      let index = 0;
      const displayNextError = () => {
        if (index < validation.error.errors.length) {
          const error = validation.error.errors[index];
          toast.error(error.message);
          index++;
          setTimeout(displayNextError, 400);
        }
      };
      displayNextError();
    }
  };

  return (
    <>
      <Toaster position="bottom-right" richColors closeButton duration={1000} />
      <section
        id="section-a"
        className="p-2 md:p-10"
        style={{ backgroundImage: `url(/img/section-f.webp)` }}
      >
        <div className="relative mx-auto md:w-1/2 w-full text-center mt-32 z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.5)] dark:shadow-black/20 md:px-12 ">
          <h2 className="mb-12 text-xl md:text-3xl underline-offset-8 underline font-bold">Contact us</h2>
          <form onSubmit={submitForm}>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border border-t-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput90"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => {
                  setFormData((data) => ({ ...data, name: e.target.value }));
                }}
              />
              <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:text-primary">
                Name&#42;
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border border-t-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput90"
                placeholder="Phone Number"
                value={formData.number}
                onChange={(e) => {
                  setFormData((data) => ({ ...data, number: e.target.value }));
                }}
              />
              <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:text-primary">
                Number
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border border-t-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput91"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData((data) => ({ ...data, email: e.target.value }));
                }}
              />
              <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:text-primary">
                Email&#42;
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded border border-t-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => {
                  setFormData((data) => ({ ...data, message: e.target.value }));
                }}
              ></textarea>
              <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:text-primary">
                Message&#42;
              </label>
            </div>
            <button
              type="submit"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={(e) => {
                e.preventDefault(); 
                submitForm(e as unknown as React.FormEvent<HTMLFormElement>); 
              }}
              className="inline-block w-full rounded border bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
