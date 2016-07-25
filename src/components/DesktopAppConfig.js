const appConfig = [ 
  {
    name: 'Finder',
    icon_src: 'https://myleschuahiock.files.wordpress.com/2016/07/finder_icon.png',
    menu: [
      { 
        menuName: "Finder",
        menuProperties: 
        [
          ["About Finder"],
          ["Preferences..."],
          ["Empty Trash...", "Secure Empty Trash..."],
          ["Services"],
          ["Hide Finder", "Hide Others", "Show All"]
        ]
      },{
        menuName: "File",
        menuProperties: [
          ["New Finder Window","New Folder","New Folder with Selection", "New Smart Folder", "New Burn Folder", "New Tab", "Open", "Open With", "Print", "Close Window"],
          ["Get Info"],
          ["Compress \"File\""],
          ["Duplicate","Make Alias", "Quick Look \"File\"", "Show Original", "Add to Sidebar"],
          ["Move to Trash", "Eject", "Burn \"File\" to Disc..."],
          ["Find"],
          ["Tags..."]
        ]
      },{
        menuName: "Edit",
        menuProperties: [
          ["Undo", "Redo"],
          ["Cut","Copy","Paste","Select All"],
          ["Show Clipboard"],
          ["Start Dictation"," Special Characters..."]
        ]
      },{
        menuName:"View",
        menuProperties: [
          ["as Icons", "as List", "as Columns", "as Cover Flow"],
          ["Clean Up", "Clean Up By", "Sort By"],
          ["Show Tab Bar","Hide Path Bar","Show Status Bar","Hide Sidebar"],
          ["Hide TOolbar","Customize Toolbar..."],
          ["Show View Options"],
          ["Enter Full Screen"]
        ]
      },{
        menuName:"Go",
        menuProperties: [
          ['Back', 'Forward','Enclosing Folder'],
          ['All my Files','Documents','Desktop','Downloads','Home','Computer','AIrDrop', 'Network', 'Applications','Utilities'],
          ['Recent Folders'],
          ['Go to Folder...','Connect to Server...']
        ]
      },{
        menuName: "Window",
        menuProperties: [
          ['Minimize','Zoom','Cycle Through Windows'],
          ['Show Previous Tab', 'Show Next Tab', 'Move Tab to New Window', 'Merge All Windows'],
          ['Bring All to Front'],
          ['File']
        ]
      },{
        menuName: "Help",
        menuProperties: [
          ['Search'],
          ['Help Center'],
          ['What\'s New in OS X Yosemite']
        ]
      }
    ]
  },
  {
    name: 'MarkDown',
    icon_src: 'https://myleschuahiock.files.wordpress.com/2016/07/text_edit.png',
    menu: [
      { 
        menuName: "Facebook MarkDown Editor",
        menuProperties: 
        [
          ["About Facebook MarkDown Editor"],
          ["Save", "Save As..."],
          ["Hide Facebook MarkDown Editor", "Hide Others", "Show All"]
        ]
      }
    ]
  },
  {
    name: 'Calculator',
    icon_src: 'https://myleschuahiock.files.wordpress.com/2016/07/calculator_icon.png',
    menu: [
      { 
        menuName: "Calculator",
        menuProperties: 
        [
          ["About Calculator"],
          ["Calculate", "Calculate Stuff..."],
          ["Hide Calculator", "Hide Others", "Show All"]
        ]
      }
    ]
  },
  {
    name: 'BB8',
    icon_src: 'http://cdn.shopify.com/s/files/1/0170/5178/products/bb8-1_grande.png?v=1441428783',
    menu: [
      { 
        menuName: "BB8",
        menuProperties: 
        [
          ["Play With BB8"],
          ["Have fun!", "He's looking at you..."]
        ]
      },
      {
        menuName: "Credits To Brad Colthurst",
        menuProperties: 
        [
          ["AWESOME BB8"],
          ["Find his Codepen at http://codepen.io/bullerb/"]
        ]
      }
    ]
  },
  {
    name: 'Chess',
    icon_src: 'http://www.freeiconspng.com/uploads/chess-icon-7.png',
    menu: [
      { 
        menuName: "Chess",
        menuProperties: 
        [
          ["Play Chess"],
          ["Restart Game to Beat Chessmaster"]
        ]
      },
      {
        menuName: "Credits To Ryan Heathers",
        menuProperties: 
        [
          ["AWESOME CHESS"],
          ["Find his Codepen at https://codepen.io/ryanheathers"]
        ]
      }
    ]
  }
]

export default appConfig;