import React, { Component } from 'react'
import {StyleSheet, View, TouchableOpacity, FlatList } from 'react-native-web';

import Text from '../StyledText';

import _styles from './styles';

export default class ListItem extends Component {
    styles = _styles(window.theme.ListItem)
    render() {
        return (
            <View>
                {[
                    {
                        key: 1,
                        title: 'Test',
                        body: 'This is content test for body'
                    },
                    {
                        key: 2,
                        title: 'Test',
                        body: 'This is content test for description 12345'
                    }
                ].map((item, idx) => (
                    <View style={this.styles.wrap}>
                        <Text bold>{item.title}</Text>
                        <Text>{item.body}</Text>                        
                    </View>
                ))}                
            </View>
        )
    }
}
