import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native-web';

import styles from './styles';

class ChoiceGroup extends React.Component {
    state = {activeIndex: 0}

    onPress = (idx) => {
        this.setState({activeIndex: idx})
    }

    render() {
        const {choices} = this.props;
        const {activeIndex} = this.state;
        
        return (
            <View
                style={styles.wraplist}
            >
                {
                    choices.map((o, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={styles.listitemWrap}
                            onPress={() => {this.onPress(idx)}}
                        >
                            <View style={[styles.listitem, activeIndex === idx ? styles.listitemActive : null]}>
                                <Text style={[styles.listitemText, activeIndex === idx ? styles.listitemTextActive : null ]}> 
                                    {o.title}
                                </Text>
                                <Text style={[styles.listitemTextDescription, activeIndex === idx ? styles.listitemTextActive : null ]}> 
                                    {o.description}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}

export default ChoiceGroup;
