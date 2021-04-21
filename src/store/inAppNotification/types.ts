export const SUCCESS_NOTIFICATION = "SUCCESS_NOTIFICATION";
export const INFORMATION_NOTIFICATION = "INFORMATION_NOTIFICATION";
export const ERROR_NOTIFICATION = "ERROR_NOTIFICATION";
export const WARNING_NOTIFICATION = "WARNING_NOTIFICATION";

export enum ENotificationTypes {
  NONE,
  SUCCESS,
  WARNING,
  INFO,
  DANGER,
}

export interface IInAppNotificationState {
  title: string | null;
  description: string | null;
  type: ENotificationTypes;
  duration?: number;
  hideOnPress?: boolean;
}

export interface INotificationProps {
  title: string | null;
  description: string | null;
  duration?: number;
  hideOnPress?: boolean;
}

interface IANSuccessAction {
  type: typeof SUCCESS_NOTIFICATION;
  payload: IInAppNotificationState;
}

interface IANInformationAction {
  type: typeof INFORMATION_NOTIFICATION;
  payload: IInAppNotificationState;
}

interface IANErrorAction {
  type: typeof ERROR_NOTIFICATION;
  payload: IInAppNotificationState;
}

interface IANWarningAction {
  type: typeof WARNING_NOTIFICATION;
  payload: IInAppNotificationState;
}

export type IANActionTypes =
  | IANSuccessAction
  | IANInformationAction
  | IANErrorAction
  | IANWarningAction;
