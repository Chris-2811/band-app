import React from 'react';

function UserPanel() {
  return (
    <div className="md:flex  md:justify-between pt-8 pb-14">
      <form
        className="max-w-[650px] md:w-[60%]"
        method="POST"
        name="contact"
        data-netlify="true"
      >
        <h3 className="text-primary mb-6 md:mb-4">Contact Us</h3>
        <div className="flex gap-4">
          <input
            type="text"
            className="block placeholder-primary text-body w-full mb-4 border-2 py-2 px-4 bg-transparent outline-none"
            placeholder="Name"
          />
          <input
            type="email"
            className="block placeholder-primary text-body w-full mb-4 border-2 py-2 px-4 bg-transparent outline-none"
            placeholder="Email"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className="block placeholder-primary text-body w-full mb-4 border-2 py-2 px-4 bg-transparent outline-none"
            placeholder="Betreff"
          />
          <input
            type="tel"
            className="block placeholder-primary text-body w-full mb-4 border-2 py-2 px-4 bg-transparent outline-none"
            placeholder="Telefon"
          />
        </div>
        <textarea
          rows={5}
          className="block placeholder-primary text-body w-full mb-4 border-2 py-2 px-4 bg-transparent outline-none"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 active:scale-[0.99]"
        >
          Send
        </button>
      </form>
      <div className="mt-12 md:mt-0">
        <h3 className="text-primary mb-4">Management & Booking</h3>
        <p className="text-body max-w-[200px]">
          Email:info@desbrassdscho.de | Tel.: 09123 987340{' '}
        </p>
      </div>
    </div>
  );
}

export default UserPanel;
