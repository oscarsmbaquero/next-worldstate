import React from "react";
import styles from "./CountriesTable.module.css";
import Link from "next/link";


const CountriesTable = ({ countries }) => {
  console.log(countries);
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
        </button>
        <button className={styles.heading_population}>
          <div>Population</div>
        </button>
      </div>

        {countries.map((country) => (
          <Link
            key={country.name.official}
            href={`/country/${country.name.common}`}
          >
            <div className={styles.row}>
              <div className={styles.name}>{country.name.official}</div>
              <div className={styles.population}>{country.population}</div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CountriesTable;
