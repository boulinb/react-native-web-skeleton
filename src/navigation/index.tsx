import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ScreenNames } from "../utils/screensNames";
import { getLinking, withNoHeader } from "./options";
import { RootStackParamList } from "./options/props";

import Home from "../screens/home";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer linking={getLinking()}>
      <Stack.Navigator initialRouteName={ScreenNames.Home}>
        <Stack.Screen
          name={ScreenNames.Home}
          options={withNoHeader}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
