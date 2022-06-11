import React, { useContext } from "react";

import styles from "./wishCard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { HotelContext } from "../../HotelContext";

import picture from "../../images/mountain-hotel.jpg";

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
    <section className={`d-flex  ${styles.subb}`} onClick={handleClick}>
      <img src={param.imageurl} className={styles.image} alt="" />
      <section className={`d-flex ${styles.sub}`}>
        <section className={styles.sub1}>
          <section>
            <p>{param.name}</p>
            <p>{param.location}</p>
          </section>
          <section>
            <p>{param.price} /night</p>
          </section>
        </section>
        <section className={`d-flex  flex-column ${styles.buttonSection}`}>
          <section>
            <FontAwesomeIcon icon={faTrashCan} />
          </section>
          <section>
            <button className={`btn text-light btn-info`}>Book</button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Card;
