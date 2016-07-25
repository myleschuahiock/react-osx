import React, { Component } from 'react';
import styles from './Dock.css';

import DockIcons from './DockIcons';

export default class Dock extends Component {
  render() {
    return (
      <div className={styles.dockWrap}>
        <div className={styles.dock}>
          <ul className={styles.iconList}>
            <DockIcons
              onOpenApp={this.props.onOpenApp}
              desktopIcons={this.props.desktopIcons} />
          </ul>
        </div>
      </div>
    )
  }
}