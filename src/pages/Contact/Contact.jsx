import React from "react";
import "./Contact.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="page contact">
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
