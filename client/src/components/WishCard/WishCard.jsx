import React from "react";

import styles from "./wishCard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import picture from "../../images/gradient4.jpg";

const Card = (param) => {
  return (
    <a className={styles.cardBody}>
      <section className={styles.imageContainer}>
        <img src={picture} alt="image" className={styles.image} />
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
    </a>
  );
};

export default Card;
