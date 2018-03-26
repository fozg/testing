import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry, StyleSheet, Text, View } from 'react-native-web';
import theme from 'react-native-theme';

import App from './App';

import defaultTheme from './theming/default';
import darkTheme from './theming/dark';
import snailRed from './theming/snailRed';
import yellowDark from './theming/yellowDark';
import blue from './theming/blue';

// const themeName = 'darkTheme';

// export default (themeName) => ({...defaultTheme, ...{
//     defaultTheme,
//     darkTheme
// }[themeName]})


theme.add({ // Add default theme
    ...defaultTheme
})

theme.add({ // Add red theme
    ...darkTheme
}, 'dark');

theme.add({ // Add red theme
    ...snailRed
}, 'snailRed');

theme.add({ // Add red theme
    ...yellowDark
}, 'yellowDark');

theme.add({ // Add red theme
    ...blue
}, 'blue');
// window.theme = theming('lightTheme');

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });