import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OutputScreen from './src/screens/OutputScreen';
import InputScreen from './src/screens/InputScreen';

export type RootStackParamList = {
  Input: undefined;
  Output: { prompt: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Input" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Input" component={InputScreen}  />
        <Stack.Screen name="Output" component={OutputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
