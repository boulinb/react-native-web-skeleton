import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { ScreenNames } from "../../utils/screensNames";

export type RootStackComponent<RouteName extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
};

export type RootStackParamList = {
  [ScreenNames.Home]: undefined;
};
