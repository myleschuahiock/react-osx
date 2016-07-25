import React, { Component } from 'react';
import styles from './SideMenu.css';

export default class SideMenuProps extends Component {
  render() {
    const renderProperties = this.props.menuSections.map((property,index) => {
      return(
        <div className={styles.section}>
          {property.map(item => <li>{item}</li>)}
        </div>
      )
    })

    return (
      <div>
        {renderProperties}
      </div>
    )
  }
}