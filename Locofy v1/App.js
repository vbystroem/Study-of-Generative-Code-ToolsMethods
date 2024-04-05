const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IPhoneSE90NYLggaTill from "./screens/IPhoneSE90NYLggaTill";
import IPhoneSE92NYSeEnITa from "./screens/IPhoneSE92NYSeEnITa";
import IPhoneSE93NYSeEnITa from "./screens/IPhoneSE93NYSeEnITa";
import OverlayAktivitetenTillagdBa from "./components/OverlayAktivitetenTillagdBa";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhoneSE90NYLggaTill"
              component={IPhoneSE90NYLggaTill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhoneSE92NYSeEnITa"
              component={IPhoneSE92NYSeEnITa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhoneSE93NYSeEnITa"
              component={IPhoneSE93NYSeEnITa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverlayAktivitetenTillagdBa"
              component={OverlayAktivitetenTillagdBa}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
