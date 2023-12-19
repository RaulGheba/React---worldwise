/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  // from the cities, we can derive the countries!
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message={"Add a city by clicking on a city on the map"} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
