import styles from '../styles/Home.module.scss'
import React, { Component, useState } from 'react';
import { Modal } from './modal/Modal.js'

export default class Button extends Component {
  render() {
    return (
      <span className={['col-12 col-md-3 mt-md-0 mt-3 text-center']}>
        <span className={styles.btn} onClick={this.props.onclick} >
          <h3>{this.props.menuName}</h3>
        </span>
        <Modal showModal={this.props.showmodal} setShowModal={this.props.setshowmodal} selectedMenu={this.props.selectedmenu} />
      </span>
    )
  }
}