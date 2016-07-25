import React, { Component } from 'react';
import styles from './DockIcons.css';

export default class DockIcons extends Component {
    onClickHandler(name) {
      this.props.onOpenApp(name);
      console.log(name)
    }
    
  render() {
    const renderIcons = this.props.desktopIcons.map(icon => {
      return (
        <li 
          key={icon.name} 
          onClick={event => this.onClickHandler(icon.name)} 
          className={styles.icon}>
          <span className={styles.iconName}>{icon.name}</span>
          <img src={icon.icon_src} />
        </li>
        )
      }
    )
    return (
      <div>
        {renderIcons}
      </div>
    )
  }
}