import React, { useState, useEffect } from "react";

import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Card from "../components/Card/Card";
import WishCard from "../components/WishCard/WishCard";
import SideNav from "../components/sidenav/SideNav";
import FullCard from "../components/FullCard/FullCard";

import Logo from "../images/side-logo.png";
import BookHotel from "../components/FullCard/BookHotel";
import axios from "axios";

import mountainhotel from "../images/mountain-hotel.jpg";

const cards = [
  {
    name: "Hotel Semme",
    location: "Limbe",
    imageurl:
      "http://searchcameroon.com/wp-content/uploads/2021/06/hilton-hotel-yaounde-SC1-580x408.jpg",
  },
  // { name: "Bingo", location: "Buea, imageurl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.afriquephotos.net%2Fen%2Fmedia%2F043fe559-1f21-4345-a8e6-cc79a8bfdf87-mount-febe-hotel-yaounde-cameroon&psig=AOvVaw2qFTIAK-IF39xjOhWaS1Qf&ust=1654421030307000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJjhqOG8k_gCFQAAAAAdAAAAABBI"},
  {
    name: "Hotel Semme",
    location: "Douala",
    imageurl:
      "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/07/hilton-hotel-yaounde.jpg",
  },
  {
    name: "El palacio",
    location: "Kribi",
    imageurl:
      "https://blog.staah.com/wp-content/uploads/2018/03/hotelsign-min.jpg",
  },
  {
    name: "Chariot",
    location: "Edea",
    imageurl:
      "https://image.shutterstock.com/z/stock-photo-luxury-hotel-with-infinity-pool-and-palms-all-around-it-648165631.jpg",
  },
  {
    name: "WDC",
    location: "Buea",
    imageurl:
      "https://static.wixstatic.com/media/8dc5c1_d4939e195c5549ae9fc927bbb40dc368~mv2.jpg/v1/fill/w_1080,h_720,al_c,q_85,enc_auto/8dc5c1_d4939e195c5549ae9fc927bbb40dc368~mv2.jpg",
  },
  {
    name: "Hilton",
    location: "Yaounde",
    imageurl:
      "https://res.cloudinary.com/estate-intel/images/f_auto,q_auto/v1620432644/wp_assets/Radisson_Blu_Hotel__Apartments_Douala_Cameroon-700x868/Radisson_Blu_Hotel__Apartments_Douala_Cameroon-700x868.jpg?_i=AA",
  },
  {
    name: "Mountain hotel",
    location: "Bafoussam",
    imageurl: "../images/mountain-hotel.jpg",
  },
];

const cardList = cards.map((card, index) => {
  return (
    <Card
      name={card.name}
      location={card.location}
      imageurl={card.imageurl}
      key={index}
    />
  );
});

const wishcards = [
  {
    name: "Hotel Semme",
    location: "Limbe",
    imageurl:
      "http://searchcameroon.com/wp-content/uploads/2021/06/hilton-hotel-yaounde-SC1-580x408.jpg",
  },
  // { name: "Bingo", location: "Buea, imageurl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.afriquephotos.net%2Fen%2Fmedia%2F043fe559-1f21-4345-a8e6-cc79a8bfdf87-mount-febe-hotel-yaounde-cameroon&psig=AOvVaw2qFTIAK-IF39xjOhWaS1Qf&ust=1654421030307000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJjhqOG8k_gCFQAAAAAdAAAAABBI"},
  {
    name: "Hotel Semme",
    location: "Douala",
    imageurl:
      "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/07/hilton-hotel-yaounde.jpg",
  },
  {
    name: "El palacio",
    location: "Kribi",
    imageurl:
      "https://blog.staah.com/wp-content/uploads/2018/03/hotelsign-min.jpg",
  },
  {
    name: "Chariot",
    location: "Edea",
    imageurl:
      "https://image.shutterstock.com/z/stock-photo-luxury-hotel-with-infinity-pool-and-palms-all-around-it-648165631.jpg",
  },
  {
    name: "WDC",
    location: "Buea",
    imageurl:
      "https://static.wixstatic.com/media/8dc5c1_d4939e195c5549ae9fc927bbb40dc368~mv2.jpg/v1/fill/w_1080,h_720,al_c,q_85,enc_auto/8dc5c1_d4939e195c5549ae9fc927bbb40dc368~mv2.jpg",
  },
  {
    name: "Hilton",
    location: "Yaounde",
    imageurl:
      "https://res.cloudinary.com/estate-intel/images/f_auto,q_auto/v1620432644/wp_assets/Radisson_Blu_Hotel__Apartments_Douala_Cameroon-700x868/Radisson_Blu_Hotel__Apartments_Douala_Cameroon-700x868.jpg?_i=AA",
  },
  {
    name: "Mountain hotel",
    location: "Bafoussam",
    imageurl: mountainhotel,
  },
];

const listWishCards = wishcards.map((cards, index) => {
  return (
    <WishCard
      //   className={`col-lg-3`}
      name={cards.name}
      location={cards.location}
      price={cards.price}
      imageurl={cards.imageurl}
      key={index}
    />
  );
});

const Home = () => {
  const date = new Date();
  const n = date.toDateString();

  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const [town, setTown] = useState("");
  const [hotels, setHotels] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchData = async () => {
      let results = await axios
        .post("/api/hotel/find-hoteltown", { town })
        .then((data) => data);
      setHotels(results.data.data);
    };
    await fetchData();
  };

  useEffect(() => {
    console.log(hotels);
  }, [hotels]);

  const handleChange = (e) => {
    setTown(e.target.value);
  };

  return (
    <section className={styles.wrapper}>
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

              <h5 className={styles.h5}>Tell us where you're going next</h5>

              <div className={`input-group mb-3 mt-3`}>
                <input
                  className={`${styles.input} form-control`}
                  type="search"
                  placeholder="Enter Location to search from"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={town}
                  onChange={handleChange}
                />
                <span
                  onClick={handleSubmit}
                  className={`input-group-text p-lg-3`}
                  id={`basic-addon2`}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </section>
            <section className={styles.cardSection}>
              <section className={styles.newCard}>
                {hotels !== null
                  ? hotels.map((card, index) => {
                      return (
                        <Card
                          name={card.name}
                          imageurl={card.imageurl}
                          location={card.location}
                          key={index}
                        />
                      );
                    })
                  : ""}
              </section>
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
              <section className={`${styles.wishCard} `}>
                {listWishCards}
              </section>
            </section>
          </section>
          <section className={styles.rightContainer}>
            <div className={styles.right}>
              <section className={`p-5`}>
                <h3>Date: {n}</h3>
                <h3>Time: {time}</h3>
              </section>
              <FullCard />
            </div>
          </section>
        </section>
      </section>
      <BookHotel />
    </section>
  );
};

export default Home;
