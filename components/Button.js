import styles from '../styles/Home.module.scss'
import React, { Component } from 'react';
import Modal from '../components/Modal/Modal.js'

export default class Button extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <span className={['col-3 text-center']}>
        <span className={styles.btn} onClick={e => {
            this.showModal(e);
          }}>
          <h3>{this.props.menuName}</h3>
        </span>
        <Modal onClose={this.showModal} show={this.state.show} modalTitle={this.props.modaltitle} selectedMenu={this.props.selectedmenu} />
      </span>
    )
  }
}