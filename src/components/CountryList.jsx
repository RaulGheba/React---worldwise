/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add a country by clicking on a country on the map"} />
    );

  const countries = cities.reduce((arr, city) => {
    // in each iteration of the reduce method, we get access to a accumulator and the current value (current city here). we start with an empty array as the starter value (accumulator). arr is the accumulator
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []); // if this does NOT include the country in the current city, then return a new array with the current elements and a new one. if the countries array already includes the current country, we just return the current countries array

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
