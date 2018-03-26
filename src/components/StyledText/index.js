import React from 'react'
import { Text } from 'react-native-web';

import theming from '../../theming'

export default ({children, style, bold, ...props}) => (
    <Text
        style={[theming.StyledText, style, {fontWeight: bold ? 'bold' : null}]}
        {...props}
    >{children}</Text>
)
