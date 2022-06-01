import React from "react";
import styles from "../Card/CardStyles.module.css";

const Card = (param) => {
  return (
    <>
      <section>
        <section
          className={`col-lg-4 col-md-6 col-sm-12 ${styles.imageSection}`}
        >
          <img />
        </section>
        <section>
          <div className={`d-flex`}>
            <p className={`col-lg-2`}>param.name</p>
            <p className={`col-lg-2`}>param.location</p>
          </div>
          <p className={`col-lg-8`}>param.evaluation</p>
          <button className={`btn btn-outline`}>View more</button>
        </section>
      </section>
    </>
  );
};

export default Card;
