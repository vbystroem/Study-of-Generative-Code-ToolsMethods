const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IPhoneSE90NYLggaTill from "./screens/IPhoneSE90NYLggaTill";
import IPhoneSE92NYSeEnITa from "./screens/IPhoneSE92NYSeEnITa";
import IPhoneSE93NYSeEnITa from "./screens/IPhoneSE93NYSeEnITa";
import OverlayAktivitetenTillagdBa from "./components/OverlayAktivitetenTillagdBa";
import IPhoneSE90NYLggaTill1 from "./screens/IPhoneSE90NYLggaTill1";
import IPhoneSE92NYSeEnITa1 from "./screens/IPhoneSE92NYSeEnITa1";
import IPhoneSE93NYSeEnITa1 from "./screens/IPhoneSE93NYSeEnITa1";
import OverlayAktivitetenTillagdSt from "./components/OverlayAktivitetenTillagdSt";
import AvsnittsHuvud from "./components/AvsnittsHuvud";
import AvsnittsHuvud1 from "./components/AvsnittsHuvud1";
import AvsnittsHuvud2 from "./components/AvsnittsHuvud2";

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
            <Stack.Screen
              name="IPhoneSE90NYLggaTill1"
              component={IPhoneSE90NYLggaTill1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhoneSE92NYSeEnITa1"
              component={IPhoneSE92NYSeEnITa1}
              options={(props) => ({
                headerShown: true,
                headerLeft: () => <AvsnittsHuvud1 />,
                headerTitle: "Head nav",
                headerRight: () => <AvsnittsHuvud1 />,
              })}
            />
            <Stack.Screen
              name="IPhoneSE93NYSeEnITa1"
              component={IPhoneSE93NYSeEnITa1}
              options={(props) => ({
                headerShown: true,
                headerLeft: () => <AvsnittsHuvud2 />,
                headerTitle: "Head nav",
                headerRight: () => <AvsnittsHuvud2 />,
              })}
            />
            <Stack.Screen
              name="OverlayAktivitetenTillagdSt"
              component={OverlayAktivitetenTillagdSt}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
