import './Logo.scss';

export const Logo = () => (
  <a href="#home" className="Logo">
    <img
      src="./images/logo.svg"
      alt="PlantIn logo"
    />
    <span className="Logo__logo-text">
      PlantIn
    </span>
  </a>
);
