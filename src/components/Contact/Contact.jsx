import "./Contact.css";
import { GoMail } from "react-icons/go";
import { SlCallIn } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <hr />
      </div>
      <div className="contact-sections">
        <div className="contact-left">
          <h1>Let&apos;s Talk</h1>
          <p>I am Roya</p>
          <div className="contact-details">
            <div className="contact-detail">
              <GoMail color="#b415ff" />
              <p>roya.rastegar54196@gmail.com</p>
            </div>
            <div className="contact-detail">
              <SlCallIn color="#b415ff" />
              <p>+60-354-54196</p>
            </div>
            <div className="contact-detail">
              <SlLocationPin color="#b415ff" />
              <p>KL,Malaysia</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label>Your Name:</label>
          <input type="text" name="name" placeholder="Please,Enter your name" />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Please,Enter your email"
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Please,Enter your message"
          />
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
