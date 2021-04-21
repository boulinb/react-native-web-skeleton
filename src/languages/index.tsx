import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./lang/fr";
import en from "./lang/en";
import {DEFAULT_LANGUAGE} from "./types";

const i18nConfig = {
  resources: { fr, en },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
};
i18n.use(initReactI18next).init(i18nConfig);

const Languages: FunctionComponent<{}> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Languages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
