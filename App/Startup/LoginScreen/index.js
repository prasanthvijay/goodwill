import React from "react";
import { View, Text, StyleSheet, Dimensions  } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import  COLORS  from '../../config/Colors';
import styles from './Style';

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
      <View style={styles.container}>
        <LinearGradient colors={[COLORS.firstColor, COLORS.firstColor, COLORS.secondColor]} 
          style={styles.linearGradient}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          locations={[0,0.10,0.6]}
        >      
        
        </LinearGradient>
      </View>
    );
  }
}
 
