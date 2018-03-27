import React from 'react'
import { Text } from 'react-native-web';
import { styles } from 'react-native-theme';

export const Primary =({children, style, bold, ...props}) => (
    <Text
        style={[styles.StyledText, style, {fontWeight: bold ? 'bold' : null}]}
        {...props}
    >{children}</Text>
)

export const Small =({children, style, bold, ...props}) => (
    <Text
        style={[style, {fontWeight: bold ? 'bold' : null, fontSize: 11, color: '#607d8b'}]}
        {...props}
    >{children}</Text>
)
