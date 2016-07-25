import React, { Component } from 'react';

import AppleMenu from './AppMenus/AppleMenu';
import AppMenu from './AppMenus/AppMenu';
import SideMenu from './SideMenu/SideMenu';

import styles from './TopMenuBar.css';

export default class TopMenuBar extends Component {
  render() {
    console.log(this.props.menuData);
    return(
      <div className={styles.topMenuBar}>
        <AppleMenu/>
        <AppMenu menuData={this.props.menuData} />
        <SideMenu/>
      </div>
    )
  }
}