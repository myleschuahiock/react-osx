import React, { Component } from 'react';
import Draggable from 'react-draggable';

import styles from './AppWindow.css';

import classnames from 'classnames';

export default class AppWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  onClickAppHandler(appName) {
    this.props.onClickOpenedApp(appName)
  }
  
  onCloseHandler(appName) {
    this.props.onCloseApp(appName)
  }
  
  render() {
    let closeButtonStyle, minimizeButtonStyle, scaleButtonStyle, show, topZIndex
    let counter = 200;
    if (this.props.appName === this.props.activeApp) {
        closeButtonStyle = {backgroundColor: '#FD4E4E'}
        minimizeButtonStyle = {backgroundColor: '#F3BB55'}
        scaleButtonStyle = {backgroundColor: '#96D16F'}
        show = {visibility: 'visible'}
        topZIndex = {zIndex: '9999'}
        counter++
      } else {
        //ES6 Destructuring Assignment
        [closeButtonStyle, minimizeButtonStyle, scaleButtonStyle, show, topZIndex] = [{},{},{},{},{zIndex: `${counter}`}] 
      }
    
    return (
      <Draggable 
      defaultPosition={{x: 500, y: 200}}
      handle=".handle"
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}>
        <div className={styles.appWindow} 
          onDragStart={evt => this.onClickAppHandler(this.props.appName)}
          onClick={evt => this.onClickAppHandler(this.props.appName)}
          style={{height: this.props.height, width: this.props.width, zIndex: topZIndex.zIndex}}>
          <div className={classnames(styles.appWindowBar, 'handle')}>
            {/*Three Buttons CLOSE/MINIMIZE/SCALE*/}
            <div 
              className={styles.closeButton} 
              style={closeButtonStyle}>
              <span 
                onClick={evt => this.onCloseHandler(this.props.appName)}
                className={styles.hide} style={show}> x </span></div>
            <div 
              className={styles.minimizeButton} 
              style={minimizeButtonStyle}>
              <span className={styles.hide} style={show}> - </span></div>
            <div 
              className={styles.scaleButton} 
              style={scaleButtonStyle}>
              <span className={styles.hide} style={show}> + </span></div>
            <div className={styles.appWindowHeader}>
              {this.props.appName}
            </div>
          </div>
        <div className={styles.appContent}>
          {/*Anything between these two tags are rendered as children, such as apps*/}
          {this.props.children}
        </div>
      </div>
    </Draggable>
    )
  }
}