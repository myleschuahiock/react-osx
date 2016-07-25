import React, { Component } from 'react';
import styles from './AppMenu.css';

export default class AppMenuSections extends Component {
  render() {
    const renderProperties = this.props.menuSections.map((property,index) => {
      return(
        <div key={index} className={styles.section}>
          {property.map(item => <li key={item}>{item}</li>)}
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