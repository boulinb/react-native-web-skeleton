import { ScreenNames } from "../../utils/screensNames";

const HOME_PATH = "/";

export const withNoHeader = () => {
  return { header: () => null };
};

export const getLinking = () => {
  return {
    prefixes: ["https://my.domain.com"],
    config: {
      screens: {
        [ScreenNames.Home]: {
          path: HOME_PATH,
        },
        NotFound: "*",
      },
    },
  };
};
