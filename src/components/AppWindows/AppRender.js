import React, { Component } from 'react';

import AppWindow from './AppWindow';

import Finder from './Apps/Finder';
import MarkDown from './Apps/MarkDown';
import Calculator from './Apps/Calculator';
import BB8 from './Apps/BB8';
import Chess from './Apps/Chess';

export default class AppRender extends Component {
  render() {
    let counter = 0;
    const renderApps = this.props.openApps.map(app => {
      switch(app) {
        case 'Finder':
          return <AppWindow {...this.props} appName={app} key={app} height={'400px'} width={'600px'}> <Finder /> </AppWindow>
          break;
        case 'MarkDown':
          return <AppWindow {...this.props} appName={app} key={app} height={'500px'} width={'400px'}> <MarkDown/> </AppWindow> 
          break;
        case 'Calculator':
          return <AppWindow {...this.props} appName={app} key={app} height={'600px'} width={'500px'}> <Calculator/> </AppWindow>
          break;
        case 'BB8': 
          return <AppWindow {...this.props} appName={app} key={app} height={'600px'} width={'800px'}> <BB8 /> </AppWindow>
          break;
        case 'Chess': 
          return <AppWindow {...this.props} appName={app} key={app} height={'800px'} width={'800px'}> <Chess /> </AppWindow>
          break;
        }
      }
    )
    return (
      <div>
        {renderApps}
      </div>
      )
    }
}
