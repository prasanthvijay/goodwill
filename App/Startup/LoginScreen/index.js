import React from "react";
import { View, Text, StyleSheet, Dimensions  } from "react-native";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class LoginScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };
 
  render() {
    return (
      <View style={{flex:1,
                    width:Dimensions.get('window').width/1.5,
                    alignSelf:'center',
                    position:'absolute',height:Dimensions.get('window').height/2}}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
          />

      </View>     
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});