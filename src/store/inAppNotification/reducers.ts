import {
  ENotificationTypes,
  ERROR_NOTIFICATION,
  IANActionTypes,
  IInAppNotificationState,
  INFORMATION_NOTIFICATION,
  SUCCESS_NOTIFICATION,
  WARNING_NOTIFICATION,
} from "./types";

const initialState: IInAppNotificationState = {
  title: null,
  description: null,
  type: ENotificationTypes.INFO,
};

export function inAppNotificationReducer(
  state = initialState,
  action: IANActionTypes
): IInAppNotificationState {
  switch (action.type) {
    case SUCCESS_NOTIFICATION:
    case ERROR_NOTIFICATION:
    case INFORMATION_NOTIFICATION:
    case WARNING_NOTIFICATION: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
