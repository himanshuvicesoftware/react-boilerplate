import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./modules/store";
import ListDemo from "./modules/listDemo/components/listDemo";

render(
    <Provider store={store}>
        <ListDemo />
    </Provider>,
    document.getElementById("root")
);