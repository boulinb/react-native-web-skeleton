import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { ENotificationTypes } from "../../store/inAppNotification/types";
import { getWidth, isMediumScreen } from "../../utils/dimensions";

export const notificationBackground = {
  [ENotificationTypes.NONE]: colors.lightBlue,
  [ENotificationTypes.INFO]: colors.lightBlue,
  [ENotificationTypes.DANGER]: colors.bgRed,
  [ENotificationTypes.SUCCESS]: colors.pastelGreen,
  [ENotificationTypes.WARNING]: colors.lightOrange,
};

export const notificationStyles = (type: ENotificationTypes) =>
  StyleSheet.create({
    main: {
      zIndex: 2,
      position: "relative",
      alignItems: "center",
    },
    container: {
      position: "absolute",
      width: isMediumScreen ? getWidth() - 32 : getWidth() / 2,
      borderRadius: 16,
      backgroundColor: notificationBackground[type],
    },
    iconContainer: {
      marginTop: 16,
      marginLeft: 16,
    },
    notificationContainer: {
      width: isMediumScreen ? getWidth() - 32 - 80 : getWidth() / 2 - 80,
      marginLeft: 16,
      marginTop: 16,
      marginRight: 16,
    },
    title: {
      color: colors.white,
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitleContainer: {
      marginLeft: 64,
      marginBottom: 16,
      marginRight: 16,
    },
    subtitle: {
      color: colors.white,
      fontSize: 16,
    },
    children: {
      flex: 1,
      zIndex: 1,
    },
  });
