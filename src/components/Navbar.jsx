import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import DarkToggle from './DarkToggle';

function Navbar() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  function openMobileMenu(e) {
    if (e.currentTarget.getAttribute('aria-expanded') === 'false') {
      e.currentTarget.setAttribute('aria-expanded', 'true');
      setMobileNavToggle(true);
      document
        .querySelector('.mobile-menu')
        .setAttribute('data-visible', 'true');

      setMobileNavToggle(true);
    } else {
      e.currentTarget.setAttribute('aria-expanded', 'false');
      document
        .querySelector('.mobile-menu')
        .setAttribute('data-visible', 'false');
      setMobileNavToggle(false);
    }
  }

  function closeMenu() {
    const mobileMenu = document.querySelector('mobile-menu');
    mobileMenu.setAttribute('aria-expanded', 'false');
  }

  function NavigationLinks() {
    return (
      <>
        <li className="uppercase">
          <NavLink className="nav-link" to="/" onClick={() => closeMenu()}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/band" onClick={() => closeMenu()}>
            Die Band
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="/medien"
            onClick={() => closeMenu()}
          >
            Medien
          </NavLink>
        </li>{' '}
        <li>
          <NavLink className="nav-link" to="/tour" onClick={() => closeMenu()}>
            Tour Daten
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="/booking"
            onClick={() => closeMenu()}
          >
            Booking
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <div className="container relative pt-10 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link to="/home">
          <img src={logo} alt="logo" className="w-32 logo" />
        </Link>
        {/* Nav */}
        <nav aria-label="Primary-navigation" className="hidden md:block">
          <ul
            className="flex items-center md:gap-6 lg:gap-10 uppercase"
            role="list"
          >
            <NavigationLinks />
          </ul>
        </nav>
      </div>

      <div className=" hidden md:flex">
        <DarkToggle />
      </div>
      {/* Mobile Menu */}
      <div
        className="mobile-nav-toggle z-10  md:hidden relative w-14 h-14  border border-body dark:border-white rounded-lg"
        aria-expanded="false"
        onClick={(e) => openMobileMenu(e)}
      >
        <div className="one bg-body dark:bg-white"></div>
        <div className="two bg-body dark:bg-white "></div>
        <div className="three bg-body dark:bg-white absolute "></div>
      </div>

      <div
        className="mobile-menu bg-gray-50 text-dark-bg dark:bg-mobile-menu"
        data-visible="false"
      >
        <nav aria-label="Primary-navigation z-100">
          <ul role="list" className="flex flex-col uppercase gap-6">
            <NavigationLinks />
          </ul>
        </nav>
        <div className="mt-8">
          <DarkToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
