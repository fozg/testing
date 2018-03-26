import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry, StyleSheet, Text, View } from 'react-native-web';

import App from './App';

import theming from './theming'

window.theme = theming('lightTheme');

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });