import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contactform">
      <div className="left-side">
        <div className="box">
          <div className="title">
            <h1>Contact Me</h1>
          </div>
          <p>
            i will read all my email one by one and i´m not going to let them
            missed. Send me any message you want and soon as i can, i will reply
            that.
          </p>
          <div className="text-above">
            <p>
              I need your: <b className="nameaddress">name</b>and{" "}
              <b className="nameaddress">email address</b>
            </p>
          </div>
        </div>
        <div className="box2">
          <div className="contactMe"></div>
        </div>
        <div className="line-box"></div>
      </div>
      <div className="right-side">
        <div className="image">
          <div className="titleMessage">
            <h1>Send me a Message</h1>
          </div>
          <form>
            <div>
              <div className="fields">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" pattern="[a-zA-Z0-9-]{10,15}" title="Username must be between 6 and 12 characters in length and contain only letters and numbers." required></input>
              </div>
              <div className="fields">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required></input>
              </div>
              <div className="fields">
                <label for="message">Message</label>
                <input
                  className="message"
                  type="message"
                  id="message"
                  name="message"
                ></input>
              </div>
              <div className="submit">
                <button className="btnsub" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
