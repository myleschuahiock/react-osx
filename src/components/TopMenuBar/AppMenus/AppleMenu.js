import React, { Component } from 'react';
import styles from './AppMenu.css';

//This is the 'static' view of how AppMenu gets composed

export default class AppleMenu extends Component {
  render() {
    return(
      <div>
        <ul className={styles.appleMenu}>
          <li className={styles.menuName}><i className="fa fa-apple"></i>
            <ul className={styles.sectionContainer}>
              <div className={styles.section}>
                <li>About This Mac</li>
                <li>Software Update...</li>
                <li>App Store...</li>
              </div>
              <div className={styles.section}>
                <li>System Preferences</li>
                <li>Dock 
                  <i className="fa fa-caret-right"/> 
                </li>
              </div>
              <div className={styles.section}>
                <li>Recent Items 
                  <i className="caretRight"/>
                </li>
              </div>
              <div className={styles.section}>
                <li>Force Quit
                  <i className="fa fa-power-off" />
                  <i className={styles.commandKey}/>
                  <i className={styles.optionKey}/>  
                </li>
              </div>
              <div className={styles.section}>
                <li>Sleep</li>
                <li>Restart...</li>
                <li>Shut Down...</li>
              </div>
              <div className={styles.section}>
                <li>Log Out John Livingston
                  <i>Q</i>
                  <i className={styles.commandKey}/>
                  <i className={styles.shiftKey}/>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}