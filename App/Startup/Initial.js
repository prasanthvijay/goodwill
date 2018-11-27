import React from "react";
import { View, Text, TouchableOpacity,ScrollView, StyleSheet } from "react-native";

export class HomeScreen extends React.Component {
      
  gotoNextScreen = (screen) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
        <View style={styles.container}>
        <View style={{ alignItems: 'center', margin: 12 }}>
          <Text style={{ color: '#fff', fontSize: 28 }}>Controller Screen</Text>
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => { this.gotoNextScreen('Login')}} >
            <Text style={{ color: '#fff', fontSize: 18 }}>Login Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { this.gotoNextScreen('Register')}} >
            <Text style={{ color: '#fff', fontSize: 18 }}>Register Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { this.gotoNextScreen('Verify')}} >
            <Text style={{ color: '#fff', fontSize: 18 }}>Verify Screen</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#090a16',
      paddingHorizontal: 10,
    },
    items: {
      margin: 10,
      padding: 15,
      backgroundColor: '#393a43',
    },
    uploadAvatar: {
      width: 100,
      height: 80,
    },
    TextInputStyle: {
      borderWidth: 3,
      borderColor: '#232339',
      height: 50,
      color: '#fff',
      fontSize: 18,
      padding: 15,
      marginTop: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    button: {
      height: 40,
      marginTop: 6,
      padding: 8,
      alignItems: 'center',
      backgroundColor: '#22222d',
      borderRadius: 3,
    },
  });
