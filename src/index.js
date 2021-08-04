import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./modules/store";
import ListDemo from "./modules/listDemo/components/listDemo";
import DisplayTable from './modules/displayTable/components/displayTable'

render(
    <Provider store={store}>
        <ListDemo />
        <DisplayTable/>
    </Provider>,
    document.getElementById("root")
);