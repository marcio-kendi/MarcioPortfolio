import React, { useRef } from "react";
import { Modal } from "../modal/Modal";

const Contact = () => {
  const contactDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  };

  return (
    <div>
      <Modal showModal={true}>
        <h4>Contact me via</h4>
        <div style={contactDiv}>
          <div>
            <span>
              <a href="mailto:kendi_marcio@hotmail.com">Email</a>
            </span>
            <br />
            <span>
              <a href="tel:0278871721">Phone number</a>
            </span>
            <br />
            <span>
              <a href="https://www.linkedin.com/in/marciokendi/">Linkedin</a>
            </span>
            <br />
            <span>
              <a href="https://github.com/marcio-kendi">GitHub</a>
            </span>
          </div>
          <div>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFp8IquTOgQdA/profile-displayphoto-shrink_800_800/0/1602848756769?e=1674086400&v=beta&t=_Il5kzyfDju1yHldK3Wy-WN-1UvZvwIwVsPvuRJ_UCw"
              width="120"
              height="120"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Contact;
