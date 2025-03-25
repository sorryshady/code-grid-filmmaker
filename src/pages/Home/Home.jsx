import React from "react";
import "./Home.css";

import FAQContainer from "../../components/FAQContainer/FAQContainer";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="page home">
      <FAQContainer title={true} fullWidth={false} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
