import React from "react";
import { Provider } from "react-redux";

import UserList from "../UserList";
import Header from "../../components/Header";

import store from "../../store";

import "./style.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <UserList />
    </Provider>
  );
};

export default App;
