import React from "react";
import { Provider } from "react-redux";

import Languages from "./src/languages";
import { store } from "./src/store";
import InAppNotification from "./src/components/InAppNotification";
import Navigation from "./src/navigation";

const App = () => {
  return (
    <Provider store={store}>
      <Languages>
        <InAppNotification>
          <Navigation />
        </InAppNotification>
      </Languages>
    </Provider>
  );
};

export default App;
