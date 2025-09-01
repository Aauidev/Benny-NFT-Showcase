import { useEffect, useRef, useState } from "react";
import { useTheme } from "../ThemeContext.jsx";
import { IoClose } from "react-icons/io5";

import emailjs from "@emailjs/browser";
import LoadingIcon from "./LoadingIcon.jsx";

export default function EmailField({ className }) {
  const [email, setEmail] = useState("");
  const [dialogState, setDialogState] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const dialogRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        document.getElementById("root").classList.remove("dialogEffect");
        setSubmitLoading(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const showDialogRef = () => {
    dialogRef.current?.showModal();
    document.getElementById("root").classList.add("dialogEffect");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_ei1txej";
    const templateId = "template_wsz13dl";
    const publicKey = "Mv4984BQNV5UwWwj9";

    const templateParams = {
      email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully!", response);
        setEmail(" ");
        setDialogState(true);
        showDialogRef();
      })
      .catch((error) => {
        console.log("Error Sending Email", error);
        setDialogState(false);
        showDialogRef();
      });
  };

  return (
    <>
      <div className={className}>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className={"flex flex-row"}>
            <div
              className={`rounded-l-full px-3 border-2 backdrop-blur-[2px] content-center select-none transition-colors duration-500 ${isDark ? "border-white" : "border-black"}`}
            >
              <input
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Enter Your Email... "}
                type={"email"}
                className={`w-65 h-15 text-xl tracking-wide focus:outline-none bg-transparent transition-colors duration-500 ${isDark ? "text-white" : "text-black"}`}
              />
            </div>
            <button
              type="submit"
              className={`rounded-r-full text-2xl px-5 -translate-x-[2px] focus:outline-none duration-500 transition-colors content-center cursor-pointer select-none ${isDark ? "bg-white text-black hover:text-indigo-600" : "bg-black text-white hover:text-cyan-300"}`}
              onClick={() => setSubmitLoading(true)}
            >
              <p
                className={`duration-500 transition-all ${submitLoading ? "opacity-0" : null}`}
              >
                Submit
              </p>
              <LoadingIcon
                className={`absolute ml-8 top-1/2 scale-40 duration-500 transition-all ${submitLoading ? null : "opacity-0"}`}
                color={isDark ? "black" : "white"}
              />
            </button>
          </form>

          <dialog
            ref={dialogRef}
            className={`scale-40 mm:scale-50 sm:scale-70 md:scale-80 2xl:scale-100
              text-[#151515] bg-cover border-1 shadow-lg shadow-black/75 border-black left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 min-w-150 h-55 rounded-2xl select-none backdrop-blur-2xl backdrop-brightness-150 backdrop-saturate-150 ${dialogState ? "bg-[url(/src/assets/BackGrounds/success.svg)]" : "bg-[url(/src/assets/BackGrounds/failed.svg)]"}`}
          >
            <button
              onClick={() => {
                dialogRef.current?.close();
                document
                  .getElementById("root")
                  .classList.remove("dialogEffect");
                setSubmitLoading(false);
              }}
              className={
                "fixed right-0 m-4 transition-all duration-500 hover:text-white focus:outline-none cursor-pointer"
              }
            >
              <IoClose size={40} />
            </button>
            <p className={"text-center text-3xl font-bold font mt-18"}>
              {dialogState ? (
                <span>
                  Email Has Successfully Sent{" "}
                  <span className={"font-Roboto"}>^~^</span>
                </span>
              ) : (
                <span>
                  Failed to Send the Email{" "}
                  <span className={"font-Roboto"}>×~×</span>
                </span>
              )}
            </p>
            <p className={"text-center text-xl mt-5"}>
              {dialogState
                ? "Congratulation, You've Received a Trophy !"
                : "Please Check Your Email and Try Again."}
            </p>
          </dialog>
        </div>
      </div>
    </>
  );
}
