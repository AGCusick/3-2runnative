import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Goal from './Goal';
import PaceCalculator from './PaceCalculator';
import Weather from './Weather';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='3-2Run' component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#1034A6',
            },
            headerTitleStyle: {
              color: '#ffff4d',
            }

          }}
        />
        <Stack.Screen name='Goal' component={Goal}
          options={{
            headerStyle: {
              backgroundColor: '#1034A6',
            },

            headerTitleStyle: {
              color: '#ffff4d',
            },

            headerTintColor: '#ffff4d'


          }}
        />
        <Stack.Screen name='PaceCalculator' component={PaceCalculator}
          options={{
            headerStyle: {
              backgroundColor: '#1034A6',
            },
            headerTitleStyle: {
              color: '#ffff4d',
            },
            headerTintColor: '#ffff4d'
          }}
        />
        <Stack.Screen name='Weather' component={Weather}
          options={{
            headerStyle: {
              backgroundColor: '#1034A6',
            },
            headerTitleStyle: {
              color: '#ffff4d',
            },
            headerTintColor: '#ffff4d'

          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
