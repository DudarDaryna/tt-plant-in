import React from 'react';
import { Logo } from '../Logo/Logo';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="top-actions header__top-actions">
          <div className="top-actions__logo">
            <Logo />
          </div>

          <nav className="header__nav nav" id="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#discover" className="nav__link">
                  Discover
                </a>
              </li>
              <li className="nav__item">
                <a href="#my-plants" className="nav__link">
                  My Plants
                </a>
              </li>
              <li className="nav__item">
                <a href="#diseases" className="nav__link">
                  Diseases
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link nav__link--active">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="#faq" className="nav__link">
                  FAQ
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact-us" className="nav__link">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="icon icon--cross">
            </div>
          </nav>
          <div className="top-actions__action-icons">
            <div>
              <a href="#search" className="icon icon--search"/>
            </div>
            <div>
              <a
                href="#menu"
                className="icon icon--menu"
              >
              </a>
            </div>
            <div>
              <a href="#user" className="icon icon--user"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}