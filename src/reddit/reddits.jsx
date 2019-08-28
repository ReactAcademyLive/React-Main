import React, { useRef } from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configure-store";
import AsyncApp from "./async-app";

const Reddits = () => {
  const store = useRef();

  if (!store.current) {
    store.current = configureStore();
  }

  React.useEffect(() => {
    const savedTitle = document.title;
    document.title = "Reddits!";
    return () => {
      document.title = savedTitle;
    };
  }, []);

  return (
    <Provider store={store.current}>
      <AsyncApp />
    </Provider>
  );
};

export default Reddits;
