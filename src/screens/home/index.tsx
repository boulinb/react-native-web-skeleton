import React, { FunctionComponent, useCallback } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { ScreenNames } from "../../utils/screensNames";
import { RootStackComponent } from "../../navigation/options/props";
import styles from "./styles";
import { successNotification } from "../../store/inAppNotification/actions";

interface IHome extends RootStackComponent<ScreenNames.Home> {}

const Home: FunctionComponent<IHome> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onPressNotification = useCallback(() => {
    dispatch(
      successNotification({
        title: t(`${ScreenNames.Home}.title`),
        description: t(`${ScreenNames.Home}.description`),
      })
    );
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressNotification} style={styles.button}>
        <Text>{t(`${ScreenNames.Home}.title`)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
