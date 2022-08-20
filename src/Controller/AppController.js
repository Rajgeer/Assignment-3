import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, Appearance} from 'react-native';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import merge from 'deepmerge';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FoodlistScreen from '../Screens/FoodList';
import ApprovedFoodList from '../Screens/ApprovedFoodList';
import {Context} from '../Context';

const CombinedDefaultTheme = merge(
  {...PaperDefaultTheme, roundness: 4},
  NavigationDefaultTheme,
);
const CombinedDarkTheme = merge(
  {...PaperDarkTheme, roundness: 4},
  NavigationDarkTheme,
);
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
function AppController({...props}) {
  const [colorMode, setColorMode] = useState(Appearance.getColorScheme());

  useEffect(() => {
    Appearance.addChangeListener(schema => setColorMode(schema.colorScheme));
  }, []);

  const contextMethods = useMemo(
    () => ({
      approved: async data => {
        try {
          console.log('approved', {data});
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem('approved', jsonValue);
        } catch (err) {
          console.log(err);
        }
      },
    }),
    [],
  );
  return (
    <>
      <Context.Provider value={contextMethods}>
        <SafeAreaProvider>
          <PaperProvider
            settings={{
              icon: props => <AwesomeIcon {...props} />,
            }}
            theme={
              colorMode === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme
            }>
            <NavigationContainer
              theme={
                colorMode === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme
              }>
              <Stack.Navigator>
                <Stack.Screen
                  name="FoodList"
                  component={FoodlistScreen}
                  {...props}
                />
                <Stack.Screen
                  name="ApprovedFoodList"
                  component={HomeScreen}
                  {...props}
                />
                <Stack.Screen name="Home" component={HomeScreen} {...props} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
      </Context.Provider>
    </>
  );
}

export default AppController;
