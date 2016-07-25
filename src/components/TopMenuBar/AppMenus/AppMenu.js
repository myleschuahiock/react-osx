import React, { Component } from 'react';
import styles from './AppMenu.css';

import AppMenuSections from './AppMenuSections';

export default class AppMenu extends Component {
  render() {
    const Menus = this.props.menuData.map((menu, index) => {
      let bold = {};
      menu.menuName === this.props.menuData[0].menuName ? bold = { fontWeight: 'bold'} : null
        return (
          <div key={`menu-${index}`}>
            <ul className={styles.appMenu} >
              <li style={bold} className={styles.menuName}>{menu.menuName}
                <ul className={styles.sectionContainer}>
                  <AppMenuSections menuSections={menu.menuProperties} />
                </ul>
              </li>
            </ul>
          </div>
        )
      }
    );

    return(
      <div>
        {Menus}
      </div>
    )
  }
}