import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ly9mspt",
        "template_9g89egh",
        form.current,
        "Ao_Rdn4JavojOZoEP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          toast.error("Error ...");
        }
      );

    form.current.reset();
    toast.success("Email sent successfully!");
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Zahid Gambarov st. 11A</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>mesimovazer@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+994 55 489 33 41</p>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=zahid%20gambarov%20st%2011%20a&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                style={{ border: "0", width: "100%", height: "290px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form ref={form} onSubmit={sendEmail} className="email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="py-1 btn btn-outline-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
