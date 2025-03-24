import React from "react";
import "./Home.css";

import FAQ from "../../components/FAQ/FAQ";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="page home">
      <FAQ title={true} fullWidth={false} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
