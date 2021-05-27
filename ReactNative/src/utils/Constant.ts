import { Dimensions } from "react-native";

export const dimensions = {
    screenWidth: Math.floor(Dimensions.get('window').width),
    screenHeight: Math.floor(Dimensions.get('window').height),
  };