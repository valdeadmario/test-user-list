import React from "react";
import { Provider } from "react-redux";

import UserList from "../UserList";

import store from "../../store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default App;
