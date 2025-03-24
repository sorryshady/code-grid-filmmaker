import React from "react";
import "./Home.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="page home">
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
