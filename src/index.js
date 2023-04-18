import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./03/Library";
import Clock from "./04/Clock";
import CommentList from "./05/CommentList";
import NotificationList from "./06/NotificationList";
import Counter from "./07/Counter";
import Accomodate from "./07/Accomodate";
import ConfirmButton from "./08/ConfirmButtonFunc";
import ConfirmButtonFunc from "./08/ConfirmButtonFunc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ConfirmButtonFunc/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
