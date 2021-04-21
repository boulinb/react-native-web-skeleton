import { Dimensions, Platform } from "react-native";

export const getWidth = (): number => Dimensions.get("window").width;
export const getHeight = (): number => Dimensions.get("window").height;
export const getPlatform = (): string => Platform.OS;

export const isWeb: boolean = Platform.OS === "web";
export const isIos: boolean = Platform.OS === "ios";
export const isAndroid: boolean = Platform.OS === "android";

export const isSmallScreen: boolean = getWidth() <= 320;
export const isMediumScreen: boolean = getWidth() <= 400;
export const isBigScreen: boolean = getWidth() > 400;
