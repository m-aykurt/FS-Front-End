import React, { Component } from 'react';
import styles from './Button.App.css'; // Import css modules stylesheet as styles
class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}

export default Button;