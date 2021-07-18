import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Reader from './screens/Reader';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Reader" component={Reader} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
