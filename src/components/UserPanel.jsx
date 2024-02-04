import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { data } from '../data';

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
    <div className="lg:flex lg:justify-between  lg:gap-[120px] xl:gap-[150px] pt-8 pb-14">
      <form
        onSubmit={handleSubmit}
        className=" lg:w-[67.5%]"
        method="POST"
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <h3 className="text-primary text-lg mb-6 md:mb-4">Kontaktiere Uns</h3>
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
          rows={8}
          className="block placeholder-body text-body caret-primary  dark:text-white dark:placeholder-white dark:border-white w-full mb-4 border  border-body py-2 px-4 bg-transparent outline-none"
          placeholder="Geben Sie hier Ihren Text ein..."
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
      <div className="lg:w-[32.5%]">
        <div className="mt-12 lg:mt-0">
          <h3 className="text-primary mb-3 text-lg">Management & Booking</h3>
          <p className=" text-body dark:text-white max-w-[210px]">
            Email: {data.email} | Tel.: {data.tel} <br /> | Mobil: {data.mobile}
          </p>
          <ul className="flex mt-5 items-center gap-2">
            <li className="border border-black dark:border-white p-2 rounded-full cursor-pointer hover:bg-primary hover:border-primary dark:hover:border-primary">
              <Link
                to="https://m.facebook.com/profile.php?id=100063614556181"
                target="_blank"
                rel="noopener noreferrer"
              >
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
        <div>
          <h3 className="text-primary text-lg mt-5 mb-3">Impressum</h3>
          <h4 className="font-bold  text-body dark:text-white mb-2">
            Inhaltlich verantwortlich
          </h4>
          <p className=" text-body dark:text-white max-w-[220px] lg:max-w-full">
            Vertreten durch Johannes Mehring, Markus Metz, Anna Mörtel und
            Christian Mörtel, Hanna Roth, Manuel Vildosola und Martin Wiesinger.
          </p>
          <p className=" text-body dark:text-white max-w-[210px] mt-2">
            Neuhäuserstraße 14 91207 Lauf Schönberg
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
