import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';


type Props = {};

type FormData = {
  from_firstname: string;
  from_lastname: string;
  reply_to: string;
  reply_two: string;
  message: string;
  to_name: string; // Add the "to_name" property here
};

const ContactFile = (props: Props) => {
  const [formData, setFormData] = useState({
    from_firstname: "",
    from_lastname: "",
    reply_to: "",
    reply_two: "",
    message: "",
    to_name: "" 
});
const { from_firstname, from_lastname, reply_to, reply_two, message } = formData;

  const form = useRef<HTMLFormElement | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const emailData = {
      from_firstname,
      from_lastname,
      reply_to,
      reply_two,
      message,
      to_name: "Olawale Raji"
    };
  
    const YOUR_SERVICE_ID = "service_rb8mrlq";
    const YOUR_TEMPLATE_ID = "template_licfxi1";
    const YOUR_PUBLIC_KEY = "-sfBJKfao4Mv-t_e8";
  
    // Sending the mail
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, emailData, YOUR_PUBLIC_KEY)
      .then(
        () => {
          console.log("Email Sent");
        },
        (error) => {
          console.log(JSON.stringify(error));
        }
      );
  
    console.log(emailData);
  
    setFormData({
      from_firstname: "",
      from_lastname: "",
      reply_to: "",
      reply_two: "",
      message: "",
      to_name: ""
    });
  };
  
  

  return (
    <div className='bg-gray-800 lg:mt-4 lg:mx-16 m-4 rounded-3xl lg-h-[650px] md-h-[580px] sm-h-[700px] max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8'>
      <div className='max-w-2xl p-8 lg:max-w-5xl mx-auto'>
    <div className="text-left">
      <h1 className="text-3xl font-bold text-gray-200 sm:text-4xl dark:text-white">
        Contact us
      </h1>
      <p className="mt-1 text-gray-300 dark:text-gray-400">
        I&apos;d love to talk about how I can help you.
      </p>
    </div>

    <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
    <div className="divide-y divide-opacity-10 divide-12 divide-gray-200 dark:divide-gray-800">
        <div className="flex gap-x-7 py-6">
          <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
          <div>
            <h3 className="font-semibold text-gray-200 dark:text-gray-200">Reach Out With Mail</h3>
            <p className="mt-1 text-sm text-gray-500">olawaleraji188@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-x-7 py-6">
          <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          <div>
            <h3 className="font-semibold text-gray-200 dark:text-gray-200">Phone.</h3>
            <p className="mt-1 text-sm text-gray-500">+2348081241340 & +2349014919603</p>
          </div>
        </div>

        <div className=" flex gap-x-7 py-6">
          <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
          </svg>
          <div>
            <h3 className="font-semibold text-gray-200 dark:text-gray-200">Location</h3>
            <p className="mt-1 text-sm text-gray-500">Lagos, Lagos State, Nigeria.</p>
          </div>
        </div>
  
        <div className=" flex gap-x-7 py-6">
          <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          <div>
            <h3 className="font-semibold text-gray-200 mb-4 dark:text-gray-200">Socials</h3>
            <div className="flex flex-col items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                        <circle cx="15" cy="15" r="4" />
                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                        <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                </div>
          </div>
        </div>
      </div>
      <div className="form-body flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
        <h2 className="mb-8 text-xl font-semibold text-gray-200 dark:text-gray-200">
          Fill in the form
        </h2>

        <form className="form" onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                <input type="text" 
                  name="from_firstname"
                  value={from_firstname}
                  onChange={onChange}
                 id="from_firstname"           
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="First Name"/>
              </div>

              <div>
                <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                <input type="text" 
                  name="from_lastname"
                  value={from_lastname}
                  onChange={onChange}
                 id="from_lastname" 
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Last Name"/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" 
                  name="reply_to"
                  value={reply_to}
                  onChange={onChange}
                  id="reply_to"
              autoComplete='email' className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Email"/>
            </div>

            <div>
              <label htmlFor="number" className="sr-only">Phone Number</label>
              <input type="number" 
                   name="reply_two"
                   value={reply_two}
                   onChange={onChange}
                   id="reply_two"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Phone Number"/>
            </div>

            <div>
              <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
              <textarea
                name="message"
                value={message}
                onChange={onChange}
                id="message"
               rows={4} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Details"></textarea>
            </div>
          </div>

          <div className="mt-4 grid">
            <button type="submit" id='button' className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Send inquiry</button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-300">
              I&apos;ll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
      </div>
  </div>
    </div>
  )
}

export default ContactFile

