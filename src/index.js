import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/app/App"
import configureStore from "./redux/configure-store"
import ReactModal from "react-modal"

ReactModal.setAppElement("#root")
ReactModal.defaultStyles.overlay.backgroundColor = "rgb(0,19,98)"
ReactModal.defaultStyles.content.backgroundColor = "rebeccapurple"

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
