import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./TokenMint/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MyJSONStringify } from "./TokenMint/utility/utility";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.subscribe(() =>
  console.log(`From Listener :: ${MyJSONStringify(store.getState())}`)
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
