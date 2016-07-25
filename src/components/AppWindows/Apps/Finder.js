import React, { Component } from 'react';

import styles from './Finder.css'

export default class Finder extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.finderText}>There are no File Directories to traverse</h1>
      </div>
    )
  }
}