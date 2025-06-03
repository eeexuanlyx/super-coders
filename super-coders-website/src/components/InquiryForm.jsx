import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function InquiryForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email failed:", error);
      });
  };

  return (
    <section id="inquiry" className="bg-sky-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-orbitron text-neon mb-6 text-center">
          Send an Enquiry
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            name="from_name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600 focus:outline-accent"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600"
          />
          <div className="flex justify-center">
            <div className="relative group">
              <button
                type="submit"
                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-900">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Enquire now!
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
