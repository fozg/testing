import React from 'react';
import {StyleSheet, Text, View, AsyncStorage } from 'react-native-web';

import ChoiceGroup from './components/ChoiceGroup';
import ListItem from './components/ListItem';

class App extends React.Component {

  componentWillMount () {
    setTimeout (() => {
      this.forceUpdate();
    }, 1000)
  }

  render() {
    return (
      <View style={[{padding: 10, flex: 1}, {backgroundColor: window.theming.primaryBackgoundColor}]}>
        {/* <ChoiceGroup 
          choices={[
            {title: 'Gói Ngày', description: '10k Shell/Ngày'},
            {title: 'Gói Tuần', description: '30k Shell/Tuần'},
            {title: 'Gói Tháng', description: '109k Shell/Tháng'},
          ]}
          color="#3F51B5"
        /> */}
        <ListItem 
        
        />
      </View>
    );
  }
}

export default App;
