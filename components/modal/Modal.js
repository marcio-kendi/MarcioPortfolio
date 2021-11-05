import React from "react";
import styles from '../../styles/Home.module.scss'
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={styles.modal} id="modal">
        {this.props.selectedMenu}
        <button className="toggle-button" onClick={this.onClose}>
          close
        </button>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}