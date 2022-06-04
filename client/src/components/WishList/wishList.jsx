import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import styles from "./wishlist.module.css";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import WishCard from "../WishCard/WishCard";
import picture from "../../images/hotel2.jpeg";
import { HotelContext } from "../../HotelContext";
import FullCard from "../FullCard/FullCard";
import SideNav from "../sidenav/SideNav";

const WishList = (param) => {
  const { setData } = useContext(HotelContext);

  const handleClick = () => {
    const data = {
      image: picture,
      name: param.name,
      location: param.location,
      price: param.price,
    };

    setData(data);
  };

  return (
    <section className={styles.main}>
      <section className={styles.sideNav}>
        <SideNav />
      </section>
      <section className={`container p-5 ${styles.body}`}>
        <h3 className={`text-info`}>Your Wish List</h3>
        <section className={styles.wishList}>
          <WishCard onClick={handleClick} />
          <section className={styles.side}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <button className={` btn btn-warning text-light ${styles.button}`}>
              Book
            </button>
          </section>
        </section>
        <section className={styles.wishList}>
          <WishCard className={styles.real} />
          <section className={styles.side}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <button className={` btn btn-warning text-light ${styles.button}`}>
              Book
            </button>
          </section>
        </section>
        <section className={styles.wishList}>
          <WishCard />
          <section className={styles.side}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <button className={` btn btn-warning text-light ${styles.button}`}>
              Book
            </button>
          </section>
        </section>
        <section className={styles.wishList}>
          <WishCard />
          <section className={styles.side}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <button className={` btn btn-warning text-light ${styles.button}`}>
              Book
            </button>
          </section>
        </section>
        <section className={styles.wishList}>
          <WishCard />
          <section className={styles.side}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <button className={` btn btn-warning text-light ${styles.button}`}>
              Book
            </button>
          </section>
        </section>
        <section className={styles.wishList}>
          <WishCard />
          <section className={styles.side}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <button className={` btn btn-warning text-light ${styles.button}`}>
              Book
            </button>
          </section>
        </section>
        <section className={styles.wishList}>
          <WishCard />
          <section className={styles.side}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <button className={` btn btn-warning text-light ${styles.button}`}>
              Book
            </button>
          </section>
        </section>
        <section className={styles.wishList}>
          <WishCard />
          <section className={styles.side}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <button className={` btn btn-warning text-light ${styles.button}`}>
              Book
            </button>
          </section>
        </section>
      </section>
      <section className={styles.rightContainer}>
        <h3>Hotel Details</h3>
        <section className={styles.right}>
          <FullCard />
        </section>
      </section>
    </section>
  );
};

export default WishList;
