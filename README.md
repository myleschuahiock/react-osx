# Mock OSX in React #

## What is Mock OSX?
'Mock OSX in React' is a proof of concept that I made for my talk during Manila JavaScript 9 to showcase the powerful combination of React, CSS Modules and JSX. 

With Mock OSX React, you can easily port your own React applications and display them on a Mac OSX El Capitan UI. 

This kind of app was possible through React, its power of **composability** and [CSS Modules](https://github.com/css-modules/css-modules) to avoid the 'bleeding through' of global classNames.The quick UI changes, rendering of the top menu bar based on each app click, opening and closing of app windows are all done through vanilla React, simple if statements and making sure that all UI changes come from the topmost parent.

Here's a link to my talk on [YouTube](https://www.youtube.com/watch?v=iGpNvaD93Qc) and a link to my presentation on [Google Slides](https://docs.google.com/presentation/d/1ekWWlPJMQ1iBgxZbgagoMPCVHbrcxVg7M4rgAURx1CA/edit).

> Note: This app is not intended for production but just as a proof of concept on componentization and containerization.

### Getting Started

Clone this repo or download the ZIP

```
  > git clone git@github.com:myleschuahiock/react-osx.git
  > cd react-osx 
  > npm install
  > npm start
```

## How do I "install" my own React apps on MockOSX? ##
"Installing React apps" are relatively easy on Mock OSX but are kind of tedious.

1. Simply take your existing React app and strip it down to its components
  - If you have specific npm modules, just do an npm install on those packages and you're good to go!
2. Create a JS file to hold your React components and a CSS file to hold your styles.
  - Copy paste your styles and convert them into camelCase.
  - Make sure to import your CSS styles through ``` import styles from './MyApp.CSS' ```
  - Change all your ``` className="class" ``` to ```className={styles.class}``` in your React component
  - Some third-party components use global classNames to perform certain computations on React nodes. If this is the case, use the classnames npm module installed. (See an example of this on appWindow.js as the draggable component requires an unhashed className to use it's handle property) 
3. Add export default to your app, and import it in ```AppRender.js```
  - Create a switch(case) statement that returns ```<AppWindow><YourApp></AppWindow>```
  - Provide a custom ```height``` and ```width``` to your application
4. Add a new entry into the DesktopAppConfig (this is the file being read to render the changing top menu bar)
  - name - Provide a simple application name, this is the string React will look up to open and close apps. No spaces please.
  - icon_src - Provide a square icon for your app.
  - menu.menuName - This is the name displayed on the top menu bar
  - menu.menuProperties - These are what populate the dropdown properties bar (each separate array is property section with 1px border dividers)
5. That's it! 
  - The Mock OSX app takes your app name from DesktopAppConfig as a reference in opening and closing your app through a ```switch(case)```
  - All properties flow down React style to the BottomBar, TopMenuBar and other Components.
  - If you have any problems, refer to your dev tools or look at the existing applications as implementation examples.


If you want to play around with this demo or even add your applications on it, please feel free to clone and make a pull request.

## Issues and Functionality
This isn't really intended to be a full-fledged alternative to Mac OSX, but clearly demonstrates the power of composability through React and CSS Modules. That being said, here are some issues I don't necessarily plan to complete but would help make this app work more like a Mac OSX.
- [ ] Wonky Z-index on click
- [ ] Minimize functionality
- [ ] appWindow resizability
- [ ] Some CSS Tweaks