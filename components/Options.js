import React from "react";

import Menu from "./burger/CV";
import Work from "./burger/Work";
import Contact from "./burger/Contact";

const content = {
  cv: Menu,
  work: Work,
  contact: Contact,
};

const Options = ({ selection }) => {

  let Content = content[null];
  if (!selection) {
    Content = content["cv"];
  } else {
    Content = content[selection];
  }

  return <>{Content ? <Content /> : null}</>;
};
export default Options;
