import {
  ENotificationTypes,
  ERROR_NOTIFICATION,
  INFORMATION_NOTIFICATION,
  INotificationProps,
  SUCCESS_NOTIFICATION,
  IANActionTypes,
  WARNING_NOTIFICATION,
} from "./types";

export function successNotification({
  title,
  description,
  duration,
  hideOnPress,
}: INotificationProps): IANActionTypes {
  return {
    type: SUCCESS_NOTIFICATION,
    payload: {
      title,
      description,
      duration,
      hideOnPress,
      type: ENotificationTypes.SUCCESS,
    },
  };
}

export function warningNotification({
  title,
  description,
  duration,
  hideOnPress,
}: INotificationProps): IANActionTypes {
  return {
    type: WARNING_NOTIFICATION,
    payload: {
      title,
      description,
      duration,
      hideOnPress,
      type: ENotificationTypes.WARNING,
    },
  };
}

export function informationNotification({
  title,
  description,
  duration,
  hideOnPress,
}: INotificationProps): IANActionTypes {
  return {
    type: INFORMATION_NOTIFICATION,
    payload: {
      title,
      description,
      duration,
      hideOnPress,
      type: ENotificationTypes.INFO,
    },
  };
}

export function errorNotification({
  title,
  description,
  duration,
  hideOnPress,
}: INotificationProps): IANActionTypes {
  return {
    type: ERROR_NOTIFICATION,
    payload: {
      title,
      description,
      duration,
      hideOnPress,
      type: ENotificationTypes.DANGER,
    },
  };
}
