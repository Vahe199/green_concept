import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Layout/Style/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ru_RU from "antd/lib/locale/ru_RU";
import { ConfigProvider } from "antd";
import moment from "moment";

moment.locale("ru");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <ConfigProvider locale={ru_RU}>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
        </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
