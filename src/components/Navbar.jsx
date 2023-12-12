import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaYoutube, FaFacebookF } from 'react-icons/fa';
import DarkToggle from './DarkToggle';

function Navbar() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  function openMobileMenu(e) {
    if (e.currentTarget.getAttribute('aria-expanded') === 'false') {
      e.currentTarget.setAttribute('aria-expanded', 'true');
      document
        .querySelector('.mobile-menu')
        .setAttribute('data-visible', 'true');
    } else {
      e.currentTarget.setAttribute('aria-expanded', 'false');
      document
        .querySelector('.mobile-menu')
        .setAttribute('data-visible', 'false');
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
          <NavLink className="nav-link" to="/home" onClick={() => closeMenu()}>
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
            to="/listen"
            onClick={() => closeMenu()}
          >
            Listen
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
            to="/gallery"
            onClick={() => closeMenu()}
          >
            Gallery
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <div className="container pt-10 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link to="/home">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
        {/* Nav */}
        <nav aria-label="Primary-navigation" className="hidden md:block">
          <ul className="flex items-center gap-10 uppercase" role="list">
            <NavigationLinks />
          </ul>
        </nav>
        <DarkToggle />
      </div>

      {/* Socials */}
      <ul className="md:flex items-center gap-4 hidden">
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
      </ul>
      {/* Mobile Menu */}
      <div
        className="mobile-nav-toggle  md:hidden relative w-14 h-14   border rounded-lg"
        aria-expanded="false"
        onClick={(e) => openMobileMenu(e)}
      >
        <div className="one "></div>
        <div className="two "></div>
        <div className="three absolute "></div>
      </div>

      <div className="mobile-menu " data-visible="false">
        <nav aria-label="Primary-navigation">
          <ul role="list" className="flex flex-col uppercase gap-6">
            <NavigationLinks />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
