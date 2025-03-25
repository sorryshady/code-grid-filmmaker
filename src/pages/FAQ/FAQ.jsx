import React from "react";
import "./FAQ.css";

import FAQContainer from "../../components/FAQContainer/FAQContainer";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const FAQ = () => {
  return (
    <div className="page faq">
      <FAQContainer />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default FAQ;
