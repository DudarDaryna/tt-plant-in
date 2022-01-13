import React from 'react';
import { Logo } from '../Logo/Logo';

import './Promo.scss';

export const Promo = () => (
  <section className="Promo">
    <div className="Promo__content">
      <div className="Promo__logo">
        <Logo />
      </div>
      <h3 className="Promo__title">
        Get unlimited access to exclusive articles
      </h3>
      <p className="Promo__text">
        Get rid of limits and read everything you wish
      </p>
      <button className="Promo__button">
        Try for free
      </button>
      <img
        className="Promo__img"
        src="./images/promo-img.png"
        alt="Promo"
      />
    </div>
  </section>
);
