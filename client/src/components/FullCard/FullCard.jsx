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
        <h4>Click on any hotel card to see its details</h4>
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
                Laboriosam assumenda, molestiae, a suscipit eos illo placeat
                soluta laudantium ea dignissimos saepe laborum ad iste. Veniam,
                culpa! Tempore error, architecto facere iste perferendis iure
                mollitia hic vel beatae earum. Laboriosam assumenda, molestiae,
                a suscipit eos illo placeat soluta laudantium ea dignissimos
                saepe laborum ad iste. Veniam, culpa! Tempore error, architecto
                facere iste perferendis iure mollitia hic vel beatae earum.
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
