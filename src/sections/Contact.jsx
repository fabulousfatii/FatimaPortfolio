import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s9gtdyg', 'template_7tkhgcm', form.current, {
        publicKey: 'Sl-_7OBrsCmKGk_Ah',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="py-16 px-4 md:px-0 background-3 relative flex  justify-center items-center">
      <div className='absolute w-1/2 h-full bg-pink-950 rounded-full blur-xl z-0 '>
        </div>
      <div className='absolute w-1/3 h-1/2 bg-purple-950 rounded-full blur-xl z-0 '>
        </div>


      <div className="container mx-auto max-w-4xl">
        <div className="backdrop-blur-md  rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl max-2xl:text-4xl font-bold mb-6 text-center">Reach me out</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form  ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                name='user_name'
                className="w-full px-3 py-2 bg-black bg-opacity-20 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                name='user_email'
                className="w-full px-3 py-2 bg-black bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2 bg-black bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                name='message'
                className="w-full px-3 py-2 bg-black bg-opacity-20 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-6">
              <p className="text-lg">Feel free to reach out through any of these channels:</p>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/fatima-saleem-7b4667222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-blue-600 hover:text-blue-800"
                >
                  
                  <span>Connect on LinkedIn</span>
                </a>
                <a 
                  href="https://wa.me/yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-green-600 hover:text-green-800"
                >
                  +92 326 6501371
                </a>
                <a
                  href="mailto:fatimasaleem778899@gmail.com"
                  className="flex items-center space-x-3 text-red-600 hover:text-red-800"
                >
                  
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

