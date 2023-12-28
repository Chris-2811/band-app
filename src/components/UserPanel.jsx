import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function UserPanel() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    'form-name': 'contact',
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Encode form data in application/x-www-form-urlencoded format
    const encodedData = Object.keys(formData)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])
      )
      .join('&');

    // Send form data using a POST request
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodedData,
    })
      .then(() => {
        if (Object.values(formData).some((item) => item === '')) {
          setErrorMessage(true);
          setTimeout(() => {
            setErrorMessage(false);
          }, 6000);
          return;
        } else {
          setErrorMessage(false);
          setSubmitted(true);
          navigate('/home');
          setTimeout(() => {
            setSubmitted(false);
          }, 4000);
          setFormData({
            'form-name': 'contact',
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: '',
          });
        }
      })
      .catch((error) => alert(error));

    // Prevent form from being submitted the default way
    return false;
  }

  function handleChange(e) {
    setFormData({
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
        <div className="flex flex-col xs:flex-row xs:gap-4">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            className="block placeholder-body text-body w-full mb-4 border  dark:text-white caret-primary dark:placeholder-white dark:border-white border-body py-2 px-4 bg-transparent outline-none"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="block placeholder-body text-body w-full mb-4 border  dark:text-white caret-primary dark:placeholder-white dark:border-white  border-body py-2 px-4 bg-transparent outline-none"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col xs:flex-row xs:gap-4">
          <input
            type="text"
            className="block placeholder-body text-body w-full mb-4  dark:text-white caret-primary dark:placeholder-white dark:border-white border  border-body py-2 px-4 bg-transparent outline-none"
            placeholder="Betreff"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <input
            type="tel"
            className="block placeholder-body text-body dark:text-white caret-primary dark:placeholder-white dark:border-white w-full mb-4 border  border-body py-2 px-4 bg-transparent outline-none"
            placeholder="Telefon"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <textarea
          rows={5}
          className="block placeholder-body text-body caret-primary  dark:text-white dark:placeholder-white dark:border-white w-full mb-4 border  border-body py-2 px-4 bg-transparent outline-none"
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
        {errorMessage && (
          <div className="mt-4 text-red-500">Bitte alle Felder ausfüllen!</div>
        )}
      </form>
      <div className="mt-12 md:mt-0">
        <h3 className="text-primary mb-4">Management & Booking</h3>
        <p className=" text-body dark:text-white max-w-[200px]">
          Email:info@desbrassdscho.de | Tel.: 09123 987340
        </p>
        <ul className="flex mt-7 items-center gap-2">
          <li className="border border-black dark:border-white p-2 rounded-full cursor-pointer hover:bg-primary hover:border-primary dark:hover:border-primary">
            <Link>
              <FaFacebookF size={20} className="text-black dark:text-white" />
            </Link>
          </li>
          <li className="border border-black dark:border-white cursor-pointer  p-2 rounded-full hover:bg-primary hover:border-primary dark:hover:border-primary">
            <Link
              to="https://www.youtube.com/channel/UCJ_381K6ri9uSfinSnLpCVQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaYoutube size={20} className="text-black dark:text-white" />
            </Link>
          </li>
        </ul>{' '}
      </div>
    </div>
  );
}

export default UserPanel;
