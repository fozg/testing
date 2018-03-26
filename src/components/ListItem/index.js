import React, { Component } from 'react'
import {StyleSheet, View, TouchableOpacity, FlatList } from 'react-native-web';

import Text from '../StyledText';
import Button from '../Button';

import _styles from './styles';
import {styles} from 'react-native-theme';

const mergeStyles = key => [_styles[key], styles[key]]

export default class ListItem extends Component {
    shouldComponentUpdate = () => false;

    render() {
        const {item} = this.props;
        return (
            <View style={mergeStyles('ListItemWrap')}>
                <Text bold>{item.f}</Text>
                <Text>{item.m}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button title="Bình luận" icon="logo-facebook" size={20} />
                    <Button title="Gọi" icon="ios-call" size={20} />
                    <Button title="Nhận nhanh" icon="ios-flash" size={20}  />
                </View>
            </View>
        )
    }
}
