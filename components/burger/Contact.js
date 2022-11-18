import React, { useRef } from "react";
import { Modal } from "../modal/Modal";

const Contact = () => {
  return (
    <div>
      <Modal showModal={true}>
        <h4>Contact me via</h4>
        <div>
          <span>
            <a href="mailto:kendi_marcio@hotmail.com">Email</a>
          </span>
          <br />
          <span>
            <a href="tel:0278871721">Phone number</a>
          </span>
        </div>
      </Modal>
    </div>
  );
};
export default Contact;
