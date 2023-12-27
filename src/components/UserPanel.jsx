import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserPanel() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormDate] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    navigate('/home');
    console.log('success');
  }

  function handleChange(e) {
    setFormDate({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="md:flex  md:justify-between pt-8 pb-14">
      <form
        onSubmit={handleSubmit}
        className="max-w-[650px] md:w-[60%]"
        method="POST"
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <h3 className="text-primary mb-6 md:mb-4">Contact Us</h3>
        <div className="flex gap-4">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="contact" value="contact" />
          <input
            type="text"
            className="block placeholder-body text-body w-full mb-4 border-2 border-body py-2 px-4 bg-transparent outline-none"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="block placeholder-body text-body w-full mb-4 border-2  border-body py-2 px-4 bg-transparent outline-none"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className="block placeholder-body text-body w-full mb-4 border-2  border-body py-2 px-4 bg-transparent outline-none"
            placeholder="Betreff"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <input
            type="tel"
            className="block placeholder-body text-body w-full mb-4 border-2  border-body py-2 px-4 bg-transparent outline-none"
            placeholder="Telefon"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <textarea
          rows={5}
          className="block placeholder-body  w-full mb-4 border-2  border-body py-2 px-4 bg-transparent outline-none"
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 active:scale-[0.99]"
        >
          Send
        </button>
        {submitted && (
          <div className="mt-4 text-green-500">
            Ihre Nachricht wurde erfolgreich übermittelt!
          </div>
        )}
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
