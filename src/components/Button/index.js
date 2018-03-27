import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native-web';
import Ionicon from 'react-ionicons'

import * as Text from '../StyledText';

import theme, {styles} from 'react-native-theme';

const mergeStyles = key => [_styles[key], styles[key]];

export default ({title, icon, color,...props}) => {
  return(<TouchableOpacity style={mergeStyles('ButtonWrap')} {...props}>
    <Ionicon icon={icon} fontSize='20px' color={theme.name === 'default' || theme.name === 'snailRed' ? '#000' : '#fff'}/>
    <Text.Primary>{title}</Text.Primary>
  </TouchableOpacity>)
}
  
const _styles = {
  ButtonWrap: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#rgb(230, 230, 230)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    paddingTop: 2,
    paddingBottom: 2
  },
}