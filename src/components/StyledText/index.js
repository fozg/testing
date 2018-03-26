import React from 'react'
import { Text } from 'react-native-web';
import { styles } from 'react-native-theme';

export default ({children, style, bold, ...props}) => (
    <Text
        style={[styles.StyledText, style, {fontWeight: bold ? 'bold' : null}]}
        {...props}
    >{children}</Text>
)
