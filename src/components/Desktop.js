import React, { Component } from 'react';

//Core Components
import Dock from './Dock/Dock';
import TopMenuBar from './TopMenuBar/TopMenuBar';
import AppRender from './AppWindows/AppRender';

//"Configuration Files"
import appConfig from './DesktopAppConfig';

//CSS Module
import styles from './Desktop.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openApps: [],
      activeApp: '', 
      activeAppMenu: this.findAppConfigMenu('Finder'),
      desktopIcons: appConfig
    }
  }

  onOpenApp(appName) {
    this.state.openApps.indexOf(appName) < 0 ? this.setState({ 
      openApps: this.state.openApps.concat(appName), 
      activeApp: appName,
      activeAppMenu: this.findAppConfigMenu(appName)
    }) : null;
  };

  onCloseApp(appName) {
    this.setState({ openApps: this.state.openApps.filter(app => app != appName) })
  };

  onClickOpenedApp(appName) {
    console.log(appName)
    this.setState({
      activeApp: appName,
      activeAppMenu: this.findAppConfigMenu(appName)
    })
  }

  findAppConfigMenu(appName) {
    for (var x = 0; x < appConfig.length; x++ ) {
      if (appConfig[x].name === appName) {
        console.log(appConfig[x].menu)
        return appConfig[x].menu
      }
    }
  }
  
  render() {
    console.log(this.state);
    return (
      <div className="desktop">
        <TopMenuBar menuData={this.state.activeAppMenu}/>
          <AppRender
            activeApp={this.state.activeApp}
            openApps={this.state.openApps}
            onClickOpenedApp={this.onClickOpenedApp.bind(this)}
            onCloseApp={this.onCloseApp.bind(this)} />
        <Dock
          desktopIcons={this.state.desktopIcons} 
          onOpenApp={this.onOpenApp.bind(this)} />
      </div>
    );
  }
}


