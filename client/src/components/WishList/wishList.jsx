import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";

import SideNav from "../sidenav/SideNav";
import styles from "./wishlist.module.css";
import image from "../../images/gradient.png";
import WishCard from "../WishCard/WishCard";

import { HotelContext } from "../../HotelContext";
import { Link } from "react-router-dom";

const WishList = (param) => {
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
      imageurl: "../../images/mountain-hotel.jpg",
    },
  ];

  const cardList = cards.map((card, index) => {
    return (
      <WishCard
        name={card.name}
        location={card.location}
        imageurl={card.imageurl}
        key={index}
      />
    );
  });

  return (
    <section className={`d-flex ${styles.all}`}>
      <section className={`${styles.sideNav}`}>
        <SideNav />
      </section>
      <section className={`${styles.top}`}>
        <section className={`d-flex justify-space-between ${styles.heading}`}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <h4>WishList</h4>
          <FontAwesomeIcon icon={faSearch} />
        </section>
        {cardList}
      </section>
    </section>
  );
};

export default WishList;
