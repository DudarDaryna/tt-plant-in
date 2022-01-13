import './Footer.scss';

export const Footer = () => (
  <footer className="Footer">
      <div className="container">
        <div className="Footer__content">
          <nav>
            <ul className="Footer__list">
              <li className="Footer__item">
                <a className="Footer__link" href="#terms-of-service">
                  Terms of Service
                </a>
              </li>
              <li className="Footer__item">
                <a className="Footer__link" href="#privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li className="Footer__item">
                <a className="Footer__link" href="#subscription-policy">
                  Subscription Policy
                </a>
              </li>
            </ul>
          </nav>
          <p className="Footer__copyright">
            ©Copyright © 2020 PlantIn. All rights reserved
          </p>
        </div>
      </div>
    </footer>
);

