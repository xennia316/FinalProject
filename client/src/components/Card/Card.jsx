import React, { useContext } from "react";

import styles from "./CardStyles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import picture from "../../images/hotel1.jpg";
import picture2 from "../../images/hotel2.jpeg";
import { HotelContext } from "../../HotelContext";
import { Link } from "react-router-dom";

const Card = (param) => {
  const { setData } = useContext(HotelContext);

  const handleClick = () => {
    const data = {
      image: param.imageurl,
      name: param.name,
      location: param.location,
      price: param.price,
    };

    setData(data);
  };

  return (
    <a onClick={handleClick} className={styles.cardBody}>
      <section className={styles.imageContainer}>
        <img src={param.imageurl} alt="image" className={styles.image} />
      </section>
      <section className={styles.details}>
        <p className={styles.p}>{param.name}</p>
        <p className={styles.pmid}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />{" "}
          {param.location}
        </p>
        <p className={styles.p}>
          ${param.price}
          <span className={styles.prd}>/ night</span>
        </p>
      </section>
      <section className={styles.side}>
        <Link to="/fullcard">
          <button className={` btn btn-warning text-light ${styles.button}`}>
            View
          </button>
        </Link>
      </section>
    </a>
  );
};

export default Card;
