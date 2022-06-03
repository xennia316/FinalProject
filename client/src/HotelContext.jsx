import React, { createContext, useState } from "react";

export const HotelContext = createContext(null);

const HotelProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <HotelContext.Provider value={{ data, setData, showModal, setShowModal }}>
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;
