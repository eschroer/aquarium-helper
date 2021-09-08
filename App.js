import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements'
import Main from './components/MainComponent';
import TankInfo from './components/TankInfoComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'

function HomeScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <Image source={require("./assets/betta_flare.jpg")}
      style={styles.image}
       />
      <Button style={{margin: 10}}
        title="Get Started"
        onPress={()=> navigation.navigate('Main')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Aquarium Helper",
          headerStyle: {backgroundColor: '#045de9'},
          headerTintColor: '#fff'
        }} />
        <Stack.Screen name="Main" component={Main} options={{
          title: "My Aquariums",
          headerStyle: {backgroundColor: '#045de9'},
          headerTintColor: '#fff'
        }}/>
        <Stack.Screen name="TankInfo" component={TankInfo} options={{
          title: "Tank Data",
          headerStyle: {backgroundColor: '#045de9'},
          headerTintColor: '#fff'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63a4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
});
