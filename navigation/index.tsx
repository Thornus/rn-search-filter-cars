import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { RootStackParamList } from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const HomeInitialParams = {
    model: '',
    year: null,
    color: '',
    priceMin: 0,
    priceMax: 9999
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" initialParams={HomeInitialParams} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Filters" component={FiltersScreen} options={{ title: 'Filters' }} />
    </Stack.Navigator>
  );
}

