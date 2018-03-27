import React from 'react';
import {StyleSheet, Text, View, AsyncStorage, Button } from 'react-native-web';
import theme from 'react-native-theme';
import { styles } from 'react-native-theme';

import ChoiceGroup from './components/ChoiceGroup';
import Home from './screens/Home';

class App extends React.Component {
  count = 0;

  componentDidMount = () => {
    theme.setRoot(this)
  }

  render() {
    return (
      <View style={[{padding: 5, flex: 1}, styles.App,]}>
        {/* <ChoiceGroup 
          choices={[
            {title: 'Gói Ngày', description: '10k Shell/Ngày'},
            {title: 'Gói Tuần', description: '30k Shell/Tuần'},
            {title: 'Gói Tháng', description: '109k Shell/Tháng'},
          ]}
          color="#3F51B5"
        /> */}
        <Home />
        <Button title="Press Me" onPress={()=>{
          theme.active(['dark', 'snailRed', 'yellowDark', 'blue', 'default'][this.count % 5])
          this.count ++;
        }} color="gray" />
      </View>
    );
  }
}

export default App;
