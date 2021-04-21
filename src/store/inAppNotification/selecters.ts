import { RootState } from "../index";

export const useInAppNotification = (state: RootState) =>
  state.inAppNotification;
