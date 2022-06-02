import React from "react";

import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Card from "../components/Card/Card";
import WishCard from "../components/WishCard/WishCard";
import SideNav from "../components/sidenav/SideNav";

import Logo from "../images/side-logo.png";

const cards = [
  { name: "Hotel Semme", location: "Limbe" },
  { name: "Eta palace", location: "Buea" },
  { name: "Hotel Semme", location: "Limbe" },
  { name: "Eta palace", location: "Buea" },
  { name: "Hotel Semme", location: "Limbe" },
  { name: "Eta palace", location: "Buea" },
  { name: "Hotel Semme", location: "Limbe" },
  { name: "Eta palace", location: "Buea" },
];

const cardList = cards.map((card, index) => {
  return <Card name={card.name} location={card.location} key={index} />;
});

const wishcards = [
  { name: "Mountain hotel", location: "Buea", price: "2.5k" },
  { name: "Mountain hotel", location: "Limbe", price: "3.5k" },
  { name: "Mountain hotel", location: "Douala", price: "4.5k" },
  { name: "Mountain hotel", location: "Dubai", price: "6.5k" },
  { name: "Parlamantarian Flat", location: "Here", price: "7.5k" },
  { name: "Mountain hotel", location: "There", price: "8.5k" },
];

const listWishCards = wishcards.map((cards, index) => {
  return (
    <WishCard
      //   className={`col-lg-3`}
      name={cards.name}
      location={cards.location}
      price={cards.price}
      key={index}
    />
  );
});

const Home = () => {
  return (
    <section className={styles.body}>
      <section className={styles.side}>
        {" "}
        <SideNav />
      </section>
      <section className={styles.main}>
        <section className={styles.left}>
          <section className={styles.top}>
            <div className={`d-flex ${styles.topHeadingDiv}`}>
              <h3 className={styles.topHeading}>Find your Comfort</h3>
              <img src={Logo} className={styles.logo} />
            </div>

            <h5>Tell us where you're up to </h5>

            <div className={`input-group mb-3`}>
              <input
                className={`${styles.input} form-control`}
                type="text"
                placeholder="Enter Location to search from"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className={`input-group-text p-3`} id={`basic-addon2`}>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </section>
          <section className={styles.cardSection}>
            <div className={`d-flex ${styles.linkDiv}`}>
              <h1 className={styles.cardSectionHeading}> Hotels available</h1>
              <a className={styles.link}> View All </a>
            </div>
            <section className={styles.cardList}>{cardList}</section>
          </section>
          <section className={styles.bottom}>
            <section className={styles.bottomHeadMain}>
              <section className={styles.bottomHead}>
                <span className={styles.selected}>Most popular</span>
                <span className={styles.selected}>Special Offers</span>
                <span className={styles.selected}>Near me</span>
              </section>
              <a className={styles.link}>View All</a>
            </section>
            <section className={`${styles.wishCard} ${styles.cardList}`}>
              {listWishCards}
            </section>
          </section>
        </section>
        <section className={styles.right}></section>
      </section>
    </section>
  );
};

export default Home;
