import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashbooard } from "./Dashboard";


export const Main =() => {
  return (
    <Provider store={store}>
        <div>
        {/* Dashboard goes here */}
        <ConnectedDashbooard/>
        </div>
    </Provider>
  )
  
}
