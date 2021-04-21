import { combineReducers, createStore } from "redux";
import { inAppNotificationReducer } from "./inAppNotification/reducers";

const rootReducer = combineReducers({
  inAppNotification: inAppNotificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
