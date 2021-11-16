import React from 'react';
import { Modal } from './modal/Modal.js'
import styles from '../styles/Home.module.scss'

import Menu from './CV'
import Work from './Work'
import Contact from './ContactForm'

const content = {
  cv: Menu,
  work: Work,
  contact: Contact,
}

const Options = ({selection}) => {
  // const [openSelection, setOpenSelection] = React.useState(0);
  
  let Content = content[null];
  if(!selection){
    Content = content['cv'];
  } else {
    Content = content[selection];
  }
  
  return (
      <>{
        Content ? <Content  />
        : null
      }</>
      
  )
}
export default Options;
