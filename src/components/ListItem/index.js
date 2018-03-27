import React, { Component } from 'react'
import {StyleSheet, View, TouchableOpacity, FlatList } from 'react-native-web';
import moment from 'moment';

import * as Text from '../StyledText';
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
                <Text.Primary bold>{item.f}</Text.Primary>
                <Text.Small>{moment(item.u).fromNow()}</Text.Small>                
                <Text.Primary>{item.m}</Text.Primary>
                <View style={{flexDirection: 'row'}}>
                    <Button title="Bình luận" icon="logo-facebook" size={20} />
                    <Button title="Gọi" icon="ios-call" size={20} />
                    <Button title="Nhận nhanh" icon="ios-flash" size={20}  />
                </View>
            </View>
        )
    }
}
