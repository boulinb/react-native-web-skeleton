import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 48,
    width: 120,
    borderRadius: 24,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
