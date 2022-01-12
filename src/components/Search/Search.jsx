import React, { useEffect, useState } from 'react';
import { getTemperature } from "../../api/getTemperature";
import { getGeolocation } from "../../api/getGeolocation";

import './Search.scss';

export const Search = ({
  searchQuery,
  changeSearchQuery,
}) => {
  const [temperature, setTemperature] = useState();

  const loadTemperature = async () => {
    const t = await getTemperature();

    setTemperature(Math.round(t));
  };

  useEffect(() => {
    loadTemperature();
    getGeolocation();
  }, []);

  return (
    <div className="container">
      <section className="Search">
        <h3 className="Search__title">
          Stay always tuned with planting trends
        </h3>
        <p className="Search__text">
          <strong>Tips &amp; Tricks</strong> selected specially for <strong>you!</strong>
        </p>

        <div className="Search__current-temp">
          {`Current temperature is: ${temperature}°C`}
        </div>

        <form className="Search__search-form" onSubmit={(event) => event.preventDefault()}>
          <input
            id="search"
            className="Search__search-input"
            type="text"
            value={searchQuery}
            onChange={(event) => changeSearchQuery(event.target.value)}
            placeholder="Search"
          />
        </form>
      </section>
    </div>
  );
}
