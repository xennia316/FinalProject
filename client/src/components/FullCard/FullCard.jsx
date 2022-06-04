import React, { useContext } from "react";

import styles from "./FullCard.module.css";

import mainPic from "../../images/gradient4.jpg";
import sidePic from "../../images/hotel-back.webp";
import sidePic2 from "../../images/hotel2.jpeg";
import { HotelContext } from "../../HotelContext";
import BookHotel from "./BookHotel";

const FullCard = (param) => {
  const { data, setShowModal } = useContext(HotelContext);

  const handleBook = () => {
    setShowModal(true);
    console.log("modal updated");
  };

  if (!data) {
    return (
      <section className={styles.body}>
        <p>Hotel Details</p>
      </section>
    );
  }
  return (
    <>
      <section className={styles.main}>
        <section className={styles.body}>
          <section className={styles.top}>
            <div>
              <h3 className={styles.imageh3}>{data.name}</h3>
              <img src={data.image} className={styles.image} />
            </div>
            <div className={styles.sideImgDiv}>
              <img src={sidePic} className={styles.sideImg} />
              <img src={sidePic2} className={styles.sideImg} />
            </div>
          </section>
          <section className={styles.Bottom}>
            <div className={styles.bottomHeadDiv}>
              <a className={styles.BottomHead}>Overview</a>
              <a className={styles.BottomHead}>Facilities</a>
              <a className={styles.BottomHead}>Details</a>
              <a className={styles.BottomHead}>Review</a>
            </div>
            <div>
              <p className={styles.text}>
                {" "}
                Line 39:19: The href attribute requires a valid value to be
                accessible. Provide a valid, navigable address as the href
                value. If you cannot provide a valid href, but still need the
                element to resemble a link, use a button and change it with
                appropriate styles. Learn more:
                https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                jsx-a11y/anchor-is-valid Line 44:19: The href attribute requires
                a valid value to be accessible. Provide a valid, navigable
                address as the href value. If you cannot provide a valid href,
                but still need
              </p>
            </div>
            <div className={`d-flex ${styles.buttons}`}>
              <button
                className={`btn btn-info text-light p-2 ${styles.button}`}
              >
                Add to Wish List
              </button>
              <button
                onClick={handleBook}
                className={`btn btn-info text-light p-2 ${styles.button}`}
              >
                Book Now
              </button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default FullCard;
