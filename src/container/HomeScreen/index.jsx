import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const HomeScreen = () => {
  const [details, setDetails] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89');
      if (res !== null) {
        setDetails(res.data.data[0]);
      }
    }
    fetchData();
  }, []);


  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <>
      <Header details={details} cartCount={cartCount} />
      <Menu details={details} updateCartCount={updateCartCount} />

    </>
  );
};

export default HomeScreen;
