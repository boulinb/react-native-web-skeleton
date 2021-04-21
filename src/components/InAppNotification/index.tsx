import React, { FunctionComponent, useEffect, useState } from "react";
import { View, Text, Animated, TouchableOpacity, Easing } from "react-native";
import { useSelector } from "react-redux";

import { useInAppNotification } from "../../store/inAppNotification/selecters";
import {
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_NOTIFICATION_DURATION,
  DEFAULT_TOP_VALUE,
  END_TOP_VALUE,
} from "./utils";
import { IconInformations } from "../Svg/IconInformations";
import { notificationBackground, notificationStyles } from "./styles";
import { generalStyle } from "../../utils/generalStyle";

interface IInAppNotification {}

const InAppNotification: FunctionComponent<IInAppNotification> = ({
  children,
}) => {
  const notifications = useSelector(useInAppNotification);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationAnimation, setNotificationAnimation] = useState(
    new Animated.Value(DEFAULT_TOP_VALUE)
  );

  const styles = notificationStyles(notifications.type);
  const animatedStyle = {
    top: notificationAnimation,
  };

  const backAnimation = () => {
    Animated.timing(notificationAnimation, {
      toValue: DEFAULT_TOP_VALUE,
      duration: DEFAULT_ANIMATION_DURATION,
      useNativeDriver: true,
      easing: Easing.out(Easing.elastic(1)),
    }).start(() => {
      setShowNotification(false);
    });
  };

  const launchAnimation = () => {
    Animated.timing(notificationAnimation, {
      toValue: END_TOP_VALUE,
      duration: DEFAULT_ANIMATION_DURATION,
      useNativeDriver: true,
      easing: Easing.elastic(1),
    }).start();

    setTimeout(() => {
      backAnimation();
    }, notifications.duration || DEFAULT_NOTIFICATION_DURATION);
  };

  useEffect(() => {
    if (notifications?.title && notifications?.type) {
      setShowNotification(true);
      launchAnimation();
    }
  }, [notifications]);

  return (
    <View style={generalStyle.simpleFlex}>
      <View style={styles.main}>
        {notifications?.title && notifications?.type && showNotification && (
          <Animated.View style={[styles.container, animatedStyle]}>
            <TouchableOpacity onPress={backAnimation} activeOpacity={1}>
              <View style={generalStyle.flexRow}>
                <View style={styles.iconContainer}>
                  <IconInformations
                    size={32}
                    color={notificationBackground[notifications.type]}
                  />
                </View>
                <View style={styles.notificationContainer}>
                  <Text style={styles.title}>{notifications.title}</Text>
                </View>
              </View>
              {notifications?.description && (
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>
                    {notifications.description}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default InAppNotification;
