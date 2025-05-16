import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OutputScreen from './src/screens/OutputScreen';
import InputScreen from './src/screens/InputScreen';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

export type RootStackParamList = {
  Input: undefined;
  Output: { prompt: string; imageKey: string; };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Manrope-SemiBold': require('./assets/fonts/Manrope-SemiBold.ttf'),
    'Manrope-ExtraBold': require('./assets/fonts/Manrope-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Input" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Input" component={InputScreen}  />
        <Stack.Screen name="Output" component={OutputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
